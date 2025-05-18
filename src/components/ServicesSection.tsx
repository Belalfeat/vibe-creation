
import React from 'react';
import { Code, MessageSquare, FileCode } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
  borderClass: string;
  imageUrl: string;
  imageAlt: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  colorClass, 
  borderClass,
  imageUrl,
  imageAlt
}) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="glass-card hover-scale premium-card group p-6 md:p-8 h-full flex flex-col">
      <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      
      <div className="w-full h-48 mb-6 overflow-hidden rounded-lg feature-icon">
        <img 
          src={imageUrl} 
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="feature-overlay">
          <span className="text-white font-medium">{title}</span>
          <span className="text-white/70 text-sm">Explore Service</span>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">{title}</h3>
      
      <p className="text-white/70 mb-6 flex-grow">{description}</p>
      
      <Button 
        onClick={scrollToContact}
        className={`mt-auto w-full bg-transparent ${borderClass} hover:bg-white/5 transition-all duration-300`}
      >
        Get Started
      </Button>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 relative tech-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-neon-blue neon-text text-sm font-medium mb-2">SERVICES</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Transformative Digital Services</h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-4">
            Cutting-edge solutions designed to elevate your brand and create meaningful digital experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Website Development" 
            description="From sleek portfolio sites to robust e-commerce platforms, I build responsive, modern websites optimized for performance and conversion using the latest technologies."
            icon={<Code size={32} className="text-neon-blue" />}
            colorClass="bg-neon-blue/20"
            borderClass="border border-neon-blue neon-border"
            imageUrl="/lovable-uploads/4fe84c43-888d-4033-bb73-3a18e567d7ef.png"
            imageAlt="Website Development Services"
          />
          
          <ServiceCard 
            title="AI Chatbot Development" 
            description="Create intelligent, conversational AI experiences that engage your customers 24/7, answer questions, and drive sales with custom-trained chatbots tailored to your business."
            icon={<MessageSquare size={32} className="text-neon-purple" />}
            colorClass="bg-neon-purple/20"
            borderClass="border border-neon-purple neon-border-purple"
            imageUrl="/lovable-uploads/56bb1bf0-647a-426c-8c0a-03593274789f.png"
            imageAlt="AI Chatbot Development Services"
          />
          
          <ServiceCard 
            title="Prompt Engineering" 
            description="Harness the power of AI with expert prompt engineering that helps you get consistent, high-quality outputs from language models for content creation, customer service, and more."
            icon={<FileCode size={32} className="text-neon-blue" />}
            colorClass="bg-neon-blue/20"
            borderClass="border border-neon-blue neon-border"
            imageUrl="/lovable-uploads/f3eb00a1-f1da-4c63-996a-35740d4606b9.png"
            imageAlt="Prompt Engineering Services"
          />
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-neon-purple/10 blur-3xl"></div>
    </section>
  );
};

export default ServicesSection;
