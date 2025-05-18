
import React from 'react';
import { AlertCircle, Zap } from 'lucide-react';

const DiscountBanner: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 backdrop-blur-sm py-3 border-t border-b border-neon-blue/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          <div className="flex items-center mr-2 animate-pulse">
            <Zap className="text-neon-blue mr-1" size={20} />
            <span className="font-bold text-white">🔥 LIMITED TIME OFFER — FIRST WEEK ONLY 🔥</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 mt-1 md:mt-0">
            <div className="flex items-center">
              <span className="text-white/80 text-sm mr-2">Website Development:</span>
              <span className="text-neon-blue font-bold">₹899</span>
              <span className="text-white/50 text-xs line-through ml-1">(₹2999)</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-white/80 text-sm mr-2">AI Chatbot:</span>
              <span className="text-neon-blue font-bold">₹499</span>
              <span className="text-white/50 text-xs line-through ml-1">(₹999)</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-white/80 text-sm mr-2">Combo Offer:</span>
              <span className="text-neon-purple font-bold">Buy both + 2 Free Prompts!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
