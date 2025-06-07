import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  direction = 'up',
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const getTransform = () => {
    const range = [-100 * speed, 100 * speed];
    switch (direction) {
      case 'down':
        return useTransform(scrollYProgress, [0, 1], range);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], range);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [-range[0], -range[1]]);
      default:
        return useTransform(scrollYProgress, [0, 1], [-range[0], -range[1]]);
    }
  };

  const transform = getTransform();
  const springTransform = useSpring(transform, { stiffness: 100, damping: 30 });

  const getStyle = () => {
    if (direction === 'left' || direction === 'right') {
      return { x: springTransform };
    }
    return { y: springTransform };
  };

  return (
    <motion.div
      ref={ref}
      style={getStyle()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Advanced scroll-triggered animations
export const ScrollReveal: React.FC<{
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  delay?: number;
  duration?: number;
}> = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6 
}) => {
  const getInitial = () => {
    switch (direction) {
      case 'down': return { y: -50, opacity: 0 };
      case 'left': return { x: 50, opacity: 0 };
      case 'right': return { x: -50, opacity: 0 };
      case 'scale': return { scale: 0.8, opacity: 0 };
      case 'fade': return { opacity: 0 };
      default: return { y: 50, opacity: 0 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case 'scale': return { scale: 1, opacity: 1 };
      case 'fade': return { opacity: 1 };
      default: return { x: 0, y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      {children}
    </motion.div>
  );
};