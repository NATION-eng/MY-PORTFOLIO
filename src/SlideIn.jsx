// components/animations/SlideIn.js
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// SlideIn component with scroll-triggered animation using Intersection Observer
const SlideIn = ({ children, from = "left", duration = 0.8, delay = 0 }) => {
  // Directional variants for entry animation
  const variants = {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    top: { y: -100, opacity: 0 },
    bottom: { y: 100, opacity: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, y: 0, opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={variants[from]}
      animate={controls}
      transition={{ duration, delay, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
