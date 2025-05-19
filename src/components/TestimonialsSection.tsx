
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Davis",
      position: "Marketing Director",
      company: "TechSolutions Inc.",
      content: "The AI chatbot from BotVibex transformed our customer service approach. We now handle 80% of inquiries automatically, and our response time dropped from hours to seconds.",
      avatar: "https://i.pravatar.cc/150?img=1",
      stars: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "E-commerce Manager",
      company: "Retail Innovations",
      content: "Our website traffic doubled after implementing BotVibex's SEO-optimized AI website. The chatbot has also helped us convert more visitors into customers with 24/7 support.",
      avatar: "https://i.pravatar.cc/150?img=5",
      stars: 5
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Founder & CEO",
      company: "StartupVision",
      content: "As a startup with limited resources, BotVibex's affordable AI solutions were exactly what we needed. Professional service, amazing results, and excellent ongoing support.",
      avatar: "https://i.pravatar.cc/150?img=8",
      stars: 5
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Real feedback from businesses that have transformed their digital presence with BotVibex.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="glass-card p-8 rounded-xl relative hover:border-neon-blue/30 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-neon-blue/20" />
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover border-2 border-neon-blue/30"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-white/60">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {Array(testimonial.stars).fill(0).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-neon-blue fill-neon-blue mr-1" />
                ))}
              </div>
              
              <p className="text-white/80 italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-block glass-card px-8 py-4 rounded-full">
            <p className="text-white/80">
              <span className="text-neon-blue font-bold">90%</span> of our clients report a <span className="text-neon-purple font-bold">50%+ increase</span> in lead generation after implementing our AI solutions
            </p>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-neon-purple/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default TestimonialsSection;
