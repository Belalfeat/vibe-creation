
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BlogHighlightsSection: React.FC = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 5 Ways AI Chatbots Are Transforming Online Business",
      brief: "Discover how AI-powered chatbots are revolutionizing customer service with 24/7 availability, increasing conversion rates by up to 30%, reducing operational costs by 40%, and providing personalized experiences that boost customer satisfaction.",
      image: "https://images.unsplash.com/photo-1677608913670-909179c8a42f",
      date: "May 19, 2025",
      readTime: "6 min read",
      url: "/blog/top-ways-ai-chatbots-transforming-business"
    },
    {
      id: 2,
      title: "How Prompt Engineering is Making AI Smarter in 2025",
      brief: "Explore the latest advancements in prompt engineering that are enabling more intelligent AI responses, including chain-of-thought prompting, few-shot learning techniques, and specialized prompt frameworks that produce up to 40% more accurate results.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
      date: "May 17, 2025",
      readTime: "8 min read",
      url: "/blog/prompt-engineering-making-ai-smarter"
    },
    {
      id: 3,
      title: "Best No-Code Tools for AI Website Development in 2025",
      brief: "Comprehensive comparison of the top no-code platforms that integrate AI capabilities for website development, featuring drag-and-drop interfaces, pre-built AI components, and seamless integration options for businesses.",
      image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66",
      date: "May 15, 2025",
      readTime: "7 min read",
      url: "/blog/no-code-tools-ai-website-development"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-black/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Latest Insights from BotVibex
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Stay updated with the latest trends and best practices in AI chatbot development and website optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article 
              key={blog.id}
              className="glass-card rounded-xl overflow-hidden hover:border-neon-blue/30 transition-all duration-300 flex flex-col h-full"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <Link to={blog.url} className="block overflow-hidden relative">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    itemProp="image"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <span className="text-neon-blue text-sm font-semibold inline-block">Latest</span>
                </div>
              </Link>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-white/60 text-sm mb-3">
                  <span itemProp="datePublished">{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 hover:text-neon-blue transition-colors duration-300" itemProp="headline">
                  <Link to={blog.url}>{blog.title}</Link>
                </h3>
                
                <p className="text-white/70 mb-4 flex-grow" itemProp="description">
                  {blog.brief}
                </p>
                
                <Link 
                  to={blog.url}
                  className="inline-flex items-center text-neon-blue hover:text-neon-purple transition-colors duration-300 group"
                >
                  <span>Read More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              
              {/* Hidden schema.org metadata */}
              <div className="hidden" itemProp="author" itemScope itemType="https://schema.org/Person">
                <meta itemProp="name" content="BotVibex Team" />
              </div>
              <meta itemProp="publisher" content="BotVibex" />
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/blog"
            className="inline-block border border-neon-blue/50 hover:border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-6 py-3 rounded-md transition-all duration-300 text-lg"
          >
            View All Articles
          </Link>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-neon-blue/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default BlogHighlightsSection;
