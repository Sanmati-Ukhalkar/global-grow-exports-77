import { motion } from "framer-motion";
import { Ship, Plane, Globe } from "lucide-react";

const FloatingIcons = () => {
  const icons = [
    { 
      Icon: Ship, 
      initialX: "10%", 
      initialY: "20%",
      duration: 20,
      delay: 0 
    },
    { 
      Icon: Plane, 
      initialX: "80%", 
      initialY: "30%",
      duration: 25,
      delay: 5 
    },
    { 
      Icon: Globe, 
      initialX: "15%", 
      initialY: "70%",
      duration: 22,
      delay: 2 
    }
  ];

  return (
    <>
      {icons.map(({ Icon, initialX, initialY, duration, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary-foreground/20"
          style={{ left: initialX, top: initialY }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }}
        >
          <Icon size={24} />
        </motion.div>
      ))}
    </>
  );
};

export default FloatingIcons;