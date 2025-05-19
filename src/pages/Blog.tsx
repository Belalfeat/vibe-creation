
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Tag, User, MessageCircle, Search } from 'lucide-react';
import OrderFormPopup from '../components/OrderFormPopup';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  // SEO optimization
  React.useEffect(() => {
    document.title = "AI Chatbot & Website Development Blog | BotVibex";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore expert insights on AI chatbots, prompt engineering, and website optimization to boost your business growth with BotVibex.");
    }
    
    // Add meta keywords for SEO
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'ai chatbot development, website optimization, prompt engineering guides, ai for business growth, chatbot roi, website automation, botvibex ai solutions');
  }, []);
  
  const handleDemoRequest = () => {
    const orderEvent = new Event('order-now-click');
    document.dispatchEvent(orderEvent);
  };

  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Ways AI Chatbots Are Transforming Online Business",
      brief: "Discover how AI-powered chatbots are revolutionizing customer service with 24/7 availability, increasing conversion rates by up to 30%, reducing operational costs by 40%, and providing personalized experiences that boost customer satisfaction and loyalty scores across multiple industries.",
      image: "https://images.unsplash.com/photo-1677608913670-909179c8a42f",
      date: "May 19, 2025",
      readTime: "6 min read",
      author: "Bilal Ahmad",
      tags: ["AI Chatbots", "Business Growth", "Customer Experience"],
      slug: "top-ways-ai-chatbots-transforming-business",
      featured: true
    },
    {
      id: 2,
      title: "How Prompt Engineering is Making AI Smarter in 2025",
      brief: "Explore the latest advancements in prompt engineering that are enabling more intelligent AI responses, including chain-of-thought prompting, few-shot learning techniques, and specialized prompt frameworks that produce up to 40% more accurate and contextually relevant results for businesses.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
      date: "May 17, 2025",
      readTime: "8 min read",
      author: "Bilal Ahmad",
      tags: ["Prompt Engineering", "AI Development", "Machine Learning"],
      slug: "prompt-engineering-making-ai-smarter",
      featured: true
    },
    {
      id: 3,
      title: "Best No-Code Tools for AI Website Development in 2025",
      brief: "Comprehensive comparison of the top no-code platforms that integrate AI capabilities for website development, featuring drag-and-drop interfaces, pre-built AI components, and seamless integration options that enable businesses to launch sophisticated websites without technical expertise.",
      image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66",
      date: "May 15, 2025",
      readTime: "7 min read",
      author: "Bilal Ahmad",
      tags: ["No-Code Tools", "Website Development", "AI Integration"],
      slug: "no-code-tools-ai-website-development",
      featured: true
    },
    {
      id: 4,
      title: "Top 5 Reasons Why AI Chatbots Are Essential for Modern Websites",
      brief: "AI chatbots have transformed from experimental tech into must-have website features. They improve user experience by providing instant responses, automating repetitive tasks, increasing conversion rates through proactive engagement, reducing support costs by handling routine inquiries, and gathering valuable customer data for business insights.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      date: "May 10, 2025",
      readTime: "5 min read",
      author: "Bilal Ahmad",
      tags: ["AI Chatbots", "Website Development", "Customer Experience"],
      slug: "ai-chatbots-essential-modern-websites"
    },
    {
      id: 5,
      title: "How AI Chatbots Can Increase Sales and Save Time for Your Business",
      brief: "Studies show businesses using AI chatbots see up to 30% increase in leads and 40% reduction in customer service costs. This article explores how chatbots handle customer support around the clock, qualify leads automatically, answer FAQs instantly, and deliver personalized product recommendations across industries like eCommerce, real estate, hospitality, and SaaS.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      date: "May 7, 2025",
      readTime: "6 min read",
      author: "Bilal Ahmad",
      tags: ["Sales Automation", "Business Efficiency", "Lead Generation"],
      slug: "ai-chatbots-increase-sales-save-time"
    },
    {
      id: 6,
      title: "Prompt Engineering: The Secret Skill Powering the Future of AI",
      brief: "Prompt engineering is the art and science of crafting effective instructions for AI systems to produce desired outputs. This deep dive explains the fundamentals, best practices, and advanced techniques that make the difference between mediocre and exceptional AI performance, especially for chatbots and automated content systems.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      date: "May 5, 2025",
      readTime: "7 min read",
      author: "Bilal Ahmad",
      tags: ["Prompt Engineering", "AI Development", "Tech Skills"],
      slug: "prompt-engineering-secret-skill"
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen tech-bg">
      <Helmet>
        <title>AI Chatbot & Website Development Blog | BotVibex</title>
        <meta name="description" content="Explore expert insights on AI chatbots, prompt engineering, and website optimization to boost your business growth with BotVibex." />
        <meta name="keywords" content="ai chatbot development, website optimization, prompt engineering guides, ai for business growth, chatbot roi, website automation, botvibex ai solutions" />
        <link rel="canonical" href="https://botvibex.site/blog" />
        <meta property="og:title" content="AI Chatbot & Website Development Blog | BotVibex" />
        <meta property="og:description" content="Expert insights on AI technology for business growth" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://botvibex.site/blog" />
        <meta property="og:image" content="https://botvibex.site/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "BotVibex Blog",
            "description": "Expert insights on AI chatbots, prompt engineering, and website development.",
            "publisher": {
              "@type": "Organization",
              "name": "BotVibex",
              "logo": {
                "@type": "ImageObject",
                "url": "https://botvibex.site/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png"
              }
            },
            "blogPost": [
              {
                "@type": "BlogPosting",
                "headline": "Top 5 Ways AI Chatbots Are Transforming Online Business",
                "datePublished": "2025-05-19",
                "author": {
                  "@type": "Person",
                  "name": "Bilal Ahmad"
                },
                "image": "https://images.unsplash.com/photo-1677608913670-909179c8a42f",
                "url": "https://botvibex.site/blog/top-ways-ai-chatbots-transforming-business"
              },
              {
                "@type": "BlogPosting",
                "headline": "How Prompt Engineering is Making AI Smarter in 2025",
                "datePublished": "2025-05-17",
                "author": {
                  "@type": "Person",
                  "name": "Bilal Ahmad"
                },
                "image": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
                "url": "https://botvibex.site/blog/prompt-engineering-making-ai-smarter"
              },
              {
                "@type": "BlogPosting",
                "headline": "Best No-Code Tools for AI Website Development in 2025",
                "datePublished": "2025-05-15",
                "author": {
                  "@type": "Person",
                  "name": "Bilal Ahmad"
                },
                "image": "https://images.unsplash.com/photo-1633412802994-5c058f151b66",
                "url": "https://botvibex.site/blog/no-code-tools-ai-website-development"
              },
              {
                "@type": "BlogPosting",
                "headline": "Top 5 Reasons Why AI Chatbots Are Essential for Modern Websites",
                "datePublished": "2025-05-10",
                "author": {
                  "@type": "Person",
                  "name": "Bilal Ahmad"
                },
                "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
                "url": "https://botvibex.site/blog/ai-chatbots-essential-modern-websites"
              },
              {
                "@type": "BlogPosting",
                "headline": "How AI Chatbots Can Increase Sales and Save Time for Your Business",
                "datePublished": "2025-05-07",
                "author": {
                  "@type": "Person",
                  "name": "Bilal Ahmad"
                },
                "image": "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
                "url": "https://botvibex.site/blog/ai-chatbots-increase-sales-save-time"
              },
              {
                "@type": "BlogPosting",
                "headline": "Prompt Engineering: The Secret Skill Powering the Future of AI",
                "datePublished": "2025-05-05",
                "author": {
                  "@type": "Person",
                  "name": "Bilal Ahmad"
                },
                "image": "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
                "url": "https://botvibex.site/blog/prompt-engineering-secret-skill"
              }
            ]
          }
        `}</script>
      </Helmet>
      
      <Navbar />
      <div className="pt-20 pb-16">
        {/* Hero Section */}
        <div className="relative py-16 bg-gradient-to-b from-black/60 to-[#0a001f] overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20" 
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2300eeff' fill-opacity='0.2'%3E%3Cpath d='M0 0h50v50H0V0zm50 50h50v50H50V50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "60px 60px"
            }}
          ></div>
          
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-gradient mb-6">
                BotVibex AI Insights Hub
              </h1>
              <p className="text-lg md:text-xl text-white/80">
                Expert guides on AI chatbots, website optimization, and prompt engineering to help your business thrive in the digital age.
              </p>
              
              <div className="mt-8 flex justify-center">
                <div className="relative w-full max-w-md">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full px-4 py-3 pr-10 rounded-md bg-white/10 border border-white/20 focus:border-neon-blue/70 text-white outline-none"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 h-5 w-5" />
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  onClick={handleDemoRequest}
                  className="bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue/20 px-8 py-6 text-lg rounded-md transition-all duration-300 animate-glow neon-border"
                >
                  Get Your Custom AI Solution
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Blog Posts Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-4 text-center">
              Latest Featured Articles
            </h2>
            <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
              Stay updated with the freshest insights on AI technology and digital trends
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="glass-card rounded-xl overflow-hidden hover:border-neon-blue/30 transition-all duration-300 flex flex-col h-full"
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        itemProp="image"
                      />
                    </div>
                  </Link>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-neon-blue/20 text-neon-blue px-2 py-1 rounded-full flex items-center"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-neon-blue transition-colors duration-300" itemProp="headline">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    
                    <div className="flex items-center text-white/60 text-sm mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <time dateTime="2025-05-15" itemProp="datePublished">{post.date}</time>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <p className="text-white/70 mb-4 flex-grow" itemProp="description">
                      {post.brief}
                    </p>
                    
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-neon-blue hover:text-neon-purple transition-colors duration-300 group mt-auto"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                  
                  {/* Hidden schema.org metadata */}
                  <div className="hidden" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <meta itemProp="name" content={post.author} />
                  </div>
                  <meta itemProp="publisher" content="BotVibex" />
                </article>
              ))}
            </div>
          </div>
        </div>
        
        {/* Regular Blog Posts Section */}
        <div className="container mx-auto px-6 py-16 bg-black/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-12 text-center">
              All Articles
            </h2>
            
            <div className="space-y-16">
              {regularPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="glass-card p-6 rounded-xl hover:border-neon-blue/30 transition-all duration-300"
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/5">
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          itemProp="image"
                        />
                      </div>
                    </div>
                    
                    <div className="md:w-3/5">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="text-xs bg-neon-blue/20 text-neon-blue px-2 py-1 rounded-full flex items-center"
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3 hover:text-neon-blue transition-colors duration-300" itemProp="headline">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      
                      <div className="flex items-center gap-4 text-white/60 text-sm mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <time dateTime="2025-05-15" itemProp="datePublished">{post.date}</time>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span itemProp="author">{post.author}</span>
                        </div>
                      </div>
                      
                      <p className="text-white/70 mb-4" itemProp="description">
                        {post.brief}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <Link 
                          to={`/blog/${post.slug}`} 
                          className="flex items-center text-neon-blue hover:text-neon-purple transition-colors duration-300 group"
                        >
                          <span>Read Full Article</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                        
                        <div className="flex items-center text-white/60 text-sm">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          <span>5 comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="container mx-auto px-6 py-20">
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto border border-neon-blue/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gradient mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-white/70 max-w-2xl mx-auto">
                Stay updated with the latest AI insights, tips, and trends. Be the first to know about new technologies that can help your business grow.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:border-neon-blue/70 text-white outline-none"
              />
              <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90 whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            
            <p className="text-xs text-white/40 text-center mt-4">
              We respect your privacy and won't share your email with third parties. You can unsubscribe at any time.
            </p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Get your custom AI chatbot or website solution and stay ahead of the competition.
            </p>
            <Button 
              onClick={handleDemoRequest}
              className="bg-white text-[#0a001f] hover:bg-white/90 px-8 py-6 text-lg rounded-md transition-all duration-300"
            >
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </div>
      <Footer />
      <OrderFormPopup />
    </div>
  );
};

export default Blog;
