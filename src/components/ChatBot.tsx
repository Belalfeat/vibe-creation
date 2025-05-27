
import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, MessageSquare, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const predefinedResponses: Record<string, string[]> = {
  // About Bilal Khan
  "bilal": [
    "Hi! I'm Bilal Khan, a 14-year-old entrepreneur passionate about digital innovation and AI technology. I specialize in website development, AI chatbot creation, and prompt engineering.",
    "Despite my young age, I've successfully completed 50+ projects and served 40+ satisfied clients across various industries.",
    "I'm the founder of BotVibex (VibeBots), where I help businesses transform their digital presence with cutting-edge AI solutions."
  ],
  "who": [
    "I'm Bilal Khan, a 14-year-old digital entrepreneur and the founder of BotVibex. I'm passionate about creating innovative AI solutions that help businesses grow.",
    "With 3+ years of experience in web development and AI, I've built a reputation for delivering high-quality, modern digital solutions.",
    "I specialize in website development, AI chatbot creation, and prompt engineering - all designed to elevate your business."
  ],
  "founder": [
    "Yes! I'm Bilal Khan, the 14-year-old founder of BotVibex. I started this journey with a vision to make advanced AI technology accessible to businesses of all sizes.",
    "My goal is to empower brands with future-ready technology that enhances their digital presence and creates meaningful connections with their audience."
  ],
  "age": [
    "I'm 14 years old! Young but experienced - I've been working in web development and AI for over 3 years now.",
    "Age is just a number when it comes to passion and expertise. I've successfully delivered 50+ projects despite being just 14!"
  ],

  // Services and Pricing
  "website": [
    "🚀 **Website Development Special Offer!** \n\n✨ **Today Only: ₹499** (Regular price: ₹899)\n\n✅ Responsive, modern design\n✅ AI-powered features\n✅ SEO optimized\n✅ 1-month support\n✅ 15 free revisions\n✅ Fast loading & secure\n\nThis is a limited-time offer! Would you like to get started?",
    "I create stunning, responsive websites with AI integration. Today's special price is ₹499 (50% off from ₹899)! Includes modern design, SEO optimization, and full mobile responsiveness."
  ],
  "chatbot": [
    "🤖 **AI Chatbot Development Special!** \n\n✨ **Today Only: ₹199** (Regular price: ₹499)\n\n✅ 24/7 customer support\n✅ Lead generation features\n✅ Custom AI training\n✅ WhatsApp integration\n✅ Multi-language support\n✅ Analytics dashboard\n\nLimited offer ending soon! Ready to boost your customer engagement?",
    "I build intelligent AI chatbots that work 24/7 for your business. Special offer today: ₹199 (60% off from ₹499)! Includes custom training and WhatsApp integration."
  ],
  "prompt": [
    "🎯 **Prompt Engineering Service** \n\n💰 **Price: ₹299-₹999** (based on complexity)\n\n✅ Custom AI prompts\n✅ Content generation\n✅ Customer service automation\n✅ Sample prompts provided\n✅ Full documentation\n\nI'll help you harness the full power of AI tools with expertly crafted prompts!"
  ],
  "price": [
    "🔥 **TODAY'S SPECIAL OFFERS:** \n\n🌐 Website Development: ₹499 (50% OFF)\n🤖 AI Chatbot: ₹199 (60% OFF)\n⚡ Prompt Engineering: ₹299-₹999\n\nThese are limited-time prices! Regular prices are much higher. Would you like to claim any of these offers?"
  ],
  "services": [
    "I offer three main services:\n\n1. **Website Development** (₹499 today!) - Modern, AI-powered websites\n2. **AI Chatbot Development** (₹199 today!) - 24/7 customer engagement\n3. **Prompt Engineering** (₹299-₹999) - Custom AI solutions\n\nAll services include professional support and revisions. Which one interests you?"
  ],

  // Portfolio and Experience
  "portfolio": [
    "I've completed 50+ successful projects across various industries including:\n\n🏢 Business websites\n🛒 E-commerce platforms\n🤖 AI chatbots\n📱 Mobile-responsive designs\n🎨 Creative portfolios\n\nEach project is custom-built with modern technology and AI integration. Would you like to see specific examples?"
  ],
  "experience": [
    "With 3+ years of experience, I've:\n\n✅ Completed 50+ projects\n✅ Served 40+ satisfied clients\n✅ Specialized in AI integration\n✅ Built responsive, modern websites\n✅ Created intelligent chatbots\n\nDespite being 14, my experience speaks for itself!"
  ],
  "clients": [
    "I've proudly served 40+ satisfied clients across different industries. My focus is on delivering quality work that exceeds expectations and builds long-term relationships.",
    "Each client receives personalized attention, professional support, and high-quality deliverables. My young age doesn't compromise the professional standards I maintain."
  ],

  // Contact and Location
  "contact": [
    "📧 **Email:** vibeswithbilal050@gmail.com\n📱 **WhatsApp:** Available for project discussions\n🌐 **Website:** botvibex.site\n\nI respond to all inquiries within 24 hours! Feel free to reach out for any questions or project discussions."
  ],
  "email": [
    "You can reach me at: vibeswithbilal050@gmail.com\n\nI check emails regularly and respond within 24 hours. For urgent matters, you can also contact me through the website contact form."
  ],
  "location": [
    "I'm based in India and work with clients globally. Thanks to modern technology, I can collaborate effectively with businesses worldwide, regardless of time zones."
  ],

  // Terms and Conditions
  "terms": [
    "📋 **Key Terms & Conditions:**\n\n💰 50% payment before starting work\n💰 50% payment after preview approval\n🔄 Up to 3 revision rounds included\n⏰ Timeline depends on project complexity\n🚫 No refunds after work begins\n💳 UPI payments only\n\nAll terms are designed to ensure smooth project delivery and client satisfaction."
  ],
  "payment": [
    "💳 **Payment Terms:**\n\n• 50% advance before starting\n• 50% after preview approval\n• UPI only (Indian clients)\n• International payments via secure methods\n\nThis ensures both parties are protected throughout the project."
  ],
  "refund": [
    "🚫 **Refund Policy:**\n\nNo refunds are provided after work has begun on your project. This policy ensures fair compensation for time and effort invested.\n\nHowever, I guarantee satisfaction through:\n✅ Preview before final payment\n✅ Up to 3 revision rounds\n✅ Clear communication throughout"
  ],

  // Privacy Policy
  "privacy": [
    "🔒 **Privacy Policy Highlights:**\n\n✅ Your data is completely secure\n✅ No information shared with third parties\n✅ Project confidentiality maintained\n✅ Professional handling of all client data\n\nI take privacy seriously and follow industry best practices for data protection."
  ],
  "security": [
    "🛡️ **Security Measures:**\n\n✅ SSL secured communications\n✅ Client data protection\n✅ Confidential project handling\n✅ No editor access sharing\n✅ Secure file transfers\n\nYour business information and project details are always kept confidential and secure."
  ],

  // Blog and Updates
  "blog": [
    "📝 **BotVibex Blog:**\n\nI regularly share insights about:\n🤖 AI trends and developments\n💻 Web development tips\n📈 Digital marketing strategies\n🚀 Business growth through technology\n\nCheck out the blog section on the website for the latest updates and industry insights!"
  ],

  // Process and Timeline
  "process": [
    "🔄 **My Work Process:**\n\n1. **Consultation** - Understanding your needs\n2. **Proposal** - Custom solution design\n3. **50% Payment** - Project initiation\n4. **Development** - Creating your solution\n5. **Preview** - Review and feedback\n6. **Final Payment** - After approval\n7. **Delivery** - Complete handover\n8. **Support** - Ongoing assistance\n\nThis process ensures quality and client satisfaction at every step."
  ],
  "timeline": [
    "⏰ **Project Timelines:**\n\n🌐 Website: 3-7 days\n🤖 Chatbot: 2-5 days\n⚡ Prompts: 1-3 days\n\nTimelines depend on complexity and requirements. I always provide specific estimates after understanding your needs."
  ],
  "revisions": [
    "🔄 **Revision Policy:**\n\n✅ Up to 3 revision rounds included\n✅ Changes must be within original scope\n✅ Additional revisions may incur extra charges\n✅ All revisions completed promptly\n\nI want you to be 100% satisfied with the final result!"
  ],

  // Technology and Features
  "technology": [
    "💻 **Technologies I Use:**\n\n🌐 **Web:** React, HTML5, CSS3, JavaScript\n🤖 **AI:** OpenAI, Custom training models\n🎨 **Design:** Modern UI/UX, Responsive design\n☁️ **Hosting:** Fast, secure cloud hosting\n📱 **Mobile:** Fully responsive designs\n\nI use cutting-edge technology to ensure your project is future-ready!"
  ],
  "features": [
    "✨ **Advanced Features I Offer:**\n\n🤖 AI integration\n📱 Mobile responsiveness\n🚀 Fast loading speeds\n🔍 SEO optimization\n🔒 Security features\n📊 Analytics integration\n💬 Live chat systems\n🛒 E-commerce capabilities\n\nEvery project includes modern features that give you a competitive edge!"
  ],

  // Greetings
  "hello": [
    "Hello! I'm VIBE BOT TEAM, powered by Bilal Khan's expertise. I'm here to help you with all your digital needs! 🚀\n\nToday's special offers:\n🌐 Website: ₹499 (50% OFF)\n🤖 Chatbot: ₹199 (60% OFF)\n\nHow can I assist you today?"
  ],
  "hi": [
    "Hi there! Welcome to BotVibex! 👋\n\nI'm your AI assistant, trained with all the knowledge about Bilal Khan's services. Whether you need a website, chatbot, or prompt engineering - I'm here to help!\n\nWhat can I do for you today?"
  ],

  // Default and help
  "help": [
    "🤖 **I can help you with:**\n\n👤 Information about Bilal Khan\n💻 Website development (₹499 today!)\n🤖 AI chatbot creation (₹199 today!)\n⚡ Prompt engineering services\n💼 Portfolio and past work\n📞 Contact information\n📋 Terms and pricing\n🔒 Privacy and security\n\nJust ask me anything about BotVibex services!"
  ],
  "default": [
    "I'd be happy to help you with that! Let me connect you with specific information.\n\nYou can ask me about:\n• Bilal Khan's background\n• Service pricing and features\n• Portfolio examples\n• Contact information\n• Terms and conditions\n\nOr email us directly at vibeswithbilal050@gmail.com for detailed discussions!"
  ]
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm VIBE BOT TEAM, trained with comprehensive knowledge about Bilal Khan and BotVibex services. I can help you with websites (₹499 today!), chatbots (₹199 today!), and all other services. How can I assist you?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChatBot = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (input.trim() === "") return;
    
    const userMessage: Message = {
      text: input,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    // Simulate bot typing
    setIsTyping(true);
    
    setTimeout(() => {
      const botResponse = getBotResponse(input.toLowerCase());
      const botMessage: Message = {
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1500);
  };
  
  const getBotResponse = (userInput: string): string => {
    // Advanced keyword matching with priority
    const keywords = Object.keys(predefinedResponses);
    
    // Direct keyword matches (highest priority)
    for (const keyword of keywords) {
      if (userInput.includes(keyword)) {
        const responses = predefinedResponses[keyword];
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    
    // Contextual matches for common questions
    if (userInput.includes('how much') || userInput.includes('cost') || userInput.includes('pricing')) {
      return getBotResponse('price');
    }
    
    if (userInput.includes('about') && (userInput.includes('you') || userInput.includes('founder'))) {
      return getBotResponse('bilal');
    }
    
    if (userInput.includes('work') || userInput.includes('project') || userInput.includes('example')) {
      return getBotResponse('portfolio');
    }
    
    if (userInput.includes('contact') || userInput.includes('reach') || userInput.includes('email')) {
      return getBotResponse('contact');
    }
    
    if (userInput.includes('policy') || userInput.includes('terms') || userInput.includes('condition')) {
      return getBotResponse('terms');
    }
    
    if (userInput.includes('time') || userInput.includes('long') || userInput.includes('deliver')) {
      return getBotResponse('timeline');
    }
    
    if (userInput.includes('thank') || userInput.includes('thanks')) {
      return "You're welcome! I'm always here to help. Feel free to ask anything about BotVibex services or reach out to Bilal directly at vibeswithbilal050@gmail.com for detailed discussions! 😊";
    }
    
    // Default response with helpful suggestions
    const defaultResponses = predefinedResponses.default;
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  return (
    <>
      {/* Chat bubble button */}
      <button
        onClick={toggleChatBot}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full flex items-center justify-center z-50 transition-all duration-300 ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90'}`}
      >
        {isOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <MessageSquare className="text-white" size={24} />
        )}
      </button>
      
      {/* Chat window */}
      <div 
        className={`fixed bottom-24 right-6 w-80 sm:w-96 bg-black border border-neon-blue/50 rounded-lg shadow-lg z-50 transition-all duration-300 transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
      >
        {/* Chat header */}
        <div className="flex items-center gap-3 p-4 border-b border-white/10 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-t-lg">
          <Bot size={24} className="text-neon-blue" />
          <div>
            <h3 className="font-bold text-white">VIBE BOT TEAM</h3>
            <p className="text-xs text-white/70">AI Assistant - Powered by Bilal Khan</p>
          </div>
        </div>
        
        {/* Chat messages */}
        <div className="p-4 h-80 overflow-y-auto bg-black/80">
          {messages.map((message, index) => (
            <div 
              key={index}
              className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div 
                className={`max-w-[85%] p-3 rounded-lg ${
                  message.isBot 
                    ? 'bg-white/10 text-white border border-neon-blue/30' 
                    : 'bg-neon-blue/20 text-white border border-neon-blue/50'
                }`}
              >
                <p className="whitespace-pre-line text-sm">{message.text}</p>
                <p className="text-xs text-white/50 mt-1">
                  {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-white/10 p-3 rounded-lg border border-neon-blue/30">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: '200ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: '400ms' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Chat input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 flex gap-2 rounded-b-lg">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about services, pricing, or anything..."
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm"
          />
          <Button 
            type="submit" 
            size="icon" 
            className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90"
          >
            <Send size={18} />
          </Button>
        </form>
      </div>
    </>
  );
};

export default ChatBot;
