
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OrderFormPopup from '../components/OrderFormPopup';
import { Helmet } from 'react-helmet-async';
import { User, Shield, FileText, Lock, Mail, Instagram, Clock, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen tech-bg">
      <Helmet>
        <title>About Bilal Khan | AI Developer Lucknow | BotVibex Terms & Privacy</title>
        <meta name="description" content="Meet Bilal Khan, 14-year-old AI developer from Lucknow, UP. Professional AI chatbot development, website creation services. Read our terms, privacy policy & legal information." />
        <meta name="keywords" content="Bilal Khan AI developer, BotVibex about, AI chatbot developer Lucknow, terms conditions, privacy policy, website development UP" />
        <link rel="canonical" href="https://botvibex.site/about" />
        <meta property="og:title" content="About Bilal Khan | AI Developer Lucknow | BotVibex" />
        <meta property="og:description" content="Meet Bilal Khan, 14-year-old AI developer from Lucknow, UP. Professional AI chatbot development and website creation services." />
        <meta property="og:url" content="https://botvibex.site/about" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Bilal Khan",
            "jobTitle": "AI Developer & Prompt Engineer",
            "worksFor": {
              "@type": "Organization",
              "name": "BotVibex"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lucknow",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN"
            },
            "knowsAbout": ["AI Chatbot Development", "Website Development", "Prompt Engineering", "No-Code Development"],
            "description": "14-year-old AI developer and entrepreneur specializing in chatbot development and website creation in Lucknow, India"
          }
        `}</script>
      </Helmet>
      
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              About BotVibex & Legal Information
            </h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Meet the team behind BotVibex and learn about our terms, privacy policy, and professional services in AI development.
            </p>
          </div>

          {/* About Me Section */}
          <section className="glass-card p-8 mb-12 rounded-xl">
            <div className="flex items-center mb-6">
              <User className="h-8 w-8 text-neon-blue mr-3" />
              <h2 className="text-3xl font-bold text-white">About Me - Bilal Khan</h2>
            </div>
            
            <div className="text-white/80 space-y-4 leading-relaxed">
              <p className="text-lg">
                Hi, I'm <strong className="text-neon-blue">Bilal Khan</strong>, a 14-year-old entrepreneur and digital creator based in <strong>Lucknow, Uttar Pradesh, India</strong>. I specialize in:
              </p>
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>AI Website Development (Fast, Mobile-Optimized & Clean UI)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>AI Chatbot Creation (With Custom API & Training)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Frontend SEO Optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Prompt Engineering (Certified by Kokloud, 2025)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Expert-level use of ChatGPT and other AI Tools</span>
                </li>
              </ul>
              
              <p className="text-lg">
                I've successfully built smart websites and powerful chatbots using no-code platforms, helping brands and businesses scale online. I work with professionalism, speed, and creativity — making every project unique, secure, and growth-ready.
              </p>
            </div>
          </section>

          {/* What You Need to Provide */}
          <section className="glass-card p-8 mb-12 rounded-xl">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-neon-purple mr-3" />
              <h2 className="text-3xl font-bold text-white">What You Need to Provide</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-neon-blue mb-4">For Website Development</h3>
                <ul className="text-white/80 space-y-2">
                  <li>• Website category</li>
                  <li>• Features or sections required</li>
                  <li>• Your name & email</li>
                  <li>• Budget (₹599 to ₹1999)</li>
                  <li>• Any reference site (optional)</li>
                </ul>
                <div className="mt-4 p-4 bg-neon-blue/10 rounded-lg">
                  <p className="text-white/90 font-medium">
                    <Clock className="inline h-4 w-4 mr-2" />
                    Wait 1–2 days (or 3–4 hrs if team is free)
                  </p>
                  <p className="text-white/80 text-sm mt-2">
                    We send preview images/video → Pay 50% after preview → 50% after editor access
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-neon-purple mb-4">For AI Chatbot Development</h3>
                <ul className="text-white/80 space-y-2">
                  <li>• Your website link (for bot training)</li>
                  <li>• Chatbot name & logo</li>
                  <li>• Preferred theme: Light/Dark</li>
                  <li>• Your email + chatbot goal</li>
                </ul>
                <div className="mt-4 p-4 bg-neon-purple/10 rounded-lg">
                  <p className="text-white/90 font-medium">
                    We send preview frame/video
                  </p>
                  <p className="text-white/80 text-sm mt-2">
                    50% payment before final code → 50% after delivery
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing & Service Rules */}
          <section className="glass-card p-8 mb-12 rounded-xl">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-neon-blue mr-3" />
              <h2 className="text-3xl font-bold text-white">Pricing & Service Rules</h2>
            </div>
            
            <div className="text-white/80 space-y-4">
              <div className="bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 p-6 rounded-lg">
                <p className="text-2xl font-bold text-neon-blue mb-2">₹599 – ₹1999 Only</p>
                <p>Website or chatbot cost depends on project type, complexity, and features</p>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Editor access</strong> includes <strong>20 revisions/month</strong>, <strong>5 per day</strong></span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>If edit limit is reached, wait for new monthly cycle</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>We do NOT support WhatsApp. Only <strong>Instagram</strong> or <strong>email support</strong></span>
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
              <p>We respect your privacy. Your name, email, logo, and website info are only used to build your website or chatbot.</p>
              
              <ul className="space-y-3 ml-4">
                <li>• No information is shared, sold, or reused for third-party purposes</li>
                <li>• Chatbots are trained only on the data provided or from your website link</li>
                <li>• You may request deletion of your project and data at any time</li>
                <li>• All data is stored securely and handled with professional confidentiality</li>
              </ul>
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
                <li>• You are provided a <strong className="text-neon-blue">subdomain</strong> (e.g. yourname.lovable.app) hosted securely</li>
                <li>• <strong>Custom domains not included</strong> — upgrade directly with the platform if needed</li>
                <li>• We provide preview before final payment — no refunds after editor/code access</li>
                <li>• No free work, spam orders, or revisions beyond set limits</li>
                <li>• We reserve the right to deny or cancel service if misbehavior, fraud, or spam is detected</li>
                <li>• We hold backend access to disable project in case of misuse or scam reports</li>
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
                <ul className="space-y-3">
                  <li>• Any reuse, resell, reupload, or modification of our provided website, chatbot, images, designs, text, or code is <strong className="text-red-400">strictly prohibited</strong></li>
                  <li>• We watermark all media to track theft and misuse</li>
                  <li>• Legal action will be taken against those who copy, clone, or exploit our system, chatbot frameworks, or design concepts</li>
                  <li>• Spamming, scam behavior, or false claims will result in permanent block and disabling of your chatbot/website without refund</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Client Communication */}
          <section className="glass-card p-8 mb-12 rounded-xl">
            <div className="flex items-center mb-6">
              <Mail className="h-8 w-8 text-neon-purple mr-3" />
              <h2 className="text-3xl font-bold text-white">Client Communication</h2>
            </div>
            
            <div className="text-white/80 space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center p-4 bg-neon-blue/10 rounded-lg">
                  <Instagram className="h-8 w-8 text-neon-blue mr-4" />
                  <div>
                    <p className="font-semibold text-white">Instagram DM</p>
                    <p className="text-sm">@vibecreation23</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-neon-purple/10 rounded-lg">
                  <Mail className="h-8 w-8 text-neon-purple mr-4" />
                  <div>
                    <p className="font-semibold text-white">Email Support</p>
                    <p className="text-sm">vibeswithbilal050@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-lg">
                <p className="text-yellow-400 font-semibold">Important Notice:</p>
                <p className="text-white/90">WhatsApp is NOT used for business. All instructions, updates, and delivery will be handled through Instagram or email only.</p>
              </div>
            </div>
          </section>

          {/* Safety & Security Notice */}
          <section className="glass-card p-8 mb-12 rounded-xl">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-green-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Safety & Security Notice</h2>
            </div>
            
            <div className="text-white/80 space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-500/10 rounded-lg">
                  <h3 className="font-semibold text-green-400 mb-2">Security Features</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Anti-bot protection</li>
                    <li>• Anti-spam systems</li>
                    <li>• Suspicious activity monitoring</li>
                    <li>• Fraud detection systems</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-blue-500/10 rounded-lg">
                  <h3 className="font-semibold text-blue-400 mb-2">Quality Assurance</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Error-free development</li>
                    <li>• Best practices implementation</li>
                    <li>• Professional support</li>
                    <li>• Secure hosting solutions</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-center text-lg font-medium text-neon-blue">
                Your safety and service trust are our top priority — our projects are built error-free, with best practices and protection tools.
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
