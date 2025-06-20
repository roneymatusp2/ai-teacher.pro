-- =====================================================
-- COMPREHENSIVE AI NEWS SOURCES EXPANSION
-- Date: 2025-06-20
-- Description: Massive expansion of AI news sources including top influencers,
--              organizations, academic institutions, and specialized feeds
-- =====================================================

-- Add comprehensive AI news sources with professional curation
INSERT INTO news_sources (name, url, source_type, is_active, fetch_interval) VALUES

-- =====================================================
-- TOP AI INFLUENCERS ON X/TWITTER (via Nitter RSS)
-- =====================================================

-- Tier 1: Global AI Leaders & Pioneers
('Lex Fridman - AI Researcher & Podcaster', 'https://nitter.net/lexfridman/rss', 'rss', true, '30 minutes'),
('Andrew Ng - Coursera Co-founder', 'https://nitter.net/AndrewYNg/rss', 'rss', true, '30 minutes'),
('Sam Altman - OpenAI CEO', 'https://nitter.net/sama/rss', 'rss', true, '15 minutes'),
('Yann LeCun - Meta Chief AI Scientist', 'https://nitter.net/ylecun/rss', 'rss', true, '30 minutes'),
('Andrej Karpathy - AI Research Scientist', 'https://nitter.net/karpathy/rss', 'rss', true, '30 minutes'),
('Fei-Fei Li - Stanford AI Lab', 'https://nitter.net/drfeifei/rss', 'rss', true, '1 hour'),
('Demis Hassabis - DeepMind CEO', 'https://nitter.net/demishassabis/rss', 'rss', true, '30 minutes'),
('Geoffrey Hinton - Deep Learning Pioneer', 'https://nitter.net/geoffreyhinton/rss', 'rss', true, '1 hour'),
('Allie K. Miller - AI Business Leader', 'https://nitter.net/alliekmiller/rss', 'rss', true, '30 minutes'),
('Marc Andreessen - a16z Venture Capitalist', 'https://nitter.net/pmarca/rss', 'rss', true, '1 hour'),

-- Tier 2: Prominent AI Researchers & Thought Leaders
('Timnit Gebru - AI Ethics Researcher', 'https://nitter.net/timnitGebru/rss', 'rss', true, '1 hour'),
('Sebastian Thrun - Udacity Founder', 'https://nitter.net/SebastianThrun/rss', 'rss', true, '1 hour'),
('Kai-Fu Lee - Sinovation Ventures', 'https://nitter.net/kaifulee/rss', 'rss', true, '1 hour'),
('Ian Goodfellow - GAN Inventor', 'https://nitter.net/goodfellow_ian/rss', 'rss', true, '1 hour'),
('Yoshua Bengio - Mila Quebec AI', 'https://nitter.net/yoshuabengio/rss', 'rss', true, '1 hour'),
('Stuart Russell - UC Berkeley', 'https://nitter.net/stuartjrussell/rss', 'rss', true, '2 hours'),
('Pedro Domingos - ML Expert', 'https://nitter.net/pmddomingos/rss', 'rss', true, '2 hours'),
('Dario Amodei - Anthropic CEO', 'https://nitter.net/darioamodei/rss', 'rss', true, '30 minutes'),
('Daniela Amodei - Anthropic President', 'https://nitter.net/danielaamodei/rss', 'rss', true, '1 hour'),
('Tibor Blaho - AI Researcher (@btibor91)', 'https://nitter.net/btibor91/rss', 'rss', true, '1 hour'),

-- Tier 3: AI Industry Leaders & Executives
('Sundar Pichai - Google CEO', 'https://nitter.net/sundarpichai/rss', 'rss', true, '2 hours'),
('Satya Nadella - Microsoft CEO', 'https://nitter.net/satyanadella/rss', 'rss', true, '2 hours'),
('Elon Musk - xAI Founder', 'https://nitter.net/elonmusk/rss', 'rss', true, '1 hour'),
('Reid Hoffman - LinkedIn Co-founder', 'https://nitter.net/reidhoffman/rss', 'rss', true, '2 hours'),
('Eric Schmidt - Former Google CEO', 'https://nitter.net/ericschmidt/rss', 'rss', true, '2 hours'),
('Jeff Dean - Google Senior Fellow', 'https://nitter.net/jeffdean/rss', 'rss', true, '1 hour'),
('Ilya Sutskever - Safe Superintelligence', 'https://nitter.net/ilyasut/rss', 'rss', true, '30 minutes'),
('Greg Brockman - OpenAI Co-founder', 'https://nitter.net/gdb/rss', 'rss', true, '1 hour'),

