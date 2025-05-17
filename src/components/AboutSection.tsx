
import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden tech-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image & Socials */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <div className="relative">
              {/* Profile Image */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neon-blue/50 animate-float neon-border">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
                  alt="Digital Creator"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Glow effects */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue/30 to-neon-purple/30 rounded-full blur-xl opacity-70 -z-10"></div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
                <Instagram className="text-white group-hover:text-neon-blue transition-colors duration-300" size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
                <Youtube className="text-white group-hover:text-neon-blue transition-colors duration-300" size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
                <span className="text-white group-hover:text-neon-blue transition-colors duration-300 font-bold">U</span>
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
                <span className="text-white group-hover:text-neon-blue transition-colors duration-300 font-bold">K</span>
              </a>
            </div>
          </div>
          
          {/* About Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-neon-blue neon-text text-sm font-medium mb-2">ABOUT ME</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Passionate Digital Creator</h2>
            
            <div className="space-y-4 text-white/80">
              <p>
                I'm a young and enthusiastic developer with a passion for building modern, innovative digital solutions 
                that help businesses grow and thrive in today's tech-driven world.
              </p>
              <p>
                Specializing in website development, AI chatbot creation, and prompt engineering, I combine technical expertise 
                with creative problem-solving to deliver cutting-edge digital tools that drive results.
              </p>
              <p>
                My goal is to empower your brand with future-ready technology that enhances your digital presence and 
                creates meaningful connections with your audience.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="glass-card p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center">
                  <span className="text-neon-blue font-bold">3+</span>
                </div>
                <div>
                  <p className="text-white text-sm">Years of</p>
                  <p className="text-white font-medium">Experience</p>
                </div>
              </div>
              
              <div className="glass-card p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center">
                  <span className="text-neon-purple font-bold">50+</span>
                </div>
                <div>
                  <p className="text-white text-sm">Projects</p>
                  <p className="text-white font-medium">Completed</p>
                </div>
              </div>
              
              <div className="glass-card p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center">
                  <span className="text-neon-blue font-bold">40+</span>
                </div>
                <div>
                  <p className="text-white text-sm">Satisfied</p>
                  <p className="text-white font-medium">Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-neon-purple/10 blur-3xl"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl"></div>
    </section>
  );
};

export default AboutSection;
