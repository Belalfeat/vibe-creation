
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import OrderFormPopup from '../components/OrderFormPopup';

const About: React.FC = () => {
  // Update document title and meta description programmatically
  React.useEffect(() => {
    document.title = "About Digital Creator | Expert Website & AI Chatbot Developer";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about my journey as a digital creator specializing in website development, AI chatbots, and prompt engineering. Discover my skills, expertise, and passion for creating impactful digital solutions.");
    }
  }, []);
  
  return (
    <div className="min-h-screen tech-bg">
      <Navbar />
      <div className="pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-6">
          About Me
        </h1>
        <div className="container mx-auto px-6">
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Learn more about my journey, skills, and passion for creating innovative digital solutions that help businesses thrive in the digital landscape.
          </p>
        </div>
        <AboutSection />
      </div>
      <Footer />
      <OrderFormPopup />
    </div>
  );
};

export default About;
