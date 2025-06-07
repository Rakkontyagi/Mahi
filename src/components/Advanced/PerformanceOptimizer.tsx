import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Performance monitoring component
export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState({
    fps: 60,
    loadTime: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };

    // Measure initial load time
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, loadTime }));
    }

    // Monitor memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = Math.round(memory.usedJSHeapSize / 1048576); // MB
      setMetrics(prev => ({ ...prev, memoryUsage }));
    }

    measureFPS();
  }, []);

  // Only show in development
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white p-3 rounded-lg text-xs font-mono z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 }}
    >
      <div>FPS: {metrics.fps}</div>
      <div>Load: {metrics.loadTime}ms</div>
      <div>Memory: {metrics.memoryUsage}MB</div>
    </motion.div>
  );
};

// Image optimization component
export const OptimizedImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}> = ({ src, alt, className = '', priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);

  useEffect(() => {
    if (!priority) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      const element = document.querySelector(`[data-src="${src}"]`);
      if (element) observer.observe(element);

      return () => observer.disconnect();
    }
  }, [src, priority]);

  return (
    <div className={`relative overflow-hidden ${className}`} data-src={src}>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="absolute inset-0 bg-gray-800 animate-pulse"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${className}`}
          onLoad={() => setIsLoaded(true)}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
    </div>
  );
};

// Code splitting helper
export const LazySection: React.FC<{
  children: React.ReactNode;
  fallback?: React.ReactNode;
}> = ({ children, fallback = <div>Loading...</div> }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    const element = document.querySelector('[data-lazy-section]');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div data-lazy-section>
      {isVisible ? children : fallback}
    </div>
  );
};