import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PlanningToolkitPagePTBR: React.FC = () => {
  const planningTools = [
    {
      title: 'Prompts para Planejamento de Aulas',
      description: 'Coleção completa de prompts para criar planos de aula eficazes com IA',
      category: 'Prompts',
      tools: [
        'Gerador de objetivos de aprendizagem',
        'Criador de atividades interativas', 
        'Planejador de avaliações formativas',
        'Gerador de recursos educacionais'
      ],
      icon: '📝'
    },
    {
      title: 'Templates LaTeX Educacionais',
      description: 'Templates profissionais para documentos acadêmicos e materiais didáticos',
      category: 'Templates',
      tools: [
        'Template de plano de aula',
        'Modelo de prova/exame',
        'Layout de apostila',
        'Formato de relatório acadêmico'
      ],
      icon: '📄'
    },
    {
      title: 'Ferramentas de Cronograma',
      description: 'Planejadores e organizadores para o ano letivo e períodos de aula',
      category: 'Planejamento',
      tools: [
        'Calendário anual interativo',
        'Planejador semanal de aulas',
        'Cronograma de avaliações',
        'Organizador de projetos'
      ],
      icon: '📅'
    },
    {
      title: 'Geradores de Conteúdo',
      description: 'Ferramentas IA para criar exercícios, questões e materiais de estudo',
      category: 'Criação',
      tools: [
        'Gerador de questões múltipla escolha',
        'Criador de estudos de caso',
        'Gerador de problemas matemáticos',
        'Criador de atividades práticas'
      ],
      icon: '🎯'
    },
    {
      title: 'Assistentes de Feedback',
      description: 'IAs especializadas em fornecer feedback construtivo e personalizado',
      category: 'Avaliação',
      tools: [
        'Analisador de redações',
        'Feedback automático de exercícios',
        'Avaliador de apresentações',
        'Revisor de projetos'
      ],
      icon: '📊'
    },
    {
      title: 'Recursos Multimídia',
      description: 'Ferramentas para criar conteúdo visual e interativo com IA',
      category: 'Mídia',
      tools: [
        'Gerador de diagramas educacionais',
        'Criador de infográficos',
        'Gerador de mapas conceituais',
        'Criador de apresentações'
      ],
      icon: '🎨'
    }
  ];

  const videoTutorials = [
    {
      title: 'Introdução ao Planejamento com IA',
      duration: '15 min',
      level: 'Iniciante',
      description: 'Conceitos básicos e primeiros passos'
    },
    {
      title: 'Criando Planos de Aula Eficazes',
      duration: '25 min',
      level: 'Intermediário',
      description: 'Técnicas avançadas de planejamento'
    },
    {
      title: 'Automatização de Tarefas Repetitivas',
      duration: '20 min',
      level: 'Avançado',
      description: 'Workflows e automações educacionais'
    },
    {
      title: 'Personalização para Diferentes Disciplinas',
      duration: '30 min',
      level: 'Especialista',
      description: 'Adaptações específicas por matéria'
    }
  ];

  const bestPractices = [
    {
      title: 'Comece Simples',
      description: 'Inicie com uma ferramenta por vez e domine antes de adicionar outras',
      icon: '🌱'
    },
    {
      title: 'Personalize Sempre',
      description: 'Adapte todos os conteúdos gerados para sua realidade e contexto',
      icon: '🎯'
    },
    {
      title: 'Mantenha o Humano',
      description: 'IA deve amplificar sua criatividade, não substituir seu julgamento',
      icon: '❤️'
    },
    {
      title: 'Itere e Melhore',
      description: 'Refine continuamente seus prompts e workflows baseado nos resultados',
      icon: '🔄'
    },
    {
      title: 'Colabore e Compartilhe',
      description: 'Trabalhe com colegas para trocar experiências e melhores práticas',
      icon: '🤝'
    },
    {
      title: 'Avalie o Impacto',
      description: 'Monitore como a IA está afetando o aprendizado dos seus alunos',
      icon: '📈'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              🧰 Kit Completo de Planejamento com IA
            </h1>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Tudo que você precisa para transformar seu planejamento educacional com inteligência artificial. 
              Prompts testados, templates profissionais, tutoriais em vídeo e ferramentas práticas.
            </p>
            <div className="mt-8 inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
              <span className="text-white font-medium">
                📚 50+ Templates • 🎥 10+ Vídeos • 🔧 Ferramentas Práticas
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

      {/* Planning Tools Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ferramentas de Planejamento
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Conjunto completo de recursos para revolucionar seu planejamento educacional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planningTools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">{tool.icon}</div>
                  <div>
                    <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium rounded-full mb-2">
                      {tool.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {tool.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {tool.description}
                </p>

                <div className="space-y-2 mb-6">
                  {tool.tools.map((item, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>

                <motion.button
                  className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl font-medium hover:from-green-700 hover:to-teal-700 transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Acessar Ferramentas →
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
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
              🎥 Tutoriais em Vídeo
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Aprenda passo a passo como usar cada ferramenta de forma eficaz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoTutorials.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {video.description}
                    </p>
                  </div>
                  <div className="text-3xl ml-4">🎥</div>
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <span className="inline-flex items-center px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">
                    ⏱️ {video.duration}
                  </span>
                  <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                    video.level === 'Iniciante' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                    video.level === 'Intermediário' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                    video.level === 'Avançado' ? 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200' :
                    'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                  }`}>
                    📊 {video.level}
                  </span>
                </div>

                <motion.button
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Assistir Vídeo →
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              💡 Melhores Práticas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Princípios fundamentais para usar IA no planejamento educacional de forma eficaz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestPractices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{practice.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {practice.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {practice.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              📥 Baixe o Kit Completo
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Acesse todos os recursos offline: templates, prompts, checklists e guias em um único download.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-white text-green-600 font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-200 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📦 Download Completo (PDF + Templates)
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                🎯 Apenas Prompts Essenciais
              </motion.button>
            </div>

            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <h3 className="text-lg font-bold text-white mb-3">
                🔄 Atualizações Contínuas
              </h3>
              <p className="text-green-100 text-sm">
                Este kit é atualizado mensalmente com novos recursos, prompts aprimorados e ferramentas baseadas no feedback da comunidade educacional.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PlanningToolkitPagePTBR;