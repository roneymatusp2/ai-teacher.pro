import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroPTBR from '../../components/HeroPTBR';
import FloatingCardGrid from '../../components/FloatingCardGrid';
import AINewsSection from '../../components/AINewsSection';
import Newsletter from '../../components/Newsletter';
import NewsletterModal from '../../components/NewsletterModal';
import AnimatedBackgroundPTBR from '../../components/AnimatedBackgroundPTBR';
import DonationSectionPTBR from '../../components/DonationSectionPTBR';
import { mockResources } from '../../lib/supabase';

const HomePagePTBR: React.FC = () => {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  
  // Get featured resources for homepage
  const featuredResources = mockResources.slice(0, 6);

  const features = [
    {
      icon: '🎯',
      title: 'Ferramentas IA Curadas',
      description: 'Ferramentas selecionadas e testadas por educadores para impacto real em sala de aula.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: '📚',
      title: 'Cursos Especializados',
      description: 'Aprenda com educadores experientes que entendem seus desafios.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🚀',
      title: 'Atualizações Constantes',
      description: 'Mantenha-se à frente com os mais novos desenvolvimentos em IA educacional.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '💡',
      title: 'Guias Práticos',
      description: 'Guias passo a passo para implementação em sua sala de aula.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '⏰',
      title: 'Economize Tempo',
      description: 'Automatize tarefas rotineiras e foque no que realmente importa.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🌍',
      title: 'Comunidade Global',
      description: 'Conecte-se com educadores com a mesma visão de todo o mundo.',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <>
      <div className="fixed top-6 right-6 z-40">
        <motion.a
          href="#donate"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="group block rounded-2xl bg-white/95 dark:bg-gray-900/95 border border-rose-200/80 dark:border-rose-500/40 shadow-xl shadow-rose-200/40 dark:shadow-rose-900/50 px-5 py-4 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 text-rose-600 dark:text-rose-300 font-semibold tracking-wide">
            <span className="text-xl">❤️</span>
            <span className="text-sm uppercase">Donate</span>
          </div>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Apoie nossa missão e conheça as opções de doação.
          </p>
        </motion.a>
      </div>

      <div className="relative">
        {/* Brazilian Animated Background */}
        <div className="fixed inset-0 z-0">
          <AnimatedBackgroundPTBR />
        </div>

        <div className="relative z-10">
        <HeroPTBR />
        
        {/* AI News Section */}
        <AINewsSection />
        
        {/* Featured Resources Section */}
        <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FloatingCardGrid 
              resources={featuredResources}
              title="Ferramentas IA em Destaque"
              subtitle="Ferramentas selecionadas para transformar sua prática de ensino"
              showFilters={false}
              className="featured-grid"
            />
            
            <div className="text-center mt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/pt-br/tools" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white text-lg font-semibold rounded-2xl shadow-2xl hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  Explorar Todas as Ferramentas
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50/95 dark:bg-gray-800/95 backdrop-blur-sm transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Por que Escolher o AI Teacher Pro?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Tudo que você precisa para integrar IA com sucesso em sua prática de ensino
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

        {/* CTA Section with Brazilian theme */}
        <section className="py-20 bg-gradient-to-r from-green-600 via-yellow-500 to-blue-600 relative overflow-hidden">
          {/* Animated background elements with Brazilian colors */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-4 h-4 rounded-full opacity-10 ${
                  i % 3 === 0 ? 'bg-white' : i % 3 === 1 ? 'bg-green-200' : 'bg-yellow-200'
                }`}
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
                Pronto para Transformar seu Ensino?
              </h2>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                Junte-se à nossa comunidade de educadores inovadores e comece sua jornada com IA hoje.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => setIsNewsletterModalOpen(true)}
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-200 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📧 Receba Atualizações Semanais
                </motion.button>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/pt-br/about"
                    className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-200"
                  >
                    📖 Leia o Livro
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <Newsletter />

        {/* Donation Section */}
        <DonationSectionPTBR />

        {/* Newsletter Modal */}
        <NewsletterModal
          isOpen={isNewsletterModalOpen}
          onClose={() => setIsNewsletterModalOpen(false)}
        />
        </div>
      </div>
    </>
  );
};

export default HomePagePTBR;