-- Tier 4: AI Ethics & Policy Experts
('Cathy O''Neil - Algorithms of Oppression', 'https://nitter.net/mathbabedotorg/rss', 'rss', true, '2 hours'),
('Joy Buolamwini - Algorithmic Justice League', 'https://nitter.net/jovialjoy/rss', 'rss', true, '2 hours'),
('Safiya Noble - UCLA', 'https://nitter.net/safiyanoble/rss', 'rss', true, '2 hours'),
('Zeynep Tufekci - UNC Chapel Hill', 'https://nitter.net/zeynep/rss', 'rss', true, '2 hours'),
('Shoshana Zuboff - Harvard Business School', 'https://nitter.net/shoshanazuboff/rss', 'rss', true, '4 hours'),
('Ruha Benjamin - Princeton University', 'https://nitter.net/ruha9/rss', 'rss', true, '4 hours'),

-- =====================================================
-- MAJOR AI ORGANIZATIONS & COMPANIES
-- =====================================================

-- Primary AI Research Labs
('OpenAI Official', 'https://nitter.net/OpenAI/rss', 'rss', true, '15 minutes'),
('DeepMind Official', 'https://nitter.net/DeepMind/rss', 'rss', true, '15 minutes'),
('Google AI', 'https://nitter.net/GoogleAI/rss', 'rss', true, '15 minutes'),
('Meta AI (FAIR)', 'https://nitter.net/MetaAI/rss', 'rss', true, '15 minutes'),
('Anthropic', 'https://nitter.net/AnthropicAI/rss', 'rss', true, '15 minutes'),
('Microsoft AI', 'https://nitter.net/MSFTResearch/rss', 'rss', true, '30 minutes'),
('NVIDIA AI', 'https://nitter.net/nvidia/rss', 'rss', true, '30 minutes'),
('Hugging Face', 'https://nitter.net/huggingface/rss', 'rss', true, '30 minutes'),
('Stability AI', 'https://nitter.net/StabilityAI/rss', 'rss', true, '30 minutes'),
('Mistral AI', 'https://nitter.net/MistralAI/rss', 'rss', true, '30 minutes'),

-- Emerging AI Companies
('Cohere AI', 'https://nitter.net/CohereAI/rss', 'rss', true, '1 hour'),
('Adept AI', 'https://nitter.net/adeptAI/rss', 'rss', true, '1 hour'),
('Character.AI', 'https://nitter.net/character_ai/rss', 'rss', true, '1 hour'),
('Runway ML', 'https://nitter.net/runwayml/rss', 'rss', true, '1 hour'),
('Perplexity AI', 'https://nitter.net/perplexity_ai/rss', 'rss', true, '1 hour'),
('Together AI', 'https://nitter.net/togethercompute/rss', 'rss', true, '1 hour'),

-- =====================================================
-- ACADEMIC INSTITUTIONS & RESEARCH CENTERS
-- =====================================================

-- Top US Universities
('MIT CSAIL', 'https://www.csail.mit.edu/rss.xml', 'rss', true, '2 hours'),
('Stanford HAI', 'https://hai.stanford.edu/news/rss.xml', 'rss', true, '2 hours'),
('Carnegie Mellon AI', 'https://www.ml.cmu.edu/news/rss.xml', 'rss', true, '2 hours'),
('UC Berkeley AI Research', 'https://bair.berkeley.edu/blog/feed.xml', 'rss', true, '2 hours'),
('Harvard SEAS AI', 'https://www.seas.harvard.edu/news/rss.xml', 'rss', true, '4 hours'),

-- International Academic Centers
('University of Toronto Vector Institute', 'https://vectorinstitute.ai/feed/', 'rss', true, '4 hours'),
('Oxford Future of Humanity Institute', 'https://www.fhi.ox.ac.uk/feed/', 'rss', true, '4 hours'),
('Cambridge Leverhulme CFI', 'http://lcfi.ac.uk/feed/', 'rss', true, '4 hours'),
('Montreal Institute for Learning Algorithms (Mila)', 'https://mila.quebec/en/feed/', 'rss', true, '4 hours'),
('Max Planck Institute for Intelligent Systems', 'https://is.mpg.de/news/rss', 'rss', true, '4 hours'),

-- =====================================================
-- ACADEMIC CONFERENCES & JOURNALS
-- =====================================================

-- Major ML/AI Conferences
('NeurIPS Conference', 'https://neurips.cc/Conferences/2024/CallForPapers/rss', 'rss', true, '1 week'),
('ICML Conference', 'https://icml.cc/News/rss', 'rss', true, '1 week'),
('ICLR Conference', 'https://iclr.cc/rss.xml', 'rss', true, '1 week'),
('AAAI Conference', 'https://aaai.org/news/rss.xml', 'rss', true, '1 week'),
('IJCAI Conference', 'https://ijcai.org/news/rss.xml', 'rss', true, '1 week'),

