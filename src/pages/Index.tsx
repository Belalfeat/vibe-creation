
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
    document.title = "Digital Creator Portfolio | Website Development, AI Chatbots & Prompt Engineering";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Affordable website development, custom AI chatbot creation, and expert prompt engineering services by a skilled digital creator in India. Transform your digital presence today.");
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
