/*
  # Enhanced AI News Tagging System

  1. New Columns
    - `influence_score` (integer) - Score 0-100 based on source reputation
    - `education_relevance` (integer) - Score 0-100 for educational content
    - `content_type` (text) - Classification of content type

  2. Enhanced Features
    - Tag categories with priority scoring
    - Automatic influence and education relevance calculation
    - Specialized views for high-quality content
    - Performance indexes

  3. Functions
    - Auto-scoring system for new articles
    - Content type classification
    - Trigger-based updates
*/

-- Add new columns for enhanced metadata if they don't exist
DO $$
BEGIN
  -- Add influence score column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'ai_news' AND column_name = 'influence_score'
  ) THEN
    ALTER TABLE ai_news ADD COLUMN influence_score integer DEFAULT 0;
  END IF;

  -- Add content type classification
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'ai_news' AND column_name = 'content_type'
  ) THEN
    ALTER TABLE ai_news ADD COLUMN content_type text DEFAULT 'general';
  END IF;

  -- Add educational relevance score
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'ai_news' AND column_name = 'education_relevance'
  ) THEN
    ALTER TABLE ai_news ADD COLUMN education_relevance integer DEFAULT 0;
  END IF;
END $$;

-- Create enhanced tag categories
CREATE TABLE IF NOT EXISTS ai_news_tag_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_name text UNIQUE NOT NULL,
  description text,
  priority_score integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Insert tag categories
INSERT INTO ai_news_tag_categories (category_name, description, priority_score) VALUES
  ('influential-expert', 'Content from top AI researchers and thought leaders', 10),
  ('international-event', 'Global conferences, summits, and educational events', 9),
  ('educational-org', 'Educational institutions and organizations', 8),
  ('policy-governance', 'AI policy, ethics, and governance content', 7),
  ('research-breakthrough', 'Significant research discoveries and breakthroughs', 9),
  ('industry-news', 'Company announcements and industry developments', 6),
  ('educational-application', 'Practical applications in educational settings', 10),
  ('emerging-technology', 'New and emerging AI technologies', 7),
  ('global-perspective', 'International and multicultural viewpoints', 6),
  ('conference-proceedings', 'Academic conference papers and presentations', 8)
ON CONFLICT (category_name) DO UPDATE SET
  description = EXCLUDED.description,
  priority_score = EXCLUDED.priority_score;

-- Create function to calculate influence score
CREATE OR REPLACE FUNCTION calculate_influence_score(
  source_name text,
  tags text[],
  title text,
  content text
) RETURNS integer AS $$
DECLARE
  score integer := 0;
  high_value_tag text; -- Declare the loop variable
  influential_sources text[] := ARRAY[
    'Lex Fridman', 'Andrew Ng', 'Sam Altman', 'Yann LeCun', 'Andrej Karpathy',
    'Fei-Fei Li', 'Demis Hassabis', 'Allie K. Miller', 'Geoffrey Hinton', 'Marc Andreessen',
    'OpenAI', 'DeepMind', 'Google AI', 'Meta AI'
  ];
  high_value_tags text[] := ARRAY[
    'influential-expert', 'international-event', 'research-breakthrough',
    'educational-application', 'conference-proceedings'
  ];
BEGIN
  -- Base score from source reputation
  IF source_name = ANY(influential_sources) THEN
    score := score + 50;
  END IF;
  
  -- Score from high-value tags
  FOREACH high_value_tag IN ARRAY high_value_tags LOOP
    IF high_value_tag = ANY(tags) THEN
      score := score + 20;
    END IF;
  END LOOP;
  
  -- Score from content keywords
  IF position('breakthrough' in lower(title || ' ' || content)) > 0 THEN
    score := score + 15;
  END IF;
  
  IF position('education' in lower(title || ' ' || content)) > 0 THEN
    score := score + 10;
  END IF;
  
  IF position('conference' in lower(title || ' ' || content)) > 0 THEN
    score := score + 10;
  END IF;
  
  RETURN LEAST(score, 100); -- Cap at 100
END;
$$ LANGUAGE plpgsql;

