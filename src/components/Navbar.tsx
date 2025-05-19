
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Function to dispatch the custom event for order button clicks
  const handleOrderClick = () => {
    const orderEvent = new Event('order-now-click');
    document.dispatchEvent(orderEvent);
    setIsMenuOpen(false);
  };

  // Check if the current route matches
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/60 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="mr-3">
                <img 
                  src="/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" 
                  alt="BotVibex Logo" 
                  className="h-12 w-12 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gradient">BotVibex</span>
                <span className="text-xs text-white/80">AI Solutions for the Future</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-white hover:text-neon-blue transition-colors duration-300 ${isActive('/') && 'text-neon-blue'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-white hover:text-neon-blue transition-colors duration-300 ${isActive('/about') && 'text-neon-blue'}`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`text-white hover:text-neon-blue transition-colors duration-300 ${isActive('/services') && 'text-neon-blue'}`}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className={`text-white hover:text-neon-blue transition-colors duration-300 ${isActive('/portfolio') && 'text-neon-blue'}`}
            >
              Portfolio
            </Link>
            <Link 
              to="/contact" 
              className={`text-white hover:text-neon-blue transition-colors duration-300 ${isActive('/contact') && 'text-neon-blue'}`}
            >
              Contact
            </Link>
            <Link 
              to="/blog" 
              className={`text-white hover:text-neon-blue transition-colors duration-300 ${isActive('/blog') && 'text-neon-blue'}`}
            >
              Blog
            </Link>
            <button 
              onClick={handleOrderClick} 
              className="bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-4 py-2 rounded-md transition-all duration-300 neon-border"
            >
              Start Now
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
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-white text-xl hover:text-neon-blue transition-colors duration-300">Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-white text-xl hover:text-neon-blue transition-colors duration-300">About</Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-white text-xl hover:text-neon-blue transition-colors duration-300">Services</Link>
          <Link to="/portfolio" onClick={() => setIsMenuOpen(false)} className="text-white text-xl hover:text-neon-blue transition-colors duration-300">Portfolio</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-white text-xl hover:text-neon-blue transition-colors duration-300">Contact</Link>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="text-white text-xl hover:text-neon-blue transition-colors duration-300">Blog</Link>
          <button 
            onClick={handleOrderClick} 
            className="bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-6 py-3 rounded-md transition-all duration-300 mt-4 neon-border"
          >
            Start Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
