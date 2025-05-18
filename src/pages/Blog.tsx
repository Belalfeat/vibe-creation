
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import OrderFormPopup from '../components/OrderFormPopup';

const Blog: React.FC = () => {
  // Update document title and meta description programmatically
  React.useEffect(() => {
    document.title = "Why BotVibex is the Future of AI Website & Chatbot Development in 2025";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "BotVibex offers AI-powered website and chatbot development with expert-level prompt engineering. Discover how it can transform your business growth in 2025.");
    }
    
    // Add meta keywords for SEO
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'ai chatbot developer India, ai website builder, prompt engineering expert, website automation 2025, build ai chatbot no code, best ai website builder, affordable chatbot developer, BotVibex India');
  }, []);
  
  const handleDemoRequest = () => {
    const orderEvent = new Event('order-now-click');
    document.dispatchEvent(orderEvent);
  };

  return (
    <div className="min-h-screen tech-bg">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <article className="max-w-4xl mx-auto glass-card p-8 md:p-12">
            {/* H1 Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-10 text-center">
              Welcome to the Future of Automation – Powered by BotVibex
            </h1>
            
            {/* What is BotVibex */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neon-blue mb-6">What is BotVibex?</h2>
              <p className="text-white/80 mb-6 text-lg">
                BotVibex is your ultimate solution for building powerful AI websites and smart chatbots using advanced prompt engineering. Whether you're a startup, entrepreneur, or local business, we help you automate your brand with intelligent design and customer interactions.
              </p>
            </section>
            
            {/* Why You Need an AI Chatbot in 2025 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neon-blue mb-6">Why You Need an AI Chatbot in 2025</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="glass-card p-6 border border-neon-blue/30 hover:border-neon-blue/60 transition-all duration-300">
                  <h3 className="font-bold text-white mb-2">24/7 Customer Support</h3>
                  <p className="text-white/70">Chatbots can instantly answer queries, handle bookings, and collect leads—anytime.</p>
                </div>
                
                <div className="glass-card p-6 border border-neon-blue/30 hover:border-neon-blue/60 transition-all duration-300">
                  <h3 className="font-bold text-white mb-2">Real-Time Engagement</h3>
                  <p className="text-white/70">Stop losing customers due to slow response. AI bots are fast, smart, and human-like.</p>
                </div>
                
                <div className="glass-card p-6 border border-neon-blue/30 hover:border-neon-blue/60 transition-all duration-300">
                  <h3 className="font-bold text-white mb-2">No-Code Control</h3>
                  <p className="text-white/70">We build bots using advanced AI tools without heavy coding, saving you money and time.</p>
                </div>
              </div>
            </section>
            
            {/* AI Website Development that Converts */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neon-blue mb-6">AI Website Development that Converts</h2>
              <p className="text-white/80 mb-4">At BotVibex, we design AI-enhanced websites that:</p>
              
              <ul className="list-disc list-inside text-white/80 space-y-2 pl-4 mb-6">
                <li>Load faster</li>
                <li>Look futuristic (3D + animated)</li>
                <li>Automatically guide users with AI</li>
                <li>Collect data + redirect to your sales funnel</li>
              </ul>
            </section>
            
            {/* Master Prompt Engineering for Maximum Results */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neon-blue mb-6">Master Prompt Engineering for Maximum Results</h2>
              <p className="text-white/80 mb-6 text-lg">
                We use advanced prompt engineering to train your bots and websites to perform better — smarter replies, deeper user understanding, and more conversions.
              </p>
            </section>
            
            {/* Top 10 Benefits of Using BotVibex */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neon-blue mb-6">Top 10 Benefits of Using BotVibex</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  "Fast-loading AI websites",
                  "Smart Chatbot Integration",
                  "Real-time user data collection",
                  "Built-in SEO structure",
                  "Mobile-responsive design",
                  "Modern animations + 3D effects",
                  "Booking systems + redirect to Instagram",
                  "Lead collection with auto-send",
                  "Affordable for small businesses",
                  "Personal support + regular updates"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-neon-blue/20 text-neon-blue rounded-full font-bold">
                      {index + 1}
                    </span>
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Who Is This For? */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neon-blue mb-6">Who Is This For?</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {[
                  "Real estate agencies",
                  "Online stores (eCommerce)",
                  "Coaches and mentors",
                  "YouTubers, Influencers",
                  "Service businesses (India & Global)"
                ].map((item, index) => (
                  <div key={index} className="glass-card p-4 border border-neon-purple/30 hover:border-neon-purple/60 transition-all duration-300">
                    <p className="text-white/90 text-center">{item}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Ready to Build Your AI Brand? */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-neon-blue mb-6">Ready to Build Your AI Brand?</h2>
              <p className="text-white/80 mb-6">
                Click below to book a demo with BotVibex now.
                We'll collect your details and redirect you to our official Instagram for fast response.
              </p>
              
              <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/20 rounded-lg p-6 mb-8">
                <p className="text-white mb-2"><strong>Instagram:</strong> botvibex</p>
                <p className="text-white"><strong>Email:</strong> vibeswithbilal050@gmail.com</p>
              </div>
              
              <div className="flex justify-center">
                <Button 
                  onClick={handleDemoRequest}
                  className="bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue/20 px-6 py-6 text-lg rounded-md transition-all duration-300 animate-glow neon-border hover:scale-105 transform"
                >
                  Book AI Demo Now<br />
                  <span className="text-sm text-white/70">Get your custom AI chatbot & website today</span>
                </Button>
              </div>
            </section>
          </article>
        </div>
      </div>
      <Footer />
      <OrderFormPopup />
    </div>
  );
};

export default Blog;
