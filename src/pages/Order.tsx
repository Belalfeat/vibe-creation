
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
    document.title = "Order Website & AI Chatbot Services | ₹899 Special Offer India";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Order custom website development at ₹899 (real price ₹2999) or AI chatbot at ₹499 (real price ₹999). Limited time offer for businesses in India with UPI payment.");
    }
  }, []);
  
  return (
    <div className="min-h-screen tech-bg">
      <Navbar />
      <div className="pt-24">
        <DiscountBanner />
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-6">
          Order Now
        </h1>
        <div className="container mx-auto px-6">
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Ready to transform your digital presence? Order affordable website development, AI chatbot creation, or prompt engineering services at special promotional prices.
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
