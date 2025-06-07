import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, TrendingUp, Zap, Brain, Target, Rocket } from 'lucide-react';
import { use4DContext } from '../../hooks/use4DContext';
import { MoneyBackground } from './MoneyBackground';
import { GodDigitalLogo } from '../Brand/GodDigitalLogo';

const temporalMessages = {
  morning: {
    primary: "Start Your Digital Transformation",
    secondary: "God Digital Marketing - India's Premier Agency Delivering Revolutionary Growth Solutions",
    cta: "Begin Your Journey"
  },
  afternoon: {
    primary: "Accelerating Business Excellence",
    secondary: "AI-Powered Digital Marketing Solutions Across All Indian States & Cities",
    cta: "Accelerate Growth"
  },
  evening: {
    primary: "Reflecting Success, Planning Tomorrow",
    secondary: "Award-Winning Digital Marketing Experts Transforming Businesses Nationwide",
    cta: "Plan Your Future"
  },
  night: {
    primary: "While You Sleep, We Craft Your Empire",
    secondary: "24/7 AI Automation & Digital Intelligence - God Digital Marketing Never Rests",
    cta: "Automate Success"
  }
};

const visitMessages = {
  first: "Welcome to God Digital Marketing - Where Digital Dreams Become Reality",
  returning: "Welcome Back - Your Digital Empire Continues to Grow",
  loyal: "Your Success Story Keeps Evolving with God Digital Marketing"
};

const keyServices = [
  { icon: <Target className="w-5 h-5" />, text: "Lead Generation" },
  { icon: <Brain className="w-5 h-5" />, text: "AI Automation" },
  { icon: <TrendingUp className="w-5 h-5" />, text: "ROI Optimization" },
  { icon: <Rocket className="w-5 h-5" />, text: "Business Growth" }
];

export const TemporalHero: React.FC = () => {
  const { timeContext, userMemory, recordInteraction } = use4DContext();
  const [currentPhase, setCurrentPhase] = useState(0);
  const [dimensionalLayers, setDimensionalLayers] = useState(['past', 'present', 'future']);

  const currentMessage = temporalMessages[timeContext.timeOfDay];
  const visitMessage = userMemory.visitHistory.length <= 1 ? visitMessages.first : 
                      userMemory.visitHistory.length <= 3 ? visitMessages.returning : 
                      visitMessages.loyal;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % 3);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleCTAClick = () => {
    recordInteraction({
      type: 'click',
      element: 'hero-cta',
      intensity: 1.0
    });
  };

  const handleTimelineScroll = (direction: 'forward' | 'backward') => {
    recordInteraction({
      type: 'scroll',
      element: 'timeline-navigation',
      intensity: 0.6
    });

    setDimensionalLayers(prev => {
      if (direction === 'forward') {
        return [prev[1], prev[2], prev[0]];
      } else {
        return [prev[2], prev[0], prev[1]];
      }
    });
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* 4D Money Background */}
      <MoneyBackground />

      <div className="absolute inset-0">
        {dimensionalLayers.map((layer, index) => (
          <motion.div
            key={layer}
            className={`absolute inset-0 ${
              layer === 'past' ? 'bg-gradient-to-br from-gray-900/10 to-black/30' :
              layer === 'present' ? 'bg-gradient-to-br from-black/50 to-gray-800/10' :
              'bg-gradient-to-br from-black/70 to-gray-700/5'
            }`}
            style={{ zIndex: 3 - index }}
            animate={{
              opacity: index === 1 ? 1 : 0.2,
              scale: index === 1 ? 1 : 0.98 + index * 0.01
            }}
            transition={{ duration: 1.2 }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          className="inline-flex items-center space-x-2 mb-6 px-4 py-2 border border-gray-700 rounded-full bg-black/50 backdrop-blur-sm"
          animate={{
            borderColor: timeContext.timeOfDay === 'night' ? '#374151' : '#6B7280'
          }}
        >
          <Clock className="w-4 h-4 text-white" />
          <span className="text-white text-sm">
            {timeContext.timeOfDay.charAt(0).toUpperCase() + timeContext.timeOfDay.slice(1)} Mode Active
          </span>
          <motion.div
            className="w-2 h-2 bg-white rounded-full"
            animate={{
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
        </motion.div>

        <motion.div
          className="text-gray-400 text-lg mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {visitMessage}
        </motion.div>

        {/* Enhanced logo display */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <GodDigitalLogo size="xl" variant="full" animated={true} />
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.span
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {currentMessage.secondary}
          </motion.span>
        </motion.p>

        {/* Key Services Highlight */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {keyServices.map((service, index) => (
            <motion.div
              key={service.text}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-700 rounded-full bg-black/30 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: '#ffffff40' }}
            >
              <span className="text-white">{service.icon}</span>
              <span className="text-white text-sm font-medium">{service.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="group relative px-10 py-4 bg-white text-black font-bold text-lg border-2 border-white overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCTAClick}
          >
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              {currentMessage.cta}
            </span>
          </motion.button>

          <motion.button
            className="px-8 py-4 border border-gray-600 text-white hover:border-white transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Portfolio
          </motion.button>
        </motion.div>

        {/* Coverage Indicator */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-400 text-sm mb-2">Serving Businesses Across</p>
          <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500">
            <span>All 28 Indian States</span>
            <span>•</span>
            <span>8 Union Territories</span>
            <span>•</span>
            <span>500+ Cities</span>
            <span>•</span>
            <span>Every Industry Vertical</span>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <button
            onClick={() => handleTimelineScroll('backward')}
            className="p-2 border border-gray-700 hover:border-white transition-colors duration-300 group"
          >
            <TrendingUp className="w-5 h-5 text-gray-400 group-hover:text-white transform rotate-180" />
          </button>

          <div className="flex space-x-3">
            {dimensionalLayers.map((layer, index) => (
              <motion.div
                key={layer}
                className={`px-3 py-1 text-sm ${
                  index === 1 ? 'text-white border-b border-white' : 'text-gray-500'
                }`}
                animate={{
                  opacity: index === 1 ? 1 : 0.5,
                  scale: index === 1 ? 1.1 : 1
                }}
              >
                {layer.charAt(0).toUpperCase() + layer.slice(1)}
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => handleTimelineScroll('forward')}
            className="p-2 border border-gray-700 hover:border-white transition-colors duration-300 group"
          >
            <TrendingUp className="w-5 h-5 text-gray-400 group-hover:text-white" />
          </button>
        </motion.div>

        <motion.div
          className="absolute bottom-6 left-6 flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <Brain className="w-4 h-4" />
            <span>AI Learning: {Math.round(userMemory.preferences.adaptationLevel * 100)}%</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <Zap className="w-4 h-4" />
            <span>Automation: Active</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-6 right-6 text-gray-500 text-xs"
        animate={{
          opacity: [0.3, 1, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity
        }}
      >
        ⟨God|Digital|Marketing⟩
      </motion.div>
    </section>
  );
};