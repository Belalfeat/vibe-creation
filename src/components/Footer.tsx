
import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 relative bg-gradient-to-t from-black to-[#0a001f]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Info */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-xl font-bold text-gradient mb-2">DIGITAL<span className="text-neon-blue">CREATOR</span></h2>
            <p className="text-white/70 text-sm">vibeswithbilal050@gmail.com</p>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
              <Instagram className="text-white/70 group-hover:text-neon-blue transition-colors duration-300" size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
              <Youtube className="text-white/70 group-hover:text-neon-blue transition-colors duration-300" size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
              <span className="text-white/70 group-hover:text-neon-blue transition-colors duration-300 font-bold">U</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
              <span className="text-white/70 group-hover:text-neon-blue transition-colors duration-300 font-bold">K</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">© {currentYear} Digital Creator. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0 flex items-center gap-6">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
          </div>
        </div>
      </div>
      
      {/* Background grid */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2300eeff' fill-opacity='0.2'%3E%3Cpath d='M0 0h50v50H0V0zm50 50h50v50H50V50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px"
        }}
      />
    </footer>
  );
};

export default Footer;
