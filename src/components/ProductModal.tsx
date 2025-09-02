
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, CheckCircle, Package, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  detailedDescription: string;
  benefits: string[];
  specifications: string[];
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const { t } = useTranslation();

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Full screen overlay */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ 
              touchAction: 'none',
              width: '100vw',
              height: '100vh',
              top: 0,
              left: 0,
              position: 'fixed'
            }}
          />
          
          {/* Modal Container - Full screen with centered content */}
          <div 
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
            style={{ 
              width: '100vw', 
              height: '100vh',
              top: 0,
              left: 0,
              position: 'fixed'
            }}
          >
            <motion.div
              className="bg-card/95 backdrop-blur-md rounded-2xl shadow-2xl border border-border/20 w-full h-full max-w-6xl max-h-[95vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-2xl"></div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-6 right-6 bg-black/20 hover:bg-black/40 text-white border-0"
                  onClick={onClose}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <h2 className="text-4xl font-display font-bold text-foreground mb-6">
                      {product.name}
                    </h2>
                    
                    <p className="text-muted-foreground text-xl mb-8 leading-relaxed">
                      {product.detailedDescription || product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                        <Star className="h-6 w-6 text-primary mr-3" />
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-secondary mr-4 flex-shrink-0" />
                            <span className="text-foreground/80 text-lg">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    {/* Benefits */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                        <Award className="h-6 w-6 text-primary mr-3" />
                        Benefits
                      </h3>
                      <div className="space-y-4">
                        {(product.benefits || [
                          "Premium Quality Assurance",
                          "International Standards",
                          "Reliable Supply Chain",
                          "Competitive Pricing"
                        ]).map((benefit, index) => (
                          <div key={index} className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                            <span className="text-foreground/90 text-lg">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Export Info */}
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl border border-primary/20">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                        <Package className="h-6 w-6 text-primary mr-3" />
                        Export Information
                      </h3>
                      <div className="space-y-3 text-base text-foreground/80">
                        <div className="flex items-center">
                          <Truck className="h-5 w-5 text-secondary mr-3" />
                          <span>Worldwide Shipping Available</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                          <span>ISO Certified & FDA Approved</span>
                        </div>
                        <div className="flex items-center">
                          <Package className="h-5 w-5 text-secondary mr-3" />
                          <span>Custom Packaging Solutions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 mt-12 pt-8 border-t border-border/20">
                  <Button 
                    variant="default" 
                    className="flex-1 h-12 text-lg"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Request Quote
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 h-12 text-lg"
                    onClick={() => window.open(`https://wa.me/+917350072855?text=${encodeURIComponent(`Hi! I'm interested in ${product.name}. Can you provide more details?`)}`, '_blank')}
                  >
                    WhatsApp Inquiry
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