-- Create function to calculate education relevance
CREATE OR REPLACE FUNCTION calculate_education_relevance(
  title text,
  content text,
  tags text[]
) RETURNS integer AS $$
DECLARE
  relevance integer := 0;
  keyword text; -- Declare the loop variable
  education_keywords text[] := ARRAY[
    'education', 'teaching', 'learning', 'classroom', 'student', 'teacher',
    'curriculum', 'pedagogy', 'assessment', 'personalized learning',
    'adaptive learning', 'educational technology', 'e-learning'
  ];
BEGIN
  -- Score from education-specific tags
  IF 'education' = ANY(tags) THEN relevance := relevance + 30; END IF;
  IF 'educational-application' = ANY(tags) THEN relevance := relevance + 40; END IF;
  IF 'teaching' = ANY(tags) THEN relevance := relevance + 25; END IF;
  IF 'classroom' = ANY(tags) THEN relevance := relevance + 20; END IF;
  
  -- Score from education keywords in content
  FOREACH keyword IN ARRAY education_keywords LOOP
    IF position(keyword in lower(title || ' ' || content)) > 0 THEN
      relevance := relevance + 5;
    END IF;
  END LOOP;
  
  RETURN LEAST(relevance, 100); -- Cap at 100
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-calculate scores
CREATE OR REPLACE FUNCTION update_ai_news_scores()
RETURNS TRIGGER AS $$
BEGIN
  -- Calculate influence score
  NEW.influence_score := calculate_influence_score(
    NEW.source_name,
    NEW.tags,
    NEW.title,
    COALESCE(NEW.original_content, '')
  );
  
  -- Calculate education relevance
  NEW.education_relevance := calculate_education_relevance(
    NEW.title,
    COALESCE(NEW.original_content, ''),
    NEW.tags
  );
  
  -- Determine content type
  IF 'influential-expert' = ANY(NEW.tags) THEN
    NEW.content_type := 'expert_opinion';
  ELSIF 'international-event' = ANY(NEW.tags) THEN
    NEW.content_type := 'event_announcement';
  ELSIF 'research-breakthrough' = ANY(NEW.tags) THEN
    NEW.content_type := 'research_news';
  ELSIF 'educational-application' = ANY(NEW.tags) THEN
    NEW.content_type := 'educational_content';
  ELSE
    NEW.content_type := 'general';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
DROP TRIGGER IF EXISTS trg_update_ai_news_scores ON ai_news;
CREATE TRIGGER trg_update_ai_news_scores
  BEFORE INSERT OR UPDATE ON ai_news
  FOR EACH ROW
  EXECUTE FUNCTION update_ai_news_scores();

-- Create enhanced view for high-quality educational content
CREATE OR REPLACE VIEW v_educational_ai_news AS
SELECT 
  n.*,
  c.priority_score as category_priority
FROM ai_news n
LEFT JOIN ai_news_tag_categories c ON c.category_name = ANY(n.tags)
WHERE 
  n.status = 'published' 
  AND (
    n.education_relevance >= 30 
    OR n.influence_score >= 40
    OR 'educational-application' = ANY(n.tags)
    OR 'international-event' = ANY(n.tags)
  )
ORDER BY 
  n.influence_score DESC,
  n.education_relevance DESC,
  n.published_at DESC;

-- Create view for influential expert content
CREATE OR REPLACE VIEW v_influential_expert_news AS
SELECT *
FROM ai_news
WHERE 
  status = 'published'
  AND (
    'influential-expert' = ANY(tags)
    OR influence_score >= 50
  )
ORDER BY influence_score DESC, published_at DESC;

-- Add indexes for performance
CREATE INDEX IF NOT EXISTS idx_ai_news_influence_score ON ai_news(influence_score DESC);
CREATE INDEX IF NOT EXISTS idx_ai_news_education_relevance ON ai_news(education_relevance DESC);
CREATE INDEX IF NOT EXISTS idx_ai_news_content_type ON ai_news(content_type);
CREATE INDEX IF NOT EXISTS idx_ai_news_tags_gin ON ai_news USING gin(tags);

-- Log the migration
INSERT INTO migration_metadata (migration_name, description, target_table, status) VALUES
  ('update_ai_news_enhanced_tags', 'Enhanced AI news tagging system with influence scoring and education relevance', 'ai_news', 'completed');