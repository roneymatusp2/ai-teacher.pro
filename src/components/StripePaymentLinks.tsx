import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PaymentOption {
  id: string;
  amount: string;
  description: string;
  emoji: string;
  color: string;
  url: string;
  popular?: boolean;
}

interface StripePaymentLinksProps {
  language?: 'en' | 'pt';
}

const StripePaymentLinks: React.FC<StripePaymentLinksProps> = ({ language = 'pt' }) => {
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState<PaymentOption | null>(null);
  const [showPixModal, setShowPixModal] = useState(false);
  const [pixCopied, setPixCopied] = useState(false);

  // PIX Code
  const pixCode = '00020126450014br.gov.bcb.pix0123roney.nascimento@usp.br5204000053039865802BR5914AI-Teacher.pro6009Sao Paulo62180514TXrrqeqd5c771263049B38';

  // Conteúdo internacionalizado
  const content = {
    pt: {
      title: '💝 Apoie Nossa Missão Educacional',
      subtitle: 'Ajude-nos a continuar fornecendo conteúdo educacional de qualidade com IA',
      paymentInfo: 'Pagamento 100% seguro • Escolha entre PIX ou Cartão de Crédito',
      popular: '⭐ POPULAR',
      donateButton: 'Escolher Método 💳',
      redirecting: 'Redirecionando...',
      howItHelps: '🎯 Como sua doação ajuda:',
      benefits: [
        'Conteúdo educacional de qualidade',
        'Apoio a professores mundialmente',
        'Melhorias na plataforma',
        'Tecnologia IA avançada'
      ],
      transparencyTitle: 'Transparência Total',
      transparencyText: '100% das doações são utilizadas exclusivamente para:',
      transparencyItems: [
        '• Hospedagem e infraestrutura',
        '• APIs de IA (OpenAI, etc.)',
        '• Desenvolvimento de recursos',
        '• Suporte aos usuários'
      ],
      securedBy: 'Protegido pelo Stripe',
      paymentModal: {
        title: 'Como você gostaria de doar?',
        subtitle: 'Escolha o método de pagamento de sua preferência',
        pixButton: '💚 Pagar com PIX',
        pixDescription: 'Instantâneo e sem taxas',
        cardButton: '💳 Pagar com Cartão',
        cardDescription: 'Seguro via Stripe',
        closeButton: 'Fechar'
      },
      pixModal: {
        title: 'Doação via PIX',
        subtitle: 'Escaneie o código QR ou copie o código PIX',
        qrTitle: '📱 Escaneie com seu banco:',
        codeTitle: '📋 Ou copie o código PIX:',
        copyButton: 'Copiar Código PIX',
        copied: 'Copiado! ✅',
        instructions: 'Instruções:',
        steps: [
          '1. Abra o app do seu banco',
          '2. Escolha PIX → Pagar',
          '3. Escaneie o QR Code ou cole o código',
          '4. Confirme o pagamento'
        ],
        closeButton: 'Fechar'
      },
      paymentOptions: [
        {
          id: '100',
          amount: 'R$ 100',
          description: 'Um apoio carinhoso',
          emoji: '💝',
          color: 'from-pink-500 to-rose-600',
          url: 'https://buy.stripe.com/dRm9AT1RR8KBdubeRN2sM04'
        },
        {
          id: '200',
          amount: 'R$ 200',
          description: 'Um café especial para a equipe',
          emoji: '☕',
          color: 'from-amber-500 to-orange-600',
          url: 'https://buy.stripe.com/bJe00j9kj5yp9dV3952sM01'
        },
        {
          id: '500',
          amount: 'R$ 500',
          description: 'Um almoço generoso',
          emoji: '🍕',
          color: 'from-green-500 to-emerald-600',
          url: 'https://buy.stripe.com/6oUdR93ZZgd3fCj6lh2sM02',
          popular: true
        },
        {
          id: '1000',
          amount: 'R$ 1.000',
          description: 'Um presente incrível',
          emoji: '🎁',
          color: 'from-blue-500 to-indigo-600',
          url: 'https://buy.stripe.com/8x2dR90NNd0R61J5hd2sM03'
        },
        {
          id: '5000',
          amount: 'R$ 5.000',
          description: 'Um investimento no futuro da educação',
          emoji: '🚀',
          color: 'from-purple-500 to-violet-600',
          url: 'https://buy.stripe.com/eVq9ATdAz2md0HpgZV2sM05'
        }
      ]
    },
    en: {
      title: '💝 Support Our Educational Mission',
      subtitle: 'Help us continue providing quality AI-powered educational content',
      paymentInfo: '100% secure payment • Choose between PIX or Credit Card',
      popular: '⭐ POPULAR',
      donateButton: 'Choose Method 💳',
      redirecting: 'Redirecting...',
      howItHelps: '🎯 How your donation helps:',
      benefits: [
        'Quality educational content',
        'Support teachers worldwide',
        'Platform improvements',
        'Advanced AI technology'
      ],
      transparencyTitle: 'Full Transparency',
      transparencyText: '100% of donations are used exclusively for:',
      transparencyItems: [
        '• Hosting and infrastructure',
        '• AI APIs (OpenAI, etc.)',
        '• Resource development',
        '• User support'
      ],
      securedBy: 'Secured by Stripe',
      paymentModal: {
        title: 'How would you like to donate?',
        subtitle: 'Choose your preferred payment method',
        pixButton: '💚 Pay with PIX',
        pixDescription: 'Instant and no fees',
        cardButton: '💳 Pay with Card',
        cardDescription: 'Secure via Stripe',
        closeButton: 'Close'
      },
      pixModal: {
        title: 'PIX Donation',
        subtitle: 'Scan the QR code or copy the PIX code',
        qrTitle: '📱 Scan with your bank app:',
        codeTitle: '📋 Or copy the PIX code:',
        copyButton: 'Copy PIX Code',
        copied: 'Copied! ✅',
        instructions: 'Instructions:',
        steps: [
          '1. Open your bank app',
          '2. Choose PIX → Pay',
          '3. Scan the QR Code or paste the code',
          '4. Confirm the payment'
        ],
        closeButton: 'Close'
      },
      paymentOptions: [
        {
          id: '100',
          amount: 'R$ 100',
          description: 'A caring support',
          emoji: '💝',
          color: 'from-pink-500 to-rose-600',
          url: 'https://buy.stripe.com/dRm9AT1RR8KBdubeRN2sM04'
        },
        {
          id: '200',
          amount: 'R$ 200',
          description: 'A special coffee for the team',
          emoji: '☕',
          color: 'from-amber-500 to-orange-600',
          url: 'https://buy.stripe.com/bJe00j9kj5yp9dV3952sM01'
        },
        {
          id: '500',
          amount: 'R$ 500',
          description: 'A generous lunch',
          emoji: '🍕',
          color: 'from-green-500 to-emerald-600',
          url: 'https://buy.stripe.com/6oUdR93ZZgd3fCj6lh2sM02',
          popular: true
        },
        {
          id: '1000',
          amount: 'R$ 1,000',
          description: 'An incredible gift',
          emoji: '🎁',
          color: 'from-blue-500 to-indigo-600',
          url: 'https://buy.stripe.com/8x2dR90NNd0R61J5hd2sM03'
        },
        {
          id: '5000',
          amount: 'R$ 5,000',
          description: 'An investment in the future of education',
          emoji: '🚀',
          color: 'from-purple-500 to-violet-600',
          url: 'https://buy.stripe.com/eVq9ATdAz2md0HpgZV2sM05'
        }
      ]
    }
  };

  const t = content[language];
  const paymentOptions = t.paymentOptions;

  const handleAmountClick = (option: PaymentOption) => {
    setSelectedOption(option);
    setShowPaymentModal(true);
  };

  const handlePixPayment = () => {
    setShowPaymentModal(false);
    setShowPixModal(true);
  };

  const handleCardPayment = () => {
    if (selectedOption) {
      setSelectedAmount(selectedOption.id);
      setShowPaymentModal(false);
      
      // Abrir Payment Link do Stripe em nova aba
      window.open(selectedOption.url, '_blank', 'noopener,noreferrer');
      
      // Reset selection after a moment
      setTimeout(() => {
        setSelectedAmount(null);
      }, 2000);
    }
  };

  const copyPixCode = async () => {
    try {
      await navigator.clipboard.writeText(pixCode);
      setPixCopied(true);
      setTimeout(() => setPixCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy PIX code:', err);
    }
  };

  const closeModals = () => {
    setShowPaymentModal(false);
    setShowPixModal(false);
    setSelectedOption(null);
    setPixCopied(false);
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-2"
          >
            {t.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            {t.paymentInfo}
          </motion.p>
        </div>

        {/* Payment Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paymentOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Popular Badge */}
              {option.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {t.popular}
                  </span>
                </div>
              )}

              <motion.button
                onClick={() => handleAmountClick(option)}
                disabled={selectedAmount === option.id}
                className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 group hover:scale-105 hover:shadow-xl ${
                  selectedAmount === option.id
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 bg-white dark:bg-gray-700'
                } ${option.popular ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''}`}
                whileHover={{ scale: selectedAmount === option.id ? 1 : 1.02 }}
                whileTap={{ scale: selectedAmount === option.id ? 1 : 0.98 }}
              >
                {/* Emoji */}
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {option.emoji}
                </div>

                {/* Amount */}
                <div className={`text-2xl font-bold mb-2 bg-gradient-to-r ${option.color} bg-clip-text text-transparent`}>
                  {option.amount}
                </div>

                {/* Description */}
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {option.description}
                </div>

                {/* Button State */}
                {selectedAmount === option.id ? (
                  <div className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400">
                    <motion.div
                      className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="text-sm font-medium">{t.redirecting}</span>
                  </div>
                ) : (
                  <div className={`bg-gradient-to-r ${option.color} text-white px-4 py-2 rounded-lg font-medium text-sm group-hover:shadow-lg transition-shadow duration-300`}>
                    {t.donateButton}
                  </div>
                )}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700"
        >
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4 text-center">
            {t.howItHelps}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { emoji: '🎓', text: t.benefits[0] },
              { emoji: '🌍', text: t.benefits[1] },
              { emoji: '🚀', text: t.benefits[2] },
              { emoji: '🤖', text: t.benefits[3] }
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span className="text-2xl">{benefit.emoji}</span>
                <span className="text-blue-700 dark:text-blue-300">{benefit.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Transparency Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">🔒</span>
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
              {t.transparencyTitle}
            </h3>
          </div>
          <div className="text-center">
            <p className="text-green-700 dark:text-green-300 text-sm mb-3">
              {t.transparencyText}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-green-600 dark:text-green-400">
              {t.transparencyItems.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Security Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t.securedBy}
            </span>
            <img 
              src="https://images.ctfassets.net/fzn2n1nzq965/3AGidihOJl4nH9D6Lo0jHp/9b82fb2c68cff0e7d7f8b7a6d24b3c3a/powered_by_stripe.svg" 
              alt="Powered by Stripe" 
              className="h-4"
            />
          </div>
        </motion.div>
      </div>

      {/* Payment Method Selection Modal */}
      <AnimatePresence>
        {showPaymentModal && selectedOption && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={closeModals}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full border border-gray-200 dark:border-gray-700">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{selectedOption.emoji}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedOption.amount}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {t.paymentModal.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t.paymentModal.subtitle}
                  </p>
                </div>

                {/* Payment Options */}
                <div className="space-y-4 mb-6">
                                     {/* PIX Option */}
                   <motion.button
                     onClick={handlePixPayment}
                     className="w-full p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg relative overflow-hidden"
                     whileHover={{ scale: 1.02, y: -2 }}
                     whileTap={{ scale: 0.98 }}
                   >
                     {/* Pulsating Heart Background */}
                     <motion.div
                       className="absolute inset-0 flex items-center justify-center opacity-10"
                       animate={{ 
                         scale: [1, 1.1, 1],
                         opacity: [0.1, 0.2, 0.1]
                       }}
                       transition={{ 
                         duration: 2,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                     >
                       <span className="text-6xl">💚</span>
                     </motion.div>
                     
                     <div className="flex items-center justify-between relative z-10">
                       <div className="flex items-center space-x-3">
                         <motion.span 
                           className="text-2xl"
                           animate={{ 
                             scale: [1, 1.2, 1],
                           }}
                           transition={{ 
                             duration: 1.5,
                             repeat: Infinity,
                             ease: "easeInOut"
                           }}
                         >
                           💚
                         </motion.span>
                         <div className="text-left">
                           <div className="font-bold">{t.paymentModal.pixButton}</div>
                           <div className="text-sm opacity-90">{t.paymentModal.pixDescription}</div>
                         </div>
                       </div>
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                       </svg>
                     </div>
                   </motion.button>

                  {/* Card Option */}
                  <motion.button
                    onClick={handleCardPayment}
                    className="w-full p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">💳</span>
                        <div className="text-left">
                          <div className="font-bold">{t.paymentModal.cardButton}</div>
                          <div className="text-sm opacity-90">{t.paymentModal.cardDescription}</div>
                        </div>
                      </div>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.button>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeModals}
                  className="w-full px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  {t.paymentModal.closeButton}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* PIX Modal */}
      <AnimatePresence>
        {showPixModal && selectedOption && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={closeModals}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <span className="text-3xl">💚</span>
                    <span className="text-3xl">{selectedOption.emoji}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {t.pixModal.title}
                  </h3>
                  <p className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">
                    {selectedOption.amount}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t.pixModal.subtitle}
                  </p>
                </div>

                {/* QR Code Section */}
                <div className="text-center mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    {t.pixModal.qrTitle}
                  </h4>
                  <div className="inline-block p-4 bg-white rounded-2xl shadow-lg">
                    <img
                      src="/images/pix-qrcode-ai-teacher.pro.png"
                      alt="QR Code PIX AI-Teacher.pro"
                      className="w-48 h-48 mx-auto"
                    />
                  </div>
                </div>

                {/* PIX Code Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    {t.pixModal.codeTitle}
                  </h4>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                    <code className="text-xs text-gray-700 dark:text-gray-300 break-all font-mono">
                      {pixCode}
                    </code>
                  </div>
                                     <motion.button
                     onClick={copyPixCode}
                     disabled={pixCopied}
                     className={`w-full px-4 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg ${
                       pixCopied 
                         ? 'bg-gradient-to-r from-green-600 to-emerald-700 text-white' 
                         : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                     }`}
                     whileHover={{ scale: pixCopied ? 1 : 1.02 }}
                     whileTap={{ scale: pixCopied ? 1 : 0.98 }}
                   >
                     <div className="flex items-center justify-center space-x-2">
                       {pixCopied ? (
                         <>
                           <motion.svg 
                             className="w-5 h-5" 
                             fill="none" 
                             stroke="currentColor" 
                             viewBox="0 0 24 24"
                             initial={{ scale: 0 }}
                             animate={{ scale: 1 }}
                             transition={{ type: "spring", stiffness: 500, damping: 30 }}
                           >
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                           </motion.svg>
                           <span>{t.pixModal.copied}</span>
                         </>
                       ) : (
                         <>
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                           </svg>
                           <span>{t.pixModal.copyButton}</span>
                         </>
                       )}
                     </div>
                   </motion.button>
                </div>

                {/* Instructions */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                  <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-3">
                    {t.pixModal.instructions}
                  </h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    {t.pixModal.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeModals}
                  className="w-full px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  {t.pixModal.closeButton}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default StripePaymentLinks; 