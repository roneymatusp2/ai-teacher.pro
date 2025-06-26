import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { subscribeToNewsletter } from '../lib/supabase';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address.');
      return;
    }

    setStatus('loading');
    
    try {
      await subscribeToNewsletter(email);
      setStatus('success');
      setMessage('Thank you for subscribing! You\'ll receive updates about new AI tools and teaching resources.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
      console.error('Newsletter subscription error:', error);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Updated with AI in Education
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get the latest AI tools, teaching strategies, and educational insights delivered directly to your inbox.
          </p>

          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl border-0 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                  disabled={status === 'loading'}
                />
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: status === 'loading' ? 1 : 1.05 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.95 }}
                >
                  {status === 'loading' ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subscribing...
                    </div>
                  ) : (
                    'Subscribe'
                  )}
                </motion.button>
              </div>

              {/* Status Messages */}
              {status !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl ${
                    status === 'success'
                      ? 'bg-green-500/20 text-green-100 border border-green-400/30'
                      : status === 'error'
                      ? 'bg-red-500/20 text-red-100 border border-red-400/30'
                      : ''
                  }`}
                >
                  <div className="flex items-start">
                    {status === 'success' ? (
                      <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <p className="text-sm">{message}</p>
                  </div>
                </motion.div>
              )}
            </form>

            {/* Privacy Notice */}
            <p className="mt-6 text-sm text-green-100/80">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>

          {/* Newsletter Benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Weekly Updates',
                description: 'Latest AI tools and educational technology trends'
              },
              {
                icon: '💡',
                title: 'Teaching Tips',
                description: 'Practical strategies for integrating AI into your classroom'
              },
              {
                icon: '🎯',
                title: 'Exclusive Content',
                description: 'Early access to new resources and special offers'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-green-100/80 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;