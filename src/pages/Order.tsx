
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import TrustSecuritySection from '../components/TrustSecuritySection';
import OrderFormPopup from '../components/OrderFormPopup';
import DiscountBanner from '../components/DiscountBanner';

const Order: React.FC = () => {
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
            Ready to get started? Fill out the form below to place your order and transform your digital presence.
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
