
import React, { useState, useEffect } from 'react';

const AnimatedEntry: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState('entering');

  useEffect(() => {
    // Check if user has seen the animation before
    const hasSeenAnimation = localStorage.getItem('botvibex-entry-seen');
    
    if (hasSeenAnimation) {
      setIsVisible(false);
      return;
    }

    // Animation sequence
    const timer1 = setTimeout(() => {
      setAnimationPhase('glowing');
    }, 1000);

    const timer2 = setTimeout(() => {
      setAnimationPhase('exiting');
    }, 3000);

    const timer3 = setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('botvibex-entry-seen', 'true');
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-black via-purple-900/20 to-black transition-all duration-1000 ${
      animationPhase === 'exiting' ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/30 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-conic from-neon-blue via-neon-purple to-neon-blue rounded-full blur-3xl animate-spin opacity-20"></div>
      </div>

      {/* Main Logo and Text Animation */}
      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <div className={`mb-8 transform transition-all duration-1000 ${
          animationPhase === 'entering' ? 'scale-50 opacity-0 rotate-180' :
          animationPhase === 'glowing' ? 'scale-100 opacity-100 rotate-0' :
          'scale-125 opacity-0'
        }`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple blur-xl rounded-full animate-ping"></div>
            <img 
              src="/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" 
              alt="BotVibex Logo - AI Chatbot Developer Lucknow" 
              className="h-32 w-32 relative z-10 mx-auto rounded-full shadow-2xl shadow-neon-blue/50"
            />
          </div>
        </div>

        {/* Brand Name Animation */}
        <div className={`space-y-4 transform transition-all duration-1500 delay-500 ${
          animationPhase === 'entering' ? 'translate-y-10 opacity-0' :
          animationPhase === 'glowing' ? 'translate-y-0 opacity-100' :
          'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="inline-block animate-bounce" style={{ animationDelay: '0ms' }}>
              <span className="text-gradient bg-gradient-to-r from-neon-blue via-white to-neon-purple bg-clip-text text-transparent">B</span>
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '100ms' }}>
              <span className="text-gradient bg-gradient-to-r from-neon-blue via-white to-neon-purple bg-clip-text text-transparent">o</span>
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '200ms' }}>
              <span className="text-gradient bg-gradient-to-r from-neon-blue via-white to-neon-purple bg-clip-text text-transparent">t</span>
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '300ms' }}>
              <span className="text-gradient bg-gradient-to-r from-neon-blue via-white to-neon-purple bg-clip-text text-transparent">V</span>
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '400ms' }}>
              <span className="text-gradient bg-gradient-to-r from-neon-blue via-white to-neon-purple bg-clip-text text-transparent">i</span>
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '500ms' }}>
              <span className="text-gradient bg-gradient-to-r from-neon-blue via-white to-neon-purple bg-clip-text text-transparent">b</span>
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '600ms' }}>
              <span className="text-gradient bg-gradient-to-r from-neon-blue via-white to-neon-purple bg-clip-text text-transparent">e</span>
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '700ms' }}>
              <span className="text-gradient bg-gradient-to-r from-neon-blue via-white to-neon-purple bg-clip-text text-transparent">x</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 animate-pulse">
            AI Chatbot Developer • Lucknow, India
          </p>
          
          {/* Glowing Border Animation */}
          <div className="mx-auto w-64 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue animate-pulse rounded-full"></div>
        </div>

        {/* Tagline Animation */}
        <div className={`mt-8 transform transition-all duration-1000 delay-1000 ${
          animationPhase === 'entering' ? 'translate-y-5 opacity-0' :
          animationPhase === 'glowing' ? 'translate-y-0 opacity-100' :
          'translate-y-5 opacity-0'
        }`}>
          <p className="text-lg text-neon-blue/80">
            Transforming Businesses with Smart AI Solutions
          </p>
        </div>
      </div>

      {/* Loading Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-neon-blue rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-neon-purple rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-neon-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedEntry;
