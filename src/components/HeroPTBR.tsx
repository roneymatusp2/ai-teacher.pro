import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import MorphingButton from './MorphingButton';
import ParallaxSection from './ParallaxSection';

const HeroPTBR: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const heroImageVariants = {
    hidden: { 
      scale: 0.4,
      opacity: 0,
      rotateY: -30,
      filter: 'blur(10px)'
    },
    visible: {
      scale: 0.45, // Reduzido ainda mais
      opacity: 0.6, // Reduzida a opacidade
      rotateY: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const featurePillVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const handleGetBookClick = () => {
    const aboutSection = document.getElementById('buy');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/pt-br/about#buy';
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image com ajustes melhorados */}
      <div className="absolute inset-0 z-5">
        <div className="hidden sm:block absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="relative w-full h-full flex items-center justify-end pr-20" // Posicionamento à direita
            variants={heroImageVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.img
              src="https://nyc.cloud.appwrite.io/v1/storage/buckets/685acbee0010d1d6ba6e/files/685acc060016fda9e9ca/view?project=680e68b10024125b5c0b&mode=admin"
              alt="Capa do livro IA Generativa para Professores - versão brasileira"
              className="h-auto max-h-[70vh] w-auto object-contain" // Tamanho controlado
              style={{ maxWidth: '400px' }} // Largura máxima
              loading="eager"
              animate={{
                scale: [0.45, 0.5, 0.45],
                filter: ['blur(0px)', 'blur(0.5px)', 'blur(0px)'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Gradient overlays com Brazilian colors mais suaves */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-green-700/40 via-yellow-500/10 to-blue-700/40"
              animate={{
                opacity: [0.4, 0.3, 0.4],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
        
        {/* Mobile version otimizada */}
        <div className="block sm:hidden absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-green-600 via-yellow-500 to-blue-600"
            animate={{
              background: [
                'linear-gradient(45deg, #16a34a, #eab308, #2563eb)',
                'linear-gradient(135deg, #16a34a, #eab308, #2563eb)',
                'linear-gradient(225deg, #16a34a, #eab308, #2563eb)',
                'linear-gradient(45deg, #16a34a, #eab308, #2563eb)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <ParallaxSection speed={0.3}>
            <motion.img
              src="https://nyc.cloud.appwrite.io/v1/storage/buckets/685acbee0010d1d6ba6e/files/685acc060016fda9e9ca/view?project=680e68b10024125b5c0b&mode=admin"
              alt="Capa do livro IA Generativa para Professores"
              className="w-48 h-48 object-cover rounded-3xl blur-sm opacity-20 transform mx-auto mt-32"
              loading="eager"
              initial={{ scale: 0.5 }}
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [0.5, 0.6, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </ParallaxSection>
        </div>
      </div>

      {/* Main Content - reposicionado para a esquerda */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Conteúdo textual à esquerda */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 text-left"
          >
            {/* Título principal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                  IA Generativa
                </span>
                <br />
                <span className="text-white text-shadow-xl">
                  para Professores
                </span>
              </h1>
            </motion.div>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 max-w-2xl text-shadow-lg leading-relaxed"
            >
              Capacitando educadores a aproveitar o poder transformador da inteligência artificial em suas salas de aula.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 pt-4"
            >
              <MorphingButton
                onClick={handleGetBookClick}
                variant="primary"
                className="text-lg px-10 py-5"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Adquirir o Livro
              </MorphingButton>
              
              <MorphingButton
                href="/pt-br/tools"
                variant="secondary"
                className="text-lg px-10 py-5"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Explorar Ferramentas IA
              </MorphingButton>
            </motion.div>

            {/* Feature Pills compactos */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 1.0,
                  },
                },
              }}
              className="flex flex-wrap gap-3 pt-6"
            >
              {[
                { icon: '🤖', text: 'Diretório de Ferramentas IA', href: '/pt-br/tools' },
                { icon: '📚', text: 'Cursos Especializados', href: '/pt-br/learn' },
                { icon: '🎯', text: 'Guias Práticos', href: '/pt-br/library' },
                { icon: '📱', text: 'Compartilhamento QR', href: '/pt-br/videos' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={featurePillVariants}
                  className="group relative overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to={feature.href}>
                    <motion.div
                      className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-white font-medium rounded-xl text-shadow cursor-pointer hover:bg-white/20 transition-all duration-300 text-sm"
                      animate={{
                        boxShadow: [
                          '0 4px 20px rgba(34, 197, 94, 0.2)',
                          '0 8px 30px rgba(234, 179, 8, 0.3)',
                          '0 4px 20px rgba(37, 99, 235, 0.2)',
                          '0 4px 20px rgba(34, 197, 94, 0.2)',
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <motion.span
                        className="mr-2 text-lg"
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                      >
                        {feature.icon}
                      </motion.span>
                      {feature.text}
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Espaço para a imagem (à direita) */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Animated Scroll Indicator com cores brasileiras */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
        }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <motion.div
          className="w-8 h-14 border-2 border-white/60 rounded-full flex justify-center relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-4 bg-gradient-to-b from-green-400 via-yellow-400 to-blue-400 rounded-full mt-2"
            animate={{
              y: [0, 24, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Brazilian colored glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-green-400/20 via-yellow-400/20 to-blue-400/20 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroPTBR;