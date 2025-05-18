
import React from 'react';
import { Badge, Check } from 'lucide-react';

const CertificateSection: React.FC = () => {
  return (
    <section id="certification" className="py-20 relative tech-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-neon-blue neon-text text-sm font-medium mb-2">VERIFIED CREDENTIALS</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Verified by AI Experts</h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-4">
            Certified skills and expertise to deliver high-quality AI solutions for your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="certificate-frame rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/f3eb00a1-f1da-4c63-996a-35740d4606b9.png" 
              alt="Prompt Engineering Certificate" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gradient">Certified Prompt Engineering Skills</h3>
            <p className="text-white/70">
              With professional certification in Prompt Engineering from KodeKloud, I bring industry-validated expertise to deliver powerful AI solutions that help your business thrive.
            </p>
            
            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-3">
                <div className="bg-neon-blue/20 p-2 rounded-full">
                  <Check className="text-neon-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Advanced Prompt Design</h4>
                  <p className="text-white/70 text-sm">Creating sophisticated prompts that generate consistent, high-quality outputs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-neon-blue/20 p-2 rounded-full">
                  <Check className="text-neon-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">System Optimization</h4>
                  <p className="text-white/70 text-sm">Fine-tuning AI systems for maximum efficiency and performance</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-neon-blue/20 p-2 rounded-full">
                  <Check className="text-neon-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Custom AI Solutions</h4>
                  <p className="text-white/70 text-sm">Developing tailored AI solutions for specific business needs</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/20 rounded-lg p-4 flex items-center gap-4 mt-6">
              <Badge className="text-neon-blue" size={24} />
              <div>
                <h4 className="font-medium text-white">KodeKloud Certified</h4>
                <p className="text-white/70 text-sm">Prompt Engineering 101 - Learn by Doing</p>
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
