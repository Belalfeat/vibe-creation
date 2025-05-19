
import React, { useState, useRef } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { format } from 'date-fns';
import { CalendarIcon, User, Mail, FileText, MessageCircle, Check, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
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
  DialogFooter,
} from '@/components/ui/dialog';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  budget: z.string({ required_error: "Please select a budget range." }),
  service: z.string({ required_error: "Please select a service type." }),
  message: z.string().min(10, { message: "Please provide at least 10 characters about your project." }),
  deadline: z.date().optional(),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions." }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ImprovedContactForm: React.FC = () => {
  const { toast } = useToast();
  const [showTermsDialog, setShowTermsDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      budget: "",
      service: "",
      message: "",
      terms: false,
    },
  });

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowTermsDialog(true);
  };

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // EmailJS parameters
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      budget: data.budget,
      service_type: data.service,
      message: data.message,
      deadline: data.deadline ? format(data.deadline, 'PP') : 'Not specified'
    };
    
    emailjs.send(
      'service_p2xh4gv',
      'template_9azo9os',
      templateParams,
      'CAv4W16MblZ-MWYZJ'
    ).then(
      (result) => {
        console.log('Email sent successfully:', result.text);
        form.reset();
        setIsSubmitting(false);
        setShowSuccessDialog(true);
      },
      (error) => {
        console.error('Failed to send email:', error.text);
        toast({
          title: "Message failed to send",
          description: "Please try again or contact us directly via email.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      }
    );
  };

  return (
    <>
      <div className="w-full glass-card border-2 border-neon-blue/30 p-6 md:p-8 rounded-xl relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl -z-10"></div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-6">Get Your Custom Solution</h2>
        <p className="text-white/70 mb-8">Fill out the form below, and we'll get back to you within 24 hours with a custom proposal tailored to your needs.</p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-white">
                      <User className="h-4 w-4 text-neon-blue" />
                      <span>Full Name</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        className="bg-white/10 border-white/20 focus:border-neon-blue/70 text-white placeholder:text-white/50 transition-all duration-300"
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
                        placeholder="your.email@example.com"
                        className="bg-white/10 border-white/20 focus:border-neon-blue/70 text-white placeholder:text-white/50 transition-all duration-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              
              {/* Budget Field */}
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-white">
                      <span>Budget Range</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#0a001f]/95 border-white/20 text-white">
                        <SelectItem value="₹2,000-₹5,000">₹2,000–₹5,000</SelectItem>
                        <SelectItem value="₹5,000-₹10,000">₹5,000–₹10,000</SelectItem>
                        <SelectItem value="₹10,000+">₹10,000+</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              
              {/* Service Field */}
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-white">
                      <span>Service Needed</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#0a001f]/95 border-white/20 text-white">
                        <SelectItem value="Chatbot Dev">Chatbot Development</SelectItem>
                        <SelectItem value="AI Website">AI Website</SelectItem>
                        <SelectItem value="Prompt Engineering">Prompt Engineering</SelectItem>
                        <SelectItem value="Custom AI System">Custom AI System</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              
              {/* Deadline Field (Optional) */}
              <FormField
                control={form.control}
                name="deadline"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="flex items-center gap-2 text-white">
                      <CalendarIcon className="h-4 w-4 text-neon-blue" />
                      <span>Deadline (Optional)</span>
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={`w-full justify-start text-left font-normal bg-white/10 border-white/20 text-white hover:bg-white/20 ${!field.value && "text-white/50"}`}
                          >
                            {field.value ? format(field.value, "PPP") : "Pick a date"}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-70" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-[#0a001f]/95 border-white/20">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Project Description */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-white">
                    <FileText className="h-4 w-4 text-neon-blue" />
                    <span>Explain Your Project Briefly</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Example: I need a chatbot for my real estate business that answers FAQs and books appointments."
                      className="bg-white/10 border-white/20 focus:border-neon-blue/70 text-white placeholder:text-white/50 min-h-[120px] resize-none"
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
                      className="data-[state=checked]:bg-neon-blue border-white/30"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-white/70 text-sm cursor-pointer">
                      I agree to the <a href="#" onClick={handleTermsClick} className="text-neon-blue underline">Terms & Conditions</a> and <a href="#" onClick={handleTermsClick} className="text-neon-blue underline">Privacy Policy</a>.
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
              className="w-full py-6 relative overflow-hidden group bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium rounded-md hover:opacity-90 transition-opacity"
            >
              <span className="absolute w-40 h-40 -mt-12 -ml-20 bg-white/20 rotate-45 -translate-x-full group-hover:translate-x-[300%] transition-all duration-1000"></span>
              <span className="relative flex items-center justify-center gap-2">
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-5 w-5" />
              </span>
            </Button>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 text-green-400 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-white/70 text-sm">SSL Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 text-green-400 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-white/70 text-sm">Client Data Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 text-green-400 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
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
        </Form>
      </div>
      
      {/* Terms & Conditions Dialog */}
      <Dialog open={showTermsDialog} onOpenChange={setShowTermsDialog}>
        <DialogContent className="glass-card border-none bg-gradient-to-b from-black/90 to-[#0a001f] text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gradient">Terms and Privacy Policy</DialogTitle>
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
    </>
  );
};

export default ImprovedContactForm;
