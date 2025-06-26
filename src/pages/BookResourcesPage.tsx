import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookResource {
  id: string;
  title: string;
  url: string;
  description: string;
  chapter: string;
  category: 'platforms' | 'examples' | 'toolkits' | 'guides' | 'hubs' | 'implementations';
  qrContext?: string;
}

const BookResourcesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const bookResources: BookResource[] = [
    // Chapter 2 - AI Platforms
    {
      id: 'platforms',
      title: 'Comprehensive Platform Resources',
      url: 'https://ai-teacher.pro/platforms',
      description: 'Continuously updated platform comparison database, configuration guides, cost calculators, and practical implementation examples',
      chapter: 'Chapter 2',
      category: 'platforms',
      qrContext: 'QR code box in Chapter 2 - AI Platforms'
    },

    // Chapter 3 - Prompt Engineering
    {
      id: 'chapter3_ex1',
      title: 'Complete GUIDE+ Text Examples',
      url: 'https://ai-teacher.pro/chapter3_ex1',
      description: 'Comprehensive library of text-based educational prompts',
      chapter: 'Chapter 3',
      category: 'examples',
      qrContext: 'Lines 208-210'
    },
    {
      id: 'chapter3_ex2',
      title: 'VEO 3 Educational Video Prompts',
      url: 'https://ai-teacher.pro/chapter3_ex2',
      description: 'Complete VEO 3 prompt library for educators',
      chapter: 'Chapter 3',
      category: 'examples',
      qrContext: 'Lines 265-267'
    },
    {
      id: 'chapter3_ex3',
      title: 'Hailuo AI Educational Templates',
      url: 'https://ai-teacher.pro/chapter3_ex3',
      description: 'Micro-video prompt collection for instant engagement',
      chapter: 'Chapter 3',
      category: 'examples',
      qrContext: 'Lines 316-318'
    },
    {
      id: 'chapter3_ex4',
      title: 'Advanced Iteration Techniques',
      url: 'https://ai-teacher.pro/chapter3_ex4',
      description: 'Professional iteration strategies and refinement methods',
      chapter: 'Chapter 3',
      category: 'guides',
      qrContext: 'Lines 370-372'
    },
    {
      id: 'chapter3_ex5',
      title: 'Professional Development Framework',
      url: 'https://ai-teacher.pro/chapter3_ex5',
      description: 'Complete professional development resources and community',
      chapter: 'Chapter 3',
      category: 'hubs',
      qrContext: 'Lines 429-431'
    },
    {
      id: 'chapter3_ex6',
      title: 'Automated Tools Directory',
      url: 'https://ai-teacher.pro/chapter3_ex6',
      description: 'Directory of prompt generation tools and tutorials',
      chapter: 'Chapter 3',
      category: 'toolkits',
      qrContext: 'Lines 456-458'
    },
    {
      id: 'chapter3_ex7',
      title: 'Chapter Integration Guide',
      url: 'https://ai-teacher.pro/chapter3_ex7',
      description: 'How prompt engineering connects across educational applications',
      chapter: 'Chapter 3',
      category: 'guides',
      qrContext: 'Lines 476-478'
    },

    // Chapter 4 - AI Planning
    {
      id: 'planning-toolkit',
      title: 'Complete AI Planning Toolkit',
      url: 'https://ai-teacher.pro/planning-toolkit',
      description: 'Complete collection of prompts, templates, LaTeX examples, and video tutorials for AI-assisted planning',
      chapter: 'Chapter 4',
      category: 'toolkits',
      qrContext: 'Lines 1060-1062'
    },

    // Chapter 5 - Content Creation
    {
      id: 'chapter5_ex1',
      title: 'IB Mathematics Paper Generation',
      url: 'https://ai-teacher.pro/chapter5_ex1',
      description: 'Complete demonstration of IB Mathematics Paper 1 generation including source materials, prompts, and professional LaTeX output',
      chapter: 'Chapter 5',
      category: 'examples',
      qrContext: 'Lines 493-495'
    },

    // Chapter 6 - Web Development
    {
      id: 'education-discounts',
      title: 'Educational Discount Resource Hub',
      url: 'https://ai-teacher.pro/education-discounts',
      description: 'Comprehensive database of educational discounts, step-by-step registration guides, and verification processes',
      chapter: 'Chapter 6',
      category: 'hubs',
      qrContext: 'Lines 47-49'
    },
    {
      id: 'chapter6-ess-prompt',
      title: 'Complete ESS Data Explorer Prompt',
      url: 'https://ai-teacher.pro/chapter6-ess-prompt',
      description: 'Complete, detailed prompt for Environmental Systems & Societies Mathematical Data Explorer',
      chapter: 'Chapter 6',
      category: 'examples',
      qrContext: 'Lines 196-198'
    },
    {
      id: 'chapter6-bolt',
      title: 'Bolt.new ESS Data Explorer',
      url: 'https://ai-teacher.pro/chapter6-bolt',
      description: 'Platform-specific implementation example using Bolt.new',
      chapter: 'Chapter 6',
      category: 'implementations',
      qrContext: 'Lines 213-214'
    },
    {
      id: 'chapter6-lovable',
      title: 'Lovable.dev ESS Data Explorer',
      url: 'https://ai-teacher.pro/chapter6-lovable',
      description: 'Platform-specific implementation example using Lovable.dev',
      chapter: 'Chapter 6',
      category: 'implementations',
      qrContext: 'Lines 221-222'
    },
    {
      id: 'chapter6-base44',
      title: 'Base44 ESS Data Explorer',
      url: 'https://ai-teacher.pro/chapter6-base44',
      description: 'Platform-specific implementation example using Base44',
      chapter: 'Chapter 6',
      category: 'implementations',
      qrContext: 'Lines 229-230'
    },
    {
      id: 'chapter6-create',
      title: 'Create.xyz ESS Data Explorer',
      url: 'https://ai-teacher.pro/chapter6-create',
      description: 'Platform-specific implementation example using Create.xyz',
      chapter: 'Chapter 6',
      category: 'implementations',
      qrContext: 'Lines 237-238'
    },
    {
      id: 'chapter6-replit',
      title: 'Replit ESS Data Explorer',
      url: 'https://ai-teacher.pro/chapter6-replit',
      description: 'Platform-specific implementation example using Replit',
      chapter: 'Chapter 6',
      category: 'implementations',
      qrContext: 'Lines 245-246'
    },
    {
      id: 'chapter6-manus',
      title: 'Manus ESS Data Explorer',
      url: 'https://ai-teacher.pro/chapter6-manus',
      description: 'Platform-specific implementation example using Manus',
      chapter: 'Chapter 6',
      category: 'implementations',
      qrContext: 'Lines 253-254'
    },
    {
      id: 'chapter6-resources',
      title: 'Complete Chapter 6 Resource Hub',
      url: 'https://ai-teacher.pro/chapter6-resources',
      description: 'Comprehensive resources including platform examples, deployment guides, advanced tutorials, template prompts, and community forums',
      chapter: 'Chapter 6',
      category: 'hubs',
      qrContext: 'Lines 631-633'
    },

    // Chapter 7 - AI Ethics
    {
      id: 'ethics-resources',
      title: 'Comprehensive AI Ethics Resource Hub',
      url: 'https://ai-teacher.pro/ethics-resources',
      description: 'UNESCO framework implementation guides, bias detection tools, privacy compliance checklists, cybersecurity protocols, and ethical framework templates',
      chapter: 'Chapter 7',
      category: 'hubs',
      qrContext: 'Lines 694-696'
    },

    // Chapter 8 - Future Readiness
    {
      id: 'future-ready',
      title: 'Continue Your Journey',
      url: 'https://ai-teacher.pro/future-ready',
      description: 'Ongoing resources, community connections, and updated guidance for future-ready teachers',
      chapter: 'Chapter 8',
      category: 'hubs',
      qrContext: 'Lines 907-909'
    },

    // Hub Resources
    {
      id: 'hub-catalogue',
      title: 'Live Catalogue and Version Updates',
      url: 'https://ai-teachers.pro/hub#catalogue',
      description: 'Reference for live updates and catalog management',
      chapter: 'Hub',
      category: 'hubs',
      qrContext: 'Introduction - Line 63'
    },
    {
      id: 'hub-toolkit',
      title: 'Free Educator Accounts Creation',
      url: 'https://ai-teachers.pro/hub#toolkit',
      description: 'Hub for creating free educator accounts',
      chapter: 'Hub',
      category: 'toolkits',
      qrContext: 'Introduction - Line 151'
    },
    {
      id: 'hub-main',
      title: 'Central Resource Hub',
      url: 'https://ai-teachers.pro/hub',
      description: 'Central hub for all links, tutorials, updates and community resources',
      chapter: 'Hub',
      category: 'hubs',
      qrContext: 'Introduction - Line 159, Appendix B - Line 250'
    },

    // Companion Sites
    {
      id: 'companion-guide',
      title: 'Book Companion Website',
      url: 'https://ai-teachers.guide',
      description: 'Official book companion website with additional resources',
      chapter: 'Companion',
      category: 'hubs',
      qrContext: 'Copyright Page - Line 30'
    },
    {
      id: 'author-site',
      title: "Author's Personal Website",
      url: 'https://mrnascimento.tech',
      description: "Author's main website with additional professional content",
      chapter: 'About',
      category: 'hubs',
      qrContext: 'About Author - Line 58'
    },
    {
      id: 'companion-pro',
      title: 'Main Companion Site',
      url: 'https://ai-teachers.pro',
      description: 'Main companion site for the book with comprehensive resources',
      chapter: 'Companion',
      category: 'hubs',
      qrContext: 'About Author - Line 60'
    }
  ];

  const chapters = ['all', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5', 'Chapter 6', 'Chapter 7', 'Chapter 8', 'Hub', 'Companion', 'About'];
  const categories = ['all', 'platforms', 'examples', 'toolkits', 'guides', 'hubs', 'implementations'];

  const filteredResources = bookResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesChapter = selectedChapter === 'all' || resource.chapter === selectedChapter;
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    
    return matchesSearch && matchesChapter && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'platforms': return '🏗️';
      case 'examples': return '💡';
      case 'toolkits': return '🧰';
      case 'guides': return '📋';
      case 'hubs': return '🌐';
      case 'implementations': return '⚙️';
      default: return '📚';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'platforms': return 'from-blue-500 to-blue-600';
      case 'examples': return 'from-green-500 to-green-600';
      case 'toolkits': return 'from-purple-500 to-purple-600';
      case 'guides': return 'from-orange-500 to-orange-600';
      case 'hubs': return 'from-red-500 to-red-600';
      case 'implementations': return 'from-teal-500 to-teal-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              📚 Exclusive Book Resources
            </h1>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Welcome to the complete collection of resources from "Generative AI for Teachers". 
              Access all chapter examples, toolkits, platforms, and exclusive content through the QR codes in your book.
            </p>
            <div className="mt-8 inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
              <span className="text-white font-medium">
                🎯 {bookResources.length} Premium Resources Available
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search resources, examples, toolkits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
            </div>

            {/* Chapter Filter */}
            <div className="lg:w-64">
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white"
              >
                {chapters.map(chapter => (
                  <option key={chapter} value={chapter}>
                    {chapter === 'all' ? 'All Chapters' : chapter}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredResources.length} of {bookResources.length} resources
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedChapter}-${selectedCategory}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="glass-card p-6 h-full hover:shadow-2xl transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getCategoryColor(resource.category)} flex items-center justify-center text-white text-xl`}>
                          {getCategoryIcon(resource.category)}
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {resource.chapter}
                          </span>
                          <div className="text-xs text-gray-400 dark:text-gray-500 capitalize">
                            {resource.category}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                        {resource.description}
                      </p>
                    </div>

                    {/* QR Context */}
                    {resource.qrContext && (
                      <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <div className="text-xs font-medium text-blue-800 dark:text-blue-200 mb-1">
                          📱 QR Code Location
                        </div>
                        <div className="text-xs text-blue-600 dark:text-blue-300">
                          {resource.qrContext}
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    <motion.a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full px-4 py-3 bg-gradient-to-r ${getCategoryColor(resource.category)} text-white text-center rounded-xl font-medium hover:shadow-lg transition-all duration-200`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Access Resource →
                    </motion.a>

                    {/* URL Preview */}
                    <div className="mt-3 text-xs text-gray-400 dark:text-gray-500 break-all">
                      {resource.url}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredResources.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                No resources found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Try adjusting your search or filter criteria.
              </p>
              <motion.button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedChapter('all');
                  setSelectedCategory('all');
                }}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl font-medium hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear All Filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              📖 About These Resources
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              These resources are exclusively available to readers of "Generative AI for Teachers". 
              Each resource is carefully curated to support your journey in implementing AI in education.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Chapter-Specific</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Resources organized by book chapters for easy reference
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🔄</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Regularly Updated</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Content is continuously updated with latest tools and examples
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">QR Code Access</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Quick access through QR codes in your physical book
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BookResourcesPage;