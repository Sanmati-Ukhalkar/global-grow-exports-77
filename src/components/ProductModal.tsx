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
          {/* Full page overlay - blocks all interaction with background */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9999] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ touchAction: 'none' }}
          />
          
          {/* Modal Container - Fixed positioning to prevent scrolling */}
          <div className="fixed inset-0 z-[10000] overflow-hidden">
            <motion.div
              className="absolute inset-0 flex items-center justify-center p-4 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            >
              <motion.div
                className="bg-card/95 backdrop-blur-md rounded-2xl shadow-2xl border border-border/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto my-auto"
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
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-2xl"></div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white border-0"
                    onClick={onClose}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                        {product.name}
                      </h2>
                      
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        {product.detailedDescription || product.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                          <Star className="h-5 w-5 text-primary mr-2" />
                          Key Features
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                          {product.features.map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                              <span className="text-foreground/80">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      {/* Benefits */}
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                          <Award className="h-5 w-5 text-primary mr-2" />
                          Benefits
                        </h3>
                        <div className="space-y-3">
                          {(product.benefits || [
                            "Premium Quality Assurance",
                            "International Standards",
                            "Reliable Supply Chain",
                            "Competitive Pricing"
                          ]).map((benefit, index) => (
                            <div key={index} className="bg-primary/5 p-3 rounded-lg border border-primary/10">
                              <span className="text-foreground/90">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Export Info */}
                      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20">
                        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                          <Package className="h-5 w-5 text-primary mr-2" />
                          Export Information
                        </h3>
                        <div className="space-y-2 text-sm text-foreground/80">
                          <div className="flex items-center">
                            <Truck className="h-4 w-4 text-secondary mr-2" />
                            <span>Worldwide Shipping Available</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                            <span>ISO Certified & FDA Approved</span>
                          </div>
                          <div className="flex items-center">
                            <Package className="h-4 w-4 text-secondary mr-2" />
                            <span>Custom Packaging Solutions</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-border/20">
                    <Button 
                      variant="default" 
                      className="flex-1"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Request Quote
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.open(`https://wa.me/+917350072855?text=${encodeURIComponent(`Hi! I'm interested in ${product.name}. Can you provide more details?`)}`, '_blank')}
                    >
                      WhatsApp Inquiry
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
