import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Resource {
  id: string;
  category: 'ai_tool' | 'course' | 'certification' | 'book' | 'site' | 'youtube';
  title: string;
  description?: string;
  url?: string;
  tags: string[];
  cover_url?: string;
  provider_meta?: {
    type?: string;
    eligibility?: string;
    geo_scope?: string;
    pricing?: string;
    key_features?: string;
    ai_relevance?: string;
    future_potential?: string;
  };
  created_at: string;
  updated_at: string;
}

export interface AINewsItem {
  id: string;
  title: string;
  slug: string;
  original_content?: string;
  summary_md?: string;
  tags: string[];
  source_url: string;
  source_name?: string;
  author?: string;
  published_at: string;
  processed_at?: string;
  status: 'pending' | 'processing' | 'published' | 'failed';
  featured: boolean;
  view_count: number;
  created_at: string;
  updated_at: string;
}

export interface NewsSource {
  id: string;
  name: string;
  url: string;
  source_type: 'rss' | 'api' | 'web_scraping';
  api_key?: string;
  is_active: boolean;
  last_fetched?: string;
  fetch_interval: string;
  created_at: string;
}

export interface PipelineLog {
  id: string;
  operation: string;
  status: string;
  message?: string;
  details?: any;
  execution_time_ms?: number;
  created_at: string;
}

