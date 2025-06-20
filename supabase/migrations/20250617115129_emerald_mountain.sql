/*
  # Sistema Automático de Notícias de IA

  1. New Tables
    - `ai_news` - Armazena artigos de IA processados
    - `news_sources` - Fontes de notícias configuráveis
    - `ai_news_summaries` - Resumos gerados pela IA
    - `pipeline_logs` - Logs do pipeline automático
  
  2. Security
    - Enable RLS em todas as tabelas
    - Políticas para leitura pública e admin management
  
  3. Extensions
    - Enable pg_net para HTTP requests
    - Enable pg_cron para scheduling
  
  4. Functions
    - Trigger para auto-geração de slugs
    - Function para cleanup automático
*/

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS pg_net;
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Create enum for article status
CREATE TYPE article_status AS ENUM ('pending', 'processing', 'published', 'failed');

-- Create enum for source types
CREATE TYPE source_type AS ENUM ('rss', 'api', 'web_scraping');

-- AI News main table
CREATE TABLE IF NOT EXISTS ai_news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE,
  original_content text,
  summary_md text,
  tags text[],
  source_url text UNIQUE NOT NULL,
  source_name text,
  author text,
  published_at timestamptz DEFAULT now(),
  processed_at timestamptz,
  status article_status DEFAULT 'pending',
  featured boolean DEFAULT false,
  view_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- News sources configuration
CREATE TABLE IF NOT EXISTS news_sources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  url text NOT NULL,
  source_type source_type DEFAULT 'rss',
  api_key text,
  is_active boolean DEFAULT true,
  last_fetched timestamptz,
  fetch_interval interval DEFAULT '1 hour',
  created_at timestamptz DEFAULT now()
);

-- AI summaries tracking
CREATE TABLE IF NOT EXISTS ai_news_summaries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  news_id uuid REFERENCES ai_news(id) ON DELETE CASCADE,
  original_length integer,
  summary_length integer,
  model_used text DEFAULT 'gpt-4o-mini',
  tokens_used integer,
  processing_time_ms integer,
  created_at timestamptz DEFAULT now()
);

-- Pipeline execution logs
CREATE TABLE IF NOT EXISTS pipeline_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  operation text NOT NULL,
  status text NOT NULL,
  message text,
  details jsonb,
  execution_time_ms integer,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_ai_news_status ON ai_news(status);
CREATE INDEX IF NOT EXISTS idx_ai_news_published_at ON ai_news(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_ai_news_featured ON ai_news(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_ai_news_tags ON ai_news USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_pipeline_logs_operation ON pipeline_logs(operation, created_at DESC);

-- Function to generate slug from title
CREATE OR REPLACE FUNCTION generate_slug(title_text text)
RETURNS text AS $$
BEGIN
  RETURN lower(
    regexp_replace(
      regexp_replace(
        regexp_replace(title_text, '[^a-zA-Z0-9\s]', '', 'g'),
        '\s+', '-', 'g'
      ),
      '^-+|-+$', '', 'g'
    )
  );
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-generate slug
CREATE OR REPLACE FUNCTION trg_generate_slug()
RETURNS trigger AS $$
BEGIN
  IF NEW.slug IS NULL OR NEW.slug = '' THEN
    NEW.slug := generate_slug(NEW.title);
    
    -- Ensure uniqueness
    WHILE EXISTS (SELECT 1 FROM ai_news WHERE slug = NEW.slug AND id != COALESCE(NEW.id, '00000000-0000-0000-0000-000000000000'::uuid)) LOOP
      NEW.slug := NEW.slug || '-' || floor(random() * 1000)::text;
    END LOOP;
  END IF;
  
  NEW.updated_at := now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_ai_news_slug
  BEFORE INSERT OR UPDATE ON ai_news
  FOR EACH ROW EXECUTE FUNCTION trg_generate_slug();

-- Function for automatic cleanup
CREATE OR REPLACE FUNCTION cleanup_old_data()
RETURNS void AS $$
BEGIN
  -- Delete logs older than 30 days
  DELETE FROM pipeline_logs WHERE created_at < now() - interval '30 days';
  
  -- Delete failed articles older than 7 days
  DELETE FROM ai_news WHERE status = 'failed' AND created_at < now() - interval '7 days';
  
  -- Log cleanup operation
  INSERT INTO pipeline_logs (operation, status, message)
  VALUES ('cleanup', 'success', 'Automated cleanup completed');
END;
$$ LANGUAGE plpgsql;

-- Enable RLS
ALTER TABLE ai_news ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_news_summaries ENABLE ROW LEVEL SECURITY;
ALTER TABLE pipeline_logs ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Public can read published ai_news"
  ON ai_news FOR SELECT
  TO public
  USING (status = 'published');

CREATE POLICY "Public can read ai_news_summaries"
  ON ai_news_summaries FOR SELECT
  TO public
  USING (true);

-- Admin policies
CREATE POLICY "Authenticated users can manage ai_news"
  ON ai_news FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage news_sources"
  ON news_sources FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read pipeline_logs"
  ON pipeline_logs FOR SELECT
  TO authenticated
  USING (true);

-- Insert default news sources
INSERT INTO news_sources (name, url, source_type, is_active) VALUES
('TechCrunch AI', 'https://techcrunch.com/category/artificial-intelligence/feed/', 'rss', true),
('MIT Technology Review AI', 'https://www.technologyreview.com/topic/artificial-intelligence/feed/', 'rss', true),
('Wired AI', 'https://www.wired.com/feed/tag/ai/latest/rss', 'rss', true),
('AI News', 'https://www.artificialintelligence-news.com/feed/', 'rss', true),
('VentureBeat AI', 'https://venturebeat.com/ai/feed/', 'rss', true)
ON CONFLICT DO NOTHING;

-- Schedule cron jobs
SELECT cron.schedule(
  'fetch-ai-news',
  '0 */3 * * *', -- Every 3 hours
  $$SELECT net.http_post(
    'https://gjvtncdjcslnkfctqnfy.supabase.co/functions/v1/fetch-ai-news',
    '{"trigger": "cron"}',
    headers => '{"Authorization": "Bearer ' || current_setting('app.settings.service_role_key', true) || '", "Content-Type": "application/json"}'
  );$$
);

SELECT cron.schedule(
  'process-ai-summaries',
  '15 */3 * * *', -- Every 3 hours, 15 minutes after fetch
  $$SELECT net.http_post(
    'https://gjvtncdjcslnkfctqnfy.supabase.co/functions/v1/process-ai-summaries',
    '{"trigger": "cron"}',
    headers => '{"Authorization": "Bearer ' || current_setting('app.settings.service_role_key', true) || '", "Content-Type": "application/json"}'
  );$$
);

SELECT cron.schedule(
  'cleanup-old-data',
  '0 2 * * 0', -- Weekly on Sunday at 2 AM
  $$SELECT cleanup_old_data();$$
);