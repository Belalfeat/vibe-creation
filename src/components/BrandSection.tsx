
import React from 'react';
import { Award, Users, ThumbsUp } from 'lucide-react';

const BrandSection: React.FC = () => {
  return (
    <section id="about-brand" className="py-16 relative tech-bg">
      <div className="container mx-auto px-6">
        <div className="glass-card p-8 rounded-xl border border-white/10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3 flex justify-center">
              <div className="company-logo">
                <img 
                  src="/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" 
                  alt="BotVibex Logo - AI Chatbot & Website Development Company" 
                  className="w-48 h-auto"
                />
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">BotVibex</h2>
              <h3 className="text-xl text-white/90 mb-4">AI CHATBOT & WEBSITE DEVELOPMENT EXPERTS</h3>
              
              <p className="text-white/70 mb-6">
                At BotVibex, we specialize in developing cutting-edge AI chatbots, responsive websites, and expert prompt engineering solutions that transform businesses. Our team combines advanced AI technology with modern design principles to create digital experiences that engage customers, streamline operations, and drive growth for companies across industries.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="glass-card p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <Award className="text-neon-blue" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-neon-blue mb-2">50+</div>
                  <div className="text-white/70 text-sm">Satisfied Clients</div>
                </div>
                
                <div className="glass-card p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="text-neon-blue" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-neon-blue mb-2">100+</div>
                  <div className="text-white/70 text-sm">AI Solutions Delivered</div>
                </div>
                
                <div className="glass-card p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <ThumbsUp className="text-neon-blue" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-neon-blue mb-2">100%</div>
                  <div className="text-white/70 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
