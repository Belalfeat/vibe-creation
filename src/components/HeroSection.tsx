
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
import GlowingOrb from './GlowingOrb';

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
            <div className="relative">
              <div className="absolute inset-0 bg-neon-blue/30 blur-xl rounded-full animate-pulse"></div>
              <img 
                src="/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" 
                alt="BotVibex Logo - Leading AI Chatbot Developer in Lucknow, Uttar Pradesh, India" 
                className="h-24 w-auto relative z-10 company-logo"
                width="96"
                height="96"
                loading="eager"
              />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gradient tracking-tight leading-tight">
            <span className="block">AI Chatbot Developer Lucknow</span>
            <span className="block">Website Development UP India</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-4">
            Leading AI solutions provider in Lucknow, Uttar Pradesh. Custom chatbots, responsive websites, and prompt engineering services for Indian businesses.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <span className="text-lg md:text-xl text-neon-blue/80 py-1 px-3 border border-neon-blue/30 rounded-full">Fast AI Chatbot Setup</span>
            <span className="text-lg md:text-xl text-neon-blue/80 py-1 px-3 border border-neon-blue/30 rounded-full">Lucknow Based</span>
            <span className="text-lg md:text-xl text-neon-blue/80 py-1 px-3 border border-neon-blue/30 rounded-full">Hindi & English Support</span>
            <span className="text-lg md:text-xl text-neon-blue/80 py-1 px-3 border border-neon-blue/30 rounded-full">No Code Needed</span>
          </div>
          
          <p className="text-lg md:text-xl text-neon-blue/80 max-w-2xl mx-auto mt-4">
            Professional AI chatbot development starting at just ₹499 - Serving Lucknow, UP, and all of India
          </p>
          
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8">
            <GlowingOrb />
            
            <Button 
              onClick={handleOrderClick}
              className="bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue/20 px-10 py-6 text-lg rounded-md transition-all duration-300 animate-glow neon-border hover:scale-105 transform"
              aria-label="Get your custom AI chatbot developed in Lucknow"
            >
              Start Your AI Project Today
            </Button>
          </div>
          
          <div className="mt-8">
            <p className="text-white/60 text-sm">Proudly serving businesses across Lucknow, Uttar Pradesh, and India</p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <span className="text-white/80 text-sm">✓ Local Expertise in UP</span>
              <span className="text-white/80 text-sm">✓ 24/7 Support</span>
              <span className="text-white/80 text-sm">✓ 100% Satisfaction</span>
              <span className="text-white/80 text-sm">✓ Hindi & English</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator z-20">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <ChevronDown className="text-white/50 animate-bounce" size={20} aria-label="Scroll down for more AI services" />
      </div>
      
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2300eeff' fill-opacity='0.2'%3E%3Cpath d='M0 0h50v50H0V0zm50 50h50v50H50V50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px"
        }}
        aria-hidden="true"
      />
    </section>
  );
};

export default HeroSection;
