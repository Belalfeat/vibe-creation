
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import OrderFormPopup from '../components/OrderFormPopup';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen tech-bg">
      <Navbar />
      <div className="pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-6">
          Contact Me
        </h1>
        <div className="container mx-auto px-6">
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Have questions or want to discuss your project? Reach out to me directly.
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
