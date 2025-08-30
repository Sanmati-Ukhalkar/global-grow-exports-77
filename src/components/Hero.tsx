
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Package2, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-agriculture.jpg";
import FloatingIcons from "./FloatingIcons";

const Hero = () => {
  const { t } = useTranslation();
  const whatsappNumber = "+917350072855";
  const whatsappMessage = "Hello! I'm interested in your export services and would like to request a quote.";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <img 
          src={heroImage} 
          alt="Agricultural exports and shipping" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/65 to-primary/45"></div>
      </motion.div>

      {/* Floating Icons */}
      <FloatingIcons />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="inline-block bg-secondary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-primary-foreground/20">
              Global Grow Exports • Premium Quality Since 2009
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-2xl hover:shadow-secondary/20"
              >
                <Package2 className="h-5 w-5" />
                {t('hero.cta')}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm"
              >
                <Phone className="h-5 w-5" />
                {t('hero.contact')}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                className="bg-green-600/20 border-green-400/30 text-primary-foreground hover:bg-green-600/30 backdrop-blur-sm"
              >
                <MessageCircle className="h-5 w-5" />
                {t('hero.whatsapp')}
              </Button>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-primary-foreground/80"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="text-center bg-primary/20 p-4 rounded-xl border border-primary/30">
              <div className="text-2xl font-bold text-secondary">50+</div>
              <div className="text-sm">Countries Served</div>
            </div>
            <div className="text-center bg-primary/20 p-4 rounded-xl border border-primary/30">
              <div className="text-2xl font-bold text-secondary">1000+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div className="text-center bg-primary/20 p-4 rounded-xl border border-primary/30">
              <div className="text-2xl font-bold text-secondary">ISO</div>
              <div className="text-sm">Certified</div>
            </div>
            <div className="text-center bg-primary/20 p-4 rounded-xl border border-primary/30">
              <div className="text-2xl font-bold text-secondary">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center bg-primary-foreground/10 backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
