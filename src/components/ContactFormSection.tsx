
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, Check, Mail, User, FileText } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Please provide at least 10 characters about your project." }),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions." }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactFormSection: React.FC = () => {
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showTermsDialog, setShowTermsDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      terms: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted with data:', data);
      setIsSubmitting(false);
      setShowSuccessDialog(true);
      form.reset();
    }, 1000);
  };

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowTermsDialog(true);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Reach out to us today and discover how AI-powered solutions can help your business grow.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-neon-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-1">Email Us</h3>
                  <p className="text-white/70">
                    <a href="mailto:vibeswithbilal050@gmail.com" className="text-neon-blue hover:underline">
                      vibeswithbilal050@gmail.com
                    </a>
                  </p>
                  <p className="text-sm text-white/50 mt-1">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neon-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="h-5 w-5 text-neon-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-1">Follow Us</h3>
                  <p className="text-white/70">
                    <a href="https://instagram.com/botvibex" target="_blank" rel="noopener noreferrer" className="text-neon-purple hover:underline">
                      @botvibex
                    </a> on Instagram
                  </p>
                  <p className="text-sm text-white/50 mt-1">
                    For updates and tips on AI technology
                  </p>
                </div>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 p-6 glass-card rounded-xl border border-white/10">
              <h3 className="text-xl font-medium text-white mb-4">Why Choose BotVibex?</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-neon-blue" /> 
                  <span className="text-white/80">Custom AI solutions tailored to your business</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-neon-blue" /> 
                  <span className="text-white/80">Affordable pricing plans starting at just ₹499</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-neon-blue" /> 
                  <span className="text-white/80">Dedicated support throughout your project</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-neon-blue" /> 
                  <span className="text-white/80">Fast turnaround times and reliable delivery</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="glass-card border border-white/10 p-8 rounded-xl relative overflow-hidden">
              {/* Background Effects */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl -z-10"></div>
              
              <h3 className="text-2xl font-bold text-gradient mb-6">Get In Touch</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-white">
                          <User className="h-4 w-4 text-neon-blue" />
                          <span>Your Name</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your name"
                            className="bg-white/10 border-white/20 focus:border-neon-blue/70 text-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-white">
                          <Mail className="h-4 w-4 text-neon-blue" />
                          <span>Email Address</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
                            className="bg-white/10 border-white/20 focus:border-neon-blue/70 text-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  {/* Message Field */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-white">
                          <FileText className="h-4 w-4 text-neon-blue" />
                          <span>Project Description</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Explain your project briefly..."
                            className="bg-white/10 border-white/20 focus:border-neon-blue/70 text-white min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  {/* Terms and Conditions */}
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox 
                            checked={field.value} 
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-neon-blue"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-white/70 text-sm cursor-pointer">
                            I agree to the <a href="#" onClick={handleTermsClick} className="text-neon-blue underline">terms and conditions</a> of BotVibex.
                          </FormLabel>
                          <FormMessage className="text-red-400" />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="h-4 w-4" />
                    </span>
                  </Button>
                </form>
              </Form>
              
              {/* Trust Badges */}
              <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 text-green-400">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-white/70 text-xs">Secure Form</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 text-green-400">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-white/70 text-xs">Privacy Protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 text-green-400">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-white/70 text-xs">No Spam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Terms & Conditions Dialog */}
      <Dialog open={showTermsDialog} onOpenChange={setShowTermsDialog}>
        <DialogContent className="glass-card border-none bg-gradient-to-b from-black/90 to-[#0a001f] text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gradient">Terms and Conditions</DialogTitle>
            <DialogDescription className="text-white/70">
              Please review our terms before submitting your information.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4 text-white/80 space-y-4">
            <p className="mb-2">By using our services, you agree to the following terms:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your contact information will only be used to respond to your inquiry.</li>
              <li>We maintain strict confidentiality for all client projects and information.</li>
              <li>Project pricing depends on complexity and requirements.</li>
              <li>A 50% advance payment is required to begin work.</li>
              <li>We offer up to 3 rounds of revisions on completed work.</li>
            </ul>
          </div>
          
          <DialogFooter>
            <Button 
              onClick={() => setShowTermsDialog(false)}
              className="bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90"
            >
              I Understand
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="glass-card border-none bg-gradient-to-b from-black/90 to-[#0a001f] text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gradient">Thank You!</DialogTitle>
          </DialogHeader>
          
          <div className="py-4 text-center">
            <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-400" />
            </div>
            <p className="text-white text-lg mb-2">Your message has been received.</p>
            <p className="text-white/70">We'll reply shortly.</p>
          </div>
          
          <DialogFooter>
            <Button 
              onClick={() => setShowSuccessDialog(false)}
              className="bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90 w-full"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactFormSection;
