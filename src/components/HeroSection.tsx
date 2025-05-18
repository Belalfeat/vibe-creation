
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
import GlowingOrb from './GlowingOrb';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  const handleOrderClick = () => {
    const orderEvent = new Event('order-now-click');
    document.dispatchEvent(orderEvent);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden tech-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-[#0a001f] z-10"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-neon-blue/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-neon-purple/20 blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 z-20 text-center">
        <div className="space-y-6 animate-fade-in">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" 
              alt="BotVibex - AI Chatbot & Website Development Company" 
              className="h-24 w-auto company-logo"
            />
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gradient tracking-tight leading-tight">
            <span className="block">BotVibex</span>
            <span className="text-xl md:text-2xl block mt-2 text-white/80">AI CHATBOT & WEBSITE DEVELOPMENT</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-4">
            Transform your business with custom AI chatbots and responsive websites
          </p>
          
          <p className="text-lg md:text-xl text-neon-blue/80 max-w-2xl mx-auto">
            Affordable AI solutions starting at just ₹499
          </p>
          
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8">
            <GlowingOrb />
            
            <div className="flex flex-col md:flex-row gap-4">
              <Button 
                onClick={handleOrderClick}
                className="bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue/20 px-6 py-6 text-lg rounded-md transition-all duration-300 animate-glow neon-border hover:scale-105 transform"
              >
                Get Your Custom AI Solution Today
              </Button>
              
              <Link to="/blog">
                <Button 
                  className="bg-transparent border border-neon-purple text-neon-purple hover:bg-neon-purple/20 px-6 py-6 text-lg rounded-md transition-all duration-300 animate-glow neon-border-purple hover:scale-105 transform"
                >
                  Read Our Latest Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator z-20">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <ChevronDown className="text-white/50 animate-bounce" size={20} />
      </div>
      
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2300eeff' fill-opacity='0.2'%3E%3Cpath d='M0 0h50v50H0V0zm50 50h50v50H50V50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px"
        }}
      />
    </section>
  );
};

export default HeroSection;
