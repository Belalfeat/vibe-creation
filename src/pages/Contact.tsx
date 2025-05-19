
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SmartContactForm from '../components/SmartContactForm';
import OrderFormPopup from '../components/OrderFormPopup';
import TrustSecuritySection from '../components/TrustSecuritySection';
import { Helmet } from 'react-helmet-async';
import { Mail, User, MessageSquare, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen tech-bg">
      <Helmet>
        <title>Contact BotVibex | AI Chatbot & Website Development</title>
        <meta name="description" content="Get in touch for custom AI chatbots, websites, or automation systems. Fast delivery, expert development, full support at affordable prices." />
        <meta name="keywords" content="AI chatbot for business, prompt engineer services, AI website developer India, chatbot builder for WhatsApp, AI lead generation chatbot, contact BotVibex" />
        <link rel="canonical" href="https://botvibex.site/contact" />
        <meta property="og:title" content="Contact BotVibex | AI Chatbot & Website Development" />
        <meta property="og:description" content="Get in touch for custom AI chatbots, websites, or automation systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://botvibex.site/contact" />
        <meta property="og:image" content="https://botvibex.site/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact BotVibex | AI Chatbot & Website Development" />
        <meta name="twitter:description" content="Get in touch for custom AI chatbots, websites, or automation systems." />
        <meta name="twitter:image" content="https://botvibex.site/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact BotVibex",
            "description": "Contact us for AI chatbot and website development services",
            "url": "https://botvibex.site/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "BotVibex",
              "email": "vibeswithbilal050@gmail.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "vibeswithbilal050@gmail.com",
                "areaServed": "Worldwide",
                "availableLanguage": ["English", "Hindi"]
              }
            }
          }
        `}</script>
      </Helmet>
      
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-4">
            Get Your Custom AI Solution
          </h1>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-8">
            Ready to elevate your digital presence with AI-powered solutions? Fill out the form below to discuss your project requirements.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-12 mt-12">
            <div className="w-full lg:w-1/3">
              <div className="glass-card p-6 space-y-8">
                <div>
                  <h2 className="text-neon-blue neon-text text-xl font-medium mb-3">Contact Information</h2>
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
      </main>
      <Footer />
      <OrderFormPopup />
      
      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-24 z-50">
        <Button className="rounded-full w-14 h-14 bg-neon-purple text-white hover:bg-neon-purple/80 shadow-lg shadow-neon-purple/30 flex items-center justify-center p-0 animate-pulse">
          <MessageCircle className="w-6 h-6" aria-label="Chat with us" />
        </Button>
      </div>
      
      <div className="fixed right-6 bottom-6 z-50">
        <Button className="rounded-full px-6 py-5 bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:from-neon-purple hover:to-neon-blue shadow-lg shadow-neon-blue/30 transition-all duration-300 flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          <span className="font-medium">Hire Me</span>
        </Button>
      </div>
    </div>
  );
};

export default Contact;
