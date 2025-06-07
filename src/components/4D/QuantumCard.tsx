import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { use4DContext } from '../../hooks/use4DContext';

interface QuantumCardProps {
  title: string;
  states: {
    past: React.ReactNode;
    present: React.ReactNode;
    future: React.ReactNode;
  };
  icon: React.ReactNode;
  keywords: string[];
  className?: string;
}

export const QuantumCard: React.FC<QuantumCardProps> = ({
  title,
  states,
  icon,
  keywords,
  className = ''
}) => {
  const { recordInteraction, timeContext, userMemory } = use4DContext();
  const [isHovered, setIsHovered] = useState(false);
  const [currentTimeline, setCurrentTimeline] = useState<'past' | 'present' | 'future'>('present');

  useEffect(() => {
    const relevantInteractions = userMemory.interactions.filter(i => 
      keywords.some(keyword => i.element.includes(keyword))
    );

    if (relevantInteractions.length > 2) {
      const avgIntensity = relevantInteractions.reduce((sum, i) => sum + i.intensity, 0) / relevantInteractions.length;
      if (avgIntensity > 0.6) {
        setCurrentTimeline('future');
      }
    }
  }, [userMemory.interactions, keywords]);

  const handleHover = (hovering: boolean) => {
    setIsHovered(hovering);
    recordInteraction({
      type: 'hover',
      element: `quantum-card-${title}`,
      intensity: hovering ? 0.5 : 0.2
    });

    if (hovering) {
      const timelines: ('past' | 'present' | 'future')[] = ['past', 'present', 'future'];
      let timelineIndex = 0;
      const interval = setInterval(() => {
        setCurrentTimeline(timelines[timelineIndex]);
        timelineIndex = (timelineIndex + 1) % timelines.length;
      }, 1200);

      setTimeout(() => clearInterval(interval), 3600);
    }
  };

  const handleClick = () => {
    recordInteraction({
      type: 'click',
      element: `quantum-card-${title}`,
      intensity: 1.0
    });
  };

  return (
    <motion.div
      className={`relative overflow-hidden border border-gray-800 bg-black/90 backdrop-blur-sm ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => handleHover(true)}
      onHoverEnd={() => handleHover(false)}
      onClick={handleClick}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Enhanced border glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"
        animate={{
          opacity: isHovered ? 0.15 : 0.03,
          scale: isHovered ? 1.02 : 1
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Subtle corner accents */}
      <motion.div
        className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-white/20"
        animate={{
          opacity: isHovered ? 0.6 : 0.2,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-white/20"
        animate={{
          opacity: isHovered ? 0.6 : 0.2,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 p-6">
        {/* Enhanced icon with multiple effects */}
        <motion.div
          className="relative text-white mb-4 flex justify-center"
          animate={{
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Icon glow background */}
          <motion.div
            className="absolute inset-0 bg-white/10 rounded-full blur-md"
            animate={{
              opacity: isHovered ? 0.8 : 0.3,
              scale: isHovered ? 1.3 : 1
            }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Rotating ring around icon */}
          <motion.div
            className="absolute inset-0 border border-white/20 rounded-full"
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.2 : 1,
              opacity: isHovered ? 0.6 : 0.2
            }}
            transition={{ 
              rotate: { duration: 2, ease: "linear", repeat: isHovered ? Infinity : 0 },
              scale: { duration: 0.4 },
              opacity: { duration: 0.4 }
            }}
          />
          
          {/* Pulsing outer ring */}
          <motion.div
            className="absolute inset-0 border border-white/10 rounded-full"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Main icon */}
          <motion.div
            className="relative z-10 p-3"
            animate={{
              rotateY: isHovered ? [0, 180, 360] : 0
            }}
            transition={{ 
              duration: isHovered ? 1.5 : 0,
              ease: "easeInOut"
            }}
          >
            {icon}
          </motion.div>
        </motion.div>

        {/* Steady title - no floating animation */}
        <h3 className="text-xl font-bold text-white mb-4 text-center">
          {title}
        </h3>

        {/* Steady content area */}
        <div className="relative h-24 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTimeline}
              className="absolute inset-0 text-gray-300 text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {states[currentTimeline]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Timeline indicators */}
        <div className="flex justify-center space-x-1 mt-4">
          {(['past', 'present', 'future'] as const).map((timeline) => (
            <motion.div
              key={timeline}
              className={`w-1.5 h-1.5 rounded-full border ${
                currentTimeline === timeline ? 'bg-white border-white' : 'bg-transparent border-gray-600'
              }`}
              animate={{
                scale: currentTimeline === timeline ? 1.2 : 1,
                opacity: currentTimeline === timeline ? 1 : 0.5
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* Subtle scan line effect */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          y: isHovered ? [0, 320, 0] : 0,
          opacity: isHovered ? [0, 0.6, 0] : 0
        }}
        transition={{
          duration: isHovered ? 2 : 0,
          ease: "easeInOut",
          repeat: isHovered ? Infinity : 0,
          repeatDelay: 1
        }}
      />
    </motion.div>
  );
};