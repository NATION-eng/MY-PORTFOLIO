// FadeInSection.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FadeInSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    
    <motion.div
   
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
