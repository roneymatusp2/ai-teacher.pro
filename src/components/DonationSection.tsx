import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface DonationSectionProps {
  language?: 'en' | 'pt';
}

const DonationSection: React.FC<DonationSectionProps> = ({ language = 'en' }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(20000); // Default R$ 200
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const content = {
    en: {
      title: 'Support Our Educational Mission',
      subtitle: 'Help us continue providing quality AI-powered educational content',
      description: 'Your donation helps us maintain and improve our platform, create new content, and keep everything free for educators worldwide.',
      amounts: {
        200: 'R$ 200.00',
        500: 'R$ 500.00', 
        1000: 'R$ 1,000.00',
        custom: 'Or whatever your heart desires'
      },
      customPlaceholder: 'Enter amount (R$ 10.00 - R$ 5,000.00)',
      button: 'Donate Now',
      loadingButton: 'Processing...',
      securedBy: 'Secured by Stripe',
      benefits: [
        '🎓 Support quality educational content',
        '🌍 Help teachers worldwide',
        '🚀 Enable platform improvements',
        '💝 100% goes towards educational resources'
      ]
    },
    pt: {
      title: 'Apoie Nossa Missão Educacional',
      subtitle: 'Ajude-nos a continuar fornecendo conteúdo educacional de qualidade com IA',
      description: 'Sua doação nos ajuda a manter e melhorar nossa plataforma, criar novo conteúdo e manter tudo gratuito para educadores em todo o mundo.',
      amounts: {
        200: 'R$ 200,00',
        500: 'R$ 500,00',
        1000: 'R$ 1.000,00',
        custom: 'Ou qualquer valor que seu coração mandar'
      },
      customPlaceholder: 'Digite o valor (R$ 10,00 - R$ 5.000,00)',
      button: 'Doar Agora',
      loadingButton: 'Processando...',
      securedBy: 'Protegido pelo Stripe',
      benefits: [
        '🎓 Apoie conteúdo educacional de qualidade',
        '🌍 Ajude professores em todo o mundo',
        '🚀 Possibilite melhorias na plataforma',
        '💝 100% vai para recursos educacionais'
      ]
    }
  };

  const t = content[language];

  const predefinedAmounts = [
    { value: 20000, label: t.amounts[200] },
    { value: 50000, label: t.amounts[500] },
    { value: 100000, label: t.amounts[1000] },
  ];

  const handleDonate = async () => {
    setIsLoading(true);
    
    try {
      let amountInCentavos: number;
      
      if (selectedAmount === 'custom') {
        const customValue = parseFloat(customAmount.replace(',', '.'));
        if (!customValue || customValue < 10 || customValue > 5000) {
          alert(language === 'pt' 
            ? 'Por favor, digite um valor entre R$ 10,00 e R$ 5.000,00' 
            : 'Please enter an amount between R$ 10.00 and R$ 5,000.00');
          setIsLoading(false);
          return;
        }
        amountInCentavos = Math.round(customValue * 100);
      } else {
        amountInCentavos = selectedAmount as number;
      }

      const response = await fetch('http://localhost:3001/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amountInCentavos,
          currency: 'brl',
          language
        }),
      });

      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'Failed to create checkout session');
      }
    } catch (error) {
      console.error('Donation error:', error);
      alert(language === 'pt' 
        ? 'Erro ao processar doação. Tente novamente.' 
        : 'Error processing donation. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-cyan-50"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t.title}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {t.subtitle}
          </motion.p>
          <motion.p 
            className="text-gray-500 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {t.description}
          </motion.p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left side - Benefits */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                {language === 'pt' ? 'Como você ajuda:' : 'How you help:'}
              </h3>
              <div className="space-y-4">
                {t.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <span className="text-lg text-gray-700 dark:text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side - Donation form */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                {language === 'pt' ? 'Escolha o valor:' : 'Choose amount:'}
              </h3>
              
              {/* Amount selection */}
              <div className="space-y-3 mb-6">
                {predefinedAmounts.map((amount) => (
                  <label
                    key={amount.value}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all
                      ${selectedAmount === amount.value 
                        ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' 
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'}`}
                  >
                    <input
                      type="radio"
                      name="amount"
                      value={amount.value}
                      checked={selectedAmount === amount.value}
                      onChange={() => setSelectedAmount(amount.value)}
                      className="w-4 h-4 text-indigo-600"
                    />
                    <span className="text-lg font-medium text-gray-800 dark:text-white">{amount.label}</span>
                  </label>
                ))}
                
                {/* Custom amount */}
                <label
                  className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all
                    ${selectedAmount === 'custom' 
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' 
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'}`}
                >
                  <input
                    type="radio"
                    name="amount"
                    value="custom"
                    checked={selectedAmount === 'custom'}
                    onChange={() => setSelectedAmount('custom')}
                    className="w-4 h-4 text-indigo-600"
                  />
                  <span className="text-lg font-medium text-gray-800 dark:text-white">{t.amounts.custom}</span>
                </label>
                
                {selectedAmount === 'custom' && (
                  <motion.input
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    type="number"
                    placeholder={t.customPlaceholder}
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    min="10"
                    max="5000"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                )}
              </div>

              {/* Donate button */}
              <motion.button
                onClick={handleDonate}
                disabled={isLoading || (selectedAmount === 'custom' && !customAmount)}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all transform
                  ${isLoading || (selectedAmount === 'custom' && !customAmount)
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl'
                  }`}
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
              >
                {isLoading ? t.loadingButton : t.button}
              </motion.button>

              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                🔒 {t.securedBy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DonationSection;