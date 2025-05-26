
import React from 'react';
import { MapPin, Users, Award, Clock } from 'lucide-react';

const LocalSEOSection: React.FC = () => {
  return (
    <section id="local-seo" className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Leading AI Developer in Lucknow, Uttar Pradesh
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            BotVibex is proud to serve businesses across Lucknow, Uttar Pradesh, and throughout India with cutting-edge AI chatbot development, website creation, and prompt engineering services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="glass-card p-6 text-center hover:border-neon-blue/30 transition-all duration-300">
            <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
            <p className="text-white/70">Based in Lucknow, serving all of Uttar Pradesh with personalized AI solutions</p>
          </div>
          
          <div className="glass-card p-6 text-center hover:border-neon-purple/30 transition-all duration-300">
            <div className="w-16 h-16 bg-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-neon-purple" />
            </div>
            <h3 className="text-xl font-bold mb-2">500+ Clients</h3>
            <p className="text-white/70">Trusted by businesses across India for AI chatbot and website development</p>
          </div>
          
          <div className="glass-card p-6 text-center hover:border-neon-blue/30 transition-all duration-300">
            <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2">Award Winning</h3>
            <p className="text-white/70">Recognized as the top AI developer in Lucknow for innovative solutions</p>
          </div>
          
          <div className="glass-card p-6 text-center hover:border-neon-purple/30 transition-all duration-300">
            <div className="w-16 h-16 bg-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-neon-purple" />
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-white/70">Round-the-clock assistance for all your AI chatbot needs in UP</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose BotVibex in Lucknow?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="text-lg font-semibold text-neon-blue mb-2">Local Understanding</h4>
              <p className="text-white/70">Deep knowledge of Lucknow and UP business landscape, cultural nuances, and local market requirements.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-neon-purple mb-2">Hindi & English Support</h4>
              <p className="text-white/70">Bilingual AI chatbots and websites that cater to both Hindi and English speaking customers in India.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-neon-blue mb-2">Affordable Pricing</h4>
              <p className="text-white/70">Cost-effective AI solutions designed for Indian businesses, startups, and enterprises in Uttar Pradesh.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOSection;
