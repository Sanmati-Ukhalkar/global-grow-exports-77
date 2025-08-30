
import { motion } from "framer-motion";
import { Ship, Plane, Globe, Package, Truck, Factory, Building2, Wheat, Coffee, ShoppingCart } from "lucide-react";

const FloatingIcons = () => {
  const icons = [
    { 
      Icon: Ship, 
      initialX: "10%", 
      initialY: "20%",
      duration: 20,
      delay: 0,
      size: 32
    },
    { 
      Icon: Plane, 
      initialX: "80%", 
      initialY: "30%",
      duration: 25,
      delay: 5,
      size: 28
    },
    { 
      Icon: Globe, 
      initialX: "15%", 
      initialY: "70%",
      duration: 22,
      delay: 2,
      size: 30
    },
    { 
      Icon: Package, 
      initialX: "85%", 
      initialY: "75%",
      duration: 18,
      delay: 3,
      size: 26
    },
    { 
      Icon: Truck, 
      initialX: "70%", 
      initialY: "15%",
      duration: 24,
      delay: 1,
      size: 32
    },
    { 
      Icon: Factory, 
      initialX: "25%", 
      initialY: "45%",
      duration: 26,
      delay: 4,
      size: 28
    },
    { 
      Icon: Building2, 
      initialX: "90%", 
      initialY: "50%",
      duration: 21,
      delay: 6,
      size: 30
    },
    { 
      Icon: Wheat, 
      initialX: "5%", 
      initialY: "85%",
      duration: 23,
      delay: 2.5,
      size: 26
    },
    { 
      Icon: Coffee, 
      initialX: "95%", 
      initialY: "85%",
      duration: 19,
      delay: 1.5,
      size: 28
    },
    { 
      Icon: ShoppingCart, 
      initialX: "40%", 
      initialY: "25%",
      duration: 27,
      delay: 3.5,
      size: 24
    }
  ];

  return (
    <>
      {icons.map(({ Icon, initialX, initialY, duration, delay, size }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary-foreground/15 z-0"
          style={{ left: initialX, top: initialY }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -10, 0],
            rotate: [0, 8, -8, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }}
        >
          <div className="bg-primary-foreground/5 backdrop-blur-sm p-3 rounded-xl border border-primary-foreground/10 shadow-lg">
            <Icon size={size} />
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default FloatingIcons;
