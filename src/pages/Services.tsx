
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import SkillHighlightsSection from '../components/SkillHighlightsSection';
import OrderFormPopup from '../components/OrderFormPopup';
import DiscountBanner from '../components/DiscountBanner';

const Services: React.FC = () => {
  // Update document title and meta description programmatically
  React.useEffect(() => {
    document.title = "AI Chatbot & Website Development Services | BotVibex";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional AI chatbot development, custom website creation, and prompt engineering services from BotVibex. Transform your business with our affordable AI solutions starting at ₹899.");
    }
  }, []);
  
  return (
    <div className="min-h-screen tech-bg">
      <Navbar />
      <div className="pt-24">
        <DiscountBanner />
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-6">
          AI Development Services
        </h1>
        <div className="container mx-auto px-6">
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Explore our comprehensive AI chatbot development, website creation, and prompt engineering services designed to elevate your business in the digital landscape.
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
