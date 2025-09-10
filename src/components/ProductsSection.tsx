
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import riceImage from "@/assets/rice-product.jpg";
import coffeeImage from "@/assets/coffee-product.jpg";
import spicesImage from "@/assets/spices-product.jpg";
import gheeImage from "@/assets/ghee-product.jpg";
import raisinsImage from "@/assets/raisins-product.jpg";
import medicinesImage from "@/assets/medicines-product.jpg";

const ProductsSection = () => {
  const { t } = useTranslation();
  
  const products = [
    {
      id: "rice",
      name: "Basmati & Non-Basmati Rice",
      description: "Premium quality rice varieties including aromatic Basmati and nutritious Non-Basmati rice.",
      detailedDescription: "Our premium rice collection features the finest Basmati varieties with long grains, aromatic fragrance, and exceptional taste. Sourced from the fertile fields of India, our rice undergoes rigorous quality checks to ensure international standards. We offer both traditional Basmati and high-yield Non-Basmati varieties suitable for diverse culinary applications worldwide.",
      image: riceImage,
      features: ["Premium Grade", "Export Quality", "Aromatic Long Grain", "Aged Rice Available"],
      benefits: ["Rich in Essential Nutrients", "Low Glycemic Index", "Gluten-Free", "Long Shelf Life"],
      specifications: ["Moisture: 12-14%", "Broken Grains: <5%", "Purity: 95%+", "Length: 6.5-7.5mm"]
    },
    {
      id: "coffee",
      name: "Coffee",
      description: "Finest quality coffee beans sourced from premium plantations across India.",
      detailedDescription: "Experience the rich heritage of Indian coffee with our carefully selected beans from the lush plantations of Karnataka, Kerala, and Tamil Nadu. Our coffee range includes both Arabica and Robusta varieties, each processed using traditional and modern techniques to preserve the unique flavor profiles and aromatic qualities that coffee connoisseurs worldwide appreciate.",
      image: coffeeImage,
      features: ["Arabica & Robusta", "Fresh Roasted", "Premium Origin", "Single Estate Options"],
      benefits: ["Rich Antioxidants", "Sustainable Farming", "Fair Trade Certified", "Freshness Guaranteed"],
      specifications: ["Moisture: 11-12%", "Screen Size: 15-18", "Density: 650-750 g/L", "Defects: <5%"]
    },
    {
      id: "spices",
      name: "Spices",
      description: "Authentic Indian spices with rich flavor and aroma for global culinary experiences.",
      detailedDescription: "Discover the essence of Indian cuisine with our extensive range of authentic spices. From the fiery red chilies of Guntur to the golden turmeric of Erode, each spice is carefully sourced, processed, and packaged to retain maximum flavor, color, and nutritional value. Our spice collection includes whole spices, ground spices, and custom spice blends.",
      image: spicesImage,
      features: ["Pure & Natural", "Rich Aroma", "Traditional Quality", "Custom Blends Available"],
      benefits: ["Natural Preservatives", "Anti-inflammatory Properties", "Rich in Minerals", "Authentic Taste"],
      specifications: ["Moisture: 8-12%", "Purity: 98%+", "Color Value: Natural", "Microbial Load: Controlled"]
    },
    {
      id: "ghee",
      name: "Pure Ghee",
      description: "Pure clarified butter made from finest quality milk, perfect for cooking and nutrition.",
      detailedDescription: "Our pure ghee is crafted using traditional methods from the milk of grass-fed cows. This golden elixir is rich in fat-soluble vitamins and has a high smoke point, making it perfect for cooking, baking, and traditional preparations. Our ghee is free from additives and preservatives, maintaining its natural taste and nutritional benefits.",
      image: gheeImage,
      features: ["100% Pure", "Traditional Process", "Rich Flavor", "No Additives"],
      benefits: ["High Smoke Point", "Rich in Vitamins A, D, E, K", "Lactose-Free", "Long Shelf Life"],
      specifications: ["Butyric Acid: 3-4%", "Moisture: <0.5%", "Free Fatty Acid: <1.5%", "Peroxide Value: <1.0"]
    },
    {
      id: "raisins",
      name: "Premium Raisins",
      description: "Premium quality dried grapes, naturally sweet and nutritious for global markets.",
      detailedDescription: "Our premium raisins are sun-dried to perfection, preserving their natural sweetness and nutritional value. Sourced from the finest vineyards, these golden and black varieties are rich in antioxidants, fiber, and essential minerals. Perfect for snacking, baking, or as ingredients in confectionery and cereal products.",
      image: raisinsImage,
      features: ["Natural Sweet", "Premium Grade", "Nutritious", "Multiple Varieties"],
      benefits: ["Rich in Iron", "Natural Energy Source", "High Fiber Content", "Antioxidant Properties"],
      specifications: ["Moisture: 14-16%", "Sugar Content: 65-75%", "Size: 8-12mm", "Defects: <2%"]
    },
    {
      id: "medicines",
      name: "Traditional Medicines",
      description: "Ayurvedic and pharmaceutical products meeting international quality standards.",
      detailedDescription: "Our traditional medicine range combines ancient Ayurvedic wisdom with modern quality standards. Each product is formulated using carefully selected herbs and ingredients, processed in WHO-GMP certified facilities. We offer a comprehensive range of herbal supplements, traditional formulations, and wellness products backed by scientific research.",
      image: medicinesImage,
      features: ["FDA Approved", "International Standards", "Quality Assured", "Scientific Backing"],
      benefits: ["Natural Ingredients", "Traditional Efficacy", "Modern Processing", "Global Compliance"],
      specifications: ["WHO-GMP Certified", "Heavy Metals: <10ppm", "Microbial Load: Controlled", "Standardized Extracts"]
    }
  ];


  return (
    <>
      <section id="products" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t('products.title')}
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('products.subtitle')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="bg-gradient-card border-border/50 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent group-hover:from-primary/30 transition-all duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.slice(0, 3).map((feature, index) => (
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
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      {t('products.viewDetails')}
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default ProductsSection;
