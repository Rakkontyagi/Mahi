// Performance optimization utilities
export const initializePerformanceOptimizations = () => {
  // Preload critical resources
  if ('fonts' in document) {
    document.fonts.ready.then(() => {
      console.log('Fonts loaded');
    });
  }

  // Enable passive event listeners for better scroll performance
  if ('addEventListener' in window) {
    const options = { passive: true };
    document.addEventListener('touchstart', () => {}, options);
    document.addEventListener('touchmove', () => {}, options);
  }

  // Optimize images loading
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

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Prefetch critical resources
  const criticalResources = [
    '/favicon.ico'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = resource;
    document.head.appendChild(link);
  });
};