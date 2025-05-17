
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    country: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.sendForm(
      'service_p2xh4gv',
      'template_9azo9os',
      formRef.current!,
      'CAv4W16MblZ-MWYZJ'
    )
    .then((result) => {
      console.log('Email successfully sent!', result.text);
      toast({
        title: "Order Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        service: '',
        budget: '',
        country: '',
        message: ''
      });
      setIsSubmitting(false);
    }, (error) => {
      console.error('Failed to send email:', error.text);
      toast({
        title: "Failed to send order",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-20 relative tech-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-neon-blue neon-text text-sm font-medium mb-2">CONTACT</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Send Your First Order</h2>
            
            <p className="text-white/70 mb-8">
              Ready to elevate your digital presence? Fill out the form to get started on your project. 
              I'll respond within 24 hours to discuss your requirements in detail.
            </p>
            
            <div className="space-y-6">
              <div className="glass-card p-6 space-y-2">
                <p className="text-neon-blue font-medium">Email</p>
                <p className="text-white">vibeswithbilal050@gmail.com</p>
              </div>
              
              <div className="glass-card p-6">
                <p className="text-neon-blue font-medium mb-2">Privacy Policy Highlights</p>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>• 50% payment before work starts, 50% after preview</li>
                  <li>• Delivery time depends on project complexity</li>
                  <li>• Up to 3 revision rounds included</li>
                  <li>• No refunds after work has started</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-white text-sm mb-1 block">Full Name</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="text-white text-sm mb-1 block">Email Address</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="text-white text-sm mb-1 block">Service Category</label>
                  <Select
                    name="service"
                    value={formData.service}
                    onValueChange={(value) => handleSelectChange('service', value)}
                  >
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Website Development</SelectItem>
                      <SelectItem value="chatbot">AI Chatbot Development</SelectItem>
                      <SelectItem value="prompt">Prompt Engineering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="budget" className="text-white text-sm mb-1 block">Budget</label>
                  <Input
                    id="budget"
                    name="budget"
                    placeholder="Your budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="country" className="text-white text-sm mb-1 block">Country</label>
                  <Input
                    id="country"
                    name="country"
                    placeholder="Your country"
                    value={formData.country}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label htmlFor="message" className="text-white text-sm mb-1 block">Project Details</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project requirements..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white py-6 rounded-md hover:opacity-90 transition-opacity neon-border"
              >
                {isSubmitting ? "Sending..." : "Send Your First Order"}
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-neon-purple/10 blur-3xl"></div>
    </section>
  );
};

export default ContactSection;
