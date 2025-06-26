import React from 'react';

const AboutPagePTBR: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Sobre o AI Teacher Pro
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Capacitando educadores a aproveitar o poder transformador da inteligência artificial 
            em suas salas de aula através de orientação prática e ferramentas de ponta.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Nossa Missão
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Acreditamos que a inteligência artificial não é apenas o futuro da educação—é o presente. 
              Nossa missão é preencher a lacuna entre a tecnologia de IA de ponta e a aplicação prática 
              em sala de aula, ajudando professores de todo o mundo a amplificar seu impacto e transformar 
              as experiências de aprendizagem dos estudantes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Foco Prático</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Soluções reais para salas de aula reais
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Excelência</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Apenas recursos curados de alta qualidade
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Comunidade</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Construindo conexões entre educadores
                </p>
              </div>
            </div>
          </div>

          {/* The Book Section */}
          <div id="buy" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 scroll-mt-24">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                O Livro: "IA Generativa para Professores"
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Nosso guia abrangente fornece aos professores do ensino médio e do IB estratégias práticas 
                para integrar ferramentas de IA generativa em sua prática diária de ensino. Do planejamento 
                de aulas à avaliação, descubra como a IA pode potencializar ao invés de substituir sua expertise.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">320+ páginas de orientação prática</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">50+ exemplos reais de sala de aula</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Guias de implementação passo a passo</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Considerações éticas e melhores práticas</span>
                </div>
              </div>
              
              {/* Purchase Options */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Adquira sua Cópia:</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="https://www.amazon.com.br/dp/B0FF9NBJNT" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 flex-1 justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Comprar na Amazon
                  </a>
                  <a 
                    href="/about#buy" 
                    className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 flex-1 justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M3 12h18m-9 7h9" />
                    </svg>
                    🇬🇧 English Version
                  </a>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Disponível em capa comum e edição Kindle. Frete internacional disponível.
                </div>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://nyc.cloud.appwrite.io/v1/storage/buckets/68518e5500284ee65814/files/68518ebd0024ac797a36/view?project=680e68b10024125b5c0b&mode=admin" 
                alt="Capa do livro IA Generativa para Professores – livro aberto com braço robótico e lâmpada"
                className="mx-auto rounded-2xl shadow-2xl max-w-sm w-full hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
              Nossos Valores Fundamentais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: '🔍',
                  title: 'Transparência',
                  description: 'Abertos sobre capacidades e limitações da IA'
                },
                {
                  icon: '⚖️',
                  title: 'Ética',
                  description: 'Uso responsável da IA em ambientes educacionais'
                },
                {
                  icon: '📈',
                  title: 'Inovação',
                  description: 'Sempre à frente nas tendências de tecnologia educacional'
                },
                {
                  icon: '🎓',
                  title: 'Educação em Primeiro Lugar',
                  description: 'A tecnologia serve à pedagogia, não o contrário'
                }
              ].map((value, index) => (
                <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Tem dúvidas ou sugestões? Adoraríamos ouvir de você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contato@ai-teachers.pro" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Envie um Email
            </a>
            <a 
              href="#newsletter" 
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5h5m-5-5v5" />
              </svg>
              Junte-se à Nossa Newsletter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPagePTBR;