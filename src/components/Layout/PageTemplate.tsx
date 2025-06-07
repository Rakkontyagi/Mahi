import React from 'react';
import { motion } from 'framer-motion';
import { TemporalNavigation } from '../Navigation/TemporalNavigation';
import { TemporalParticles } from '../4D/TemporalParticles';
import { MemoryVisualization } from '../4D/MemoryVisualization';
import { PageStructure } from '../../utils/pageStructure';

interface PageTemplateProps {
  page: PageStructure;
  children?: React.ReactNode;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({ page, children }) => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <TemporalNavigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
        <TemporalParticles count={200} />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            className="inline-flex items-center space-x-2 mb-6 px-4 py-2 border border-gray-800 rounded-full bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white text-sm capitalize">{page.type} Page</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {page.content.hero.title}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {page.content.hero.subtitle}
          </motion.p>

          <motion.button
            className="px-12 py-4 bg-white text-black font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {page.content.hero.cta}
          </motion.button>
        </div>
      </section>

      {/* Content Sections */}
      <main>
        {children}
      </main>

      <MemoryVisualization />
    </div>
  );
};