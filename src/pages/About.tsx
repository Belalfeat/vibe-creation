
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import OrderFormPopup from '../components/OrderFormPopup';

const About: React.FC = () => {
  // Update document title and meta description programmatically
  React.useEffect(() => {
    document.title = "About BotVibex | AI Chatbot & Website Development Experts";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about BotVibex, your partner for AI chatbot development, website creation and prompt engineering. Discover our expertise, services and client success stories.");
    }
  }, []);
  
  return (
    <div className="min-h-screen tech-bg">
      <Navbar />
      <div className="pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-6">
          About BotVibex
        </h1>
        <div className="container mx-auto px-6">
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Discover our journey in creating innovative AI chatbot solutions, responsive websites, and expert prompt engineering services that transform businesses.
          </p>
        </div>
        <AboutSection />
      </div>
      <Footer />
      <OrderFormPopup />
    </div>
  );
};

export default About;
