import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
}

const AnimatedBackgroundPTBR: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles with Brazilian colors
    const initParticles = () => {
      particlesRef.current = [];
      const brazilianColors = [
        'hsla(120, 70%, 50%, 0.3)', // Green
        'hsla(60, 100%, 50%, 0.3)', // Yellow
        'hsla(240, 70%, 50%, 0.3)', // Blue
        'hsla(180, 70%, 60%, 0.3)', // Teal
        'hsla(300, 70%, 60%, 0.3)', // Purple
      ];

      for (let i = 0; i < 60; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 4 + 1,
          color: brazilianColors[Math.floor(Math.random() * brazilianColors.length)],
          life: Math.random() * 100 + 50
        });
      }
    };

    initParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Reset particle if life is over
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = Math.random() * 100 + 50;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections with Brazilian color theme
        particlesRef.current.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `hsla(150, 60%, 50%, ${0.8 - distance / 120})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Floating geometric shapes with Brazilian theme */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(8)].map((_, i) => {
          const brazilianHues = [120, 60, 240, 180, 300]; // Green, Yellow, Blue, Teal, Purple
          const hue = brazilianHues[i % brazilianHues.length];
          
          return (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-2xl opacity-8"
              style={{
                background: `linear-gradient(45deg, hsl(${hue}, 70%, 60%), hsl(${hue + 30}, 70%, 60%))`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 120, -60, 0],
                y: [0, -120, 60, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.3, 0.7, 1],
              }}
              transition={{
                duration: 25 + i * 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Morphing blobs with Brazilian colors */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(4)].map((_, i) => {
          const brazilianColors = [
            'hsl(120, 70%, 50%)', // Green
            'hsl(60, 100%, 50%)', // Yellow  
            'hsl(240, 70%, 50%)', // Blue
            'hsl(180, 70%, 50%)', // Teal
          ];
          
          return (
            <motion.div
              key={`blob-${i}`}
              className="absolute opacity-6"
              style={{
                left: `${20 + i * 25}%`,
                top: `${20 + i * 15}%`,
                width: 250,
                height: 250,
                background: `radial-gradient(circle, ${brazilianColors[i]} 0%, transparent 70%)`,
                filter: 'blur(50px)',
              }}
              animate={{
                scale: [1, 1.6, 0.8, 1],
                x: [0, 60, -40, 0],
                y: [0, -40, 50, 0],
              }}
              transition={{
                duration: 18 + i * 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default AnimatedBackgroundPTBR;