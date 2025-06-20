import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
}

interface ValidationResult {
  url: string
  isValid: boolean
  status: number
  error?: string
  contentType?: string
  isRSSFeed: boolean
  title?: string
  itemCount?: number
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey)
    
    const { body } = await req.json()
    const { validate_all = false, specific_urls = [] } = body || {}
    
    console.log('🔍 Starting RSS feed validation...')
    
    // Log start of operation
    await supabase.from('pipeline_logs').insert({
      operation: 'validate_news_sources',
      status: 'started',
      message: validate_all ? 'Validating all news sources' : `Validating ${specific_urls.length} specific URLs`
    })

    let urlsToValidate: string[] = []

    if (validate_all) {
      // Get all active news sources
      const { data: sources, error: sourcesError } = await supabase
        .from('news_sources')
        .select('url')
        .eq('is_active', true)

      if (sourcesError) {
        throw new Error(`Failed to fetch sources: ${sourcesError.message}`)
      }

      urlsToValidate = sources?.map(s => s.url) || []
    } else {
      urlsToValidate = specific_urls
    }

    console.log(`📰 Validating ${urlsToValidate.length} URLs`)

    const results: ValidationResult[] = []
    const validUrls: string[] = []
    const invalidUrls: string[] = []

    for (const url of urlsToValidate) {
      try {
        console.log(`🌐 Validating: ${url}`)
        
        const result = await validateRSSFeed(url)
        results.push(result)
        
        if (result.isValid && result.isRSSFeed) {
          validUrls.push(url)
          console.log(`✅ Valid RSS feed: ${url} (${result.itemCount} items)`)
        } else {
          invalidUrls.push(url)
          console.log(`❌ Invalid RSS feed: ${url} - ${result.error}`)
          
          // Deactivate invalid sources in database
          if (validate_all) {
            await supabase
              .from('news_sources')
              .update({ is_active: false })
              .eq('url', url)
          }
        }

        // Rate limiting - wait 1 second between requests
        await new Promise(resolve => setTimeout(resolve, 1000))

      } catch (error) {
        const errorResult: ValidationResult = {
          url,
          isValid: false,
          status: 0,
          error: error.message,
          contentType: '',
          isRSSFeed: false
        }
        
        results.push(errorResult)
        invalidUrls.push(url)
        console.error(`❌ Error validating ${url}: ${error}`)
      }
    }

    // Update source statuses if validating all
    if (validate_all) {
      // Mark all as checked
      await supabase
        .from('news_sources')
        .update({ last_fetched: new Date().toISOString() })
        .in('url', urlsToValidate)
    }

    // Log completion
    await supabase.from('pipeline_logs').insert({
      operation: 'validate_news_sources',
      status: 'completed',
      message: `Validation completed: ${validUrls.length} valid, ${invalidUrls.length} invalid`,
      details: { 
        total_checked: urlsToValidate.length,
        valid_feeds: validUrls.length,
        invalid_feeds: invalidUrls.length,
        valid_urls: validUrls.slice(0, 10), // First 10 for brevity
        invalid_urls: invalidUrls.slice(0, 10)
      }
    })

    console.log(`🎉 Validation completed: ${validUrls.length} valid, ${invalidUrls.length} invalid`)

    return new Response(
      JSON.stringify({
        success: true,
        total_checked: urlsToValidate.length,
        valid_feeds: validUrls.length,
        invalid_feeds: invalidUrls.length,
        results,
        summary: {
          valid_urls: validUrls,
          invalid_urls: invalidUrls
        }
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('❌ Fatal error in validate-news-sources:', error)
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})

async function validateRSSFeed(url: string): Promise<ValidationResult> {
  try {
    const response = await fetch(url, {
      method: 'HEAD', // First try HEAD to check headers
      headers: {
        'User-Agent': 'AI-Teacher-Pro-RSS-Validator/1.0 (+https://ai-teachers.pro)',
        'Accept': 'application/rss+xml, application/atom+xml, text/xml, application/xml, */*',
      },
      signal: AbortSignal.timeout(10000) // 10 second timeout
    })

    const result: ValidationResult = {
      url,
      isValid: response.ok,
      status: response.status,
      contentType: response.headers.get('content-type') || '',
      isRSSFeed: false
    }

    if (!response.ok) {
      result.error = `HTTP ${response.status}: ${response.statusText}`
      return result
    }

    // Check content type
    const contentType = result.contentType.toLowerCase()
    const isXMLContent = contentType.includes('xml') || 
                        contentType.includes('rss') || 
                        contentType.includes('atom') || 
                        contentType.includes('application/rss+xml') ||
                        contentType.includes('application/atom+xml')

    if (!isXMLContent) {
      // Try a GET request to get actual content
      const getResponse = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'AI-Teacher-Pro-RSS-Validator/1.0 (+https://ai-teachers.pro)',
          'Accept': 'application/rss+xml, application/atom+xml, text/xml, application/xml',
        },
        signal: AbortSignal.timeout(15000) // 15 second timeout for GET
      })

      if (!getResponse.ok) {
        result.error = `GET request failed: HTTP ${getResponse.status}`
        return result
      }

      const content = await getResponse.text()
      
      // Check if content is actually RSS/XML
      if (content.includes('<rss') || content.includes('<feed') || content.includes('<?xml')) {
        result.isRSSFeed = true
        result.isValid = true
        
        // Try to extract title and count items
        const titleMatch = content.match(/<title[^>]*>(.*?)<\/title>/i)
        if (titleMatch) {
          result.title = titleMatch[1].replace(/<!\[CDATA\[(.*?)\]\]>/, '$1').trim()
        }
        
        // Count items/entries
        const itemMatches = content.match(/<(item|entry)[^>]*>/g)
        result.itemCount = itemMatches ? itemMatches.length : 0
        
      } else {
        result.error = 'Content is not a valid RSS/XML feed'
        result.isRSSFeed = false
      }
    } else {
      // Content type suggests XML, mark as valid RSS feed
      result.isRSSFeed = true
      result.isValid = true
    }

    return result

  } catch (error) {
    return {
      url,
      isValid: false,
      status: 0,
      error: `Network error: ${error.message}`,
      contentType: '',
      isRSSFeed: false
    }
  }
}