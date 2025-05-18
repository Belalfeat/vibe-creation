
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, User, Mail, Package, DollarSign, Clock, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  service: z.string().min(1, { message: "Please select a service." }),
  budget: z.string().min(1, { message: "Please select a budget range." }),
  deadline: z.date({ required_error: "Please select a deadline." }),
  message: z.string().min(10, { message: "Please provide at least 10 characters of project details." }),
  terms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions."
  })
});

type FormValues = z.infer<typeof formSchema>;

const SmartContactForm: React.FC = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      budget: "",
      message: "",
      terms: false
    }
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Prepare data for email service
    const templateParams = {
      name: data.name,
      email: data.email,
      service: data.service,
      budget: data.budget,
      deadline: format(data.deadline, 'PPP'),
      message: data.message
    };
    
    emailjs.send(
      'service_p2xh4gv',
      'template_9azo9os',
      templateParams,
      'CAv4W16MblZ-MWYZJ'
    )
    .then((result) => {
      console.log('Email successfully sent!', result.text);
      toast({
        title: "Thank you for contacting BotVibex!",
        description: "Your request has been received. We'll get back to you within 24 hours via email or WhatsApp.",
      });
      
      // Reset form
      form.reset();
      setIsSubmitting(false);
    }, (error) => {
      console.error('Failed to send email:', error.text);
      toast({
        title: "Failed to send your request",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    });
  };

  return (
    <div className="w-full glass-card p-6 md:p-8 border-2 border-neon-blue rounded-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-neon-blue/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-neon-purple/10 rounded-full blur-3xl -z-10"></div>
      
      <h3 className="text-2xl font-bold text-gradient mb-6">Get Your Custom AI Solution</h3>
      
      <Form {...form}>
        <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <User className="h-4 w-4 text-neon-blue" />
                    <span>Full Name</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-neon-blue" />
                    <span>Email Address</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-neon-blue" />
                    <span>Service Type</span>
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ai_chatbot">AI Chatbot Development</SelectItem>
                      <SelectItem value="ai_website">AI Website Development</SelectItem>
                      <SelectItem value="prompt_engineering">Prompt Engineering</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-neon-blue" />
                    <span>Budget Range</span>
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1k-5k">₹1K-₹5K</SelectItem>
                      <SelectItem value="5k-10k">₹5K-₹10K</SelectItem>
                      <SelectItem value="10k+">₹10K+</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="deadline"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-neon-blue" />
                    <span>Project Deadline</span>
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={`w-full bg-white/10 border-white/20 text-white pl-3 text-left font-normal ${!field.value && "text-white/50"}`}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Select a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-neon-blue" />
                  <span>Project Details</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Explain your project briefly here. Mention your goals, type of chatbot or website you need, and any special features you want."
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox 
                    checked={field.value} 
                    onCheckedChange={field.onChange} 
                    id="terms"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel htmlFor="terms" className="text-sm text-white/70">
                    I agree to the terms and conditions of BotVibex before placing the order. I understand that this is a custom service and pricing depends on project complexity.
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white py-6 rounded-md hover:opacity-90 transition-all duration-300 neon-border relative overflow-hidden group"
          >
            <span className="absolute w-40 h-40 -mt-12 -ml-20 bg-white/20 rotate-45 -translate-x-full group-hover:translate-x-[300%] transition-all duration-1000"></span>
            <span className="relative z-10">
              {isSubmitting ? "Sending Request..." : "Send Request"}
            </span>
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SmartContactForm;
