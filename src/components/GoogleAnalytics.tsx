
import React, { useEffect } from 'react';

interface GoogleAnalyticsProps {
  trackingId?: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ 
  trackingId = 'G-XXXXXXXXXX' // Replace with your actual GA4 tracking ID
}) => {
  useEffect(() => {
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    script1.async = true;
    document.head.appendChild(script1);

    // Initialize Google Analytics
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}', {
        page_title: document.title,
        page_location: window.location.href
      });
    `;
    document.head.appendChild(script2);

    // Track page views for SPA
    const trackPageView = (url: string) => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', trackingId, {
          page_path: url,
        });
      }
    };

    // Listen for route changes
    const handleRouteChange = () => {
      trackPageView(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [trackingId]);

  return null;
};

export default GoogleAnalytics;
