import { useState } from "react";
import { useForm } from "react-hook-form";
import { usePageTitle } from "@/hooks/usePageTitle";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/about/Header";
// import Footer from "@/components/about/Footer";
import Footer from "@/components/Footer";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().trim().min(1, { message: "First name is required" }).max(100),
  lastName: z.string().trim().min(1, { message: "Last name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  message: z.string().trim().max(1000).optional(),
});

// Point this at the cPanel mail handler (e.g. https://khumbulodge.com/contact.php)
// by setting VITE_CONTACT_ENDPOINT in .env. Until it is set the form hands the
// enquiry to the guest's own mail client instead, so nothing is silently lost.
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
const CONTACT_EMAIL = "info@khumbulodge.com";

const Booking = () => {
  usePageTitle("Book Your Stay | Khumbu Lodge", "Enquire about a stay at Khumbu Lodge in Namche Bazaar, Everest region.");
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const openMailClient = (values: z.infer<typeof formSchema>) => {
    const subject = `Booking enquiry from ${values.firstName} ${values.lastName}`;
    const body = [
      `Name: ${values.firstName} ${values.lastName}`,
      `Email: ${values.email}`,
      "",
      values.message || "(no message)",
    ].join("\n");
    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // No server wired up yet: open the guest's mail app with the enquiry filled
    // in. They still have to press send, so we never claim it reached us.
    if (!CONTACT_ENDPOINT) {
      openMailClient(values);
      toast({
        title: "Opening your email app",
        description: `Press send there and it reaches us. You can also write to ${CONTACT_EMAIL} directly.`,
      });
      return;
    }

    setIsSending(true);
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      toast({
        title: "Enquiry sent",
        description: "Thank you. We will get back to you shortly.",
      });
      form.reset();
    } catch {
      // Never tell a guest it sent when it did not; give them another route.
      toast({
        variant: "destructive",
        title: "Could not send your enquiry",
        description: `Please email ${CONTACT_EMAIL} or call +977 38-540144.`,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-background flex flex-col">
      <Header />
      
      <main className="min-h-screen flex items-center py-12 md:py-16 font-AvenirLight text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Left Side - Contact Information */}
            <div className="space-y-8 ">
              <div>
                <h1 className="text-5xl md:text-6xl font-serif text-rust-brown mb-4 font-BOONE">
                  Get in Touch
                </h1>
                <p className="text-xl text-rust-brown/80 mb-6">
                  I'd like to hear from you!
                </p>
                <p className="text-muted-foreground">
                  If you have any inquiries or just want to say hi, please use the contact form!
                </p>
              </div>

              <div className="flex items-center gap-3 text-rust-brown">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@khumbulodge.com" className="hover:underline">
                  info@khumbulodge.com
                </a>
              </div>

              <div className="flex items-start gap-3 text-rust-brown">
                <Phone className="w-5 h-5 mt-1 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+97738540144" className="hover:underline">
                    +977 38-540144
                  </a>
                  <a href="tel:+97738540166" className="hover:underline">
                    +977 38-540166
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-rust-brown">
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/khumbulodge/" target="_blank" rel="noopener noreferrer" aria-label="Khumbu Lodge on Instagram" className=" flex items-center ">
                    <Instagram className="w-5 h-5 hover:opacity-50 transition-opacity" />
                  </a>
                  <a href="https://www.facebook.com/KhumbuLodge" target="_blank" rel="noopener noreferrer" aria-label="Khumbu Lodge on Facebook" className="flex items-center">
                    <Facebook className="w-5 h-5 hover:opacity-50 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="space-y-6 ">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground text-black font-AvenirLight">
                            First Name
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground text-black font-AvenirLight">
                            Last Name
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground text-black font-AvenirLight">
                          Email <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground text-black font-AvenirLight">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="" 
                            className="min-h-[150px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSending}
                    className="block ml-auto bg-ocean-blue hover:bg-steel-blue text-white rounded-none px-3 md:px-6 text-sm font-AvenirLight disabled:opacity-60"
                  >
                    {isSending ? "Sending..." : "Send"}
                  </Button>
                </form>
              </Form>
            </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Booking;
