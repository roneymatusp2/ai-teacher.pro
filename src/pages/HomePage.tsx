import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FloatingCardGrid from '../components/FloatingCardGrid';
import AINewsSection from '../components/AINewsSection';
import Newsletter from '../components/Newsletter';
import NewsletterModal from '../components/NewsletterModal';
import DonationSection from '../components/DonationSection';
import { mockResources } from '../lib/supabase';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  
  // Get featured resources for homepage
  const featuredResources = mockResources.slice(0, 6);

  const features = [
    {
      icon: '🎯',
      title: 'Curated AI Tools',
      description: 'Hand-picked tools tested by educators for real classroom impact.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: '📚',
      title: 'Expert Courses',
      description: 'Learn from experienced educators who understand your challenges.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🚀',
      title: 'Latest Updates',
      description: 'Stay ahead with the newest developments in educational AI.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '💡',
      title: 'Practical Guides',
      description: 'Step-by-step implementation guides for your classroom.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '⏰',
      title: 'Save Time',
      description: 'Automate routine tasks and focus on what matters most.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🌍',
      title: 'Global Community',
      description: 'Connect with like-minded educators from around the world.',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <>
      <Hero lang='en' />

      {/* AI News Section */}
      <AINewsSection />
      
      {/* Featured Resources Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FloatingCardGrid 
            resources={featuredResources}
            title="Featured AI Tools"
            subtitle="Handpicked tools to transform your teaching practice"
            showFilters={false}
            className="featured-grid"
          />
          
          <div className="text-center mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/tools" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white text-lg font-semibold rounded-2xl shadow-2xl hover:from-green-700 hover:to-blue-700 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Explore All Tools
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose AI Teacher Pro?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to successfully integrate AI into your teaching practice
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden"
              >
                <div className="glass-card p-8 h-full text-center group-hover:shadow-2xl transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-white rounded-full opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Teaching?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join our community of forward-thinking educators and start your AI journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => setIsNewsletterModalOpen(true)}
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-200 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📧 Get Weekly Updates
              </motion.button>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-200"
                >
                  📖 Read the Book
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Newsletter />

      {/* Donation Section */}
      <DonationSection language="en" />

      {/* Newsletter Modal */}
      <NewsletterModal
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
      />
    </>
  );
};

export default HomePage;