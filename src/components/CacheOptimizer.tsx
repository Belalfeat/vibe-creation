
import React, { useEffect } from 'react';

const CacheOptimizer: React.FC = () => {
  useEffect(() => {
    // Service Worker for caching (basic implementation)
    if ('serviceWorker' in navigator) {
      const registerServiceWorker = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('Service Worker registered successfully:', registration);
        } catch (error) {
          console.log('Service Worker registration failed:', error);
        }
      };

      registerServiceWorker();
    }

    // Local Storage cache for API responses
    const setupLocalCache = () => {
      const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

      const cacheData = (key: string, data: any) => {
        const cacheObject = {
          data,
          timestamp: Date.now()
        };
        localStorage.setItem(`botvibex_${key}`, JSON.stringify(cacheObject));
      };

      const getCachedData = (key: string) => {
        const cached = localStorage.getItem(`botvibex_${key}`);
        if (!cached) return null;

        const cacheObject = JSON.parse(cached);
        const isExpired = Date.now() - cacheObject.timestamp > CACHE_DURATION;

        if (isExpired) {
          localStorage.removeItem(`botvibex_${key}`);
          return null;
        }

        return cacheObject.data;
      };

      // Expose cache functions globally
      (window as any).botvibexCache = { cacheData, getCachedData };
    };

    setupLocalCache();
  }, []);

  return null;
};

export default CacheOptimizer;
