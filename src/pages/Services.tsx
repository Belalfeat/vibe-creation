
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import SkillHighlightsSection from '../components/SkillHighlightsSection';
import OrderFormPopup from '../components/OrderFormPopup';
import { Helmet } from 'react-helmet-async';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen tech-bg">
      <Helmet>
        <title>AI Chatbot Development Services Lucknow | Website Development UP</title>
        <meta name="description" content="Professional AI chatbot development and website creation services in Lucknow, UP. Expert prompt engineering and custom AI solutions for businesses across Uttar Pradesh, India." />
        <meta name="keywords" content="AI chatbot development Lucknow, website development UP, prompt engineering services India, AI solutions Uttar Pradesh, chatbot services Lucknow" />
        <link rel="canonical" href="https://botvibex.site/services" />
        <meta property="og:title" content="AI Chatbot Development Services Lucknow | Website Development UP" />
        <meta property="og:description" content="Professional AI chatbot development and website creation services in Lucknow, UP." />
        <meta property="og:url" content="https://botvibex.site/services" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Development Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "BotVibex",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lucknow",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "IN"
              }
            },
            "areaServed": {
              "@type": "Place",
              "name": "Lucknow, Uttar Pradesh, India"
            },
            "offers": {
              "@type": "Offer",
              "price": "499",
              "priceCurrency": "INR"
            }
          }
        `}</script>
      </Helmet>
      
      <Navbar />
      <div className="pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-6">
          AI Development Services in Lucknow, UP
        </h1>
        <div className="container mx-auto px-6">
          <p className="text-white/70 text-center mb-12 max-w-3xl mx-auto">
            Explore our comprehensive AI chatbot development, website creation, and prompt engineering services designed to elevate businesses across Lucknow, Uttar Pradesh, and throughout India.
          </p>
        </div>
        <ServicesSection />
        <SkillHighlightsSection />
      </div>
      <Footer />
      <OrderFormPopup />
    </div>
  );
};

export default Services;
