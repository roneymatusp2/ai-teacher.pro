import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import AnimatedText from './AnimatedText';

interface AINewsItem {
  id: string;
  title: string;
  slug: string;
  summary_md: string;
  source_name: string;
  source_url: string;
  published_at: string;
  tags: string[];
  featured: boolean;
  view_count: number;
}

const AINewsSection: React.FC = () => {
  const [newsItems, setNewsItems] = useState<AINewsItem[]>([]);
  const [featuredItem, setFeaturedItem] = useState<AINewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    fetchAINews();
  }, [selectedCategory]);

  const fetchAINews = async () => {
    try {
      let query = supabase
        .from('ai_news')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false })
        .limit(20);

      if (selectedCategory !== 'all') {
        query = query.contains('tags', [selectedCategory]);
      }

      const { data, error } = await query;

      if (error) throw error;

      if (data) {
        const featured = data.find(item => item.featured) || data[0];
        const regular = data.filter(item => !item.featured || item.id !== featured?.id);
        
        setFeaturedItem(featured || null);
        setNewsItems(regular);
      }
    } catch (error) {
      console.error('Error fetching AI news:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleArticleClick = async (article: AINewsItem) => {
    // Increment view count
    await supabase
      .from('ai_news')
      .update({ view_count: article.view_count + 1 })
      .eq('id', article.id);

    // Open article in new tab
    window.open(article.source_url, '_blank');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const categories = ['all', 'machine-learning', 'education', 'chatgpt', 'research', 'automation'];

  if (loading) {
    return (
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse mx-auto max-w-md mb-4"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mx-auto max-w-2xl"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass-card p-6 animate-pulse">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
                <div className="h-6 bg-gray-400 dark:bg-gray-600 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
                <div className="h-20 bg-gray-200 dark:bg-gray-800 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedText
            text="Latest AI News for Educators"
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            variant="morphing"
          />
          <AnimatedText
            text="Stay updated with the latest developments in artificial intelligence and their implications for education"
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variant="fadeInUp"
            delay={0.3}
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'all' ? 'All News' : category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </motion.button>
          ))}
        </div>

        {/* Featured Article */}
        {featuredItem && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="glass-card p-8 cursor-pointer group" onClick={() => handleArticleClick(featuredItem)}>
              <div className="flex items-start justify-between mb-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r from-red-500 to-pink-500">
                  ⭐ Featured
                </span>
                <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                  <div>{formatDate(featuredItem.published_at)}</div>
                  <div className="text-xs">{featuredItem.source_name}</div>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                {featuredItem.title}
              </h2>
              
              <div 
                className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 mb-6"
                dangerouslySetInnerHTML={{ __html: featuredItem.summary_md }}
              />
              
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredItem.tags.slice(0, 5).map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  👁️ {featuredItem.view_count} views
                </span>
                <motion.span 
                  className="text-green-600 dark:text-green-400 font-medium group-hover:translate-x-2 transition-transform"
                  whileHover={{ x: 5 }}
                >
                  Read full article →
                </motion.span>
              </div>
            </div>
          </motion.div>
        )}

        {/* News Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {newsItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 cursor-pointer group hover:shadow-xl transition-all duration-300"
                onClick={() => handleArticleClick(item)}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {formatDate(item.published_at)}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {item.source_name}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>
                
                <div 
                  className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: item.summary_md }}
                />
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 rounded">
                      +{item.tags.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    👁️ {item.view_count}
                  </span>
                  <motion.span 
                    className="text-green-600 dark:text-green-400 font-medium"
                    whileHover={{ x: 3 }}
                  >
                    Read more →
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {newsItems.length === 0 && !featuredItem && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">📰</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No news found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              No articles found for the selected category. Try a different filter or check back later.
            </p>
            <motion.button
              onClick={() => setSelectedCategory('all')}
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-medium hover:from-green-700 hover:to-blue-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Show All News
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AINewsSection;