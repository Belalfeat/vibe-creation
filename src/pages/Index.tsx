
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

const Index: React.FC = () => {
  // Update document title and meta description programmatically
  React.useEffect(() => {
    document.title = "BotVibex: AI Chatbot & Website Development | ₹899 Special Offer";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert AI chatbot development and professional website creation services by BotVibex. Get custom AI solutions starting at just ₹899. Contact us today for prompt engineering services!");
    }
  }, []);

  return (
    <div className="min-h-screen tech-bg">
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
  );
};

export default Index;
