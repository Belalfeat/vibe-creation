
import React from 'react';
import { Shield, Code, Bot, FileText } from 'lucide-react';

interface SecurityBlockProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
  colorClass: string;
}

const SecurityBlock: React.FC<SecurityBlockProps> = ({ title, icon, items, colorClass }) => {
  return (
    <div className="glass-card p-6 h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className={`${colorClass} w-12 h-12 rounded-lg flex items-center justify-center`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-neon-blue mt-1">•</span>
            <span className="text-white/70">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TrustSecuritySection: React.FC = () => {
  const securityBlocks = [
    {
      title: "General Terms",
      icon: <Shield size={24} className="text-neon-blue" />,
      items: [
        "All services are built using trusted AI tools.",
        "All work is custom-made for each client.",
        "No editor access is shared, only the final product."
      ],
      colorClass: "bg-neon-blue/20"
    },
    {
      title: "Website Development",
      icon: <Code size={24} className="text-neon-purple" />,
      items: [
        "You'll receive only a shareable website link (no editor access).",
        "50% payment required before starting the project.",
        "After preview link, remaining 50% payment must be made before delivery.",
        "One-month support with 15 free revisions only."
      ],
      colorClass: "bg-neon-purple/20"
    },
    {
      title: "AI Chatbot Development",
      icon: <Bot size={24} className="text-neon-blue" />,
      items: [
        "A preview chatbot frame will be shared first.",
        "50% advance required to continue.",
        "Only code and embed key provided — you must add it to your own site."
      ],
      colorClass: "bg-neon-blue/20"
    },
    {
      title: "Prompt Engineering",
      icon: <FileText size={24} className="text-neon-purple" />,
      items: [
        "Sample prompt provided before starting.",
        "Full working prompt delivered only after full payment."
      ],
      colorClass: "bg-neon-purple/20"
    }
  ];

  const additionalTerms = [
    "Do not ask for custom domain (only subdomain will be given).",
    "Any abusive or scam attempt will lead to a full ban and blacklist.",
    "UPI is the only accepted payment method.",
    "All communication should stay professional."
  ];

  return (
    <section id="trust-security" className="py-20 relative tech-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-neon-blue neon-text text-sm font-medium mb-2">SECURITY & TRUST</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Terms, Conditions & Scam Prevention Policy</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Clear guidelines to ensure a transparent and secure working relationship.
            These terms protect both parties and establish professional standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {securityBlocks.map((block, index) => (
            <SecurityBlock 
              key={index}
              title={block.title}
              icon={block.icon}
              items={block.items}
              colorClass={block.colorClass}
            />
          ))}
        </div>
        
        <div className="glass-card p-6">
          <h3 className="text-xl font-bold text-neon-purple mb-4">Additional Terms</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalTerms.map((term, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-neon-blue mt-1">•</span>
                <span className="text-white/70">{term}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-neon-blue/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-neon-purple/10 blur-3xl"></div>
    </section>
  );
};

export default TrustSecuritySection;
