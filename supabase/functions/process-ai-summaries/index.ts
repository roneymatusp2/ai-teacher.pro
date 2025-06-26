import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
}

interface AIProvider {
  name: string
  model: string
  generate: (prompt: string) => Promise<{ content: string; tokensUsed: number }>
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey)
    
    console.log('🤖 Starting AI summary processing with OpenAI-first fallback...')
    
    // Log start of operation
    await supabase.from('pipeline_logs').insert({
      operation: 'process_summaries_openai_first',
      status: 'started',
      message: 'Beginning AI summary processing with OpenAI as primary model'
    })

    // Get pending articles
    const { data: articles, error: fetchError } = await supabase
      .from('ai_news')
      .select('*')
      .eq('status', 'pending')
      .is('summary_md', null)
      .order('created_at', { ascending: true })
      .limit(10) // Process max 10 at a time

    if (fetchError) {
      throw new Error(`Failed to fetch pending articles: ${fetchError.message}`)
    }

    if (!articles || articles.length === 0) {
      console.log('✅ No pending articles to process')
      
      await supabase.from('pipeline_logs').insert({
        operation: 'process_summaries_openai_first',
        status: 'completed',
        message: 'No pending articles found to process'
      })
      
      return new Response(
        JSON.stringify({
          success: true,
          processed: 0,
          message: 'No articles to process'
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      )
    }

    console.log(`📝 Found ${articles.length} articles to process`)

    let processed = 0
    let errors = 0
    const modelUsageStats: Record<string, number> = {}

    for (const article of articles) {
      try {
        console.log(`🔄 Processing: ${article.title}`)
        
        const startTime = Date.now()
        
        // Mark as processing
        await supabase
          .from('ai_news')
          .update({ status: 'processing' })
          .eq('id', article.id)

        // Generate summary with OpenAI-first fallback
        const summaryResult = await generateSummaryWithOpenAIFirst(
          article.title,
          article.original_content || ''
        )
        
        if (!summaryResult.content) {
          throw new Error('All AI models failed to generate summary')
        }

        // Track model usage
        modelUsageStats[summaryResult.modelUsed] = (modelUsageStats[summaryResult.modelUsed] || 0) + 1

        const processingTime = Date.now() - startTime
        
        // Update article with summary
        const { error: updateError } = await supabase
          .from('ai_news')
          .update({ 
            summary_md: summaryResult.content,
            status: 'published',
            processed_at: new Date().toISOString(),
            featured: summaryResult.isFeatured
          })
          .eq('id', article.id)

        if (updateError) {
          throw new Error(`Failed to update article: ${updateError.message}`)
        }

        // Log summary details
        await supabase.from('ai_news_summaries').insert({
          news_id: article.id,
          original_length: article.original_content?.length || 0,
          summary_length: summaryResult.content.length,
          model_used: summaryResult.modelUsed,
          tokens_used: summaryResult.tokensUsed,
          processing_time_ms: processingTime
        })

        processed++
        console.log(`✅ Processed: ${article.title} (${summaryResult.modelUsed}, ${processingTime}ms)`)
        
        // Rate limiting - wait 2 seconds between requests
        await new Promise(resolve => setTimeout(resolve, 2000))

      } catch (articleError) {
        console.error(`❌ Error processing article ${article.id}: ${articleError}`)
        errors++
        
        // Mark article as failed
        await supabase
          .from('ai_news')
          .update({ status: 'failed' })
          .eq('id', article.id)

        await supabase.from('pipeline_logs').insert({
          operation: 'process_summaries_openai_first',
          status: 'error',
          message: `Failed to process article: ${article.title}`,
          details: { 
            error: articleError.message, 
            article_id: article.id,
            article_title: article.title
          }
        })
      }
    }

    // Log completion with model usage stats
    await supabase.from('pipeline_logs').insert({
      operation: 'process_summaries_openai_first',
      status: 'completed',
      message: `OpenAI-first processing completed: ${processed} summaries generated, ${errors} errors`,
      details: { 
        processed_count: processed, 
        errors: errors,
        articles_attempted: articles.length,
        model_usage: modelUsageStats
      }
    })

    console.log(`🎉 OpenAI-first processing completed: ${processed} summaries generated`)
    console.log(`📊 Model usage:`, modelUsageStats)

    return new Response(
      JSON.stringify({
        success: true,
        processed,
        errors,
        model_usage: modelUsageStats,
        message: 'OpenAI-first AI summary processing completed'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('❌ Fatal error in process-ai-summaries:', error)
    
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

async function generateSummaryWithOpenAIFirst(
  title: string, 
  content: string
): Promise<{ content: string; tokensUsed: number; isFeatured: boolean; modelUsed: string }> {
  
  const prompt = `You are an expert AI education journalist. Summarize this AI news article for teachers and educators.

TITLE: ${title}

CONTENT: ${content}

Please provide:
1. A concise 2-3 paragraph summary in markdown format
2. Focus on educational implications and practical applications
3. Include relevant keywords for SEO
4. Make it engaging for teachers who want to understand AI developments

Guidelines:
- Use clear, accessible language
- Highlight how this might impact education
- Include practical takeaways when relevant
- Use markdown formatting (headers, bold, lists as appropriate)
- Keep it under 300 words but informative

Return only the markdown summary content.`

  // NOVA ORDEM: OpenAI PRIMEIRO (sua preferência)
  const providers: AIProvider[] = [
    {
      name: 'OpenAI',
      model: 'gpt-4o-mini',
      generate: async (p) => await generateWithOpenAI(p)
    },
    {
      name: 'Groq',
      model: 'llama3-8b-8192',
      generate: async (p) => await generateWithGroq(p)
    },
    {
      name: 'Cohere',
      model: 'command-light',
      generate: async (p) => await generateWithCohere(p)
    },
    {
      name: 'Anthropic',
      model: 'claude-3-haiku-20240307',
      generate: async (p) => await generateWithAnthropic(p)
    },
    {
      name: 'xAI',
      model: 'grok-beta',
      generate: async (p) => await generateWithGrok(p)
    }
  ]

  // Try each provider in order (OpenAI first!)
  for (const provider of providers) {
    try {
      console.log(`🔄 Trying ${provider.name} (${provider.model})...`)
      
      const result = await provider.generate(prompt)
      
      if (result.content && result.content.length > 50) {
        console.log(`✅ Success with ${provider.name} - trusted choice!`)
        
        const isFeatured = shouldBeFeatured(title, result.content)
        
        return {
          content: result.content,
          tokensUsed: result.tokensUsed,
          isFeatured,
          modelUsed: provider.name
        }
      }
      
      console.log(`⚠️ ${provider.name} returned empty content, trying next...`)
      
    } catch (error) {
      console.error(`❌ ${provider.name} failed: ${error.message}`)
      continue // Try next provider
    }
  }

  throw new Error('All AI providers failed to generate summary')
}

// === OPENAI IMPLEMENTATION (PRIORIDADE #1) ===
async function generateWithOpenAI(prompt: string): Promise<{ content: string; tokensUsed: number }> {
  const apiKey = Deno.env.get('OPENAI_API_KEY')
  if (!apiKey) throw new Error('OpenAI API key not configured')

  console.log('🚀 Using OpenAI (your preferred choice)...')

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are an expert AI education journalist who creates engaging summaries for teachers and educators.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`OpenAI API error: ${response.status} - ${errorText}`)
  }

  const data = await response.json()
  
  if (!data.choices || !data.choices[0] || !data.choices[0].message) {
    throw new Error('Invalid response from OpenAI API')
  }

  return {
    content: data.choices[0].message.content.trim(),
    tokensUsed: data.usage?.total_tokens || 0
  }
}

// === GROQ IMPLEMENTATION (FALLBACK #1) ===
async function generateWithGroq(prompt: string): Promise<{ content: string; tokensUsed: number }> {
  const apiKey = Deno.env.get('GROQ_API_KEY')
  if (!apiKey) throw new Error('Groq API key not configured')

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'llama3-8b-8192',
      messages: [
        {
          role: 'system',
          content: 'You are an expert AI education journalist who creates engaging summaries for teachers and educators.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Groq API error: ${response.status} - ${errorText}`)
  }

  const data = await response.json()
  
  if (!data.choices || !data.choices[0] || !data.choices[0].message) {
    throw new Error('Invalid response from Groq API')
  }

  return {
    content: data.choices[0].message.content.trim(),
    tokensUsed: data.usage?.total_tokens || 0
  }
}

// === COHERE IMPLEMENTATION (FALLBACK #2) ===
async function generateWithCohere(prompt: string): Promise<{ content: string; tokensUsed: number }> {
  const apiKey = Deno.env.get('COHERE_API_KEY')
  if (!apiKey) throw new Error('Cohere API key not configured')

  const response = await fetch('https://api.cohere.ai/v1/generate', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'command-light',
      prompt: `${prompt}\n\nSummary:`,
      max_tokens: 500,
      temperature: 0.7,
      stop_sequences: ['\n\n'],
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Cohere API error: ${response.status} - ${errorText}`)
  }

  const data = await response.json()
  
  if (!data.generations || !data.generations[0] || !data.generations[0].text) {
    throw new Error('Invalid response from Cohere API')
  }

  return {
    content: data.generations[0].text.trim(),
    tokensUsed: data.meta?.billed_units?.input_tokens || 0
  }
}

// === ANTHROPIC CLAUDE IMPLEMENTATION (FALLBACK #3) ===
async function generateWithAnthropic(prompt: string): Promise<{ content: string; tokensUsed: number }> {
  const apiKey = Deno.env.get('ANTHROPIC_API_KEY')
  if (!apiKey) throw new Error('Anthropic API key not configured')

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-3-haiku-20240307',
      max_tokens: 500,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Anthropic API error: ${response.status} - ${errorText}`)
  }

  const data = await response.json()
  
  if (!data.content || !data.content[0] || !data.content[0].text) {
    throw new Error('Invalid response from Anthropic API')
  }

  return {
    content: data.content[0].text.trim(),
    tokensUsed: data.usage?.input_tokens + data.usage?.output_tokens || 0
  }
}

// === XAI GROK IMPLEMENTATION (FALLBACK #4) ===
async function generateWithGrok(prompt: string): Promise<{ content: string; tokensUsed: number }> {
  const apiKey = Deno.env.get('GROK_API_KEY')
  if (!apiKey) throw new Error('Grok API key not configured')

  const response = await fetch('https://api.x.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'grok-beta',
      messages: [
        {
          role: 'system',
          content: 'You are an expert AI education journalist who creates engaging summaries for teachers and educators.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Grok API error: ${response.status} - ${errorText}`)
  }

  const data = await response.json()
  
  if (!data.choices || !data.choices[0] || !data.choices[0].message) {
    throw new Error('Invalid response from Grok API')
  }

  return {
    content: data.choices[0].message.content.trim(),
    tokensUsed: data.usage?.total_tokens || 0
  }
}

function shouldBeFeatured(title: string, summary: string): boolean {
  const featureKeywords = [
    'breakthrough', 'revolutionary', 'education', 'teaching', 'classroom',
    'students', 'learning', 'curriculum', 'school', 'university',
    'chatgpt', 'openai', 'google', 'microsoft', 'announcement'
  ]
  
  const content = `${title} ${summary}`.toLowerCase()
  const keywordMatches = featureKeywords.filter(keyword => content.includes(keyword)).length
  
  // Feature if it has 2+ education-related keywords or major AI company mentions
  return keywordMatches >= 2
}