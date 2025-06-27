import React from 'react';
import { motion } from 'framer-motion';
import StripePaymentLinks from './StripePaymentLinks';

interface DonationSectionProps {
  language?: 'en' | 'pt';
}

const DonationSection: React.FC<DonationSectionProps> = ({ language = 'en' }) => {
  // Usando Stripe Payment Links - mais simples e confiável

  const content = {
    en: {
      title: 'Support Our Educational Mission',
      subtitle: 'Help us continue providing quality AI-powered educational content',
      description: 'Your donation helps us maintain and improve our platform, create new content, and keep everything free for educators worldwide.'
    },
    pt: {
      title: 'Apoie Nossa Missão Educacional',
      subtitle: 'Ajude-nos a continuar fornecendo conteúdo educacional de qualidade com IA',
      description: 'Sua doação nos ajuda a manter e melhorar nossa plataforma, criar novo conteúdo e manter tudo gratuito para educadores em todo o mundo.'
    }
  };

  const t = content[language];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t.title}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {t.subtitle}
          </motion.p>
          <motion.p 
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {t.description}
          </motion.p>
        </div>

        {/* Novo Sistema com Stripe Payment Links */}
        <StripePaymentLinks />
      </div>
    </motion.section>
  );
};

export default DonationSection;