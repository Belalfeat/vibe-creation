
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
    document.title = "Professional Digital Services | Websites, AI Chatbots & Prompt Engineering";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Affordable website development, custom AI chatbot creation, and expert prompt engineering services tailored for businesses looking to enhance their digital presence. Get premium solutions at competitive prices.");
    }
  }, []);
  
  return (
    <div className="min-h-screen tech-bg">
      <Navbar />
      <div className="pt-24">
        <DiscountBanner />
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-6">
          My Services
        </h1>
        <div className="container mx-auto px-6">
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Discover comprehensive digital services designed to elevate your online presence and drive meaningful business results.
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
