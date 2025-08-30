import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div data-aos="fade-up">
          <Hero />
        </div>
        <div data-aos="fade-up">
          <ProductsSection />
        </div>
        <div data-aos="fade-up">
          <AboutSection />
        </div>
        <div data-aos="fade-up">
          <ContactSection />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
