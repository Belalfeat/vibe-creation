
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const WelcomePopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    
    // Auto-close after 12 seconds
    const autoCloseTimer = setTimeout(() => {
      setIsVisible(false);
    }, 12000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(autoCloseTimer);
    };
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      />
      
      <div 
        className="relative glass-card border border-neon-blue rounded-xl p-8 w-11/12 max-w-lg transform transition-all duration-700 animate-fade-in"
        style={{
          perspective: '1000px',
          animation: 'popup-3d 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      >
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-white/70 hover:text-white"
        >
          <X size={20} />
        </button>
        
        {/* Logo section */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" 
              alt="BotVibex Logo" 
              className="h-16 w-auto"
            />
            <div className="ml-3">
              <h3 className="text-xl font-bold text-gradient">BotVibex</h3>
              <p className="text-white/70 text-sm">WEB DEVELOPMENT</p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gradient mb-4">
          Welcome to VibeBots!
        </h2>
        
        <p className="text-white/80 text-center mb-6">
          Get your AI-powered website or chatbot at special launch prices - Limited time offer!
        </p>
        
        <div className="bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 p-4 rounded-lg mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white">Website Development</span>
            <span className="text-neon-blue font-bold">₹899</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white">AI Chatbot</span>
            <span className="text-neon-blue font-bold">₹499</span>
          </div>
        </div>
        
        <Button 
          onClick={() => {
            setIsVisible(false);
            const orderEvent = new Event('order-now-click');
            document.dispatchEvent(orderEvent);
          }}
          className="w-full bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue/20 py-6 text-lg rounded-md transition-all duration-300 animate-glow neon-border hover:scale-105 transform"
        >
          Claim Your Special Offer Now
        </Button>
      </div>
    </div>
  );
};

export default WelcomePopup;
