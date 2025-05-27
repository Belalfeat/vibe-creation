import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import BlogHighlightsSection from '../components/BlogHighlightsSection';
import ContactFormSection from '../components/ContactFormSection';
import ClientBadgesSection from '../components/ClientBadgesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import OrderFormPopup from '../components/OrderFormPopup';
import AnimatedEntry from '../components/AnimatedEntry';
import LocalSEOSection from '../components/LocalSEOSection';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import GoogleAnalytics from '../components/GoogleAnalytics';
import CacheOptimizer from '../components/CacheOptimizer';
import { Helmet } from 'react-helmet-async';
import CodeRainAnimation from '../components/CodeRainAnimation';
import FloatingCodeBlocks from '../components/FloatingCodeBlocks';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen tech-bg">
      <Helmet>
        <title>BotVibex | AI Chatbot Developer Lucknow | Website Development UP India</title>
        <meta name="description" content="Leading AI chatbot developer in Lucknow, UP India. Expert website development, prompt engineering services. Transform your business with custom AI solutions starting ₹499." />
        <meta name="keywords" content="AI chatbot developer Lucknow, website development UP India, prompt engineering expert India, AI solutions Uttar Pradesh, chatbot services Lucknow, web developer India" />
        <link rel="canonical" href="https://botvibex.site/" />
        <meta property="og:title" content="BotVibex | AI Chatbot Developer Lucknow | Website Development UP India" />
        <meta property="og:description" content="Leading AI chatbot developer in Lucknow, UP India. Expert website development and prompt engineering services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://botvibex.site/" />
        <meta property="og:image" content="https://botvibex.site/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BotVibex | AI Chatbot Developer Lucknow" />
        <meta name="twitter:description" content="Leading AI chatbot developer in Lucknow, UP India. Expert website development and prompt engineering services." />
        <meta name="twitter:image" content="https://botvibex.site/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Lucknow" />
        <meta name="geo.position" content="26.8467;80.9462" />
        <meta name="ICBM" content="26.8467, 80.9462" />
        
        {/* Performance Optimizations */}
        <link rel="preload" href="/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" as="image" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta httpEquiv="cache-control" content="public, max-age=31536000" />
        
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "BotVibex",
            "description": "Leading AI chatbot developer and website development company in Lucknow, Uttar Pradesh, India",
            "url": "https://botvibex.site",
            "telephone": "+91-9999999999",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Tech Hub",
              "addressLocality": "Lucknow",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "226001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 26.8467,
              "longitude": 80.9462
            },
            "areaServed": [
              {
                "@type": "Place",
                "name": "Lucknow"
              },
              {
                "@type": "Place", 
                "name": "Uttar Pradesh"
              },
              {
                "@type": "Place",
                "name": "India"
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 26.8467,
                "longitude": 80.9462
              },
              "geoRadius": "50000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Chatbot Development",
                    "description": "Custom AI chatbot development for businesses in Lucknow and Uttar Pradesh"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Website Development",
                    "description": "Professional website development services in Lucknow, UP"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Prompt Engineering",
                    "description": "Expert prompt engineering services for AI optimization"
                  }
                }
              ]
            },
            "priceRange": "₹499-₹50000",
            "openingHours": "Mo-Sa 09:00-18:00",
            "sameAs": [
              "https://instagram.com/botvibex"
            ]
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BotVibex",
            "url": "https://botvibex.site",
            "logo": "https://botvibex.site/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png",
            "description": "BotVibex is the leading AI chatbot development and website creation company in Lucknow, Uttar Pradesh, India, specializing in prompt engineering and custom AI solutions.",
            "foundingDate": "2024",
            "founder": {
              "@type": "Person",
              "name": "Bilal Ahmad"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lucknow",
              "addressRegion": "Uttar Pradesh", 
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9999999999",
              "contactType": "customer service",
              "email": "vibeswithbilal050@gmail.com",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            }
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "BotVibex - AI Chatbot Developer Lucknow",
            "url": "https://botvibex.site",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://botvibex.site/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": "BotVibex"
            }
          }
        `}</script>
      </Helmet>
      
      {/* Performance & Analytics Components */}
      <PerformanceOptimizer />
      <GoogleAnalytics trackingId="G-XXXXXXXXXX" />
      <CacheOptimizer />
      
      {/* Animated Entry Component */}
      <AnimatedEntry />
      
      {/* 3D Code Animations */}
      <CodeRainAnimation />
      <FloatingCodeBlocks />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <BenefitsSection />
          <LocalSEOSection />
          <BlogHighlightsSection />
          <ClientBadgesSection />
          <TestimonialsSection />
          <ContactFormSection />
        </main>
        <Footer />
        <ChatBot />
        <OrderFormPopup />
      </div>
    </div>
  );
};

export default Index;
