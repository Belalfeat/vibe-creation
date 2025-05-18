
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import TrustSecuritySection from '../components/TrustSecuritySection';
import OrderFormPopup from '../components/OrderFormPopup';
import DiscountBanner from '../components/DiscountBanner';

const Order: React.FC = () => {
  // Update document title and meta description programmatically
  React.useEffect(() => {
    document.title = "Order AI Chatbot & Website Development Services | BotVibex";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Order custom AI chatbot development starting at ₹499 or responsive website creation at ₹899. Special offers available for combined services with expert prompt engineering.");
    }
  }, []);
  
  return (
    <div className="min-h-screen tech-bg">
      <Navbar />
      <div className="pt-24">
        <DiscountBanner />
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-6">
          Order AI Solutions
        </h1>
        <div className="container mx-auto px-6">
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Ready to transform your business with AI chatbot technology or a new responsive website? Place your order today and take advantage of our special promotional pricing on professional services.
          </p>
        </div>
        <ContactSection />
        <TrustSecuritySection />
      </div>
      <Footer />
      <OrderFormPopup />
    </div>
  );
};

export default Order;
