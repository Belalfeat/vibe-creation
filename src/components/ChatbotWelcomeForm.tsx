
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';
import { MessageSquare, User, Mail, Globe, Briefcase, Bot, Sparkles, Send } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

const formSchema = z.object({
  name: z.string().min(2, { 
    message: "Please enter your full name (at least 2 characters)." 
  }),
  email: z.string().email({ 
    message: "Please enter a valid email address." 
  }),
  website: z.string().url({ 
    message: "Please enter a valid website URL (include http:// or https://)." 
  }).or(z.string().min(5, { 
    message: "Please provide your website or business link." 
  })),
  businessDescription: z.string().min(10, { 
    message: "Please tell us a bit about your business (at least 10 characters)." 
  }),
  chatbotExpectation: z.string().min(5, { 
    message: "Please tell us what you expect from your chatbot." 
  }),
  specialFeatures: z.string().optional(),
  terms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions to proceed.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ChatbotWelcomeForm: React.FC = () => {
  const { toast } = useToast();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      website: "",
      businessDescription: "",
      chatbotExpectation: "",
      specialFeatures: "",
      terms: false
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Chatbot welcome form submitted:', data);
      setIsSubmitting(false);
      setShowSuccessDialog(true);
      form.reset();
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="glass-card border-2 border-neon-blue/30 p-6 md:p-8 rounded-xl relative overflow-hidden">
        {/* Glassmorphism background effects */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-3">
            <MessageSquare className="h-8 w-8 text-neon-blue mr-2" />
            <h1 className="text-2xl md:text-3xl font-bold text-gradient">
              Welcome to Lovable!
            </h1>
          </div>
          <p className="text-white/70">
            Where smart businesses meet smart bots. Let's get your custom AI chatbot set up!
          </p>
        </div>
        
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
                    <span>1. What's your name, boss?</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Full Name"
                      className="bg-white/10 border-white/20 focus:border-neon-blue/70 text-white placeholder:text-white/50"
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
                    <span>2. How can we reach you?</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Email Address"
                      className="bg-white/10 border-white/20 focus:border-neon-blue/70 text-white placeholder:text-white/50"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            
            {/* Website URL Field */}
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-white">
                    <Globe className="h-4 w-4 text-neon-blue" />
                    <span>3. Where should your chatbot live?</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Website URL / Business Link"
                      className="bg-white/10 border-white/20 focus:border-neon-blue/70 text-white placeholder:text-white/50"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            
            {/* Business Description Field */}
            <FormField
              control={form.control}
              name="businessDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-white">
                    <Briefcase className="h-4 w-4 text-neon-blue" />
                    <span>4. What's your business about?</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write about your niche, product, or service in 2–3 lines"
                      className="bg-white/10 border-white/20 focus:border-neon-blue/70 text-white placeholder:text-white/50 min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            
            {/* Chatbot Expectation Field */}
            <FormField
              control={form.control}
              name="chatbotExpectation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-white">
                    <Bot className="h-4 w-4 text-neon-blue" />
                    <span>5. What do you expect from your chatbot?</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="(e.g., customer support, lead generation, 24/7 help, fast replies, FAQs, etc.)"
                      className="bg-white/10 border-white/20 focus:border-neon-blue/70 text-white placeholder:text-white/50"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            
            {/* Special Features Field */}
            <FormField
              control={form.control}
              name="specialFeatures"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-white">
                    <Sparkles className="h-4 w-4 text-neon-blue" />
                    <span>6. Any special features you want?</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="(e.g., WhatsApp integration, lead form, payment options, Google Sheets, analytics, etc.)"
                      className="bg-white/10 border-white/20 focus:border-neon-blue/70 text-white placeholder:text-white/50"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            
            {/* Terms and Conditions */}
            <div className="pt-2 border-t border-white/10">
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
                      <FormLabel className="text-white/70 text-sm">
                        I accept Lovable's Terms and Conditions and agree to receive AI updates, tools, and business tips.
                      </FormLabel>
                      <FormMessage className="text-red-400" />
                    </div>
                  </FormItem>
                )}
              />
            </div>
            
            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-6 relative overflow-hidden group bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium rounded-md hover:opacity-90 transition-opacity"
            >
              <span className="absolute w-40 h-40 -mt-12 -ml-20 bg-white/20 rotate-45 -translate-x-full group-hover:translate-x-[300%] transition-all duration-1000"></span>
              <span className="relative flex items-center justify-center gap-2">
                {isSubmitting ? "Submitting..." : "Submit"}
                <Send className="h-5 w-5" />
              </span>
            </Button>
            
            <div className="text-center text-white/60 text-sm pt-4">
              Need help right now? Chat with our assistant on the bottom right or email:{" "}
              <a href="mailto:vibeswithbilal050@gmail.com" className="text-neon-blue">vibeswithbilal050@gmail.com</a>
            </div>
            
            <div className="text-center text-white/60 text-xs">
              Lovable by BotVibex – Smarter Business Starts Here.
            </div>
          </form>
        </Form>
      </div>
      
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
            <p className="text-white text-lg mb-2">Your AI journey begins!</p>
            <p className="text-white/70">You'll get a confirmation email within 24 hours from our expert team.</p>
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
    </div>
  );
};

export default ChatbotWelcomeForm;
