import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = '',
  speed = 0.5,
  direction = 'up'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90
  });

  const transforms = {
    up: useTransform(smoothProgress, [0, 1], [100 * speed, -100 * speed]),
    down: useTransform(smoothProgress, [0, 1], [-100 * speed, 100 * speed]),
    left: useTransform(smoothProgress, [0, 1], [100 * speed, -100 * speed]),
    right: useTransform(smoothProgress, [0, 1], [-100 * speed, 100 * speed]),
  };

  const rotateTransform = useTransform(smoothProgress, [0, 1], [0, 360 * speed]);
  const scaleTransform = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);
  const opacityTransform = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y: direction === 'up' || direction === 'down' ? transforms[direction] : 0,
        x: direction === 'left' || direction === 'right' ? transforms[direction] : 0,
        rotate: rotateTransform,
        scale: scaleTransform,
        opacity: opacityTransform,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;