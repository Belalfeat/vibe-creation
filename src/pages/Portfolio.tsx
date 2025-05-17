
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioSection from '../components/PortfolioSection';
import OrderFormPopup from '../components/OrderFormPopup';

const Portfolio: React.FC = () => {
  // Update document title and meta description programmatically
  React.useEffect(() => {
    document.title = "Project Portfolio | Website & AI Chatbot Development Showcase";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Browse through my portfolio of custom websites, AI chatbots, and prompt engineering projects. See how I've helped businesses transform their digital presence with innovative solutions.");
    }
  }, []);
  
  return (
    <div className="min-h-screen tech-bg">
      <Navbar />
      <div className="pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-6">
          My Project Portfolio
        </h1>
        <div className="container mx-auto px-6">
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Explore my collection of custom websites, AI chatbots, and prompt engineering projects that have helped businesses achieve their digital goals.
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