// Fetch AI News
export const fetchAINews = async (category?: string, limit = 20) => {
  let query = supabase
    .from('ai_news')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(limit);

  if (category && category !== 'all') {
    query = query.contains('tags', [category]);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data as AINewsItem[];
};

// Fetch Featured News
export const fetchFeaturedNews = async () => {
  const { data, error } = await supabase
    .from('ai_news')
    .select('*')
    .eq('status', 'published')
    .eq('featured', true)
    .order('published_at', { ascending: false })
    .limit(1)
    .single();

  if (error && error.code !== 'PGRST116') throw error; // PGRST116 = no rows returned
  return data as AINewsItem | null;
};

// Increment article view count
export const incrementViewCount = async (articleId: string) => {
  const { error } = await supabase.rpc('increment_view_count', {
    article_id: articleId
  });
  
  if (error) console.error('Error incrementing view count:', error);
};

// Trigger manual news fetch
export const triggerNewsFetch = async () => {
  const { data, error } = await supabase.functions.invoke('fetch-ai-news', {
    body: { trigger: 'manual' }
  });
  
  if (error) throw error;
  return data;
};

// Trigger manual summary processing
export const triggerSummaryProcessing = async () => {
  const { data, error } = await supabase.functions.invoke('process-ai-summaries', {
    body: { trigger: 'manual' }
  });
  
  if (error) throw error;
  return data;
};

// Fetch pipeline logs
export const fetchPipelineLogs = async (operation?: string, limit = 50) => {
  let query = supabase
    .from('pipeline_logs')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (operation) {
    query = query.eq('operation', operation);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data as PipelineLog[];
};

// News Sources Management
export const fetchNewsSources = async () => {
  const { data, error } = await supabase
    .from('news_sources')
    .select('*')
    .order('name');

  if (error) throw error;
  return data as NewsSource[];
};

export const updateNewsSource = async (id: string, updates: Partial<NewsSource>) => {
  const { data, error } = await supabase
    .from('news_sources')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as NewsSource;
};

// Curated AI Resources for Teachers: Courses and Tools
// All links verified as functional on 13 June 2025
export const curatedResources: Resource[] = [
  // === AI LEARNING PLATFORMS & TOOLS ===
  {
    id: 'microsoft-educator-center',
    category: 'ai_tool',
    title: 'Microsoft Learn Educator Centre',
    description: 'The Microsoft Learn Educator Centre provides free learning pathways on AI fundamentals, including Azure AI and integration into educational curricula.',
    url: 'https://learn.microsoft.com/training/educator-center',
    tags: ['AI', 'Microsoft', 'Azure', 'curriculum', 'fundamentals', 'education', 'global', 'free'],
    cover_url: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Learning platform',
      eligibility: 'Educators aiming to teach AI or integrate it into technical subjects',
      geo_scope: 'Global',
      pricing: 'Free',
      key_features: 'Structured courses on AI concepts, machine learning, and AI ethics',
      ai_relevance: 'Offers structured courses on AI concepts, machine learning, and AI ethics',
      future_potential: 'Equips teachers with skills to develop AI-driven lessons and use cloud-based AI tools in classrooms'
    },
    created_at: '2024-06-13T10:00:00Z',
    updated_at: '2024-06-13T10:00:00Z'
  },
  {
    id: 'aws-educate',
    category: 'ai_tool',
    title: 'AWS Educate',
    description: 'AWS Educate offers cloud computing and AI training, including machine learning courses and career pathways, free for students and educators.',
    url: 'https://aws.amazon.com/education/awseducate',
    tags: ['AI', 'AWS', 'cloud', 'machine-learning', 'career-pathways', 'education', 'global', 'free'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Cloud and AI training platform',
      eligibility: 'Students and educators',
      geo_scope: 'Global',
      pricing: 'Free',
      key_features: 'Machine learning courses, AI services, cloud-based AI applications',
      ai_relevance: 'Includes courses on machine learning, AI services, and cloud-based AI applications',
      future_potential: 'Prepares teachers to incorporate cloud-based AI solutions, such as AWS SageMaker, into future educational projects'
    },
    created_at: '2024-06-13T09:00:00Z',
    updated_at: '2024-06-13T09:00:00Z'
  },
  {
    id: 'nvidia-deep-learning',
    category: 'ai_tool',
    title: 'NVIDIA Deep Learning Institute',
    description: 'NVIDIA\'s learning platform offers courses on AI, deep learning, and GPU computing, aimed at students and professionals.',
    url: 'https://learn.nvidia.com',
    tags: ['AI', 'deep-learning', 'GPU', 'neural-networks', 'advanced', 'education', 'global', 'free'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'AI and deep learning platform',
      eligibility: 'Educators teaching advanced computer science or AI in higher education',
      geo_scope: 'Global',
      pricing: 'Free courses available',
      key_features: 'Advanced AI topics like neural networks and AI hardware',
      ai_relevance: 'Focuses on advanced AI topics like neural networks and AI hardware',
      future_potential: 'Enables teachers to train students in AI development using cutting-edge GPU technologies'
    },
    created_at: '2024-06-13T08:00:00Z',
    updated_at: '2024-06-13T08:00:00Z'
  },
  {
    id: 'teachable-machine',
    category: 'ai_tool',
    title: 'Teachable Machine by Google',
    description: 'A web-based tool that makes creating machine learning models fast, easy, and accessible to everyone.',
    url: 'https://teachablemachine.withgoogle.com/',
    tags: ['Machine Learning', 'Google', 'Web-based', 'Beginner-friendly', 'Visual'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      pricing: 'Free'
    },
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-01-15T10:30:00Z'
  }
];

// Mock resources for demonstration (combined with curated resources)
export const mockResources: Resource[] = curatedResources;

// Newsletter subscription function
export const subscribeToNewsletter = async (email: string) => {
  // For now, we'll simulate the subscription
  // In a real app, this would call your Supabase function or API
  console.log('Newsletter subscription for:', email);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate success
  return { success: true };
};

// QR Code and Short Link functions
export const generateQRCodeUrl = (resourceId: string): string => {
  const baseUrl = window.location.origin;
  const resourceUrl = `${baseUrl}/resources/${resourceId}`;
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(resourceUrl)}`;
};

export const getShortLink = (resourceId: string): string => {
  const baseUrl = window.location.origin;
  return `${baseUrl}/r/${resourceId}`;
};