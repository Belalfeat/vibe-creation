
import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = '/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png';
      link.as = 'image';
      document.head.appendChild(link);
    };

    // Lazy load non-critical images
    const lazyLoadImages = () => {
      const images = document.querySelectorAll('img[data-lazy]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.lazy || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Optimize font loading
    const optimizeFonts = () => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = 'https://fonts.googleapis.com';
      document.head.appendChild(link);

      const link2 = document.createElement('link');
      link2.rel = 'preconnect';
      link2.href = 'https://fonts.gstatic.com';
      link2.crossOrigin = 'anonymous';
      document.head.appendChild(link2);
    };

    preloadCriticalResources();
    lazyLoadImages();
    optimizeFonts();
  }, []);

  return null;
};

export default PerformanceOptimizer;
