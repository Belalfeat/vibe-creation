
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
import WelcomePopup from '../components/WelcomePopup';
import { Helmet } from 'react-helmet-async';
import CodeRainAnimation from '../components/CodeRainAnimation';
import FloatingCodeBlocks from '../components/FloatingCodeBlocks';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen tech-bg">
      <Helmet>
        <title>BotVibex | AI Chatbot & Web Development Solutions</title>
        <meta name="description" content="Expert AI chatbot development and professional website creation services by BotVibex. Get custom AI solutions starting at just ₹499." />
        <meta name="keywords" content="AI chatbot development, AI website development, prompt engineering, custom AI chatbots, AI chatbot solutions, AI website builder" />
        <link rel="canonical" href="https://botvibex.site" />
        <meta property="og:title" content="BotVibex | AI Chatbot & Web Development Solutions" />
        <meta property="og:description" content="Expert AI chatbot development and website creation services starting at ₹499" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://botvibex.site" />
        <meta property="og:image" content="https://botvibex.site/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BotVibex | AI Chatbot & Web Development Solutions" />
        <meta name="twitter:description" content="Expert AI chatbot development and website creation services starting at ₹499" />
        <meta name="twitter:image" content="https://botvibex.site/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "BotVibex",
            "url": "https://botvibex.site",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://botvibex.site/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BotVibex",
            "url": "https://botvibex.site",
            "logo": "https://botvibex.site/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png",
            "sameAs": [
              "https://instagram.com/botvibex"
            ],
            "description": "BotVibex provides AI chatbot development, website creation, and prompt engineering services for businesses worldwide."
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Development Services",
            "provider": {
              "@type": "Organization",
              "name": "BotVibex"
            },
            "areaServed": "Worldwide",
            "offers": {
              "@type": "Offer",
              "price": "499",
              "priceCurrency": "INR"
            },
            "description": "Custom AI chatbot development and website creation services designed to boost business productivity and customer engagement."
          }
        `}</script>
      </Helmet>
      {/* 3D Code Animations */}
      <CodeRainAnimation />
      <FloatingCodeBlocks />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <BenefitsSection />
          <BlogHighlightsSection />
          <ClientBadgesSection />
          <TestimonialsSection />
          <ContactFormSection />
        </main>
        <Footer />
        <ChatBot />
        <OrderFormPopup />
        <WelcomePopup />
      </div>
    </div>
  );
};

export default Index;
