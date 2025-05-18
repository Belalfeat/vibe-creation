
import React from 'react';

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
                  alt="BotVibex Logo" 
                  className="w-48 h-auto"
                />
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-4">BotVibex</h3>
              <h4 className="text-xl text-white/90 mb-4">WEB DEVELOPMENT & AI SOLUTIONS</h4>
              
              <p className="text-white/70 mb-6">
                At BotVibex, we combine cutting-edge AI technology with modern web design principles to create digital experiences that transform businesses. Our expertise in website development, AI chatbots, and prompt engineering allows us to deliver solutions that are not just visually stunning but also intelligent and effective.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="glass-card p-4 text-center">
                  <div className="text-3xl font-bold text-neon-blue mb-2">50+</div>
                  <div className="text-white/70 text-sm">Satisfied Clients</div>
                </div>
                
                <div className="glass-card p-4 text-center">
                  <div className="text-3xl font-bold text-neon-blue mb-2">100+</div>
                  <div className="text-white/70 text-sm">Projects Completed</div>
                </div>
                
                <div className="glass-card p-4 text-center">
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
