
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/60 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-gradient">DIGITAL<span className="text-neon-blue">CREATOR</span></a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a onClick={() => scrollTo('home')} className="text-white hover:text-neon-blue transition-colors duration-300 cursor-pointer">Home</a>
            <a onClick={() => scrollTo('about')} className="text-white hover:text-neon-blue transition-colors duration-300 cursor-pointer">About</a>
            <a onClick={() => scrollTo('services')} className="text-white hover:text-neon-blue transition-colors duration-300 cursor-pointer">Services</a>
            <a onClick={() => scrollTo('portfolio')} className="text-white hover:text-neon-blue transition-colors duration-300 cursor-pointer">Portfolio</a>
            <a onClick={() => scrollTo('contact')} className="text-white hover:text-neon-blue transition-colors duration-300 cursor-pointer">Contact</a>
            <button 
              onClick={() => scrollTo('contact')} 
              className="bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-4 py-2 rounded-md transition-all duration-300 neon-border"
            >
              Order Now
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col items-center space-y-6">
          <a onClick={() => scrollTo('home')} className="text-white text-xl hover:text-neon-blue transition-colors duration-300 cursor-pointer">Home</a>
          <a onClick={() => scrollTo('about')} className="text-white text-xl hover:text-neon-blue transition-colors duration-300 cursor-pointer">About</a>
          <a onClick={() => scrollTo('services')} className="text-white text-xl hover:text-neon-blue transition-colors duration-300 cursor-pointer">Services</a>
          <a onClick={() => scrollTo('portfolio')} className="text-white text-xl hover:text-neon-blue transition-colors duration-300 cursor-pointer">Portfolio</a>
          <a onClick={() => scrollTo('contact')} className="text-white text-xl hover:text-neon-blue transition-colors duration-300 cursor-pointer">Contact</a>
          <button 
            onClick={() => scrollTo('contact')} 
            className="bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-6 py-3 rounded-md transition-all duration-300 mt-4 neon-border"
          >
            Order Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
