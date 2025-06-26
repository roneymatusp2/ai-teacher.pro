import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DonationSectionPTBR: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(20000); // Default R$ 200
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const predefinedAmounts = [
    { value: 20000, label: 'R$ 200,00' },
    { value: 50000, label: 'R$ 500,00' },
    { value: 100000, label: 'R$ 1.000,00' },
  ];

  const handleDonate = async () => {
    setIsLoading(true);
    
    try {
      let amountInCentavos: number;
      
      if (selectedAmount === 'custom') {
        const customValue = parseFloat(customAmount.replace(',', '.'));
        if (!customValue || customValue < 10 || customValue > 5000) {
          alert('Por favor, digite um valor entre R$ 10,00 e R$ 5.000,00');
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
          language: 'pt'
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
      alert('Erro ao processar doação. Tente novamente.');
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
            Apoie Nossa Missão Educacional
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Ajude-nos a continuar fornecendo conteúdo educacional de qualidade com IA
          </motion.p>
          <motion.p 
            className="text-gray-500 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Sua doação nos ajuda a manter e melhorar nossa plataforma, criar novo conteúdo e manter tudo gratuito para educadores em todo o mundo.
          </motion.p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left side - Benefits */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Como você ajuda:
              </h3>
              <div className="space-y-4">
                {[
                  '🎓 Apoie conteúdo educacional de qualidade',
                  '🌍 Ajude professores em todo o mundo',
                  '🚀 Possibilite melhorias na plataforma',
                  '💝 100% vai para recursos educacionais'
                ].map((benefit, index) => (
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
              
              <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-2xl">🎯</span>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Transparência Total</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Todas as doações são utilizadas exclusivamente para:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                  <li>• Manutenção e hospedagem da plataforma</li>
                  <li>• Desenvolvimento de novos recursos</li>
                  <li>• Criação de conteúdo educacional</li>
                  <li>• Suporte técnico aos usuários</li>
                </ul>
              </div>
            </div>

            {/* Right side - Donation form */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Escolha o valor da sua contribuição:
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
                    <div className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                      {amount.value === 20000 && '☕ Um café especial'}
                      {amount.value === 50000 && '🍕 Um almoço generoso'}
                      {amount.value === 100000 && '🎁 Um presente incrível'}
                    </div>
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
                  <span className="text-lg font-medium text-gray-800 dark:text-white">Ou qualquer valor que seu coração mandar</span>
                  <div className="ml-auto text-sm text-gray-500 dark:text-gray-400">💖 Do coração</div>
                </label>
                
                {selectedAmount === 'custom' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pl-7"
                  >
                    <input
                      type="number"
                      placeholder="Digite o valor (R$ 10,00 - R$ 5.000,00)"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      min="10"
                      max="5000"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Valor mínimo: R$ 10,00 | Valor máximo: R$ 5.000,00
                    </p>
                  </motion.div>
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
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processando...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <span>💝</span>
                    <span>Fazer Doação</span>
                  </div>
                )}
              </motion.button>

              <div className="mt-4 space-y-2">
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  🔒 Pagamento 100% seguro via Stripe
                </p>
                <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                  Aceitamos cartões de crédito, débito, PIX e outros métodos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DonationSectionPTBR;