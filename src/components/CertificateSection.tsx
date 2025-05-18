
import React from 'react';
import { Badge, Check } from 'lucide-react';

const CertificateSection: React.FC = () => {
  return (
    <section id="certification" className="py-20 relative tech-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-neon-blue neon-text text-sm font-medium mb-2">EXPERTISE VERIFICATION</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Verified AI Expert Skills</h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-4">
            Certified expertise in AI chatbot development and prompt engineering to deliver high-quality solutions for your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="certificate-frame rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/56bb1bf0-647a-426c-8c0a-03593274789f.png" 
              alt="AI Chatbot Development Certificate - BotVibex Expertise" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gradient">Certified AI Development Skills</h3>
            <p className="text-white/70">
              With professional certification in AI development and chatbot engineering, BotVibex brings industry-validated expertise to deliver powerful AI solutions that help your business thrive in the digital landscape.
            </p>
            
            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-3">
                <div className="bg-neon-blue/20 p-2 rounded-full">
                  <Check className="text-neon-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">AI Chatbot Development</h4>
                  <p className="text-white/70 text-sm">Creating sophisticated AI chatbots that engage customers and streamline business operations</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-neon-blue/20 p-2 rounded-full">
                  <Check className="text-neon-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Website Optimization</h4>
                  <p className="text-white/70 text-sm">Building SEO-friendly, responsive websites with modern design principles</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-neon-blue/20 p-2 rounded-full">
                  <Check className="text-neon-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Custom AI Solutions</h4>
                  <p className="text-white/70 text-sm">Developing tailored AI solutions for specific business needs and requirements</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/20 rounded-lg p-4 flex items-center gap-4 mt-6">
              <Badge className="text-neon-blue" size={24} />
              <div>
                <h4 className="font-medium text-white">Professional AI Development</h4>
                <p className="text-white/70 text-sm">Trusted by 50+ satisfied clients in India and beyond</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-neon-purple/10 blur-3xl"></div>
    </section>
  );
};

export default CertificateSection;
