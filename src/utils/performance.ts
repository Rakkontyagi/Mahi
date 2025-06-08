// Performance optimization utilities
export const initializePerformanceOptimizations = () => {
  // Preload critical resources
  if ('fonts' in document) {
    document.fonts.ready.then(() => {
      console.log('Fonts loaded');
    });
  }

  // Enable passive event listeners
  const passiveEvents = ['scroll', 'touchstart', 'touchmove', 'wheel'];
  passiveEvents.forEach(event => {
    document.addEventListener(event, () => {}, { passive: true });
  });

  // Optimize images with intersection observer
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    // Observe all images with data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

export const optimizeComponent = (Component: React.ComponentType) => {
  return React.memo(Component);
};