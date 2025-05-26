
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioSection from '../components/PortfolioSection';
import OrderFormPopup from '../components/OrderFormPopup';
import { Helmet } from 'react-helmet-async';

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen tech-bg">
      <Helmet>
        <title>BotVibex Portfolio | AI Chatbot & Website Development Projects | Lucknow UP India</title>
        <meta name="description" content="Browse our comprehensive portfolio of AI chatbot development, website creation, real estate platforms, and e-commerce solutions. See successful projects from BotVibex - leading AI developer in Lucknow, UP, India." />
        <meta name="keywords" content="AI chatbot portfolio, website development projects, real estate platform, e-commerce development, BotVibex projects, AI solutions Lucknow UP India" />
        <link rel="canonical" href="https://botvibex.site/portfolio" />
        <meta property="og:title" content="BotVibex Portfolio | AI Chatbot & Website Development Projects" />
        <meta property="og:description" content="Explore our successful AI chatbot implementations, website developments, and digital solutions across various industries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://botvibex.site/portfolio" />
        <meta property="og:image" content="https://botvibex.site/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "BotVibex Portfolio - AI Chatbot & Website Development Projects",
            "description": "Portfolio showcasing successful AI chatbot development, website creation, real estate platforms, and e-commerce solutions by BotVibex",
            "url": "https://botvibex.site/portfolio",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": 5,
              "itemListElement": [
                {
                  "@type": "CreativeWork",
                  "position": 1,
                  "name": "All Skills Showcase Platform",
                  "description": "Comprehensive platform showcasing development skills and capabilities",
                  "url": "https://vibe-bot-glowscape.lovable.app"
                },
                {
                  "@type": "CreativeWork", 
                  "position": 2,
                  "name": "BotVibex - AI Solutions Hub",
                  "description": "Professional AI chatbot development and website creation service platform",
                  "url": "https://botvibex.site"
                },
                {
                  "@type": "CreativeWork",
                  "position": 3, 
                  "name": "Elite Homes 3D Vista",
                  "description": "Luxury real estate platform with 3D property visualization",
                  "url": "https://elitehomes-3d-vista.lovable.app"
                },
                {
                  "@type": "CreativeWork",
                  "position": 4,
                  "name": "Advanced AI Chatbot System", 
                  "description": "Sophisticated AI chatbot with natural language processing",
                  "url": "https://7nw433aypd.app.yourware.so"
                },
                {
                  "@type": "CreativeWork",
                  "position": 5,
                  "name": "Neo-X E-commerce Genesis",
                  "description": "Next-generation e-commerce platform with modern design",
                  "url": "https://neo-x-ecom-genesis.lovable.app"
                }
              ]
            }
          }
        `}</script>
      </Helmet>
      
      <Navbar />
      <div className="pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-6">
          AI Chatbot & Website Development Portfolio
        </h1>
        <div className="container mx-auto px-6">
          <p className="text-white/70 text-center mb-12 max-w-3xl mx-auto">
            Explore our comprehensive collection of successful AI chatbot implementations, responsive website developments, real estate platforms, e-commerce solutions, and innovative digital projects that have delivered exceptional results for businesses across India.
          </p>
        </div>
        <PortfolioSection />
      </div>
      <Footer />
      <OrderFormPopup />
    </div>
  );
};

export default Portfolio;
