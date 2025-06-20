import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: 'fadeInUp' | 'typewriter' | 'wave' | 'glitch' | 'morphing';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.8,
  variant = 'fadeInUp'
}) => {
  const words = text.split(' ');
  const letters = text.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: variant === 'typewriter' ? 0.05 : 0.1,
        delayChildren: delay,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const typewriterVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.1,
        ease: "easeOut",
      },
    },
  };

  const waveVariants = {
    hidden: { 
      y: 20, 
      opacity: 0,
      rotateZ: -10 
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotateZ: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse" as const,
        repeatDelay: 2,
      },
    }),
  };

  const glitchVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      x: [0, -2, 2, 0],
      textShadow: [
        '0 0 0 transparent',
        '2px 0 0 #ff0000, -2px 0 0 #00ffff',
        '0 0 0 transparent'
      ],
      transition: {
        duration: 0.1,
        repeat: 3,
        repeatDelay: 0.5,
      },
    },
  };

  const morphingVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.5,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  if (variant === 'typewriter') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={className}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={typewriterVariants}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-0.5 h-8 bg-current ml-1"
        />
      </motion.div>
    );
  }

  if (variant === 'wave') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={className}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={waveVariants}
            custom={index}
            className="inline-block"
            style={{ transformOrigin: 'center bottom' }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  if (variant === 'glitch') {
    return (
      <motion.div
        variants={glitchVariants}
        initial="hidden"
        animate="visible"
        className={className}
        style={{ textShadow: '0 0 0 transparent' }}
      >
        {text}
      </motion.div>
    );
  }

  if (variant === 'morphing') {
    return (
      <motion.div
        variants={morphingVariants}
        initial="hidden"
        animate="visible"
        className={className}
      >
        {text}
      </motion.div>
    );
  }

  // Default fadeInUp with staggered words
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={fadeInUpVariants}
          className="inline-block mr-2"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;