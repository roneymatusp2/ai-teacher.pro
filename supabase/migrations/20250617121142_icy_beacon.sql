/*
  # Adicionar fontes globais gratuitas de IA

  1. Fontes RSS globais
     - GitHub, Reddit, Hacker News
     - Universidades e institutos de pesquisa
     - Fontes internacionais (Europa, Ásia, América)
  
  2. Fontes específicas do GitHub
     - Trending repositories
     - AI releases e announcements
     - Research papers
*/

-- Adicionar fontes globais gratuitas
INSERT INTO news_sources (name, url, source_type, is_active) VALUES

-- === GITHUB & DEVELOPMENT SOURCES ===
('GitHub AI Trends', 'https://github.com/trending/machine-learning.atom', 'rss', true),
('GitHub AI Releases', 'https://github.com/topics/artificial-intelligence.atom', 'rss', true),
('PyTorch Releases', 'https://github.com/pytorch/pytorch/releases.atom', 'rss', true),
('TensorFlow Releases', 'https://github.com/tensorflow/tensorflow/releases.atom', 'rss', true),
('Hugging Face Models', 'https://huggingface.co/datasets.atom', 'rss', true),

-- === REDDIT & COMMUNITY SOURCES ===
('Reddit Machine Learning', 'https://www.reddit.com/r/MachineLearning/.rss', 'rss', true),
('Reddit AI', 'https://www.reddit.com/r/artificial/.rss', 'rss', true),
('Hacker News AI', 'https://hnrss.org/newest?q=AI+OR+%22machine+learning%22+OR+%22artificial+intelligence%22', 'rss', true),

-- === ACADEMIC & RESEARCH SOURCES ===
('arXiv AI Papers', 'http://arxiv.org/rss/cs.AI', 'rss', true),
('arXiv Machine Learning', 'http://arxiv.org/rss/cs.LG', 'rss', true),
('MIT CSAIL News', 'https://www.csail.mit.edu/news/feed', 'rss', true),
('Stanford AI Lab', 'https://ai.stanford.edu/blog/feed.xml', 'rss', true),
('OpenAI Research', 'https://openai.com/research/rss/', 'rss', true),

-- === INTERNATIONAL SOURCES ===
-- Europa
('DeepMind Blog', 'https://deepmind.com/blog/feed/basic/', 'rss', true),
('AI News Europe', 'https://www.unite.ai/feed/', 'rss', true),
('The Algorithm (MIT BR)', 'https://www.technologyreview.com/topic/artificial-intelligence/feed/', 'rss', true),

-- Ásia
('AI Japan News', 'https://www.artificialintelligence-news.com/feed/', 'rss', true),
('China AI Report', 'https://syncedreview.com/feed/', 'rss', true),

-- === BUSINESS & INDUSTRY ===
('AI Business', 'https://aibusiness.com/rss.xml', 'rss', true),
('Analytics Insight', 'https://www.analyticsinsight.net/feed/', 'rss', true),
('AI Time Journal', 'https://www.aitimejournal.com/feed/', 'rss', true),
('Next Big Future AI', 'https://www.nextbigfuture.com/category/artificial-intelligence/feed', 'rss', true),

-- === EDUCATION FOCUSED ===
('EdTech AI', 'https://www.edsurge.com/news.rss', 'rss', true),
('AI in Education Weekly', 'https://www.getting-smart.com/feed/', 'rss', true),
('Teaching with AI', 'https://www.teachthought.com/feed/', 'rss', true),

-- === NEWS AGGREGATORS ===
('AllAI News', 'https://allai.news/feed/', 'rss', true),
('AI Trends', 'https://www.aitrends.com/feed/', 'rss', true),
('The Gradient', 'https://thegradient.pub/rss/', 'rss', true)

ON CONFLICT (url) DO NOTHING;

-- Atualizar a função de detecção de IA para incluir mais termos globais
CREATE OR REPLACE FUNCTION is_ai_related_global(title text, description text)
RETURNS boolean AS $$
BEGIN
  RETURN CASE 
    WHEN LOWER(title || ' ' || COALESCE(description, '')) ~ ANY(ARRAY[
      -- English terms
      'artificial intelligence', 'machine learning', 'deep learning', 'neural network',
      'ai\y', 'ml\y', 'nlp', 'computer vision', 'robotics', 'automation',
      'chatgpt', 'openai', 'anthropic', 'claude', 'gemini', 'bard', 'gpt',
      'llm', 'large language model', 'transformer', 'diffusion',
      'pytorch', 'tensorflow', 'hugging ?face', 'github.*ai',
      
      -- Education specific
      'ai.*education', 'educational.*ai', 'teaching.*ai', 'ai.*classroom',
      'personalized learning', 'adaptive learning', 'intelligent tutoring',
      
      -- Portuguese terms
      'inteligência artificial', 'aprendizado de máquina', 'redes neurais',
      'visão computacional', 'processamento de linguagem natural',
      
      -- Spanish terms
      'inteligencia artificial', 'aprendizaje automático', 'redes neuronales',
      
      -- French terms
      'intelligence artificielle', 'apprentissage automatique',
      
      -- German terms
      'künstliche intelligenz', 'maschinelles lernen',
      
      -- Research terms
      'arxiv', 'paper', 'research', 'breakthrough', 'algorithm',
      'dataset', 'model', 'training', 'inference'
    ]) THEN true
    ELSE false
  END;
END;
$$ LANGUAGE plpgsql;