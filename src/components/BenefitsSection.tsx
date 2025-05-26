
import React from 'react';
import { MessageCircle, Globe, Zap } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      id: 1,
      icon: <MessageCircle className="h-12 w-12 text-neon-blue" />,
      title: "24/7 AI Chatbot Solutions for Lucknow Businesses",
      description: "Never miss a customer inquiry again. Our AI chatbots provide round-the-clock support for businesses in Lucknow, UP, answering FAQs instantly and collecting leads while you sleep."
    },
    {
      id: 2,
      icon: <Globe className="h-12 w-12 text-neon-purple" />,
      title: "SEO-Optimized Website Development in UP",
      description: "Rank higher on Google with our custom-built websites designed for maximum visibility in Lucknow and across Uttar Pradesh. Built with latest technology for best results."
    },
    {
      id: 3,
      icon: <Zap className="h-12 w-12 text-neon-blue" />,
      title: "Expert Prompt Engineering Services India",
      description: "Leverage cutting-edge prompt engineering from our Lucknow-based team to make your AI interactions more human-like, accurate, and effective at driving conversions."
    }
  ];

  return (
    <section id="benefits" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Why Choose BotVibex for AI Development in Lucknow?
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            BotVibex is Lucknow's premier AI chatbot development company, helping businesses across Uttar Pradesh automate support, save time, and improve client satisfaction with custom AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="glass-card p-8 hover:border-neon-blue/30 transition-all duration-300 rounded-xl flex flex-col items-center text-center group"
            >
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 p-4 bg-black/30 rounded-full">
                {benefit.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-white/70">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-white/80 max-w-4xl mx-auto">
            Our AI solutions are designed for businesses of all sizes across India, from Lucknow startups to UP enterprises. With BotVibex, you get cutting-edge AI technology without the enterprise-level price tag or technical complexity. We understand the local market in Uttar Pradesh and deliver solutions that work for Indian businesses.
          </p>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-48 bg-neon-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-neon-purple/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default BenefitsSection;
