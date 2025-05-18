
import React from 'react';
import { Code, MessageSquare, FileCode } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface SkillCardProps {
  title: string;
  description: string;
  benefits: string[];
  whyChooseUs: string;
  clientTestimonial: {
    text: string;
    name: string;
    position: string;
  };
  icon: React.ReactNode;
  imageUrl: string;
  colorClass: string;
  borderClass: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  title, 
  description, 
  benefits, 
  whyChooseUs, 
  clientTestimonial, 
  icon, 
  imageUrl, 
  colorClass, 
  borderClass 
}) => {
  const handleOrderClick = () => {
    const orderEvent = new Event('order-now-click');
    document.dispatchEvent(orderEvent);
  };

  return (
    <div className="glass-card group p-6 md:p-8 h-full flex flex-col">
      <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      
      <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">{title}</h3>
      
      <p className="text-white/70 mb-6">{description}</p>
      
      <div className="mb-6">
        <h4 className="text-neon-blue font-medium mb-3">Key Benefits</h4>
        <ul className="text-white/70 space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-neon-blue">•</span> {benefit}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6">
        <h4 className="text-neon-blue font-medium mb-3">Why Choose Us</h4>
        <p className="text-white/70">{whyChooseUs}</p>
      </div>
      
      <div className="glass-card p-4 mb-6 border border-white/10">
        <p className="text-white/70 italic mb-2">"{clientTestimonial.text}"</p>
        <p className="text-neon-blue font-medium">{clientTestimonial.name}</p>
        <p className="text-white/50 text-sm">{clientTestimonial.position}</p>
      </div>
      
      <Button 
        onClick={handleOrderClick}
        className={`mt-auto w-full bg-transparent ${borderClass} hover:bg-white/5 transition-all duration-300`}
      >
        Get Started
      </Button>
    </div>
  );
};

const SkillHighlightsSection: React.FC = () => {
  const skills = [
    {
      title: "AI Chatbot Development",
      description: "Create intelligent, conversational AI experiences that engage your customers 24/7, answer questions, and drive sales.",
      benefits: [
        "24/7 automated customer support",
        "Personalized user experiences",
        "Increased conversion rates",
        "Reduced support costs"
      ],
      whyChooseUs: "We build custom-trained chatbots that understand your business context and communicate in your brand voice, delivering a seamless experience for your users.",
      clientTestimonial: {
        text: "The chatbot increased our customer satisfaction by 40% and reduced support tickets by over 60%. Best investment we've made this year!",
        name: "Sarah Johnson",
        position: "Marketing Director"
      },
      icon: <MessageSquare size={32} className="text-neon-purple" />,
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      colorClass: "bg-neon-purple/20",
      borderClass: "border border-neon-purple neon-border-purple"
    },
    {
      title: "Prompt Engineering",
      description: "Harness the power of AI with expert prompt engineering that helps you get consistent, high-quality outputs from language models.",
      benefits: [
        "Optimized AI interactions",
        "Consistent, reliable outputs",
        "Customized to your specific needs",
        "Enhanced content creation"
      ],
      whyChooseUs: "Our prompt engineering expertise ensures you get the most out of AI tools like GPT-4, with carefully crafted prompts that deliver exactly what you need, every time.",
      clientTestimonial: {
        text: "The prompts developed for our content team have revolutionized our workflow. What used to take hours now takes minutes with consistent quality.",
        name: "Michael Chen",
        position: "Content Strategist"
      },
      icon: <FileCode size={32} className="text-neon-blue" />,
      imageUrl: "/lovable-uploads/f3eb00a1-f1da-4c63-996a-35740d4606b9.png",
      colorClass: "bg-neon-blue/20",
      borderClass: "border border-neon-blue neon-border"
    },
    {
      title: "Website Development",
      description: "From sleek portfolio sites to robust e-commerce platforms, I build responsive, modern websites optimized for performance and conversion.",
      benefits: [
        "Mobile-responsive designs",
        "SEO-optimized structure",
        "Fast loading times",
        "Intuitive user experience"
      ],
      whyChooseUs: "We combine cutting-edge technology with stunning design to create websites that not only look amazing but also drive results for your business.",
      clientTestimonial: {
        text: "Our new website has increased our online conversions by 35%. The design is exactly what we wanted - modern, clean, and professional.",
        name: "Alex Torres",
        position: "Business Owner"
      },
      icon: <Code size={32} className="text-neon-blue" />,
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
      colorClass: "bg-neon-blue/20",
      borderClass: "border border-neon-blue neon-border"
    }
  ];

  return (
    <section id="skill-highlights" className="py-20 relative tech-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-neon-blue neon-text text-sm font-medium mb-2">SKILL HIGHLIGHTS</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Expert Digital Solutions</h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-4">
            Specialized skills and services designed to elevate your digital presence and drive meaningful results
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              title={skill.title}
              description={skill.description}
              benefits={skill.benefits}
              whyChooseUs={skill.whyChooseUs}
              clientTestimonial={skill.clientTestimonial}
              icon={skill.icon}
              imageUrl={skill.imageUrl}
              colorClass={skill.colorClass}
              borderClass={skill.borderClass}
            />
          ))}
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-neon-purple/10 blur-3xl"></div>
    </section>
  );
};

export default SkillHighlightsSection;