-- AI Research Papers
('arXiv AI Papers (cs.AI)', 'http://export.arxiv.org/rss/cs.AI', 'rss', true, '6 hours'),
('arXiv Machine Learning (cs.LG)', 'http://export.arxiv.org/rss/cs.LG', 'rss', true, '6 hours'),
('arXiv Computer Vision (cs.CV)', 'http://export.arxiv.org/rss/cs.CV', 'rss', true, '6 hours'),
('arXiv Computation and Language (cs.CL)', 'http://export.arxiv.org/rss/cs.CL', 'rss', true, '6 hours'),

-- =====================================================
-- SPECIALIZED AI MEDIA & PUBLICATIONS
-- =====================================================

-- AI-Focused Publications
('AI News', 'https://www.artificialintelligence-news.com/feed/', 'rss', true, '1 hour'),
('The Gradient', 'https://thegradient.pub/rss/', 'rss', true, '2 hours'),
('Towards Data Science', 'https://towardsdatascience.com/feed', 'rss', true, '1 hour'),
('AI Research', 'https://ai.googleblog.com/feeds/posts/default', 'rss', true, '2 hours'),
('Distill.pub', 'https://distill.pub/rss.xml', 'rss', true, '1 week'),
('AI Alignment Forum', 'https://www.alignmentforum.org/feed.xml', 'rss', true, '4 hours'),

-- Technology Publications
('MIT Technology Review AI', 'https://www.technologyreview.com/feed/', 'rss', true, '1 hour'),
('Wired AI', 'https://www.wired.com/feed/category/ai/rss', 'rss', true, '1 hour'),
('The Verge AI', 'https://www.theverge.com/ai/rss', 'rss', true, '1 hour'),
('TechCrunch AI', 'https://techcrunch.com/category/artificial-intelligence/feed/', 'rss', true, '30 minutes'),
('VentureBeat AI', 'https://venturebeat.com/ai/feed/', 'rss', true, '1 hour'),
('Ars Technica AI', 'https://arstechnica.com/tag/artificial-intelligence/feed/', 'rss', true, '2 hours'),

-- =====================================================
-- AI IN EDUCATION SOURCES
-- =====================================================

-- Educational Technology
('EdTech Hub AI', 'https://www.edtechhub.org/feed/', 'rss', true, '2 hours'),
('UNESCO AI and Education', 'https://www.unesco.org/en/digital-education/artificial-intelligence/rss', 'rss', true, '1 day'),
('EDUCAUSE AI', 'https://www.educause.edu/feed', 'rss', true, '4 hours'),
('Learning Analytics Community', 'https://www.solaresearch.org/feed/', 'rss', true, '4 hours'),
('International Society for Educational Technology', 'https://www.iste.org/feed', 'rss', true, '4 hours'),

-- AI for Teachers & Education
('AI4ALL Education', 'https://ai-4-all.org/feed/', 'rss', true, '1 day'),
('TeachAI Initiative', 'https://teachai.org/feed/', 'rss', true, '1 day'),
('AI Education Project', 'https://www.aieducationproject.org/feed', 'rss', true, '1 day'),

-- =====================================================
-- DEVELOPMENT & TECHNICAL SOURCES
-- =====================================================

-- AI Development Platforms
('GitHub AI Trends', 'https://github.com/trending/machine-learning.atom', 'rss', true, '2 hours'),
('PyTorch', 'https://pytorch.org/blog/rss.xml', 'rss', true, '1 day'),
('TensorFlow Blog', 'https://blog.tensorflow.org/feeds/posts/default', 'rss', true, '1 day'),
('Papers With Code', 'https://paperswithcode.com/feed.xml', 'rss', true, '4 hours'),
('Machine Learning Mastery', 'https://machinelearningmastery.com/feed/', 'rss', true, '2 hours'),

-- Developer Communities
('Reddit r/MachineLearning', 'https://www.reddit.com/r/MachineLearning/.rss', 'rss', true, '2 hours'),
('Reddit r/artificial', 'https://www.reddit.com/r/artificial/.rss', 'rss', true, '2 hours'),
('Hacker News AI', 'https://hnrss.org/show?q=AI%20OR%20artificial%20intelligence', 'rss', true, '1 hour'),

-- =====================================================
-- INTERNATIONAL & POLICY SOURCES
-- =====================================================

