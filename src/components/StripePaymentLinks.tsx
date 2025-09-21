import React, { useState } from 'react';
import { motion } from 'framer-motion';

// CSS para animação do coração
const heartPulseStyle = `
  @keyframes heartPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
  .heart-pulse {
    animation: heartPulse 1.5s ease-in-out infinite;
  }
`;

// Injetar CSS no head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = heartPulseStyle;
  document.head.appendChild(styleElement);
}

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
  const [showPixModal, setShowPixModal] = useState(false);
  const [pixCopied, setPixCopied] = useState(false);
  const [donorName, setDonorName] = useState('');
  const [donorMessage, setDonorMessage] = useState('');

  // DEBUG: Força o modal aberto para teste
  // Descomente a linha abaixo para testar se o modal aparece
  // setShowPixModal(true);

  // PIX Code
  const pixCode = '00020126450014br.gov.bcb.pix0123roney.nascimento@usp.br5204000053039865802BR5914AI-Teacher.pro6009Sao Paulo62180514TXrrqeqd5c771263049B38';
  const contactEmail = 'roney.nascimento@usp.br';

  // Conteúdo internacionalizado
  const content = {
    pt: {
      title: '💝 Apoie Nossa Missão Educacional',
      subtitle: 'Ajude-nos a continuar fornecendo conteúdo educacional de qualidade com IA',
      paymentInfo: 'Pagamento 100% seguro • Cartão via Stripe ou PIX instantâneo',
      popular: '⭐ POPULAR',
      donateButton: 'Doar via Cartão 💳',
      pixButton: 'Doar via PIX 💚',
      pixButtonSubtitle: 'Instantâneo e sem taxas',
      pixButtonText: 'Abrir PIX',
      pixBenefits: {
        instant: 'Instantâneo',
        noFees: 'Sem taxas',
        secure: '100% seguro',
        anyAmount: 'Qualquer valor'
      },
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
        closeButton: 'Fechar',
        noteTitle: 'Deixe um recadinho (opcional)',
        namePlaceholder: 'Seu nome (opcional)',
        messagePlaceholder: 'Escreva seu recado aqui... (agradecimentos, dedicatória, etc.)',
        sendEmailButton: 'Enviar recado por e‑mail',
        noteInfo: 'Alguns bancos não transmitem mensagem junto com o PIX estático. Envie seu recado por aqui e ele chegará para nós.'
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
        },
        {
          id: '10000',
          amount: 'R$ 10.000',
          description: 'Impulsionando novas iniciativas educacionais',
          emoji: '🏫',
          color: 'from-emerald-500 to-teal-600',
          url: 'https://buy.stripe.com/6oUaEXdAzbWNfCjaBx2sM07'
        },
        {
          id: '25000',
          amount: 'R$ 25.000',
          description: 'Patrocínio visionário para educadores',
          emoji: '🌟',
          color: 'from-cyan-500 to-sky-600',
          url: 'https://buy.stripe.com/4gM14n687e4V61J3952sM08'
        },
        {
          id: '50000',
          amount: 'R$ 50.000',
          description: 'Acelerando inovação e impacto global',
          emoji: '🌍',
          color: 'from-indigo-500 to-blue-700',
          url: 'https://buy.stripe.com/14AfZh1RR3qh61J2512sM09'
        },
        {
          id: '100000',
          amount: 'R$ 100.000',
          description: 'Investimento transformador em educação com IA',
          emoji: '👑',
          color: 'from-rose-500 to-purple-700',
          url: 'https://buy.stripe.com/4gM6oH1RR3qh9dVaBx2sM0a'
        }
      ]
    },
    en: {
      title: '💝 Support Our Educational Mission',
      subtitle: 'Help us continue providing quality AI-powered educational content',
      paymentInfo: '100% secure payment • Card via Stripe or instant PIX',
      popular: '⭐ POPULAR',
      donateButton: 'Donate via Card 💳',
      pixButton: 'Donate via PIX 💚',
      pixButtonSubtitle: 'Instant and no fees',
      pixButtonText: 'Open PIX',
      pixBenefits: {
        instant: 'Instant',
        noFees: 'No fees',
        secure: '100% secure',
        anyAmount: 'Any amount'
      },
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
        closeButton: 'Close',
        noteTitle: 'Leave a note (optional)',
        namePlaceholder: 'Your name (optional)',
        messagePlaceholder: 'Write your note here... (thanks, dedication, etc.)',
        sendEmailButton: 'Send note by email',
        noteInfo: 'Some banks do not transmit a message with static PIX. Send your note here and it will reach us.'
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
        },
        {
          id: '10000',
          amount: 'R$ 10,000',
          description: 'Fueling new educational initiatives',
          emoji: '🏫',
          color: 'from-emerald-500 to-teal-600',
          url: 'https://buy.stripe.com/6oUaEXdAzbWNfCjaBx2sM07'
        },
        {
          id: '25000',
          amount: 'R$ 25,000',
          description: 'Visionary sponsorship for educators',
          emoji: '🌟',
          color: 'from-cyan-500 to-sky-600',
          url: 'https://buy.stripe.com/4gM14n687e4V61J3952sM08'
        },
        {
          id: '50000',
          amount: 'R$ 50,000',
          description: 'Accelerating innovation and global impact',
          emoji: '🌍',
          color: 'from-indigo-500 to-blue-700',
          url: 'https://buy.stripe.com/14AfZh1RR3qh61J2512sM09'
        },
        {
          id: '100000',
          amount: 'R$ 100,000',
          description: 'Transformational investment in AI education',
          emoji: '👑',
          color: 'from-rose-500 to-purple-700',
          url: 'https://buy.stripe.com/4gM6oH1RR3qh9dVaBx2sM0a'
        }
      ]
    }
  };

  const t = content[language];
  const paymentOptions = t.paymentOptions;

  // Função para pagamento via Stripe (original)
  const handleStripePayment = (option: PaymentOption) => {
    setSelectedAmount(option.id);
    window.open(option.url, '_blank', 'noopener,noreferrer');
    setTimeout(() => {
      setSelectedAmount(null);
    }, 2000);
  };

  // Função para abrir modal PIX
  const openPixModal = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    console.log('🚀 Abrindo modal PIX - Estado atual:', showPixModal);
    setShowPixModal(true);
    console.log('🚀 Modal PIX definido como true');
  };

  // Função para fechar modal PIX
  const closePixModal = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    console.log('🚀 Fechando modal PIX');
    setShowPixModal(false);
    setPixCopied(false);
    setDonorName('');
    setDonorMessage('');
  };

  // Função para copiar código PIX
  const copyPixCode = async () => {
    try {
      await navigator.clipboard.writeText(pixCode);
      setPixCopied(true);
      setTimeout(() => setPixCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy PIX code:', err);
    }
  };

  const sendNoteByEmail = () => {
    const subject = language === 'en' ? 'Note with PIX donation' : 'Recado com doação via PIX';
    const lines: string[] = [];
    if (donorName.trim()) {
      lines.push((language === 'en' ? 'Name: ' : 'Nome: ') + donorName.trim());
    }
    lines.push(language === 'en' ? 'Message:' : 'Mensagem:');
    lines.push(donorMessage.trim());
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n\n'))}`;
    window.location.href = mailto;
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

        {/* Payment Options Grid + PIX Button */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Cards Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              <div className="bg-white dark:bg-gray-700 rounded-2xl border-2 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 p-6 transition-all duration-300 hover:shadow-xl">
                {/* Emoji */}
                <div className="text-4xl mb-3 text-center">
                  {option.emoji}
                </div>

                {/* Amount */}
                <div className={`text-2xl font-bold mb-2 text-center bg-gradient-to-r ${option.color} bg-clip-text text-transparent`}>
                  {option.amount}
                </div>

                {/* Description */}
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-4 text-center">
                  {option.description}
                </div>

                {/* Botões lado a lado */}
                <div className="space-y-3">
                  {/* Botão Stripe */}
                  <motion.button
                    onClick={() => handleStripePayment(option)}
                    disabled={selectedAmount === option.id}
                    className={`w-full p-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                      selectedAmount === option.id
                        ? 'bg-green-500 text-white'
                        : `bg-gradient-to-r ${option.color} text-white hover:shadow-lg`
                    }`}
                    whileHover={{ scale: selectedAmount === option.id ? 1 : 1.02 }}
                    whileTap={{ scale: selectedAmount === option.id ? 1 : 0.98 }}
                  >
                    {selectedAmount === option.id ? (
                      <div className="flex items-center justify-center space-x-2">
                        <motion.div
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>{t.redirecting}</span>
                      </div>
                    ) : (
                      t.donateButton
                    )}
                  </motion.button>


                </div>
              </div>
                          </motion.div>
            ))}
            </div>
          </div>

          {/* BOTÃO PIX ÚNICO GIGANTE AO LADO */}
          <div className="lg:w-80">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 rounded-3xl p-8 shadow-2xl border-4 border-green-300 hover:shadow-green-500/25 transition-all duration-300 hover:scale-105"
            >
              {/* Coração Pulsante Gigante */}
              <div className="text-center mb-6">
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="text-8xl mb-4 drop-shadow-lg"
                >
                  💚
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-md">
                  {t.pixButton}
                </h3>
                <p className="text-green-100 text-lg font-medium">
                  {t.pixButtonSubtitle}
                </p>
              </div>

              {/* Botão PIX */}
              <button
                onClick={() => {
                  console.log('🚀 Clique PIX!');
                  setShowPixModal(true);
                }}
                className="w-full p-6 bg-white hover:bg-green-50 text-green-600 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 border-2 border-green-200 hover:border-green-300"
                style={{
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.3), 0 10px 30px rgba(0,0,0,0.1)'
                }}
              >
                <span className="text-3xl">📱</span>
                <span>{t.pixButtonText}</span>
              </button>

              {/* Benefícios do PIX */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-3 text-white">
                  <span className="text-xl">⚡</span>
                  <span className="font-medium">{t.pixBenefits.instant}</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <span className="text-xl">💰</span>
                  <span className="font-medium">{t.pixBenefits.noFees}</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <span className="text-xl">🔒</span>
                  <span className="font-medium">{t.pixBenefits.secure}</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <span className="text-xl">📲</span>
                  <span className="font-medium">{t.pixBenefits.anyAmount}</span>
                </div>
              </div>
            </motion.div>
          </div>
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

      {/* MODAL PIX SIMPLES */}
      {showPixModal && (
        <div 
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: '999999',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingBottom: '-5px'
          }}
          onClick={closePixModal}
        >
          <div 
            style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '15px',
              maxWidth: '400px',
              width: '90%',
              textAlign: 'center',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
              border: '2px solid #10b981'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ margin: '0 0 20px 0', fontSize: '24px' }}>
              💚 {language === 'en' ? 'PIX Donation' : 'Doação PIX'}
            </h2>
            
            <p style={{ margin: '0 0 20px 0', color: '#666' }}>
              {language === 'en' ? 'Scan QR Code or copy PIX code' : 'Escaneie o QR Code ou copie o código PIX'}
            </p>
            
            <div style={{ margin: '20px 0' }}>
              <img 
                src="https://nyc.cloud.appwrite.io/v1/storage/buckets/686435bf000edf105b7c/files/686435e90001a6408df5/view?project=680e68b10024125b5c0b&mode=admin"
                alt="PIX QR Code"
                style={{ width: '200px', height: '200px', border: '2px solid #10b981', borderRadius: '10px' }}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = '/images/pix-qrcode-ai-teacher.pro.png';
                }}
              />
            </div>
            
            <div style={{ backgroundColor: '#ffffff', padding: '15px', borderRadius: '8px', margin: '20px 0', border: '2px solid #6c757d', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' }}>
              <code style={{ fontSize: '11px', wordBreak: 'break-all', color: '#000000', fontFamily: 'Courier New, monospace', lineHeight: '1.5', fontWeight: '600' }}>
                {pixCode}
              </code>
            </div>
            
            <button 
              onClick={copyPixCode}
              style={{
                width: '100%',
                padding: '15px',
                backgroundColor: pixCopied ? '#10b981' : '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer',
                marginBottom: '10px'
              }}
            >
              {pixCopied ? '✅ ' + (language === 'en' ? 'Copied!' : 'Copiado!') : '📋 ' + (language === 'en' ? 'Copy PIX Code' : 'Copiar Código PIX')}
            </button>

            {/* Note form */}
            <div style={{ textAlign: 'left', marginTop: '18px' }}>
              <h3 style={{ fontSize: '16px', margin: '0 0 8px 0', color: '#111827' }}>
                ✍️ {t.pixModal.noteTitle}
              </h3>
              <input
                type="text"
                placeholder={t.pixModal.namePlaceholder}
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  marginBottom: '8px',
                  fontSize: '14px'
                }}
              />
              <textarea
                placeholder={t.pixModal.messagePlaceholder}
                value={donorMessage}
                onChange={(e) => setDonorMessage(e.target.value)}
                rows={4}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  marginBottom: '10px',
                  fontSize: '14px',
                  resize: 'vertical'
                }}
              />
              <button
                onClick={sendNoteByEmail}
                disabled={!donorMessage.trim()}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: donorMessage.trim() ? '#2563eb' : '#93c5fd',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '15px',
                  cursor: donorMessage.trim() ? 'pointer' : 'not-allowed',
                  marginBottom: '8px',
                  fontWeight: 600 as any
                }}
              >
                ✉️ {t.pixModal.sendEmailButton}
              </button>
              <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>
                {t.pixModal.noteInfo}
              </p>
            </div>
            
            <button 
              onClick={closePixModal}
              style={{
                width: '100%',
                padding: '15px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              ❌ {language === 'en' ? 'Close' : 'Fechar'}
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes heartPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `}</style>
    </>
  );
};

export default StripePaymentLinks; 
