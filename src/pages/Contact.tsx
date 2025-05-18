
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import OrderFormPopup from '../components/OrderFormPopup';

const Contact: React.FC = () => {
  // Update document title and meta description programmatically
  React.useEffect(() => {
    document.title = "Contact BotVibex | AI Chatbot & Website Development Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get in touch with BotVibex for professional AI chatbot development, custom website creation, and prompt engineering services. Request a quote today for your AI solutions.");
    }
  }, []);
  
  return (
    <div className="min-h-screen tech-bg">
      <Navbar />
      <div className="pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-6">
          Contact BotVibex
        </h1>
        <div className="container mx-auto px-6">
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Reach out to discuss your AI chatbot requirements, website development needs, or prompt engineering projects. We're here to help your business succeed in the digital world.
          </p>
        </div>
        <ContactSection />
      </div>
      <Footer />
      <OrderFormPopup />
    </div>
  );
};

export default Contact;
