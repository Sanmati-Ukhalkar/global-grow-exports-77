import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Award, Truck, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

interface Product {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  image: string;
  features: string[];
  benefits: string[];
  specifications: string[];
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const { t } = useTranslation();

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden'; // Disable body scroll
    } else {
      document.body.style.overflow = 'auto'; // Re-enable body scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            className="relative bg-background border border-border rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90 rounded-full"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Hero Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-2xl sm:text-3xl font-display font-bold mb-2">
                    {product.name}
                  </h2>
                  <p className="text-white/90 text-lg">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Detailed Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <Star className="h-5 w-5 text-primary mr-2" />
                    Product Overview
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.detailedDescription}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      Health Benefits
                    </h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <Truck className="h-5 w-5 text-primary mr-2" />
                      Specifications
                    </h4>
                    <ul className="space-y-2">
                      {product.specifications.map((spec, index) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-muted/30 rounded-lg p-6 text-center">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Interested in this product?
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Contact us for pricing, availability, and bulk order information.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button 
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => {
                        window.open('https://wa.me/917350072855', '_blank');
                      }}
                    >
                      WhatsApp Inquiry
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        const element = document.getElementById('contact');
                        if (element) {
                          onClose();
                          setTimeout(() => {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }, 300);
                        }
                      }}
                    >
                      Send Email
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;