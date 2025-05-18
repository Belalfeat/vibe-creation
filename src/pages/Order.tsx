
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SmartContactForm from '../components/SmartContactForm';
import TrustSecuritySection from '../components/TrustSecuritySection';
import DiscountBanner from '../components/DiscountBanner';
import OrderFormPopup from '../components/OrderFormPopup';
import { Helmet } from 'react-helmet';

const Order: React.FC = () => {
  return (
    <div className="min-h-screen tech-bg">
      <Helmet>
        <title>Order AI Chatbot & Website Development Services | BotVibex</title>
        <meta name="description" content="Order custom AI chatbot development starting at ₹499 or responsive website creation at ₹899. Get premium prompt engineering services with BotVibex." />
        <meta name="keywords" content="AI chatbot order, custom website development, prompt engineering services, hire AI developer, AI solutions pricing, AI chatbot for business" />
        <link rel="canonical" href="https://botvibex.site/order" />
        <meta property="og:title" content="Order AI Chatbot & Website Development Services | BotVibex" />
        <meta property="og:description" content="Get started with custom AI solutions for your business today. Order AI chatbot development starting at ₹499." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://botvibex.site/order" />
        <meta property="og:image" content="https://botvibex.site/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Order AI Chatbot & Website Development Services | BotVibex" />
        <meta name="twitter:description" content="Get started with custom AI solutions for your business today. Order AI chatbot development starting at ₹499." />
        <meta name="twitter:image" content="https://botvibex.site/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Chatbot & Website Development",
            "provider": {
              "@type": "Organization",
              "name": "BotVibex",
              "url": "https://botvibex.site"
            },
            "description": "Custom AI chatbot development and website creation services for businesses of all sizes.",
            "offers": {
              "@type": "Offer",
              "price": "499",
              "priceCurrency": "INR"
            }
          }
        `}</script>
      </Helmet>
      
      <Navbar />
      <div className="pt-24">
        <DiscountBanner />
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-4">
            Order AI Solutions
          </h1>
          <p className="text-white/70 text-center mb-8 max-w-2xl mx-auto">
            Ready to transform your business with AI chatbot technology or a new responsive website? Place your order today and take advantage of our special promotional pricing on professional services.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="glass-card p-6 border border-neon-blue/50 hover:border-neon-blue transition-colors duration-300 text-center">
              <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-neon-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Chatbot</h3>
              <p className="text-2xl font-bold text-neon-blue mb-2">Starting at ₹499</p>
              <ul className="text-white/70 text-left space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>24/7 Customer Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Custom Training & Responses</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Integration with Your Website</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Regular Updates</span>
                </li>
              </ul>
              <Button onClick={handleOrderClick} className="w-full neon-border hover:bg-white/5">Order Now</Button>
            </div>
            
            <div className="glass-card p-6 border-2 border-neon-purple transform scale-105 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-neon-purple text-white text-xs px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="w-16 h-16 bg-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Website</h3>
              <p className="text-2xl font-bold text-neon-purple mb-2">Starting at ₹899</p>
              <ul className="text-white/70 text-left space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>SEO Optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Built-in AI Features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Custom Design & Branding</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Fast Loading Speed</span>
                </li>
              </ul>
              <Button onClick={handleOrderClick} className="w-full neon-border-purple bg-neon-purple/20 hover:bg-neon-purple/30">Order Now</Button>
            </div>
            
            <div className="glass-card p-6 border border-neon-blue/50 hover:border-neon-blue transition-colors duration-300 text-center">
              <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-neon-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Prompt Engineering</h3>
              <p className="text-2xl font-bold text-neon-blue mb-2">Custom Pricing</p>
              <ul className="text-white/70 text-left space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Advanced AI Training</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Customized Prompt Templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Performance Optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Expert Consultation</span>
                </li>
              </ul>
              <Button onClick={handleOrderClick} className="w-full neon-border hover:bg-white/5">Request Quote</Button>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center text-gradient mb-8">Place Your Custom Order</h2>
            <SmartContactForm />
          </div>
        </div>
        <TrustSecuritySection />
      </div>
      <Footer />
      <OrderFormPopup />
    </div>
  );
};

const Button = ({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void; className?: string }) => {
  return (
    <button 
      onClick={onClick} 
      className={`px-6 py-3 rounded-md transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

const handleOrderClick = () => {
  const orderEvent = new Event('order-now-click');
  document.dispatchEvent(orderEvent);
};

export default Order;
