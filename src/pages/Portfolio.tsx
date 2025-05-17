
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioSection from '../components/PortfolioSection';
import OrderFormPopup from '../components/OrderFormPopup';

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen tech-bg">
      <Navbar />
      <div className="pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-6">
          My Project Portfolio
        </h1>
        <div className="container mx-auto px-6">
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Explore my latest projects that showcase my skills in website development, AI chatbot creation, and prompt engineering.
          </p>
        </div>
        <PortfolioSection />
      </div>
      <Footer />
      <OrderFormPopup />
    </div>
  );
};

export default Portfolio;
