import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Mail, Phone, MapPin, Send, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useForm, useFieldArray } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  phone: string;
  products: Array<{ product: string; quantity: string }>;
  message: string;
}

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { control, handleSubmit, reset, watch } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      products: [{ product: "", quantity: "" }],
      message: ""
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "products"
  });

  const whatsappNumber = "+917350072855";
  
  const products = [
    "Basmati Rice",
    "Non-Basmati Rice", 
    "Coffee",
    "Spices",
    "Ghee",
    "Raisins",
    "Medicines",
    "Multiple Products"
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const formData = watch();
    const productsText = formData.products
      .filter(p => p.product && p.quantity)
      .map(p => `${p.product}: ${p.quantity}`)
      .join(', ');
      
    const message = `Hello! I'm interested in your export services.
    
Products: ${productsText || 'Multiple products'}
Name: ${formData.name || 'Not specified'}

Please provide more information about pricing and availability.`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card border-border/50">
              <h3 className="font-display font-semibold text-foreground mb-4">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Phone</div>
                    <div className="text-sm text-muted-foreground">{t('contact.info.phone')}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Email</div>
                    <div className="text-sm text-muted-foreground">{t('contact.info.email')}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Address</div>
                    <div className="text-sm text-muted-foreground">
                      {t('contact.info.address')}
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                variant="cta" 
                className="w-full mt-6"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="h-4 w-4" />
                Quick WhatsApp
              </Button>
            </Card>

            {/* Business Hours */}
            <Card className="p-6 bg-gradient-card border-border/50">
              <h3 className="font-display font-semibold text-foreground mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground">Closed</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Quote Request Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-gradient-card border-border/50">
              <h3 className="font-display font-semibold text-foreground mb-6 text-xl">
                Request a Quote
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      {...control.register("name", { required: true })}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...control.register("email", { required: true })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...control.register("phone")}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Product Interests *</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => append({ product: "", quantity: "" })}
                    >
                      <Plus className="h-4 w-4" />
                      Add Product
                    </Button>
                  </div>
                  
                  {fields.map((field, index) => (
                    <motion.div
                      key={field.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border border-border/50 rounded-lg"
                    >
                      <div className="md:col-span-2">
                        <Select {...control.register(`products.${index}.product`)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a product" />
                          </SelectTrigger>
                          <SelectContent>
                            {products.map((product) => (
                              <SelectItem key={product} value={product}>
                                {product}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex gap-2">
                        <Input
                          {...control.register(`products.${index}.quantity`)}
                          placeholder="Quantity"
                        />
                        {fields.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => remove(index)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    {...control.register("message")}
                    placeholder="Tell us about your requirements, destination country, preferred packaging, etc."
                    rows={4}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit" 
                    variant="default" 
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="h-4 w-4 border-2 border-current border-t-transparent rounded-full"
                      />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Quote Request"}
                  </Button>
                  <Button type="button" variant="cta" onClick={handleWhatsApp} className="flex-1">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Instead
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;