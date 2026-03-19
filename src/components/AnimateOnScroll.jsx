import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  fade: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  slide: {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  },
  bounce: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
};

const AnimateOnScroll = ({
  children,
  variant = "fade",
  delay = 0,
  duration = 0.6,
  className = "",
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const selected = variants[variant] || variants.fade;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={selected}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        ...(variant === "bounce" && { type: "spring", stiffness: 300, damping: 20 }),
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
