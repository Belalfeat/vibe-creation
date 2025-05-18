
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import SkillHighlightsSection from '../components/SkillHighlightsSection';
import TrustSecuritySection from '../components/TrustSecuritySection';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import DiscountBanner from '../components/DiscountBanner';
import OrderFormPopup from '../components/OrderFormPopup';
import WelcomePopup from '../components/WelcomePopup';
import CertificateSection from '../components/CertificateSection';
import BrandSection from '../components/BrandSection';
import CodeRainAnimation from '../components/CodeRainAnimation';
import FloatingCodeBlocks from '../components/FloatingCodeBlocks';
import { Helmet } from 'react-helmet-async';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen tech-bg">
      <Helmet>
        <title>BotVibex: AI Chatbot & Website Development | ₹499 Special Offer</title>
        <meta name="description" content="Expert AI chatbot development and professional website creation services by BotVibex. Get custom AI solutions starting at just ₹499. Contact us today for prompt engineering services!" />
        <meta name="keywords" content="AI chatbot development, AI website development, prompt engineering, custom AI chatbots, AI chatbot solutions, AI website builder, AI development services" />
        <link rel="canonical" href="https://botvibex.site" />
        <meta property="og:title" content="BotVibex: AI Chatbot & Website Development" />
        <meta property="og:description" content="Expert AI chatbot development and website creation services starting at ₹499" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://botvibex.site" />
        <meta property="og:image" content="https://botvibex.site/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BotVibex: AI Chatbot & Website Development" />
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
            "@type": "LocalBusiness",
            "name": "BotVibex",
            "image": "https://botvibex.site/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png",
            "url": "https://botvibex.site",
            "description": "AI chatbot and website development services",
            "priceRange": "₹499 - ₹10,000+",
            "openingHours": "Mo-Fr 10:00-18:00",
            "email": "vibeswithbilal050@gmail.com"
          }
        `}</script>
      </Helmet>
      {/* 3D Code Animations */}
      <CodeRainAnimation />
      <FloatingCodeBlocks />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <DiscountBanner />
        <HeroSection />
        <AboutSection />
        <BrandSection />
        <ServicesSection />
        <SkillHighlightsSection />
        <CertificateSection />
        <PortfolioSection />
        <TrustSecuritySection />
        <Footer />
        <ChatBot />
        <OrderFormPopup />
        <WelcomePopup />
      </div>
    </div>
  );
};

export default Index;
