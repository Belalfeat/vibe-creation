
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import OrderFormPopup from '../components/OrderFormPopup';

const Contact: React.FC = () => {
  // Update document title and meta description programmatically
  React.useEffect(() => {
    document.title = "Contact Digital Creator | Website & AI Chatbot Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get in touch to discuss your website development, AI chatbot, or prompt engineering needs. Quick responses and affordable solutions for businesses of all sizes.");
    }
  }, []);
  
  return (
    <div className="min-h-screen tech-bg">
      <Navbar />
      <div className="pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-6">
          Contact Me
        </h1>
        <div className="container mx-auto px-6">
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Have questions about website development, AI chatbot creation, or prompt engineering services? Reach out for a quick consultation and affordable quote.
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
