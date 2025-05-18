
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SmartContactForm from '../components/SmartContactForm';
import OrderFormPopup from '../components/OrderFormPopup';
import TrustSecuritySection from '../components/TrustSecuritySection';
import { Helmet } from 'react-helmet';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen tech-bg">
      <Helmet>
        <title>Contact BotVibex | AI Chatbot & Website Development Services</title>
        <meta name="description" content="Get in touch with BotVibex for professional AI chatbot development, custom website creation, and prompt engineering services. Request a quote today for your AI solutions." />
        <meta name="keywords" content="AI chatbot development, AI website development, prompt engineering services, contact BotVibex, AI solutions, custom chatbot developer" />
        <link rel="canonical" href="https://botvibex.site/contact" />
        <meta property="og:title" content="Contact BotVibex | AI Chatbot & Website Development" />
        <meta property="og:description" content="Get in touch with BotVibex for professional AI chatbot and website development services" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://botvibex.site/contact" />
        <meta property="og:image" content="https://botvibex.site/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact BotVibex | AI Chatbot & Website Development" />
        <meta name="twitter:description" content="Get in touch with BotVibex for professional AI chatbot and website development services" />
        <meta name="twitter:image" content="https://botvibex.site/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BotVibex",
            "url": "https://botvibex.site",
            "logo": "https://botvibex.site/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "vibeswithbilal050@gmail.com",
              "contactType": "customer service",
              "areaServed": "Worldwide"
            }
          }
        `}</script>
      </Helmet>
      
      <Navbar />
      <div className="pt-24">
        <div className="container mx-auto px-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-4">
            Contact BotVibex
          </h1>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-8">
            Ready to elevate your digital presence with AI-powered solutions? Get in touch with us today to discuss your project requirements and discover how we can help your business grow.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-12 mt-12">
            <div className="w-full lg:w-1/3">
              <div className="glass-card p-6 space-y-8">
                <div>
                  <h3 className="text-neon-blue neon-text text-xl font-medium mb-3">Contact Information</h3>
                  <p className="text-white/70 mb-4">
                    Have questions about our services? Reach out to us using any of the following methods:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center mt-1">
                        <Mail className="text-neon-blue w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <a href="mailto:vibeswithbilal050@gmail.com" className="text-neon-blue hover:underline">vibeswithbilal050@gmail.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center mt-1">
                        <User className="text-neon-purple w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Social Media</p>
                        <a href="https://instagram.com/botvibex" className="text-neon-purple hover:underline">Instagram: @botvibex</a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-neon-blue neon-text text-xl font-medium mb-3">Business Hours</h3>
                  <p className="text-white/70 mb-2">
                    We're available to help you:
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>10:00 AM - 6:00 PM IST</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 2:00 PM IST</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-neon-blue neon-text text-xl font-medium mb-3">Response Time</h3>
                  <p className="text-white/70">
                    We typically respond to all inquiries within 24 hours during business days. For urgent matters, please mention "Urgent" in your message.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3">
              <SmartContactForm />
            </div>
          </div>
        </div>
        
        <TrustSecuritySection />
      </div>
      <Footer />
      <OrderFormPopup />
    </div>
  );
};

export default Contact;
