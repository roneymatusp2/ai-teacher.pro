import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PlatformsPagePTBR: React.FC = () => {
  const platforms = [
    {
      name: 'OpenAI',
      description: 'ChatGPT, GPT-4, DALL-E - a plataforma líder em IA generativa',
      features: ['Modelos de linguagem avançados', 'Geração de imagens', 'API robusta', 'Integração educacional'],
      pricing: 'Freemium - $20/mês para Plus',
      educationDiscount: 'Descontos para educadores disponíveis',
      bestFor: 'Criação de conteúdo, tutoria personalizada, geração de exercícios',
      website: 'https://openai.com',
      icon: '🤖'
    },
    {
      name: 'Google AI',
      description: 'Bard, PaLM, Gemini - ferramentas IA integradas ao ecossistema Google',
      features: ['Integração com Google Workspace', 'Modelos multimodais', 'Ferramentas educacionais', 'Análise de dados'],
      pricing: 'Gratuito com limitações',
      educationDiscount: 'Google for Education gratuito',
      bestFor: 'Colaboração, pesquisa, análise de dados educacionais',
      website: 'https://ai.google',
      icon: '🔍'
    },
    {
      name: 'Microsoft Copilot',
      description: 'IA integrada ao Office 365 e ferramentas Microsoft',
      features: ['Integração Office', 'Teams Education', 'OneNote AI', 'PowerPoint Designer'],
      pricing: '$30/usuário/mês (Microsoft 365)',
      educationDiscount: 'Gratuito para instituições educacionais',
      bestFor: 'Produtividade, apresentações, documentação colaborativa',
      website: 'https://copilot.microsoft.com',
      icon: '📊'
    },
    {
      name: 'Anthropic Claude',
      description: 'IA conversacional focada em segurança e precisão',
      features: ['Conversas longas', 'Análise de documentos', 'Raciocínio ético', 'Precisão factual'],
      pricing: '$20/mês para Pro',
      educationDiscount: 'Políticas especiais para educação',
      bestFor: 'Análise crítica, discussões éticas, revisão de textos',
      website: 'https://claude.ai',
      icon: '🎓'
    },
    {
      name: 'Canva AI',
      description: 'Ferramentas de design com IA integrada',
      features: ['Magic Design', 'Background Remover', 'Text to Image', 'Brand Kit'],
      pricing: 'Freemium - $12.99/mês para Pro',
      educationDiscount: 'Canva for Education gratuito',
      bestFor: 'Design visual, materiais didáticos, apresentações',
      website: 'https://canva.com',
      icon: '🎨'
    },
    {
      name: 'Grammarly',
      description: 'Assistente de escrita com IA para correção e melhoria de textos',
      features: ['Correção gramatical', 'Sugestões de estilo', 'Detector de plágio', 'Escrita acadêmica'],
      pricing: 'Freemium - $12/mês para Premium',
      educationDiscount: 'Descontos para estudantes e educadores',
      bestFor: 'Correção de textos, feedback de escrita, desenvolvimento de linguagem',
      website: 'https://grammarly.com',
      icon: '✏️'
    }
  ];

  const comparisonFactors = [
    {
      factor: 'Custo',
      description: 'Compare preços, modelos freemium e descontos educacionais',
      icon: '💰'
    },
    {
      factor: 'Facilidade de Uso',
      description: 'Interface intuitiva, curva de aprendizado, suporte',
      icon: '👥'
    },
    {
      factor: 'Recursos Educacionais',
      description: 'Ferramentas específicas para educação, templates, exemplos',
      icon: '🎯'
    },
    {
      factor: 'Privacidade e Segurança',
      description: 'FERPA compliance, proteção de dados, políticas de privacidade',
      icon: '🔒'
    },
    {
      factor: 'Integração',
      description: 'APIs, plugins, integração com LMS existentes',
      icon: '🔗'
    },
    {
      factor: 'Suporte',
      description: 'Documentação, comunidade, suporte técnico',
      icon: '🆘'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              🏗️ Plataformas de IA para Educação
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Guia completo das principais plataformas de inteligência artificial para educadores. 
              Compare recursos, preços, funcionalidades educacionais e encontre a solução ideal para sua instituição.
            </p>
            <div className="mt-8 inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
              <span className="text-white font-medium">
                📊 Atualizado continuamente • 🎯 Foco educacional • 💰 Inclui descontos
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/pt-br/book-resources"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para Recursos do Livro
          </Link>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Matriz de Comparação de Plataformas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Análise detalhada das principais plataformas de IA com foco em aplicações educacionais
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">{platform.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {platform.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Recursos Principais</h4>
                    <ul className="space-y-1">
                      {platform.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                          <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">PREÇO</span>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{platform.pricing}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">EDUCAÇÃO</span>
                        <p className="text-sm text-green-600 dark:text-green-400">{platform.educationDiscount}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">MELHOR PARA</span>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{platform.bestFor}</p>
                      </div>
                    </div>
                  </div>

                  <motion.a
                    href={platform.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Visitar Plataforma →
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Factors */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Fatores de Comparação
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Critérios essenciais para avaliar plataformas de IA para uso educacional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comparisonFactors.map((factor, index) => (
              <motion.div
                key={factor.factor}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{factor.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {factor.factor}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {factor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Tools */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              🛠️ Ferramentas de Suporte
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  📊 Calculadora de Custos
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Calcule os custos mensais e anuais baseados no número de usuários e uso esperado.
                </p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-medium hover:from-green-700 hover:to-blue-700 transition-all duration-200">
                  Acessar Calculadora
                </button>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  📋 Checklist de Implementação
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Guia passo a passo para implementar IA em sua instituição educacional.
                </p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                  Baixar Checklist
                </button>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-700">
              <h3 className="text-lg font-bold text-blue-900 dark:text-blue-200 mb-3">
                💡 Dica Profissional
              </h3>
              <p className="text-blue-800 dark:text-blue-300">
                Comece sempre com as versões gratuitas ou de teste antes de fazer investimentos maiores. 
                A maioria das plataformas oferece períodos de avaliação que permitem testar a adequação 
                para suas necessidades específicas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PlatformsPagePTBR;