
import React, { useState } from 'react';
import { Check, ArrowRight, AlertTriangle } from 'lucide-react'; 
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ChatbotWelcomeForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    website: '',
    businessInfo: '',
    expectations: '',
    features: '',
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.website.trim()) {
      newErrors.website = 'Website URL is required';
    }
    
    if (!formData.businessInfo.trim()) {
      newErrors.businessInfo = 'Business information is required';
    }
    
    if (!formData.expectations.trim()) {
      newErrors.expectations = 'Chatbot expectations are required';
    }
    
    if (!termsAccepted) {
      newErrors.terms = 'You must accept the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fix the errors in the form before submitting.",
      });
      return;
    }
    
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      
      toast({
        title: "Success!",
        description: "Your information has been submitted. We'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        website: '',
        businessInfo: '',
        expectations: '',
        features: '',
      });
      setTermsAccepted(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-6 md:p-8 rounded-xl border border-neon-blue/30">
          {!success ? (
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-2">Welcome to Lovable</h2>
                <p className="text-white/70">Where smart businesses meet smart bots</p>
                <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-4"></div>
              </div>
              
              <p className="text-white/80 text-center mb-8">
                Before we get started, we just need a few quick details to give you the <span className="text-neon-blue">best</span> experience with your custom AI chatbot.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-white font-medium mb-1">
                    1. What's your name, boss?
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className={`w-full px-4 py-3 rounded-md bg-white/10 border ${errors.fullName ? 'border-red-500' : 'border-white/20'} focus:border-neon-blue/70 text-white outline-none transition-colors`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-red-500 flex items-center text-sm">
                      <AlertTriangle className="w-4 h-4 mr-1" />
                      {errors.fullName}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-1">
                    2. How can we reach you?
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email Address"
                    className={`w-full px-4 py-3 rounded-md bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} focus:border-neon-blue/70 text-white outline-none transition-colors`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 flex items-center text-sm">
                      <AlertTriangle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="website" className="block text-white font-medium mb-1">
                    3. Where should your chatbot live?
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="Your Website URL / Business Link"
                    className={`w-full px-4 py-3 rounded-md bg-white/10 border ${errors.website ? 'border-red-500' : 'border-white/20'} focus:border-neon-blue/70 text-white outline-none transition-colors`}
                  />
                  {errors.website && (
                    <p className="mt-1 text-red-500 flex items-center text-sm">
                      <AlertTriangle className="w-4 h-4 mr-1" />
                      {errors.website}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="businessInfo" className="block text-white font-medium mb-1">
                    4. What's your business about?
                  </label>
                  <textarea
                    id="businessInfo"
                    name="businessInfo"
                    value={formData.businessInfo}
                    onChange={handleChange}
                    placeholder="Write about your niche, product, or service in 2–3 lines"
                    rows={3}
                    className={`w-full px-4 py-3 rounded-md bg-white/10 border ${errors.businessInfo ? 'border-red-500' : 'border-white/20'} focus:border-neon-blue/70 text-white outline-none transition-colors resize-none`}
                  ></textarea>
                  {errors.businessInfo && (
                    <p className="mt-1 text-red-500 flex items-center text-sm">
                      <AlertTriangle className="w-4 h-4 mr-1" />
                      {errors.businessInfo}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="expectations" className="block text-white font-medium mb-1">
                    5. What do you expect from your chatbot?
                  </label>
                  <input
                    type="text"
                    id="expectations"
                    name="expectations"
                    value={formData.expectations}
                    onChange={handleChange}
                    placeholder="e.g., customer support, lead generation, 24/7 help, fast replies, FAQs, etc."
                    className={`w-full px-4 py-3 rounded-md bg-white/10 border ${errors.expectations ? 'border-red-500' : 'border-white/20'} focus:border-neon-blue/70 text-white outline-none transition-colors`}
                  />
                  {errors.expectations && (
                    <p className="mt-1 text-red-500 flex items-center text-sm">
                      <AlertTriangle className="w-4 h-4 mr-1" />
                      {errors.expectations}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="features" className="block text-white font-medium mb-1">
                    6. Any special features you want?
                  </label>
                  <input
                    type="text"
                    id="features"
                    name="features"
                    value={formData.features}
                    onChange={handleChange}
                    placeholder="e.g., WhatsApp integration, lead form, payment options, Google Sheets, analytics, etc."
                    className={`w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:border-neon-blue/70 text-white outline-none transition-colors`}
                  />
                </div>
                
                <div className="pt-2">
                  <div className={`flex items-start ${errors.terms ? 'border border-red-500 p-3 rounded-md' : ''}`}>
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={() => setTermsAccepted(!termsAccepted)}
                        className="h-5 w-5 rounded border-2 border-white/30 text-neon-blue focus:ring-neon-blue focus:ring-offset-black"
                      />
                    </div>
                    <label htmlFor="terms" className="ml-3 text-sm text-white/80">
                      I accept Lovable's Terms and Conditions and agree to receive AI updates, tools, and business tips.
                    </label>
                  </div>
                  {errors.terms && (
                    <p className="mt-1 text-red-500 flex items-center text-sm">
                      <AlertTriangle className="w-4 h-4 mr-1" />
                      {errors.terms}
                    </p>
                  )}
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white py-6 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                    disabled={submitting}
                  >
                    <span>{submitting ? 'Submitting...' : 'Submit'}</span>
                    {!submitting && <ArrowRight className="w-5 h-5" />}
                  </Button>
                </div>
              </form>
              
              <div className="mt-8 text-center text-white/60 text-sm">
                <p>Need help right now? Chat with our assistant on the bottom right or email:</p>
                <a href="mailto:vibeswithbilal050@gmail.com" className="text-neon-blue hover:underline">vibeswithbilal050@gmail.com</a>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Thank You!</h2>
              <p className="text-white/80 mb-6">
                Your submission has been received. We'll contact you within 24 hours with the next steps to setup your AI chatbot.
              </p>
              <p className="text-neon-blue">
                Check your email for a confirmation message from our team.
              </p>
            </div>
          )}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-white/60 text-sm font-medium">Lovable by BotVibex – Smarter Business Starts Here.</p>
        </div>
      </div>
    </div>
  );
};

export default ChatbotWelcomeForm;
