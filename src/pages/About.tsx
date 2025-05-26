
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OrderFormPopup from '../components/OrderFormPopup';
import { Helmet } from 'react-helmet-async';
import { User, Shield, FileText, Lock, Mail, Instagram, Clock, CheckCircle, Bot, Code, Zap, DollarSign, AlertTriangle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen tech-bg">
      <Helmet>
        <title>About Bilal Khan | AI Chatbot Developer Lucknow | BotVibex Digital Solutions</title>
        <meta name="description" content="Meet Bilal Khan, 14-year-old AI chatbot developer in Lucknow, UP. BotVibex offers website development, prompt engineering & AI solutions. Certified ChatGPT expert serving businesses across India." />
        <meta name="keywords" content="AI chatbot developer Lucknow, website development UP India, prompt engineering expert India, BotVibex, digital IT solutions Lucknow, ChatGPT expert India, AI automation services" />
        <link rel="canonical" href="https://botvibex.site/about" />
        <meta property="og:title" content="About Bilal Khan | AI Chatbot Developer Lucknow | BotVibex" />
        <meta property="og:description" content="14-year-old AI expert specializing in chatbot development, website creation & prompt engineering in Lucknow, UP, India." />
        <meta property="og:url" content="https://botvibex.site/about" />
        <meta property="og:type" content="website" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Lucknow" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": ["Person", "LocalBusiness"],
            "name": "Bilal Khan",
            "jobTitle": "AI Chatbot Developer & Prompt Engineering Expert",
            "worksFor": {
              "@type": "Organization",
              "name": "BotVibex",
              "url": "https://botvibex.site",
              "description": "Digital IT & AI Solutions Company"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lucknow",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Lucknow, Uttar Pradesh, India"
            },
            "knowsAbout": ["AI Chatbot Development", "Website Development", "Prompt Engineering", "ChatGPT Expert", "AI Automation"],
            "description": "14-year-old AI chatbot developer and entrepreneur specializing in digital solutions for businesses in Lucknow, India",
            "hasCredential": {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "Certification",
              "name": "Prompt Engineering Certification",
              "recognizedBy": "Kokloud",
              "dateCreated": "2025"
            },
            "serviceType": ["AI Chatbot Development", "Website Design & Development", "Prompt Engineering & Automation"],
            "priceRange": "₹599-₹1999"
          }
        `}</script>
      </Helmet>
      
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              BotVibex - Digital IT & AI Solutions
            </h1>
            <p className="text-lg text-white/70 max-w-4xl mx-auto">
              Professional AI chatbot development, website creation, and prompt engineering services in Lucknow, Uttar Pradesh, India. 
              Helping businesses transform with cutting-edge AI solutions.
            </p>
          </div>

          {/* About Me Section */}
          <section className="glass-card p-8 mb-12 rounded-xl animate-fade-in">
            <div className="flex items-center mb-6">
              <User className="h-8 w-8 text-neon-blue mr-3" />
              <h2 className="text-3xl font-bold text-white">About Me - Bilal Khan</h2>
            </div>
            
            <div className="text-white/80 space-y-4 leading-relaxed">
              <p className="text-lg">
                My name is <strong className="text-neon-blue">Bilal Khan</strong>. I am a <strong>14-year-old entrepreneur</strong> with professional-level skills in AI chatbot development, website creation, and prompt engineering based in <strong>Lucknow, Uttar Pradesh, India</strong>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-neon-blue/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-neon-blue mb-3">Certifications & Expertise</h3>
                  <ul className="space-y-2 text-white/90">
                    <li>• Prompt Engineering Certified by Kokloud (2025)</li>
                    <li>• ChatGPT Expert Recognition</li>
                    <li>• Frontend SEO Specialist</li>
                    <li>• AI Automation Expert</li>
                  </ul>
                </div>
                
                <div className="bg-neon-purple/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-neon-purple mb-3">Core Specializations</h3>
                  <ul className="space-y-2 text-white/90">
                    <li>• AI Chatbot Development (Custom LLM Training)</li>
                    <li>• Website Design & Development</li>
                    <li>• User-friendly Web Design</li>
                    <li>• High-converting Digital Tools</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-lg">
                Despite my young age, I've helped multiple clients create high-performance digital tools and automated solutions. 
                I combine <strong className="text-neon-blue">creativity with technical knowledge</strong> to deliver high-converting websites and smart AI chatbots for businesses across India.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section className="glass-card p-8 mb-12 rounded-xl">
            <div className="flex items-center mb-8">
              <Code className="h-8 w-8 text-neon-purple mr-3" />
              <h2 className="text-3xl font-bold text-white">Our Digital Services</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-neon-blue/20 to-neon-blue/5 p-6 rounded-lg hover-scale">
                <Bot className="h-12 w-12 text-neon-blue mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">AI Chatbot Development</h3>
                <p className="text-white/70 mb-4">Custom-built, trained bots using ChatGPT & other LLMs. Includes chatbot code & API key for integration.</p>
                <div className="bg-neon-blue/10 p-3 rounded">
                  <span className="text-neon-blue font-medium">Starting at ₹599</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-neon-purple/20 to-neon-purple/5 p-6 rounded-lg hover-scale">
                <Code className="h-12 w-12 text-neon-purple mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Website Design & Development</h3>
                <p className="text-white/70 mb-4">Mobile-responsive, SEO-optimized, fast websites for any industry with modern design.</p>
                <div className="bg-neon-purple/10 p-3 rounded">
                  <span className="text-neon-purple font-medium">Starting at ₹799</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-neon-blue/20 to-neon-purple/5 p-6 rounded-lg hover-scale">
                <Zap className="h-12 w-12 text-neon-blue mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Prompt Engineering & Automation</h3>
                <p className="text-white/70 mb-4">Certified expert-created prompt logic for AI automation & tools development.</p>
                <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 p-3 rounded">
                  <span className="text-white font-medium">Custom Pricing</span>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="glass-card p-8 mb-12 rounded-xl">
            <div className="flex items-center mb-6">
              <DollarSign className="h-8 w-8 text-neon-blue mr-3" />
              <h2 className="text-3xl font-bold text-white">Transparent Pricing</h2>
            </div>
            
            <div className="bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 p-8 rounded-lg text-center">
              <p className="text-3xl font-bold text-neon-blue mb-4">₹599 - ₹1999</p>
              <p className="text-xl text-white mb-4">Complete Website Design OR Chatbot Creation</p>
              <p className="text-white/70">Our pricing is affordable and fixed. We do not overcharge. Price depends on complexity and features required.</p>
            </div>
          </section>

          {/* Requirements Section */}
          <section className="glass-card p-8 mb-12 rounded-xl">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-neon-purple mr-3" />
              <h2 className="text-3xl font-bold text-white">What You Need to Provide</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-neon-blue mb-4">For Website Development</h3>
                <ul className="text-white/80 space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-0.5 flex-shrink-0" />
                    <span>Your name</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-0.5 flex-shrink-0" />
                    <span>Email ID</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-0.5 flex-shrink-0" />
                    <span>Business Category</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-0.5 flex-shrink-0" />
                    <span>Design or layout reference (if any)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-0.5 flex-shrink-0" />
                    <span>Budget (optional)</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-neon-blue/10 rounded-lg">
                  <p className="text-white/90 font-medium flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Response Time: 3-4 hours (or 1-2 days max)
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-neon-purple mb-4">For Chatbot Development</h3>
                <ul className="text-white/80 space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-purple mr-3 mt-0.5 flex-shrink-0" />
                    <span>Website link (to train chatbot)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-purple mr-3 mt-0.5 flex-shrink-0" />
                    <span>Logo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-purple mr-3 mt-0.5 flex-shrink-0" />
                    <span>Chatbot Name</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-neon-purple mr-3 mt-0.5 flex-shrink-0" />
                    <span>Dark/Light Theme preference</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-neon-purple/10 rounded-lg">
                  <p className="text-white/90 font-medium">Preview Delivery Process</p>
                  <p className="text-white/70 text-sm mt-1">
                    50% payment after preview → 50% after code delivery
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Terms & Conditions */}
          <section className="glass-card p-8 mb-12 rounded-xl">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-neon-blue mr-3" />
              <h2 className="text-3xl font-bold text-white">Terms & Conditions</h2>
            </div>
            
            <div className="text-white/80 space-y-4 leading-relaxed">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>You will receive your website through a special <strong className="text-neon-blue">subdomain</strong> (e.g. yourname.lovable.app)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Custom domains not included</strong> — upgrade directly with platform if needed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>You will get editor access with <strong>20 revisions/month limit (5 per day)</strong></span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>We don't charge any fee before showing you a preview (image or video)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>50% payment after preview</strong>, 50% after editor access or code delivery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>We use AI tools to create websites with proper error-free structure and security</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Privacy Policy */}
          <section className="glass-card p-8 mb-12 rounded-xl">
            <div className="flex items-center mb-6">
              <Lock className="h-8 w-8 text-neon-purple mr-3" />
              <h2 className="text-3xl font-bold text-white">Privacy Policy</h2>
            </div>
            
            <div className="text-white/80 space-y-4 leading-relaxed">
              <p>We do not collect personal information unless provided voluntarily. Your data is not shared with third parties. We use cookies only to enhance performance.</p>
              
              <ul className="space-y-3 ml-4">
                <li>• Your name, email, logo, and website info are only used to build your website or chatbot</li>
                <li>• No information is shared, sold, or reused for third-party purposes</li>
                <li>• Chatbots are trained only on the data provided or from your website link</li>
                <li>• You may request deletion of your project and data at any time</li>
                <li>• All data is stored securely with professional confidentiality</li>
              </ul>
            </div>
          </section>

          {/* Copyright Disclaimer */}
          <section className="glass-card p-8 mb-12 rounded-xl border-2 border-red-500/30">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-red-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Copyright Disclaimer</h2>
            </div>
            
            <div className="text-white/80 space-y-4 leading-relaxed">
              <p className="text-xl font-semibold text-red-400">
                © 2025 BotVibex (Bilal Khan) — All Rights Reserved
              </p>
              
              <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-lg">
                <p className="text-white/90 mb-4">
                  All content, designs, and AI assets on this site are protected under copyright © BotVibex 2025.
                </p>
                <ul className="space-y-3">
                  <li>• Any duplication, plagiarism, reuse, resell, reupload, or modification is <strong className="text-red-400">strictly prohibited</strong></li>
                  <li>• We watermark all media to track theft and misuse</li>
                  <li>• Legal action will be taken against those who copy, clone, or exploit our system</li>
                  <li>• All payments and actions are traceable and protected</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="glass-card p-8 mb-12 rounded-xl">
            <div className="flex items-center mb-6">
              <Mail className="h-8 w-8 text-neon-purple mr-3" />
              <h2 className="text-3xl font-bold text-white">Contact Information</h2>
            </div>
            
            <div className="text-white/80 space-y-4">
              <p className="text-lg text-neon-blue font-semibold mb-6">
                We only communicate through Instagram or Email - NO WhatsApp support
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center p-6 bg-neon-blue/10 rounded-lg hover-scale">
                  <Instagram className="h-8 w-8 text-neon-blue mr-4" />
                  <div>
                    <p className="font-semibold text-white">Instagram DM</p>
                    <p className="text-neon-blue">@VibeBotsAi</p>
                  </div>
                </div>
                
                <div className="flex items-center p-6 bg-neon-purple/10 rounded-lg hover-scale">
                  <Mail className="h-8 w-8 text-neon-purple mr-4" />
                  <div>
                    <p className="font-semibold text-white">Email Support</p>
                    <p className="text-neon-purple">vibeswithbilal050@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-lg mt-6">
                <p className="text-yellow-400 font-semibold">Important Notice:</p>
                <p className="text-white/90">We strictly do not use WhatsApp for client communication. All instructions, updates, and delivery handled through Instagram or email only.</p>
              </div>
            </div>
          </section>

          {/* Anti-Scam Section */}
          <section className="glass-card p-8 mb-12 rounded-xl border-2 border-orange-500/30">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-8 w-8 text-orange-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Anti-Scam & Legal Measures</h2>
            </div>
            
            <div className="text-white/80 space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-orange-500/10 rounded-lg">
                  <h3 className="font-semibold text-orange-400 mb-2">Security Measures</h3>
                  <ul className="text-sm space-y-2">
                    <li>• Bot and scam protection enabled</li>
                    <li>• Suspicious activity monitoring</li>
                    <li>• Payment fraud detection</li>
                    <li>• All actions traceable and protected</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-red-500/10 rounded-lg">
                  <h3 className="font-semibold text-red-400 mb-2">Violation Consequences</h3>
                  <ul className="text-sm space-y-2">
                    <li>• Spamming results in instant ban</li>
                    <li>• Payment fraud = permanent block</li>
                    <li>• Misbehavior = service suspension</li>
                    <li>• Website/chatbot can be disabled for abuse</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-center text-lg font-medium text-neon-blue mt-6">
                Your safety and service trust are our top priority — all projects built with best practices and protection tools.
              </p>
            </div>
          </section>

        </div>
      </div>
      
      <Footer />
      <OrderFormPopup />
    </div>
  );
};

export default About;
