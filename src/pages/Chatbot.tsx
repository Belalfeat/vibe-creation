
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatbotWelcomeForm from '../components/ChatbotWelcomeForm';
import { Helmet } from 'react-helmet-async';

const Chatbot: React.FC = () => {
  return (
    <div className="min-h-screen tech-bg">
      <Helmet>
        <title>Get Your AI Chatbot | BotVibex</title>
        <meta name="description" content="Create your custom AI chatbot with BotVibex. 24/7 customer support, lead generation, and seamless integrations for your business." />
        <meta name="keywords" content="AI chatbot, custom chatbot, business chatbot, WhatsApp chatbot, chatbot development, AI assistant" />
        <link rel="canonical" href="https://botvibex.site/chatbot" />
        <meta property="og:title" content="Get Your AI Chatbot | BotVibex" />
        <meta property="og:description" content="Create your custom AI chatbot with BotVibex. 24/7 customer support, lead generation, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://botvibex.site/chatbot" />
        <meta property="og:image" content="https://botvibex.site/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "BotVibex AI Chatbot",
            "description": "Custom AI chatbot solutions for businesses of all sizes",
            "offers": {
              "@type": "Offer",
              "price": "499",
              "priceCurrency": "INR"
            }
          }
        `}</script>
      </Helmet>
      
      <Navbar />
      <div className="pt-24 pb-16">
        <ChatbotWelcomeForm />
      </div>
      <Footer />
    </div>
  );
};

export default Chatbot;
