import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "+917350072855";
  const whatsappMessage = "Hello! I'm interested in your export services and would like to request a quote.";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
      animate={{
        scale: [1, 1.1, 1],
        boxShadow: [
          "0 4px 20px rgba(34, 197, 94, 0.3)",
          "0 8px 30px rgba(34, 197, 94, 0.5)",
          "0 4px 20px rgba(34, 197, 94, 0.3)"
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={24} />
    </motion.button>
  );
};

export default WhatsAppButton;