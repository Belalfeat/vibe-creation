
import React, { useState } from 'react';
import { ExternalLink, Code, Globe, Bot, Home, ShoppingCart } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  skills: string[];
  link: string;
  demoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, category, description, skills, link, demoLink }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 hover:border-neon-blue/50 transition-all duration-300 hover-scale">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-neon-blue text-sm">
            <span className="px-2 py-1 bg-neon-blue/20 rounded-full">{category}</span>
          </div>
          
          <h3 className="text-xl font-bold text-white">{title}</h3>
          
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-neon-purple/20 text-neon-purple rounded-full border border-neon-purple/30">
                {skill}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3">
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-neon-blue/20 hover:bg-neon-blue/30 text-neon-blue px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              <ExternalLink size={16} />
              View Live
            </a>
            {demoLink && (
              <a 
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                <Globe size={16} />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Default visible content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-neon-blue text-sm">{category}</p>
      </div>
    </div>
  );
};

const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Your actual portfolio projects
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
      title: "All Skills Showcase Platform",
      category: "Full Stack Development",
      description: "A comprehensive platform showcasing various development skills and capabilities. Features modern UI/UX design, responsive layouts, and interactive elements demonstrating technical expertise across multiple domains.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "Modern Design"],
      link: "https://vibe-bot-glowscape.lovable.app",
      demoLink: "https://vibe-bot-glowscape.lovable.app"
    },
    {
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80",
      title: "BotVibex - AI Solutions Hub",
      category: "Website Development",
      description: "Professional AI chatbot development and website creation service platform. Features SEO optimization, responsive design, and comprehensive service showcasing for AI solutions in Lucknow, UP, India.",
      skills: ["React", "SEO Optimization", "Local Business", "AI Integration", "Hindi/English Support"],
      link: "https://botvibex.site",
      demoLink: "https://botvibex.site"
    },
    {
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      title: "Elite Homes 3D Vista",
      category: "Real Estate Platform",
      description: "Luxury real estate platform featuring 3D property visualization, advanced search capabilities, and immersive virtual tours. Built with modern web technologies to provide exceptional user experience for property buyers and sellers.",
      skills: ["3D Visualization", "Real Estate", "Advanced Search", "Virtual Tours", "Responsive Design"],
      link: "https://elitehomes-3d-vista.lovable.app",
      demoLink: "https://elitehomes-3d-vista.lovable.app"
    },
    {
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      title: "Advanced AI Chatbot System",
      category: "AI Chatbot Development",
      description: "Sophisticated AI chatbot with natural language processing, multi-language support, and advanced conversation capabilities. Features intelligent responses, context awareness, and seamless integration options for businesses.",
      skills: ["AI/ML", "Natural Language Processing", "Conversational AI", "Multi-language", "API Integration"],
      link: "https://7nw433aypd.app.yourware.so",
      demoLink: "https://7nw433aypd.app.yourware.so"
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      title: "Neo-X E-commerce Genesis",
      category: "E-commerce Platform",
      description: "Next-generation e-commerce platform with modern design, advanced product management, secure payment integration, and optimized user experience. Features include inventory management, order tracking, and customer analytics.",
      skills: ["E-commerce", "Payment Integration", "Inventory Management", "Analytics", "Security"],
      link: "https://neo-x-ecom-genesis.lovable.app",
      demoLink: "https://neo-x-ecom-genesis.lovable.app"
    }
  ];

  const categories = ['All', 'Website Development', 'AI Chatbot Development', 'Real Estate Platform', 'E-commerce Platform', 'Full Stack Development'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Website Development': return <Globe className="w-4 h-4" />;
      case 'AI Chatbot Development': return <Bot className="w-4 h-4" />;
      case 'Real Estate Platform': return <Home className="w-4 h-4" />;
      case 'E-commerce Platform': return <ShoppingCart className="w-4 h-4" />;
      case 'Full Stack Development': return <Code className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <section id="portfolio" className="py-20 relative tech-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-neon-blue neon-text text-sm font-medium mb-2">PORTFOLIO</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Featured Projects</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Explore our collection of successful projects showcasing AI chatbot development, website creation, and innovative digital solutions across various industries.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/50'
                    : 'bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {category !== 'All' && getCategoryIcon(category)}
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              category={project.category}
              description={project.description}
              skills={project.skills}
              link={project.link}
              demoLink={project.demoLink}
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found for the selected category.</p>
          </div>
        )}
        
        <div className="text-center mt-12">
          <p className="text-white/60 mb-4">
            Want to see more of our work or discuss your project?
          </p>
          <button 
            onClick={() => {
              const orderEvent = new Event('order-now-click');
              document.dispatchEvent(orderEvent);
            }}
            className="bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue/20 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 transform"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-neon-purple/10 blur-3xl"></div>
    </section>
  );
};

export default PortfolioSection;
