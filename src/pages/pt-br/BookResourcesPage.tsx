import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookResource {
  id: string;
  title: string;
  url: string;
  description: string;
  chapter: string;
  category: 'platforms' | 'examples' | 'toolkits' | 'guides' | 'hubs' | 'implementations';
  qrContext?: string;
}

const BookResourcesPagePTBR: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const bookResources: BookResource[] = [
    // Chapter 2 - Plataformas IA
    {
      id: 'platforms',
      title: 'Recursos Abrangentes de Plataformas',
      url: 'https://ai-teacher.pro/pt-br/platforms',
      description: 'Base de dados continuamente atualizada de comparação de plataformas, guias de configuração, calculadoras de custos e exemplos práticos de implementação',
      chapter: 'Capítulo 2',
      category: 'platforms',
      qrContext: 'Caixa de código QR no Capítulo 2 - Plataformas IA'
    },

    // Chapter 3 - Engenharia de Prompts
    {
      id: 'chapter3-ex1',
      title: 'Exemplos Completos de Texto GUIDE+',
      url: 'https://ai-teacher.pro/pt-br/chapter3-ex1',
      description: 'Biblioteca abrangente de prompts educacionais baseados em texto',
      chapter: 'Capítulo 3',
      category: 'examples',
      qrContext: 'Linhas 208-210'
    },
    {
      id: 'chapter3-ex2',
      title: 'Prompts Educacionais VEO 3',
      url: 'https://ai-teacher.pro/pt-br/chapter3-ex2',
      description: 'Biblioteca completa de prompts VEO 3 para educadores',
      chapter: 'Capítulo 3',
      category: 'examples',
      qrContext: 'Linhas 265-267'
    },
    {
      id: 'chapter3-ex3',
      title: 'Templates Educacionais Hailuo AI',
      url: 'https://ai-teacher.pro/pt-br/chapter3-ex3',
      description: 'Coleção de prompts de micro-vídeo para engajamento instantâneo',
      chapter: 'Capítulo 3',
      category: 'examples',
      qrContext: 'Linhas 316-318'
    },
    {
      id: 'chapter3-ex4',
      title: 'Técnicas Avançadas de Iteração',
      url: 'https://ai-teacher.pro/pt-br/chapter3-ex4',
      description: 'Estratégias profissionais de iteração e métodos de refinamento',
      chapter: 'Capítulo 3',
      category: 'guides',
      qrContext: 'Linhas 370-372'
    },
    {
      id: 'chapter3-ex5',
      title: 'Framework de Desenvolvimento Profissional',
      url: 'https://ai-teacher.pro/pt-br/chapter3-ex5',
      description: 'Recursos completos de desenvolvimento profissional e comunidade',
      chapter: 'Capítulo 3',
      category: 'hubs',
      qrContext: 'Linhas 429-431'
    },
    {
      id: 'chapter3-ex6',
      title: 'Diretório de Ferramentas Automatizadas',
      url: 'https://ai-teacher.pro/pt-br/chapter3-ex6',
      description: 'Diretório de ferramentas de geração de prompts e tutoriais',
      chapter: 'Capítulo 3',
      category: 'toolkits',
      qrContext: 'Linhas 456-458'
    },
    {
      id: 'chapter3-ex7',
      title: 'Guia de Integração do Capítulo',
      url: 'https://ai-teacher.pro/pt-br/chapter3-ex7',
      description: 'Como a engenharia de prompts se conecta em aplicações educacionais',
      chapter: 'Capítulo 3',
      category: 'guides',
      qrContext: 'Linhas 476-478'
    },

    // Chapter 4 - Planejamento com IA
    {
      id: 'planning-toolkit',
      title: 'Kit Completo de Planejamento com IA',
      url: 'https://ai-teacher.pro/pt-br/planning-toolkit',
      description: 'Coleção completa de prompts, templates, exemplos LaTeX e tutoriais em vídeo para planejamento assistido por IA',
      chapter: 'Capítulo 4',
      category: 'toolkits',
      qrContext: 'Linhas 1060-1062'
    },

    // Chapter 5 - Criação de Conteúdo
    {
      id: 'chapter5-ex1',
      title: 'Geração de Prova de Matemática IB',
      url: 'https://ai-teacher.pro/pt-br/chapter5-ex1',
      description: 'Demonstração completa da geração de Prova 1 de Matemática IB incluindo materiais fonte, prompts e saída LaTeX profissional',
      chapter: 'Capítulo 5',
      category: 'examples',
      qrContext: 'Linhas 493-495'
    },

    // Chapter 6 - Desenvolvimento Web
    {
      id: 'education-discounts',
      title: 'Hub de Recursos de Descontos Educacionais',
      url: 'https://ai-teacher.pro/pt-br/education-discounts',
      description: 'Base de dados abrangente de descontos educacionais, guias passo a passo de registro e processos de verificação',
      chapter: 'Capítulo 6',
      category: 'hubs',
      qrContext: 'Linhas 47-49'
    },
    {
      id: 'chapter6-ess-prompt',
      title: 'Prompt Completo do Explorador de Dados ESS',
      url: 'https://ai-teacher.pro/pt-br/chapter6-ess-prompt',
      description: 'Prompt completo e detalhado para Explorador de Dados Matemáticos de Sistemas e Sociedades Ambientais',
      chapter: 'Capítulo 6',
      category: 'examples',
      qrContext: 'Linhas 196-198'
    },
    {
      id: 'chapter6-bolt',
      title: 'Explorador de Dados ESS Bolt.new',
      url: 'https://ai-teacher.pro/pt-br/chapter6-bolt',
      description: 'Exemplo de implementação específica de plataforma usando Bolt.new',
      chapter: 'Capítulo 6',
      category: 'implementations',
      qrContext: 'Linhas 213-214'
    },
    {
      id: 'chapter6-lovable',
      title: 'Explorador de Dados ESS Lovable.dev',
      url: 'https://ai-teacher.pro/pt-br/chapter6-lovable',
      description: 'Exemplo de implementação específica de plataforma usando Lovable.dev',
      chapter: 'Capítulo 6',
      category: 'implementations',
      qrContext: 'Linhas 221-222'
    },
    {
      id: 'chapter6-base44',
      title: 'Explorador de Dados ESS Base44',
      url: 'https://ai-teacher.pro/pt-br/chapter6-base44',
      description: 'Exemplo de implementação específica de plataforma usando Base44',
      chapter: 'Capítulo 6',
      category: 'implementations',
      qrContext: 'Linhas 229-230'
    },
    {
      id: 'chapter6-create',
      title: 'Explorador de Dados ESS Create.xyz',
      url: 'https://ai-teacher.pro/pt-br/chapter6-create',
      description: 'Exemplo de implementação específica de plataforma usando Create.xyz',
      chapter: 'Capítulo 6',
      category: 'implementations',
      qrContext: 'Linhas 237-238'
    },
    {
      id: 'chapter6-replit',
      title: 'Explorador de Dados ESS Replit',
      url: 'https://ai-teacher.pro/pt-br/chapter6-replit',
      description: 'Exemplo de implementação específica de plataforma usando Replit',
      chapter: 'Capítulo 6',
      category: 'implementations',
      qrContext: 'Linhas 245-246'
    },
    {
      id: 'chapter6-manus',
      title: 'Explorador de Dados ESS Manus',
      url: 'https://ai-teacher.pro/pt-br/chapter6-manus',
      description: 'Exemplo de implementação específica de plataforma usando Manus',
      chapter: 'Capítulo 6',
      category: 'implementations',
      qrContext: 'Linhas 253-254'
    },
    {
      id: 'chapter6-resources',
      title: 'Hub Completo de Recursos do Capítulo 6',
      url: 'https://ai-teacher.pro/pt-br/chapter6-resources',
      description: 'Recursos abrangentes incluindo exemplos de plataformas, guias de implementação, tutoriais avançados, prompts de template e fóruns da comunidade',
      chapter: 'Capítulo 6',
      category: 'hubs',
      qrContext: 'Linhas 631-633'
    },

    // Chapter 7 - Ética em IA
    {
      id: 'ethics-resources',
      title: 'Hub Abrangente de Recursos de Ética em IA',
      url: 'https://ai-teacher.pro/pt-br/ethics-resources',
      description: 'Guias de implementação do framework UNESCO, ferramentas de detecção de viés, checklists de conformidade de privacidade, protocolos de cibersegurança e templates de framework ético',
      chapter: 'Capítulo 7',
      category: 'hubs',
      qrContext: 'Linhas 694-696'
    },

    // Chapter 8 - Preparação para o Futuro
    {
      id: 'future-ready',
      title: 'Continue sua Jornada',
      url: 'https://ai-teacher.pro/pt-br/future-ready',
      description: 'Recursos contínuos, conexões comunitárias e orientação atualizada para professores preparados para o futuro',
      chapter: 'Capítulo 8',
      category: 'hubs',
      qrContext: 'Linhas 907-909'
    }
  ];

  const chapters = ['all', 'Capítulo 2', 'Capítulo 3', 'Capítulo 4', 'Capítulo 5', 'Capítulo 6', 'Capítulo 7', 'Capítulo 8', 'Hub', 'Companion', 'Sobre'];
  const categories = ['all', 'platforms', 'examples', 'toolkits', 'guides', 'hubs', 'implementations'];

  const categoryLabels = {
    all: 'Todas as Categorias',
    platforms: 'Plataformas',
    examples: 'Exemplos',
    toolkits: 'Kits de Ferramentas',
    guides: 'Guias',
    hubs: 'Hubs',
    implementations: 'Implementações'
  };

  const filteredResources = bookResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesChapter = selectedChapter === 'all' || resource.chapter === selectedChapter;
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    
    return matchesSearch && matchesChapter && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'platforms': return '🏗️';
      case 'examples': return '💡';
      case 'toolkits': return '🧰';
      case 'guides': return '📋';
      case 'hubs': return '🌐';
      case 'implementations': return '⚙️';
      default: return '📚';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'platforms': return 'from-blue-500 to-blue-600';
      case 'examples': return 'from-green-500 to-green-600';
      case 'toolkits': return 'from-purple-500 to-purple-600';
      case 'guides': return 'from-orange-500 to-orange-600';
      case 'hubs': return 'from-red-500 to-red-600';
      case 'implementations': return 'from-teal-500 to-teal-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              📚 Recursos Exclusivos do Livro
            </h1>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Bem-vindo à coleção completa de recursos de "IA Generativa para Professores". 
              Acesse todos os exemplos de capítulos, kits de ferramentas, plataformas e conteúdo exclusivo através dos códigos QR em seu livro.
            </p>
            <div className="mt-8 inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
              <span className="text-white font-medium">
                🎯 {bookResources.length} Recursos Premium Disponíveis
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Pesquisar recursos, exemplos, kits de ferramentas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
            </div>

            {/* Chapter Filter */}
            <div className="lg:w-64">
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white"
              >
                {chapters.map(chapter => (
                  <option key={chapter} value={chapter}>
                    {chapter === 'all' ? 'Todos os Capítulos' : chapter}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Mostrando {filteredResources.length} de {bookResources.length} recursos
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedChapter}-${selectedCategory}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="glass-card p-6 h-full hover:shadow-2xl transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getCategoryColor(resource.category)} flex items-center justify-center text-white text-xl`}>
                          {getCategoryIcon(resource.category)}
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {resource.chapter}
                          </span>
                          <div className="text-xs text-gray-400 dark:text-gray-500 capitalize">
                            {categoryLabels[resource.category as keyof typeof categoryLabels]}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors leading-tight">
                        {resource.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                        {resource.description}
                      </p>
                    </div>

                    {/* QR Context */}
                    {resource.qrContext && (
                      <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <div className="text-xs font-medium text-blue-800 dark:text-blue-200 mb-1">
                          📱 Localização do Código QR
                        </div>
                        <div className="text-xs text-blue-600 dark:text-blue-300">
                          {resource.qrContext}
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    <motion.a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full px-4 py-3 bg-gradient-to-r ${getCategoryColor(resource.category)} text-white text-center rounded-xl font-medium hover:shadow-lg transition-all duration-200`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Acessar Recurso →
                    </motion.a>

                    {/* URL Preview */}
                    <div className="mt-3 text-xs text-gray-400 dark:text-gray-500 break-all">
                      {resource.url}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredResources.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Nenhum recurso encontrado
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Tente ajustar sua pesquisa ou critérios de filtro.
              </p>
              <motion.button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedChapter('all');
                  setSelectedCategory('all');
                }}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl font-medium hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Limpar Todos os Filtros
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              📖 Sobre Estes Recursos
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Estes recursos estão disponíveis exclusivamente para leitores de "IA Generativa para Professores". 
              Cada recurso é cuidadosamente curado para apoiar sua jornada na implementação de IA na educação.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Específicos por Capítulo</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Recursos organizados por capítulos do livro para fácil referência
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🔄</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Atualizados Regularmente</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Conteúdo continuamente atualizado com as últimas ferramentas e exemplos
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Acesso via Código QR</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Acesso rápido através de códigos QR em seu livro físico
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BookResourcesPagePTBR;