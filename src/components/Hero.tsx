import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import MorphingButton from './MorphingButton';
import AnimatedBackground from './AnimatedBackground';
import ParallaxSection from './ParallaxSection';

interface HeroProps {
  lang: 'en' | 'pt-br';
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const navigate = useNavigate();
  const content = {
    en: {
      title: 'Generative AI for Teachers',
      subtitle: 'Empowering educators to harness the transformative power of artificial intelligence in their classrooms.',
      getBook: 'Get the Book',
      exploreTools: 'Explore AI Tools',
      bookUrl: 'https://www.amazon.com/dp/B0FF3L24H6',
    },
    'pt-br': {
      title: 'IA Generativa para Professores',
      subtitle: 'Capacitando educadores a aproveitar o poder transformador da inteligência artificial em suas salas de aula.',
      getBook: 'Adquirir o Livro',
      exploreTools: 'Explorar Ferramentas IA',
      bookUrl: 'https://www.amazon.com.br/dp/B0FF9NBJNT',
    },
  };

  const t = content[lang];

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
      scale: 0.6, // Começar ainda mais atrás
      opacity: 0,
      rotateY: -30,
      filter: 'blur(10px)'
    },
    visible: {
      scale: 0.75, // Menor ainda para mostrar o nome
      opacity: 1,
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
    window.open(t.bookUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Hero Background Image with advanced effects */}
      <div className="absolute inset-0 z-5">
        <div className="hidden sm:block absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="relative w-full h-full flex items-center justify-center"
            variants={heroImageVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.img
              src="https://nyc.cloud.appwrite.io/v1/storage/buckets/68518e5500284ee65814/files/68518ebd0024ac797a36/view?project=680e68b10024125b5c0b&mode=admin"
              alt="Generative AI for Teachers book cover by Roney Nascimento"
              className="w-full h-full object-cover object-center"
              style={{ objectPosition: 'center 25%' }}
              loading="eager"
              animate={{
                scale: [0.75, 0.95, 0.75], // Zoom mais sutil, mais atrás
                filter: ['blur(0px)', 'blur(0.5px)', 'blur(0px)'],
              }}
              transition={{
                duration: 15, // Ainda mais devagar
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Gradient overlays with animation */}
            <motion.div 
              className="absolute inset-0 bg-black/60"
              animate={{
                opacity: [0.6, 0.4, 0.6],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-[#0F4D3F]/20 via-transparent to-[#002D59]/20"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </div>
        
        {/* Mobile version with enhanced effects */}
        <div className="block sm:hidden absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[#0F4D3F] to-[#002D59]"
            animate={{
              background: [
                'linear-gradient(45deg, #0F4D3F, #002D59)',
                'linear-gradient(135deg, #0F4D3F, #002D59)',
                'linear-gradient(225deg, #0F4D3F, #002D59)',
                'linear-gradient(45deg, #0F4D3F, #002D59)',
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
              src="https://nyc.cloud.appwrite.io/v1/storage/buckets/68518e5500284ee65814/files/68518ebd0024ac797a36/view?project=680e68b10024125b5c0b&mode=admin"
              alt="Generative AI for Teachers book cover"
              className="w-64 h-64 object-cover rounded-3xl blur-sm opacity-30 transform mx-auto mt-32"
              style={{ objectPosition: 'center 25%' }}
              loading="eager"
              initial={{ scale: 0.5 }} // Ainda mais atrás no mobile
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [0.5, 0.65, 0.5], // Muito mais atrás no mobile
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

      {/* Main Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* CTA Buttons with Advanced Morphing */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <MorphingButton
              href={t.bookUrl}
              variant="primary"
              className="text-lg px-10 py-5"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {t.getBook}
            </MorphingButton>
            
            <MorphingButton
              onClick={() => navigate('/tools')}
              variant="secondary"
              className="text-lg px-10 py-5"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {t.exploreTools}
            </MorphingButton>
          </motion.div>

          {/* Small Title at Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="pt-8"
          >
            <AnimatedText
              text={t.title}
              className="text-lg md:text-xl font-medium text-green-100/80 text-shadow"
              variant="fadeInUp"
              delay={1.0}
            />
          </motion.div>

          {/* Feature Pills with Advanced Animations */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 1.4,
                },
              },
            }}
            className="flex flex-wrap justify-center gap-4 pt-8"
          >
            {[
              { icon: '🤖', text: 'AI Tool Directory', href: '/tools' },
              { icon: '📚', text: 'Expert Courses', href: '/learn' },
              { icon: '🎯', text: 'Practical Guides', href: '/library' },
              { icon: '📱', text: 'QR Code Sharing', href: '/videos' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={featurePillVariants}
                className="group relative overflow-hidden"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={feature.href}>
                  <motion.div
                    className="bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-4 text-white font-medium rounded-2xl text-shadow cursor-pointer hover:bg-white/30 transition-all duration-300"
                    animate={{
                      boxShadow: [
                        '0 4px 20px rgba(255, 255, 255, 0.1)',
                        '0 8px 30px rgba(255, 255, 255, 0.2)',
                        '0 4px 20px rgba(255, 255, 255, 0.1)',
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.span
                      className="mr-2 text-xl"
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
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl pointer-events-none"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                  style={{ transform: 'skewX(-20deg)' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
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
            className="w-1 h-4 bg-white/80 rounded-full mt-2"
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
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
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

export default Hero;