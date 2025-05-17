
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
    document.title = "Website & AI Chatbot Services India | Affordable from ₹899";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Affordable website development from ₹899, custom AI chatbot creation from ₹499, and expert prompt engineering services. Get premium solutions at competitive prices in India.");
    }
  }, []);
  
  return (
    <div className="min-h-screen tech-bg">
      <Navbar />
      <div className="pt-24">
        <DiscountBanner />
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-6">
          Our Services
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
