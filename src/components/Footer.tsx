
import React from 'react';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Dispatch the order event when Order Now is clicked
  const handleOrderClick = () => {
    const orderEvent = new Event('order-now-click');
    document.dispatchEvent(orderEvent);
  };
  
  return (
    <footer className="py-12 relative bg-gradient-to-t from-black to-[#0a001f]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Info */}
          <div className="mb-8 md:mb-0">
            <Link to="/" className="text-xl font-bold text-gradient mb-2 block">BOT<span className="text-neon-blue">VIBEX</span></Link>
            <p className="text-white/70 text-sm">vibeswithbilal050@gmail.com</p>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/vibecreation23/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 group" aria-label="BotVibex Instagram">
              <Instagram className="text-white/70 group-hover:text-neon-blue transition-colors duration-300" size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">© {currentYear} BotVibex. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0 flex items-center gap-6">
            <Link to="/services" className="text-white/50 hover:text-white text-sm transition-colors duration-300">AI Services</Link>
            <Link to="/portfolio" className="text-white/50 hover:text-white text-sm transition-colors duration-300">Portfolio</Link>
            <button onClick={handleOrderClick} className="text-neon-blue hover:text-white text-sm transition-colors duration-300">Order Now</button>
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
