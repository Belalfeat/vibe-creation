
import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, MessageSquare, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const predefinedResponses: Record<string, string> = {
  "hello": "Hello! I'm VIBE BOT TEAM, how can I help you today with your digital needs?",
  "hi": "Hi there! I'm VIBE BOT TEAM, your virtual assistant. How can I assist you today?",
  "services": "We offer professional services in Website Development, AI Chatbot Creation, and Prompt Engineering. Each service is custom-tailored to your specific needs.",
  "website": "Our website development service creates responsive, modern websites optimized for performance and user experience. We provide a one-month support period with 15 free revisions.",
  "chatbot": "We build custom AI chatbots that can engage with your customers 24/7. You'll receive a preview first, and we only share the code and embed key after your approval.",
  "prompt": "Our prompt engineering service helps you get the most out of AI tools. We'll provide a sample prompt before starting and deliver the full working prompt after payment.",
  "payment": "We accept payment via UPI only. Our standard terms are 50% payment before starting work and the remaining 50% after you've reviewed the preview.",
  "contact": "You can reach us via email at vibeswithbilal050@gmail.com or through our contact form. We aim to respond to all inquiries within 24 hours.",
  "revisions": "Each project includes up to three rounds of revisions. Additional revision requests may incur extra charges based on the scope of changes requested.",
  "refund": "No refunds are provided after work has begun on your project. Please ensure you provide clear requirements before the project starts.",
  "portfolio": "You can check out our portfolio section to see examples of our previous work across different industries and project types.",
  "timeline": "Project timelines vary based on complexity. After discussing your requirements, we'll provide a specific estimated completion date for your approval.",
  "default": "I don't have specific information about that, but I'd be happy to connect you with our team for more details. You can use the contact form or email us directly at vibeswithbilal050@gmail.com."
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm VIBE BOT TEAM. How can I help you today?",
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
    }, 1000 + Math.random() * 1000); // Random typing time between 1-2 seconds
  };
  
  const getBotResponse = (userInput: string): string => {
    // Check for key phrases in the input
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (userInput.includes(key)) {
        return response;
      }
    }
    
    // Default response
    return predefinedResponses.default;
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
            <p className="text-xs text-white/70">AI Assistant</p>
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
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot 
                    ? 'bg-white/10 text-white border border-neon-blue/30' 
                    : 'bg-neon-blue/20 text-white border border-neon-blue/50'
                }`}
              >
                <p>{message.text}</p>
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
            placeholder="Type your message..."
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
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
