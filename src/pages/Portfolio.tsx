
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioSection from '../components/PortfolioSection';
import OrderFormPopup from '../components/OrderFormPopup';

const Portfolio: React.FC = () => {
  // Update document title and meta description programmatically
  React.useEffect(() => {
    document.title = "BotVibex Portfolio | AI Chatbot & Website Development Projects";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Browse our portfolio of successful AI chatbot implementations, custom website developments, and prompt engineering projects. See how we've helped businesses transform their digital presence.");
    }
  }, []);
  
  return (
    <div className="min-h-screen tech-bg">
      <Navbar />
      <div className="pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-6">
          AI Chatbot & Website Projects
        </h1>
        <div className="container mx-auto px-6">
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Explore our collection of successful AI chatbot implementations, responsive website development projects, and prompt engineering solutions that have delivered real results.
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
