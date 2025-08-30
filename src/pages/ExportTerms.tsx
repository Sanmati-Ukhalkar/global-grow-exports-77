import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ExportTerms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-display font-bold text-foreground mb-8">Export Terms & Conditions</h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-muted/30 p-6 rounded-lg mb-8">
                <p className="text-muted-foreground text-center">
                  <strong>Placeholder Export Terms.</strong> This page will include conditions, trade compliance rules, and export-related disclaimers. Content to be replaced with finalized version later.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExportTerms;