
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';
import { X } from 'lucide-react';

const OrderFormPopup: React.FC = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    country: '',
    message: '',
    paymentMethod: 'UPI' // Default payment method
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Subscribe to all "order-now" button clicks
  React.useEffect(() => {
    const handleOrderClick = () => {
      setIsOpen(true);
    };

    document.addEventListener('order-now-click', handleOrderClick);
    return () => {
      document.removeEventListener('order-now-click', handleOrderClick);
    };
  }, []);

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
    
    emailjs.send(
      'service_p2xh4gv',
      'template_9azo9os',
      {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        budget: formData.budget,
        country: formData.country,
        message: formData.message,
        paymentMethod: formData.paymentMethod
      },
      'CAv4W16MblZ-MWYZJ'
    )
    .then((result) => {
      console.log('Email successfully sent!', result.text);
      toast({
        title: "Order Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form and close dialog
      setFormData({
        name: '',
        email: '',
        service: '',
        budget: '',
        country: '',
        message: '',
        paymentMethod: 'UPI'
      });
      setIsSubmitting(false);
      setIsOpen(false);
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
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md glass-card border-none bg-gradient-to-b from-black/90 to-[#0a001f] text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gradient">Send Your First Order</DialogTitle>
            <DialogDescription className="text-white/70">
              Fill out the form below to get started on your project.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="popup-name" className="text-white text-sm mb-1 block">Full Name</label>
              <Input
                id="popup-name"
                name="name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
            
            <div>
              <label htmlFor="popup-email" className="text-white text-sm mb-1 block">Email Address</label>
              <Input
                id="popup-email"
                name="email"
                type="email"
                placeholder="Your email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="popup-country" className="text-white text-sm mb-1 block">Country</label>
                <Input
                  id="popup-country"
                  name="country"
                  placeholder="Your country"
                  value={formData.country}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              
              <div>
                <label htmlFor="popup-budget" className="text-white text-sm mb-1 block">Budget</label>
                <Input
                  id="popup-budget"
                  name="budget"
                  placeholder="Your budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="popup-service" className="text-white text-sm mb-1 block">Service Category</label>
              <Select
                name="service"
                value={formData.service}
                onValueChange={(value) => handleSelectChange('service', value)}
              >
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent className="bg-[#0a001f]/95 border-white/20 text-white">
                  <SelectItem value="website">Website Development</SelectItem>
                  <SelectItem value="chatbot">AI Chatbot Development</SelectItem>
                  <SelectItem value="prompt">Prompt Engineering</SelectItem>
                  <SelectItem value="combo">Combo Package</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="popup-message" className="text-white text-sm mb-1 block">Project Details</label>
              <Textarea
                id="popup-message"
                name="message"
                placeholder="Tell me about your project requirements..."
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
              />
            </div>
            
            <div>
              <p className="text-white text-sm mb-1">Payment Method</p>
              <div className="bg-white/10 border border-white/20 rounded-md p-3 flex items-center">
                <div className="flex-1">
                  <p className="text-white">UPI Payment Only</p>
                  <p className="text-white/50 text-xs">We'll share details after order approval</p>
                </div>
                <div className="w-5 h-5 rounded-full bg-neon-blue animate-pulse"></div>
              </div>
            </div>
            
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white py-6 rounded-md hover:opacity-90 transition-opacity neon-border"
            >
              {isSubmitting ? "Processing..." : "Place Order"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OrderFormPopup;
