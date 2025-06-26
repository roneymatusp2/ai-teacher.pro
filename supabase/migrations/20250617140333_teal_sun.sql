/*
  # Add Influential X Accounts as News Sources

  1. New Records
    - Add top 10 individual AI influencers on X
    - Add organizational accounts (OpenAI, DeepMind, Google AI, Meta AI)
    - Add additional influential accounts
    - Add international AI conference and event sources

  2. Source Types
    - RSS feeds where available
    - API-based sources for X accounts (when API access available)
    - Web scraping as fallback

  3. Features
    - Categorized by influence level
    - Educational focus priority
    - International coverage
*/

-- Insert Top 10 Individual AI Influencers
INSERT INTO news_sources (name, url, source_type, is_active, fetch_interval) VALUES
  ('Lex Fridman (@lexfridman)', 'https://nitter.net/lexfridman/rss', 'rss', true, '02:00:00'),
  ('Andrew Ng (@AndrewYNg)', 'https://nitter.net/AndrewYNg/rss', 'rss', true, '02:00:00'),
  ('Sam Altman (@sama)', 'https://nitter.net/sama/rss', 'rss', true, '01:00:00'),
  ('Yann LeCun (@ylecun)', 'https://nitter.net/ylecun/rss', 'rss', true, '02:00:00'),
  ('Andrej Karpathy (@karpathy)', 'https://nitter.net/karpathy/rss', 'rss', true, '02:00:00'),
  ('Fei-Fei Li (@drfeifei)', 'https://nitter.net/drfeifei/rss', 'rss', true, '03:00:00'),
  ('Demis Hassabis (@demishassabis)', 'https://nitter.net/demishassabis/rss', 'rss', true, '03:00:00'),
  ('Allie K. Miller (@alliekmiller)', 'https://nitter.net/alliekmiller/rss', 'rss', true, '02:00:00'),
  ('Geoffrey Hinton (@geoffreyhinton)', 'https://nitter.net/geoffreyhinton/rss', 'rss', true, '03:00:00'),
  ('Marc Andreessen (@pmarca)', 'https://nitter.net/pmarca/rss', 'rss', true, '02:00:00')
ON CONFLICT (url) DO NOTHING;

-- Insert Organizational Accounts
INSERT INTO news_sources (name, url, source_type, is_active, fetch_interval) VALUES
  ('OpenAI (@OpenAI)', 'https://nitter.net/OpenAI/rss', 'rss', true, '01:00:00'),
  ('DeepMind (@DeepMind)', 'https://nitter.net/DeepMind/rss', 'rss', true, '01:00:00'),
  ('Google AI (@GoogleAI)', 'https://nitter.net/GoogleAI/rss', 'rss', true, '01:00:00'),
  ('Meta AI (@MetaAI)', 'https://nitter.net/MetaAI/rss', 'rss', true, '01:00:00')
ON CONFLICT (url) DO NOTHING;

-- Insert Additional Influential Accounts
INSERT INTO news_sources (name, url, source_type, is_active, fetch_interval) VALUES
  ('Manus AI (@ManusAI_HQ)', 'https://nitter.net/ManusAI_HQ/rss', 'rss', true, '03:00:00'),
  ('MiniMax AI (@MiniMax__AI)', 'https://nitter.net/MiniMax__AI/rss', 'rss', true, '03:00:00'),
  ('Tibor Blaho (@btibor91)', 'https://nitter.net/btibor91/rss', 'rss', true, '04:00:00'),
  ('Kent C. Dodds (@kentcdodds)', 'https://nitter.net/kentcdodds/rss', 'rss', true, '04:00:00')
ON CONFLICT (url) DO NOTHING;

-- Insert International AI Conference and Event Sources
INSERT INTO news_sources (name, url, source_type, is_active, fetch_interval) VALUES
  ('NeurIPS Conference', 'https://nips.cc/feed.xml', 'rss', true, '12:00:00'),
  ('ICML Conference', 'https://icml.cc/feed.xml', 'rss', true, '12:00:00'),
  ('AAAI Conference', 'https://aaai.org/feed/', 'rss', true, '12:00:00'),
  ('AIED - AI in Education', 'https://iaied.org/feed/', 'rss', true, '06:00:00'),
  ('IEEE AI News', 'https://www.computer.org/csdl/feeds/proceedings', 'rss', true, '06:00:00'),
  ('ACM Digital Library AI', 'https://dl.acm.org/feed.rss', 'rss', true, '08:00:00'),
  ('UNESCO AI Ethics', 'https://en.unesco.org/artificial-intelligence/feed', 'rss', true, '24:00:00'),
  ('OECD AI Policy', 'https://www.oecd.org/digital/artificial-intelligence/feed/', 'rss', true, '24:00:00'),
  ('Partnership on AI', 'https://www.partnershiponai.org/feed/', 'rss', true, '12:00:00'),
  ('Future of Humanity Institute', 'https://www.fhi.ox.ac.uk/feed/', 'rss', true, '24:00:00')
ON CONFLICT (url) DO NOTHING;

-- Insert Educational Technology Sources
INSERT INTO news_sources (name, url, source_type, is_active, fetch_interval) VALUES
  ('EdTechHub AI Research', 'https://edtechhub.org/feed/', 'rss', true, '08:00:00'),
  ('MIT Technology Review AI', 'https://www.technologyreview.com/feed/', 'rss', true, '04:00:00'),
  ('AI4Education Initiative', 'https://ai4education.org/feed/', 'rss', true, '12:00:00'),
  ('Learning Analytics Community', 'https://www.solaresearch.org/feed/', 'rss', true, '12:00:00'),
  ('International Society for Educational Technology', 'https://www.iste.org/feed', 'rss', true, '08:00:00')
ON CONFLICT (url) DO NOTHING;

-- Log the migration
INSERT INTO migration_metadata (migration_name, description, source_table, target_table, status) VALUES
  ('add_influential_x_accounts', 'Added influential X accounts and international AI event sources for enhanced news coverage', 'manual_sources', 'news_sources', 'completed');