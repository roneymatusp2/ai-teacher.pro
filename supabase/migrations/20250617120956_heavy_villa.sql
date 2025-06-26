/*
  # Add Twitter-related RSS sources for AI news

  1. Database Changes
    - Add unique constraint on news_sources.url to prevent duplicates
    - Insert Twitter and AI-related RSS sources

  2. New Sources
    - AI Twitter aggregators via Nitter
    - Company Twitter feeds (OpenAI, Google AI, Microsoft, Anthropic)
    - High-quality AI blogs and research feeds
    - Technical AI publication feeds

  3. Security
    - All sources are RSS-based (no API keys needed)
    - Sources are marked as active by default
*/

-- First, add unique constraint on URL to prevent duplicates
ALTER TABLE news_sources ADD CONSTRAINT news_sources_url_unique UNIQUE (url);

-- Insert Twitter-related RSS sources that aggregate AI content
INSERT INTO news_sources (name, url, source_type, is_active) VALUES
-- RSS feeds que agregam conteúdo do Twitter sobre IA
('AI Twitter Digest', 'https://nitter.net/search/rss?q=AI+OR+%22artificial+intelligence%22+OR+%22machine+learning%22', 'rss', true),
('OpenAI Twitter Feed', 'https://nitter.net/OpenAI/rss', 'rss', true),
('Google AI Twitter', 'https://nitter.net/GoogleAI/rss', 'rss', true),
('Microsoft AI Twitter', 'https://nitter.net/MSFTResearch/rss', 'rss', true),
('Anthropic Twitter', 'https://nitter.net/AnthropicAI/rss', 'rss', true),

-- Fontes adicionais de IA que são muito ativas
('Towards Data Science', 'https://towardsdatascience.com/feed', 'rss', true),
('AI Research Blog', 'https://ai.googleblog.com/feeds/posts/default', 'rss', true),
('OpenAI Blog', 'https://openai.com/blog/rss/', 'rss', true),
('Hugging Face Blog', 'https://huggingface.co/blog/feed.xml', 'rss', true),
('Papers with Code', 'https://paperswithcode.com/rss.xml', 'rss', true)

ON CONFLICT (url) DO NOTHING;