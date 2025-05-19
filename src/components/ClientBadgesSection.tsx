
import React from 'react';
import { Shield, Award, Star } from 'lucide-react';

const ClientBadgesSection: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gradient mb-2">Trusted by Businesses</h2>
          <p className="text-white/70">Our clients consistently rate us 5 stars for service and delivery</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12">
          <div className="flex flex-col items-center">
            <Shield className="h-12 w-12 text-neon-blue mb-2" />
            <p className="text-xl font-medium text-white">100% Secure</p>
            <p className="text-sm text-white/60">Protected Data</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Star className="h-12 w-12 text-neon-purple mb-2" />
            <p className="text-xl font-medium text-white">5-Star Service</p>
            <p className="text-sm text-white/60">Client Satisfaction</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Award className="h-12 w-12 text-neon-blue mb-2" />
            <p className="text-xl font-medium text-white">Premium Quality</p>
            <p className="text-sm text-white/60">Expert Development</p>
          </div>
        </div>
        
        <div className="mt-12 py-8 border-t border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="flex justify-center">
                <div className="h-12 w-32 bg-white/10 rounded-md flex items-center justify-center text-white/40 text-sm font-light">
                  Client {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientBadgesSection;
