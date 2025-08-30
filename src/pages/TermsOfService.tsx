import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TermsOfService = () => {
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
            <h1 className="text-4xl font-display font-bold text-foreground mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-muted/30 p-6 rounded-lg mb-8">
                <p className="text-muted-foreground text-center">
                  <strong>Placeholder Terms of Service.</strong> This page will include the rules and regulations for using the Groww Internationals website and services. Content to be replaced with finalized version later.
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

export default TermsOfService;