import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { GodDigitalLogo } from '../Brand/GodDigitalLogo';
import { PremiumButton, GlassmorphismCard } from './GlassmorphismCard';
import { ParallaxSection, ScrollReveal } from './ParallaxSection';
import { MicroInteraction } from './MicroInteractions';

export const AdvancedHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Advanced background with multiple layers */}
      <div className="absolute inset-0">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-800/30" />
        
        {/* Animated grid */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating orbs */}
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-64 h-64 rounded-full bg-gradient-radial from-white/5 to-transparent blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 2
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative z-20 max-w-7xl mx-auto px-4 text-center"
        style={{ y, opacity, scale }}
      >
        {/* Status indicator */}
        <ScrollReveal direction="fade" delay={0.1}>
          <GlassmorphismCard className="inline-flex items-center space-x-3 px-6 py-3 mb-8">
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-white text-sm font-medium">
              AI-Powered Digital Excellence • Live
            </span>
          </GlassmorphismCard>
        </ScrollReveal>

        {/* Main logo with enhanced presentation */}
        <ScrollReveal direction="scale" delay={0.2}>
          <MicroInteraction type="magnetic" intensity={0.5}>
            <div className="mb-8">
              <GodDigitalLogo size="xl" variant="full" animated={true} />
            </div>
          </MicroInteraction>
        </ScrollReveal>

        {/* Hero headline with advanced typography */}
        <ScrollReveal direction="up" delay={0.3}>
          <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 8, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Revolutionary
            </motion.span>
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-300"
              animate={{
                backgroundPosition: ['100% 50%', '0% 50%', '100% 50%']
              }}
              transition={{ duration: 8, repeat: Infinity, delay: 1 }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Digital Excellence
            </motion.span>
          </motion.h1>
        </ScrollReveal>

        {/* Enhanced subtitle */}
        <ScrollReveal direction="up" delay={0.4}>
          <motion.p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transforming businesses across India with{' '}
            <motion.span
              className="text-white font-semibold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              AI-powered automation
            </motion.span>
            ,{' '}
            <motion.span
              className="text-white font-semibold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              advanced lead generation
            </motion.span>
            , and{' '}
            <motion.span
              className="text-white font-semibold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            >
              exponential ROI growth
            </motion.span>
          </motion.p>
        </ScrollReveal>

        {/* Premium CTA buttons */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <MicroInteraction type="hover" intensity={1.5}>
              <PremiumButton variant="primary" size="lg">
                Start Your Transformation
              </PremiumButton>
            </MicroInteraction>
            
            <MicroInteraction type="hover" intensity={1.2}>
              <PremiumButton variant="ghost" size="lg">
                Explore Our Portfolio
              </PremiumButton>
            </MicroInteraction>
          </div>
        </ScrollReveal>

        {/* Key metrics with glassmorphism */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: '500+', label: 'Cities Served' },
              { value: '340%', label: 'Average ROI' },
              { value: '98%', label: 'Success Rate' },
              { value: '24/7', label: 'AI Automation' }
            ].map((metric, index) => (
              <MicroInteraction key={metric.label} type="hover">
                <GlassmorphismCard className="p-6 text-center">
                  <motion.div
                    className="text-2xl md:text-3xl font-bold text-white mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-gray-400 text-sm">{metric.label}</div>
                </GlassmorphismCard>
              </MicroInteraction>
            ))}
          </div>
        </ScrollReveal>

        {/* Scroll indicator */}
        <ScrollReveal direction="fade" delay={0.8}>
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </ScrollReveal>
      </motion.div>
    </section>
  );
};