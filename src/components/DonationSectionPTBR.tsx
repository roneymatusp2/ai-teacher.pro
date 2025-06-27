import React from 'react';
import { motion } from 'framer-motion';
import StripePaymentLinks from './StripePaymentLinks';

const DonationSectionPTBR: React.FC = () => {

  // Usando Stripe Payment Links - mais simples e confiável

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
            Apoie Nossa Missão Educacional
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Ajude-nos a continuar fornecendo conteúdo educacional de qualidade com IA
          </motion.p>
          <motion.p 
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Sua doação nos ajuda a manter e melhorar nossa plataforma, criar novo conteúdo e manter tudo gratuito para educadores em todo o mundo.
          </motion.p>
        </div>

        {/* Novo Sistema com Stripe Payment Links */}
        <StripePaymentLinks />
      </div>
    </motion.section>
  );
};

export default DonationSectionPTBR;