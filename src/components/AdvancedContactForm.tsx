
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, User, Mail, DollarSign, Package, FileText, Clock, Upload, Check, MessageSquare, Shield, Badge, ArrowRight } from 'lucide-react';
import Lock from './icons/Lock';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const AdvancedContactForm = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    service: '',
    message: '',
    deadline: undefined as Date | undefined,
    file: null as File | null,
    terms: false
  });
  const [termsDialog, setTermsDialog] = useState(false);
  const [successDialog, setSuccessDialog] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date: Date | undefined) => {
    setFormData(prev => ({ ...prev, deadline: date }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleTermsChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, terms: checked }));
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.terms) {
      toast({
        title: "Please agree to our terms",
        description: "You must accept the terms and conditions before submitting.",
        variant: "destructive"
      });
      return;
    }
    
    setTermsDialog(true);
  };
  
  const confirmSubmission = () => {
    setTermsDialog(false);
    setIsSubmitting(true);
    
    // Prepare emailjs parameters
    const templateParams = {
      name: formData.name,
      email: formData.email,
      budget: formData.budget,
      service: formData.service,
      message: formData.message,
      deadline: formData.deadline ? format(formData.deadline, 'PPP') : 'Not specified'
    };
    
    emailjs.send(
      'service_p2xh4gv', // Your service ID
      'template_9azo9os', // Your template ID
      templateParams,
      'CAv4W16MblZ-MWYZJ' // Your public key
    )
    .then((result) => {
      console.log('Email successfully sent!', result.text);
      setIsSubmitting(false);
      setSuccessDialog(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        budget: '',
        service: '',
        message: '',
        deadline: undefined,
        file: null,
        terms: false
      });
      
    }, (error) => {
      console.error('Failed to send email:', error.text);
      toast({
        title: "Failed to send",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    });
  };

  return (
    <>
      <div className="relative w-full glass-card border-2 border-neon-blue/30 p-6 md:p-8 rounded-xl overflow-hidden">
        {/* Glassmorphism background effects */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl"></div>
        
        <h2 className="text-3xl font-bold text-gradient mb-6 font-poppins">Request Your Custom AI Solution</h2>
        <p className="text-white/70 mb-8">Fill out the form below, and I'll get back to you within 24 hours with a custom proposal.</p>
        
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name Input */}
            <div className="form-group">
              <Label htmlFor="name" className="text-white flex items-center gap-2 mb-1">
                <User className="h-4 w-4 text-neon-blue" />
                <span>Full Name</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-white/10 border-white/20 focus:border-neon-blue/70 text-white placeholder:text-white/50 transition-all duration-300"
              />
            </div>
            
            {/* Email Input */}
            <div className="form-group">
              <Label htmlFor="email" className="text-white flex items-center gap-2 mb-1">
                <Mail className="h-4 w-4 text-neon-blue" />
                <span>Email Address</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-white/10 border-white/20 focus:border-neon-blue/70 text-white placeholder:text-white/50 transition-all duration-300"
              />
            </div>
            
            {/* Budget Selection */}
            <div className="form-group">
              <Label htmlFor="budget" className="text-white flex items-center gap-2 mb-1">
                <DollarSign className="h-4 w-4 text-neon-blue" />
                <span>Budget Range</span>
              </Label>
              <Select 
                value={formData.budget}
                onValueChange={(value) => handleSelectChange('budget', value)}
                required
              >
                <SelectTrigger id="budget" className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select your budget" />
                </SelectTrigger>
                <SelectContent className="bg-[#0a001f]/95 border-white/20 text-white">
                  <SelectItem value="₹2,000-₹5,000">₹2,000–₹5,000</SelectItem>
                  <SelectItem value="₹5,000-₹10,000">₹5,000–₹10,000</SelectItem>
                  <SelectItem value="₹10,000+">₹10,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Service Type Selection */}
            <div className="form-group">
              <Label htmlFor="service" className="text-white flex items-center gap-2 mb-1">
                <Package className="h-4 w-4 text-neon-blue" />
                <span>Service Needed</span>
              </Label>
              <Select 
                value={formData.service}
                onValueChange={(value) => handleSelectChange('service', value)}
                required
              >
                <SelectTrigger id="service" className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent className="bg-[#0a001f]/95 border-white/20 text-white">
                  <SelectItem value="chatbot">Chatbot Development</SelectItem>
                  <SelectItem value="website">AI Website</SelectItem>
                  <SelectItem value="prompt">Prompt Engineering</SelectItem>
                  <SelectItem value="custom">Custom AI System</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Deadline Selection */}
            <div className="form-group">
              <Label htmlFor="deadline" className="text-white flex items-center gap-2 mb-1">
                <Clock className="h-4 w-4 text-neon-blue" />
                <span>Deadline (Optional)</span>
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="deadline"
                    className={`w-full justify-start text-left font-normal bg-white/10 border-white/20 text-white hover:bg-white/20 ${!formData.deadline && "text-white/50"}`}
                  >
                    {formData.deadline ? (
                      format(formData.deadline, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-70" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-[#0a001f]/95 border-white/20">
                  <Calendar
                    mode="single"
                    selected={formData.deadline}
                    onSelect={handleDateChange}
                    initialFocus
                    disabled={(date) => date < new Date()}
                    className="text-white"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            {/* File Upload */}
            <div className="form-group">
              <Label htmlFor="file" className="text-white flex items-center gap-2 mb-1">
                <Upload className="h-4 w-4 text-neon-blue" />
                <span>File Upload (Optional)</span>
              </Label>
              <div 
                onClick={triggerFileInput}
                className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer bg-white/10 border border-white/20 text-white/70 hover:bg-white/15 transition-all"
              >
                <input
                  type="file"
                  id="file"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <span>{formData.file ? formData.file.name : "Select a file..."}</span>
              </div>
            </div>
          </div>
          
          {/* Project Description */}
          <div className="form-group">
            <Label htmlFor="message" className="text-white flex items-center gap-2 mb-1">
              <FileText className="h-4 w-4 text-neon-blue" />
              <span>Explain Your Project Briefly</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Example: I need a chatbot for my real estate business that answers FAQs and books appointments."
              required
              value={formData.message}
              onChange={handleChange}
              className="bg-white/10 border-white/20 focus:border-neon-blue/70 text-white placeholder:text-white/50 transition-all duration-300 min-h-[120px] resize-none"
            />
          </div>
          
          {/* Terms Checkbox */}
          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms"
              checked={formData.terms}
              onCheckedChange={handleTermsChange}
              className="mt-1 data-[state=checked]:bg-neon-blue"
            />
            <Label htmlFor="terms" className="text-white/70 text-sm">
              I agree to the <a href="#" className="text-neon-blue underline">Terms & Conditions</a> and <a href="#" className="text-neon-blue underline">Privacy Policy</a>.
            </Label>
          </div>
          
          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-6 relative overflow-hidden group bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium rounded-md hover:opacity-90 transition-opacity"
          >
            <span className="absolute w-40 h-40 -mt-12 -ml-20 bg-white/20 rotate-45 -translate-x-full group-hover:translate-x-[300%] transition-all duration-1000"></span>
            <span className="relative flex items-center justify-center gap-2">
              {isSubmitting ? "Processing..." : "Send Request"}
              <ArrowRight className="h-5 w-5" />
            </span>
          </Button>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 pt-6 border-t border-white/10 mt-8">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-400" />
              <span className="text-white/70 text-sm">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-green-400" />
              <span className="text-white/70 text-sm">Client Data Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="h-4 w-4 text-green-400" />
              <span className="text-white/70 text-sm">Trusted by 10+ Founders</span>
            </div>
          </div>
          
          {/* Hidden SEO Keywords */}
          <div className="sr-only">
            <p>AI chatbot for business</p>
            <p>Prompt engineer services</p>
            <p>AI website developer India</p>
            <p>Chatbot builder for WhatsApp</p>
            <p>AI lead generation chatbot</p>
          </div>
        </form>
      </div>
      
      {/* Terms Agreement Dialog */}
      <Dialog open={termsDialog} onOpenChange={setTermsDialog}>
        <DialogContent className="glass-card border-none bg-gradient-to-b from-black/90 to-[#0a001f] text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gradient">Service Terms Agreement</DialogTitle>
            <DialogDescription className="text-white/70">
              Please review and confirm before submission.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4 text-white/80">
            <p>By submitting, you agree to BotVibex's service terms. We ensure 100% privacy and project confidentiality.</p>
          </div>
          
          <div className="flex justify-end gap-4">
            <Button 
              variant="outline" 
              onClick={() => setTermsDialog(false)}
              className="border-white/20 text-white hover:bg-white/10"
            >
              Cancel
            </Button>
            <Button 
              onClick={confirmSubmission}
              className="bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90"
            >
              I Agree, Submit Now
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Success Dialog */}
      <Dialog open={successDialog} onOpenChange={setSuccessDialog}>
        <DialogContent className="glass-card border-none bg-gradient-to-b from-black/90 to-[#0a001f] text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gradient">Thank You!</DialogTitle>
          </DialogHeader>
          
          <div className="py-4 text-center">
            <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-400" />
            </div>
            <p className="text-white text-lg mb-2">Your request has been received.</p>
            <p className="text-white/70">We'll get back to you within 24 hours.</p>
          </div>
          
          <Button 
            onClick={() => setSuccessDialog(false)}
            className="bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90 w-full"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdvancedContactForm;
