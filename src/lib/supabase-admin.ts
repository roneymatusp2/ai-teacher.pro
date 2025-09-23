import { createClient } from '@supabase/supabase-js';
import type { NewsSource } from './supabase';

// Admin client for operations that require bypassing RLS
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

let supabaseAdmin: ReturnType<typeof createClient> | null = null;

// Only create admin client if service role key is available
if (supabaseServiceKey) {
  supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
} else {
  console.warn('⚠️ SUPABASE_SERVICE_ROLE_KEY not found. Admin operations will be limited.');
}

export { supabaseAdmin };

// Helper function to check if admin client is available
export const isAdminAvailable = (): boolean => {
  return supabaseAdmin !== null;
};

// Admin-only functions for bypassing RLS
export const adminInsertNews = async (newsData: any) => {
  if (!supabaseAdmin) {
    throw new Error('Admin client not initialized. Please add SUPABASE_SERVICE_ROLE_KEY to .env');
  }
  
  const { data, error } = await supabaseAdmin
    .from('ai_news')
    .insert(newsData);
    
  if (error) throw error;
  return data;
};

export const adminInsertNewsSource = async (sourceData: any) => {
  if (!supabaseAdmin) {
    throw new Error('Admin client not initialized. Please add SUPABASE_SERVICE_ROLE_KEY to .env');
  }
  
  const { data, error } = await supabaseAdmin
    .from('news_sources')
    .insert(sourceData);
    
  if (error) throw error;
  return data;
};

export const adminUpdateNewsSource = async (id: string, updates: Record<string, any>) => {
  if (!supabaseAdmin) {
    throw new Error('Admin client not initialized. Please add SUPABASE_SERVICE_ROLE_KEY to .env');
  }
  
  const { data, error } = await supabaseAdmin
    .from('news_sources')
    .update(updates as any)
    .eq('id', id);
    
  if (error) throw error;
  return data;
};

export const adminDeleteCorruptedNews = async () => {
  if (!supabaseAdmin) {
    throw new Error('Admin client not initialized. Please add SUPABASE_SERVICE_ROLE_KEY to .env');
  }
  
  // Delete corrupted entries (future dates, malformed data, etc.)
  const { data, error } = await supabaseAdmin
    .from('ai_news')
    .delete()
    .gte('published_at', '2025-01-01');
    
  if (error) throw error;
  return data;
};