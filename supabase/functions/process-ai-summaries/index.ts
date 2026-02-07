import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'
import { encode as base64Encode } from 'https://deno.land/std@0.168.0/encoding/base64url.ts'
import { decode as base64Decode } from 'https://deno.land/std@0.168.0/encoding/base64.ts'

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
}

// ========== Vertex AI Configuration ==========
const VERTEX_MODELS = {
    primary: 'gemini-2.0-flash',
    fallback: 'gemini-2.5-pro',
}

// Cached access token
let cachedAccessToken: string | null = null
let tokenExpiresAt = 0

// ========== JWT / OAuth2 Authentication ==========

function pemToArrayBuffer(pem: string): ArrayBuffer {
    const base64 = pem
      .replace(/-----BEGIN PRIVATE KEY-----/g, '')
      .replace(/-----END PRIVATE KEY-----/g, '')
      .replace(/\s/g, '')
    const binaryString = atob(base64)
    const bytes = new Uint8Array(binaryString.length)
    for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i)
    }
    return bytes.buffer
}

function textToBase64Url(text: string): string {
    const encoder = new TextEncoder()
    const data = encoder.encode(text)
    return base64Encode(data)
}

async function createSignedJwt(serviceAccount: {
    client_email: string
    private_key: string
}): Promise<string> {
    const now = Math.floor(Date.now() / 1000)

  const header = { alg: 'RS256', typ: 'JWT' }
    const payload = {
          iss: serviceAccount.client_email,
          sub: serviceAccount.client_email,
          aud: 'https://oauth2.googleapis.com/token',
          iat: now,
          exp: now + 3600,
          scope: 'https://www.googleapis.com/auth/cloud-platform',
    }

  const headerB64 = textToBase64Url(JSON.stringify(header))
    const payloadB64 = textToBase64Url(JSON.stringify(payload))
    const unsignedToken = `${headerB64}.${payloadB64}`

  // Import the RSA private key
  const keyData = pemToArrayBuffer(serviceAccount.private_key)
    const cryptoKey = await crypto.subtle.importKey(
          'pkcs8',
          keyData,
      { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
          false,
          ['sign']
        )

  // Sign the token
  const encoder = new TextEncoder()
    const signature = await crypto.subtle.sign(
          'RSASSA-PKCS1-v1_5',
          cryptoKey,
          encoder.encode(unsignedToken)
        )

  const signatureB64 = base64Encode(new Uint8Array(signature))
    return `${unsignedToken}.${signatureB64}`
}

async function getAccessToken(): Promise<string> {
    const now = Math.floor(Date.now() / 1000)

  // Return cached token if still valid (with 60s buffer)
  if (cachedAccessToken && tokenExpiresAt > now + 60) {
        console.log('🔑 Using cached access token')
        return cachedAccessToken
  }

  console.log('🔑 Generating new Google OAuth2 access token...')

  const serviceAccountJson = Deno.env.get('GOOGLE_SERVICE_ACCOUNT_KEY')
    if (!serviceAccountJson) {
          throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY not configured in Supabase secrets')
    }

  const serviceAccount = JSON.parse(serviceAccountJson)
    const signedJwt = await createSignedJwt(serviceAccount)

  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${signedJwt}`,
  })

  if (!tokenResponse.ok) {
        const errorText = await tokenResponse.text()
        throw new Error(`Failed to get access token: ${tokenResponse.status} - ${errorText}`)
  }

  const tokenData = await tokenResponse.json()
    cachedAccessToken = tokenData.access_token
    tokenExpiresAt = now + (tokenData.expires_in || 3600)

  console.log('✅ Access token obtained successfully')
    return cachedAccessToken!
}

// ========== Vertex AI Generation ==========

async function generateWithVertexAI(
    prompt: string,
    modelName: string
  ): Promise<{ content: string; tokensUsed: number }> {
    const projectId = Deno.env.get('GOOGLE_CLOUD_PROJECT_ID')
    const region = Deno.env.get('GOOGLE_CLOUD_REGION') || 'us-central1'

  if (!projectId) {
        throw new Error('GOOGLE_CLOUD_PROJECT_ID not configured')
  }

  const accessToken = await getAccessToken()

  const url = `https://${region}-aiplatform.googleapis.com/v1/projects/${projectId}/locations/${region}/publishers/google/models/${modelName}:generateContent`

  const response = await fetch(url, {
        method: 'POST',
        headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
        },
        body: JSON.stringify({
                contents: [
                  {
                              role: 'user',
                              parts: [{ text: prompt }],
                  },
                        ],
                generationConfig: {
                          temperature: 0.7,
                          maxOutputTokens: 1024,
                          topP: 0.95,
                },
                safetySettings: [
                  { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH' },
                  { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
                  { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
                  { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
                        ],
        }),
  })

  if (!response.ok) {
        const errorText = await response.text()
        const status = response.status

      // Retry on 429 (rate limit) or 503 (service unavailable)
      if (status === 429 || status === 503) {
              console.log(`⚠️ ${modelName} returned ${status}, retrying after 3s...`)
              await new Promise((resolve) => setTimeout(resolve, 3000))

          const retryResponse = await fetch(url, {
                    method: 'POST',
                    headers: {
                                'Authorization': `Bearer ${accessToken}`,
                                'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                                contents: [
                                  {
                                                  role: 'user',
                                                  parts: [{ text: prompt }],
                                  },
                                            ],
                                generationConfig: {
                                              temperature: 0.7,
                                              maxOutputTokens: 1024,
                                              topP: 0.95,
                                },
                                safetySettings: [
                                  { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH' },
                                  { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
                                  { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
                                  { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
                                            ],
                    }),
          })

          if (!retryResponse.ok) {
                    const retryError = await retryResponse.text()
                    throw new Error(`Vertex AI ${modelName} retry failed: ${retryResponse.status} - ${retryError}`)
          }

          const retryData = await retryResponse.json()
              const retryText = retryData.candidates?.[0]?.content?.parts?.[0]?.text || ''
              const retryTokens = retryData.usageMetadata?.totalTokenCount || 0
              return { content: retryText.trim(), tokensUsed: retryTokens }
      }

      throw new Error(`Vertex AI ${modelName} error: ${status} - ${errorText}`)
  }

  const data = await response.json()
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || ''
    const tokensUsed = data.usageMetadata?.totalTokenCount || 0

  return { content: text.trim(), tokensUsed }
}

// ========== Summary Generation with Fallback ==========

async function generateSummaryWithVertexAI(
    title: string,
    content: string
  ): Promise<{ content: string; tokensUsed: number; isFeatured: boolean; modelUsed: string }> {
    const prompt = `You are an expert AI education journalist. Summarise this AI news article for teachers and educators.

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

  // Try primary model: gemini-2.0-flash
  try {
        console.log(`🔄 Trying Vertex AI ${VERTEX_MODELS.primary}...`)
        const result = await generateWithVertexAI(prompt, VERTEX_MODELS.primary)

      if (result.content && result.content.length > 50) {
              console.log(`✅ Success with ${VERTEX_MODELS.primary}`)
              const isFeatured = shouldBeFeatured(title, result.content)
              return {
                        content: result.content,
                        tokensUsed: result.tokensUsed,
                        isFeatured,
                        modelUsed: VERTEX_MODELS.primary,
              }
      }

      console.log(`⚠️ ${VERTEX_MODELS.primary} returned insufficient content, trying fallback...`)
  } catch (error) {
        console.error(`❌ ${VERTEX_MODELS.primary} failed: ${error.message}`)
  }

  // Try fallback model: gemini-2.5-pro
  try {
        console.log(`🔄 Trying Vertex AI fallback ${VERTEX_MODELS.fallback}...`)
        const result = await generateWithVertexAI(prompt, VERTEX_MODELS.fallback)

      if (result.content && result.content.length > 50) {
              console.log(`✅ Success with fallback ${VERTEX_MODELS.fallback}`)
              const isFeatured = shouldBeFeatured(title, result.content)
              return {
                        content: result.content,
                        tokensUsed: result.tokensUsed,
                        isFeatured,
                        modelUsed: VERTEX_MODELS.fallback,
              }
      }
  } catch (error) {
        console.error(`❌ ${VERTEX_MODELS.fallback} also failed: ${error.message}`)
  }

  throw new Error('All Vertex AI models failed to generate summary')
}

// ========== Featured Article Detection ==========

function shouldBeFeatured(title: string, summary: string): boolean {
    const featureKeywords = [
          'breakthrough', 'revolutionary', 'education', 'teaching', 'classroom',
          'students', 'learning', 'curriculum', 'school', 'university',
          'chatgpt', 'openai', 'google', 'microsoft', 'announcement',
        ]

  const content = `${title} ${summary}`.toLowerCase()
    const keywordMatches = featureKeywords.filter((keyword) => content.includes(keyword)).length

  // Feature if it has 2+ education-related keywords or major AI company mentions
  return keywordMatches >= 2
}

// ========== Main Server Handler ==========

serve(async (req) => {
    if (req.method === 'OPTIONS') {
          return new Response(null, { headers: corsHeaders })
    }

        try {
              const supabaseUrl = Deno.env.get('SUPABASE_URL')!
              const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

      const supabase = createClient(supabaseUrl, supabaseServiceKey)

      console.log('🤖 Starting AI summary processing with Google Vertex AI...')

      // Log start of operation
      await supabase.from('pipeline_logs').insert({
              operation: 'process_summaries_vertex_ai',
              status: 'started',
              message: 'Beginning AI summary processing with Vertex AI Gemini models',
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
                          operation: 'process_summaries_vertex_ai',
                          status: 'completed',
                          message: 'No pending articles found to process',
                })

                return new Response(
                          JSON.stringify({
                                      success: true,
                                      processed: 0,
                                      message: 'No articles to process',
                          }),
                  {
                              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                              status: 200,
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

                              // Generate summary with Vertex AI
                              const summaryResult = await generateSummaryWithVertexAI(
                                          article.title,
                                          article.original_content || ''
                                        )

                              if (!summaryResult.content) {
                                          throw new Error('Vertex AI failed to generate summary')
                              }

                              // Track model usage
                              modelUsageStats[summaryResult.modelUsed] =
                                          (modelUsageStats[summaryResult.modelUsed] || 0) + 1

                              const processingTime = Date.now() - startTime

                              // Update article with summary
                              const { error: updateError } = await supabase
                                        .from('ai_news')
                                        .update({
                                                      summary_md: summaryResult.content,
                                                      status: 'published',
                                                      processed_at: new Date().toISOString(),
                                                      featured: summaryResult.isFeatured,
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
                                          processing_time_ms: processingTime,
                              })

                              processed++
                                      console.log(
                                                  `✅ Processed: ${article.title} (${summaryResult.modelUsed}, ${processingTime}ms)`
                                                )

                              // Rate limiting - wait 2 seconds between requests
                              await new Promise((resolve) => setTimeout(resolve, 2000))
                            } catch (articleError) {
                                      console.error(`❌ Error processing article ${article.id}: ${articleError}`)
                                      errors++

                              // Mark article as failed
                              await supabase
                                        .from('ai_news')
                                        .update({ status: 'failed' })
                                        .eq('id', article.id)

                              await supabase.from('pipeline_logs').insert({
                                          operation: 'process_summaries_vertex_ai',
                                          status: 'error',
                                          message: `Failed to process article: ${article.title}`,
                                          details: {
                                                        error: articleError.message,
                                                        article_id: article.id,
                                                        article_title: article.title,
                                          },
                              })
                            }
                    }

      // Log completion with model usage stats
      await supabase.from('pipeline_logs').insert({
              operation: 'process_summaries_vertex_ai',
              status: 'completed',
              message: `Vertex AI processing completed: ${processed} summaries generated, ${errors} errors`,
              details: {
                        processed_count: processed,
                        errors: errors,
                        articles_attempted: articles.length,
                        model_usage: modelUsageStats,
              },
      })

      console.log(`🎉 Vertex AI processing completed: ${processed} summaries generated`)
              console.log(`📊 Model usage:`, modelUsageStats)

      return new Response(
              JSON.stringify({
                        success: true,
                        processed,
                        errors,
                        model_usage: modelUsageStats,
                        message: 'Vertex AI Gemini summary processing completed',
              }),
        {
                  headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                  status: 200,
        }
            )
        } catch (error) {
              console.error('❌ Fatal error in process-ai-summaries:', error)

      return new Response(
              JSON.stringify({
                        success: false,
                        error: error.message,
              }),
        {
                  headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                  status: 500,
        }
            )
        }
})
