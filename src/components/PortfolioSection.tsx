
import React, { useState } from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, category, link = "#" }) => {
  return (
    <a 
      href={link}
      className="group relative overflow-hidden rounded-xl hover-scale"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-neon-blue">{category}</p>
      </div>
    </a>
  );
};

const PortfolioSection: React.FC = () => {
  // Portfolio projects data
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
      title: "Luxury Real Estate Platform",
      category: "Website Development"
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Corporate Analytics Dashboard",
      category: "Web Application"
    },
    {
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      title: "Restaurant Ordering System",
      category: "UX/UI Design"
    },
    {
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "AI-Powered Financial Assistant",
      category: "Chatbot Development"
    },
    {
      image: "https://images.unsplash.com/photo-1565339119892-9c5ec9444800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      title: "E-Commerce Fashion Store",
      category: "Website Development"
    },
    {
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Interior Design Portfolio",
      category: "UX/UI Design"
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative tech-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-neon-blue neon-text text-sm font-medium mb-2">PORTFOLIO</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Featured Projects</h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-4">
            Explore a collection of my recent work showcasing innovative solutions across different industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              category={project.category}
            />
          ))}
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-neon-purple/10 blur-3xl"></div>
    </section>
  );
};

export default PortfolioSection;