-- Government & Policy
('US NIST AI', 'https://www.nist.gov/artificial-intelligence/rss.xml', 'rss', true, '1 day'),
('EU AI Strategy', 'https://digital-strategy.ec.europa.eu/en/policies/artificial-intelligence/rss_en', 'rss', true, '1 day'),
('UK AI Council', 'https://www.gov.uk/government/organisations/ai-council.atom', 'rss', true, '1 day'),
('OECD AI Policy Observatory', 'https://oecd.ai/en/rss.xml', 'rss', true, '1 day'),

-- International Organizations
('World Economic Forum AI', 'https://www.weforum.org/agenda/feed/artificial-intelligence/', 'rss', true, '4 hours'),
('Partnership on AI', 'https://www.partnershiponai.org/feed/', 'rss', true, '1 day'),
('AI Now Institute', 'https://ainowinstitute.org/feed.xml', 'rss', true, '1 day'),

-- =====================================================
-- BUSINESS & INVESTMENT SOURCES
-- =====================================================

-- AI Investment & Business
('CB Insights AI', 'https://www.cbinsights.com/research/rss/', 'rss', true, '4 hours'),
('PitchBook AI', 'https://pitchbook.com/news/rss?t=ai', 'rss', true, '4 hours'),
('AI Business', 'https://aibusiness.com/feed', 'rss', true, '2 hours'),
('The Information AI', 'https://www.theinformation.com/articles/ai?rss=1', 'rss', true, '2 hours'),

-- Venture Capital & Startups
('Andreessen Horowitz AI', 'https://a16z.com/tag/ai/feed/', 'rss', true, '4 hours'),
('Sequoia Capital AI', 'https://www.sequoiacap.com/companies/?tags=artificial-intelligence&format=rss', 'rss', true, '4 hours'),
('GV (Google Ventures) AI Portfolio', 'https://www.gv.com/portfolio/?focus=ai&format=rss', 'rss', true, '4 hours'),

-- =====================================================
-- INDUSTRY-SPECIFIC AI APPLICATIONS
-- =====================================================

-- AI in Healthcare
('AI in Healthcare', 'https://www.mobihealthnews.com/tag/artificial-intelligence/rss.xml', 'rss', true, '4 hours'),
('Nature Medicine AI', 'https://www.nature.com/nm.rss', 'rss', true, '1 day'),

-- AI in Finance
('AI in Finance News', 'https://www.ai-finance.org/feed/', 'rss', true, '4 hours'),
('FinTech AI', 'https://www.fintechfutures.com/tag/artificial-intelligence/feed/', 'rss', true, '4 hours'),

-- AI in Manufacturing & Robotics
('AI & Robotics News', 'https://www.therobotreport.com/feed/', 'rss', true, '4 hours'),
('IEEE Robotics & AI', 'https://spectrum.ieee.org/robotics/rss', 'rss', true, '4 hours');

-- =====================================================
-- UPDATE METADATA & OPTIMIZATION
-- =====================================================

-- Update fetch intervals for better performance
UPDATE news_sources 
SET fetch_interval = '15 minutes' 
WHERE name LIKE '%OpenAI%' OR name LIKE '%Sam Altman%' OR name LIKE '%DeepMind%';

UPDATE news_sources 
SET fetch_interval = '30 minutes' 
WHERE name LIKE '%@%' AND source_type = 'rss' AND fetch_interval > '30 minutes';

-- Add indexing for better performance
CREATE INDEX IF NOT EXISTS idx_news_sources_active_interval 
ON news_sources(is_active, fetch_interval) 
WHERE is_active = true;

-- Add trigger to automatically validate new sources
CREATE OR REPLACE FUNCTION validate_new_source()
RETURNS TRIGGER AS $$
BEGIN
    -- Log when new sources are added
    INSERT INTO pipeline_logs (operation, status, message, details)
    VALUES (
        'source_validation',
        'pending',
        'New source added: ' || NEW.name,
        jsonb_build_object(
            'source_id', NEW.id,
            'source_name', NEW.name,
            'source_url', NEW.url,
            'source_type', NEW.source_type
        )
    );
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_validate_new_source
    AFTER INSERT ON news_sources
    FOR EACH ROW
    EXECUTE FUNCTION validate_new_source();

-- =====================================================
-- SUMMARY & STATISTICS
-- =====================================================

-- View to check source distribution
CREATE OR REPLACE VIEW source_statistics AS
SELECT 
    source_type,
    COUNT(*) as total_sources,
    COUNT(CASE WHEN is_active THEN 1 END) as active_sources,
    AVG(EXTRACT(EPOCH FROM fetch_interval)/60) as avg_fetch_minutes
FROM news_sources 
GROUP BY source_type;

-- Final count
SELECT 
    'Total sources added in this migration: ' || COUNT(*) as summary
FROM news_sources 
WHERE created_at >= NOW() - INTERVAL '1 minute';