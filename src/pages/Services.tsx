
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import SkillHighlightsSection from '../components/SkillHighlightsSection';
import OrderFormPopup from '../components/OrderFormPopup';
import DiscountBanner from '../components/DiscountBanner';

const Services: React.FC = () => {
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
            Discover the range of digital services I offer to elevate your online presence.
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
