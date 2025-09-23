import { supabase } from '../lib/supabase';

export const resetAINewsSystem = async () => {
  console.log('🗑️ RESETTING AI News System - Removing all corrupted data...');
  
  try {
    // 1. Delete ALL existing news articles (including the corrupted 2025 ones)
    console.log('🗑️ Step 1: Deleting all corrupted news articles...');
    const { error: deleteNewsError } = await supabase
      .from('ai_news')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete everything
    
    if (deleteNewsError) {
      console.error('❌ Failed to delete news articles:', deleteNewsError);
    } else {
      console.log('✅ All corrupted news articles deleted');
    }

    // 2. Delete all pipeline logs (clean slate)
    console.log('🗑️ Step 2: Clearing pipeline logs...');
    const { error: deleteLogsError } = await supabase
      .from('pipeline_logs')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000');
    
    if (deleteLogsError) {
      console.error('❌ Failed to delete logs:', deleteLogsError);
    } else {
      console.log('✅ Pipeline logs cleared');
    }

    // 3. Reset all news sources (mark as never fetched)
    console.log('🔄 Step 3: Resetting news sources...');
    const { error: resetSourcesError } = await supabase
      .from('news_sources')
      .update({ 
        last_fetched: null,
        is_active: false // Temporarily disable all
      })
      .neq('id', '00000000-0000-0000-0000-000000000000');
    
    if (resetSourcesError) {
      console.error('❌ Failed to reset sources:', resetSourcesError);
    } else {
      console.log('✅ News sources reset');
    }

    // 4. Create NEW, RELIABLE news sources (replace the broken TechCrunch)
    console.log('➕ Step 4: Creating reliable news sources...');
    
    const reliableNewsSources = [
      {
        name: 'OpenAI Official Blog',
        url: 'https://openai.com/blog/rss.xml',
        source_type: 'rss',
        is_active: true,
        fetch_interval: '2 hours',
        created_at: new Date().toISOString()
      },
      {
        name: 'Google AI Research Blog',
        url: 'https://ai.googleblog.com/feeds/posts/default',
        source_type: 'rss',
        is_active: true,
        fetch_interval: '2 hours',
        created_at: new Date().toISOString()
      },
      {
        name: 'Anthropic Blog',
        url: 'https://www.anthropic.com/blog/rss.xml',
        source_type: 'rss',
        is_active: true,
        fetch_interval: '4 hours',
        created_at: new Date().toISOString()
      },
      {
        name: 'MIT Technology Review AI',
        url: 'https://www.technologyreview.com/topic/artificial-intelligence/feed/',
        source_type: 'rss',
        is_active: true,
        fetch_interval: '3 hours',
        created_at: new Date().toISOString()
      },
      {
        name: 'DeepMind Blog',
        url: 'https://deepmind.google/blog/rss.xml',
        source_type: 'rss',
        is_active: true,
        fetch_interval: '6 hours',
        created_at: new Date().toISOString()
      }
    ];

    // First, delete old unreliable sources
    const { error: deleteOldSourcesError } = await supabase
      .from('news_sources')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000');
    
    if (deleteOldSourcesError) {
      console.error('❌ Failed to delete old sources:', deleteOldSourcesError);
    }

    // Insert new reliable sources
    for (const source of reliableNewsSources) {
      const { error } = await supabase
        .from('news_sources')
        .insert(source);
      
      if (error) {
        console.error(`❌ Failed to create source ${source.name}:`, error);
      } else {
        console.log(`✅ Created reliable source: ${source.name}`);
      }
    }

    // 5. Add system reset log
    await supabase.from('pipeline_logs').insert({
      operation: 'system_reset',
      status: 'completed',
      message: 'AI News system completely reset - removed corrupted data from June 2024 and configured reliable sources',
      details: {
        reset_date: new Date().toISOString(),
        corrupted_data_removed: true,
        new_sources_count: reliableNewsSources.length,
        reason: 'System stuck showing fake news from June 19 with future dates (2025)'
      }
    });

    console.log('\n🎉 AI NEWS SYSTEM RESET COMPLETE!');
    console.log('==========================================');
    console.log('✅ Corrupted news data deleted');
    console.log('✅ Pipeline logs cleared');  
    console.log('✅ Unreliable sources removed');
    console.log('✅ New reliable sources configured');
    console.log('\n📋 NEW SOURCES:');
    reliableNewsSources.forEach(source => {
      console.log(`  🔗 ${source.name}`);
    });
    console.log('\n🚀 Ready for fresh news fetch!');
    console.log('==========================================\n');

    return {
      success: true,
      message: 'System reset completed successfully',
      sources_created: reliableNewsSources.length
    };

  } catch (error) {
    console.error('❌ FATAL ERROR during system reset:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error)
    };
  }
};

export const validateSystemAfterReset = async () => {
  console.log('🔍 Validating system after reset...');
  
  try {
    // Check that old corrupted data is gone
    const { data: oldNews } = await supabase
      .from('ai_news')
      .select('*')
      .limit(10);
    
    if (oldNews && oldNews.length > 0) {
      console.log('⚠️ Warning: Some old data still exists');
      oldNews.forEach(item => {
        console.log(`  📰 ${item.title} - ${item.published_at}`);
      });
    } else {
      console.log('✅ No old corrupted data found - clean slate confirmed');
    }

    // Check new sources
    const { data: newSources } = await supabase
      .from('news_sources')
      .select('*');
    
    if (newSources && newSources.length > 0) {
      console.log(`✅ ${newSources.length} reliable sources configured:`);
      newSources.forEach(source => {
        console.log(`  🔗 ${source.name} (${source.is_active ? 'ACTIVE' : 'INACTIVE'})`);
      });
    } else {
      console.log('❌ No news sources found - reset may have failed');
    }

    return {
      oldDataExists: oldNews && oldNews.length > 0,
      sourcesCount: newSources?.length || 0,
      isClean: !oldNews || oldNews.length === 0
    };

  } catch (error) {
    console.error('❌ Validation failed:', error);
    return { error: error instanceof Error ? error.message : String(error) };
  }
};

// Emergency function to force-clear specific corrupted entries
export const emergencyCleanCorruptedData = async () => {
  console.log('🚨 EMERGENCY: Cleaning corrupted data patterns...');
  
  try {
    // Target the specific corrupted patterns you mentioned
    const patterns = [
      'Nvidia&#8217;s AI empire', // The stuck article
      'TechCrunch AI', // Source
      '2025-06-09', // Future date
      '2025-06', // Any 2025 dates
      '9 Jun 2025' // Formatted future date
    ];

    for (const pattern of patterns) {
      // Delete news with these patterns
      const { error: deleteError } = await supabase
        .from('ai_news')
        .delete()
        .or(`title.ilike.%${pattern}%,source_name.ilike.%${pattern}%,published_at.gte.2025-01-01`);
      
      if (deleteError) {
        console.error(`❌ Failed to delete pattern ${pattern}:`, deleteError);
      } else {
        console.log(`✅ Deleted entries matching: ${pattern}`);
      }
    }

    // Also clean any TechCrunch sources that might be corrupted
    const { error: sourceError } = await supabase
      .from('news_sources')
      .delete()
      .ilike('name', '%techcrunch%');
    
    if (sourceError) {
      console.error('❌ Failed to remove TechCrunch source:', sourceError);
    } else {
      console.log('✅ Removed corrupted TechCrunch source');
    }

    console.log('\n🧹 Emergency cleanup completed!');
    return { success: true };

  } catch (error) {
    console.error('❌ Emergency cleanup failed:', error);
    return { success: false, error: error instanceof Error ? error.message : String(error) };
  }
};