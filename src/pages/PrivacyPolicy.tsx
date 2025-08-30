import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
            <h1 className="text-4xl font-display font-bold text-foreground mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                We value your privacy. This Privacy Policy explains how we handle your information when you use our website and services.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                  <li>Personal details: name, email, phone, address, company details.</li>
                  <li>Business/trade details: inquiries, orders, and transactions.</li>
                  <li>Technical data: IP, browser type, and usage statistics.</li>
                  <li>Financial details: payment/billing information (only for transactions).</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                  <li>To process orders and trade-related services.</li>
                  <li>To communicate on shipments, invoices, and inquiries.</li>
                  <li>To comply with legal and regulatory requirements.</li>
                  <li>To improve our website and services.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Sharing of Information</h2>
                <p className="text-muted-foreground mb-4">
                  We only share data with:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                  <li>Service providers (logistics, payment, customs agents, IT).</li>
                  <li>Legal authorities when required by law.</li>
                  <li>We never sell or rent your data.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  We use cookies to improve user experience. You may disable them in your browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security & Retention</h2>
                <p className="text-muted-foreground mb-4">
                  We take reasonable steps to protect your data and retain it only as long as necessary for business and compliance.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You can request access, correction, or deletion of your personal data by contacting us.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact</h2>
                <p className="text-muted-foreground">
                  For questions, email us at <a href="mailto:info@growwinternational.com" className="text-primary hover:underline">info@growwinternational.com</a> or write to us at Mumbai, Maharashtra, India.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;