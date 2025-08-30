import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { useState } from "react";
import riceImage from "@/assets/rice-product.jpg";
import coffeeImage from "@/assets/coffee-product.jpg";
import spicesImage from "@/assets/spices-product.jpg";
import gheeImage from "@/assets/ghee-product.jpg";
import raisinsImage from "@/assets/raisins-product.jpg";
import medicinesImage from "@/assets/medicines-product.jpg";

const ProductsSection = () => {
  const { t } = useTranslation();
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);
  
  const products = [
    {
      id: "rice",
      name: "Basmati & Non-Basmati Rice",
      description: "Premium quality rice varieties including aromatic Basmati and nutritious Non-Basmati rice.",
      image: riceImage,
      features: ["Premium Grade", "Export Quality", "Aromatic Long Grain"]
    },
    {
      id: "coffee",
      name: "Coffee",
      description: "Finest quality coffee beans sourced from premium plantations across India.",
      image: coffeeImage,
      features: ["Arabica & Robusta", "Fresh Roasted", "Premium Origin"]
    },
    {
      id: "spices",
      name: "Spices",
      description: "Authentic Indian spices with rich flavor and aroma for global culinary experiences.",
      image: spicesImage,
      features: ["Pure & Natural", "Rich Aroma", "Traditional Quality"]
    },
    {
      id: "ghee",
      name: "Ghee",
      description: "Pure clarified butter made from finest quality milk, perfect for cooking and nutrition.",
      image: gheeImage,
      features: ["100% Pure", "Traditional Process", "Rich Flavor"]
    },
    {
      id: "raisins",
      name: "Raisins",
      description: "Premium quality dried grapes, naturally sweet and nutritious for global markets.",
      image: raisinsImage,
      features: ["Natural Sweet", "Premium Grade", "Nutritious"]
    },
    {
      id: "medicines",
      name: "Medicines",
      description: "Ayurvedic and pharmaceutical products meeting international quality standards.",
      image: medicinesImage,
      features: ["FDA Approved", "International Standards", "Quality Assured"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            {t('products.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group bg-gradient-card border-border/50 hover:shadow-elegant transition-smooth overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-secondary/20 text-secondary-foreground text-xs rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary/40 group-hover:bg-primary/5"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('products.viewDetails')}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;