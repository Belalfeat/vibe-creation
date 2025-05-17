
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

const Index: React.FC = () => {
  // Update document title and meta description programmatically
  React.useEffect(() => {
    document.title = "VibeBots: Website, AI Chatbot & Prompt Services | ₹899 Limited Offer";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Affordable website & AI chatbot development starting at ₹899. Trusted prompt engineering and custom AI tools for your business based in India. Order now!");
    }
  }, []);

  return (
    <div className="min-h-screen tech-bg">
      <Navbar />
      <DiscountBanner />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillHighlightsSection />
      <PortfolioSection />
      <TrustSecuritySection />
      <Footer />
      <ChatBot />
      <OrderFormPopup />
    </div>
  );
};

export default Index;
