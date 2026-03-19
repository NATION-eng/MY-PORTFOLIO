// ScrollIndicator.jsx
import React from "react";
import { motion, useScroll } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top:0,
        left: 0,
        right: 0,
        height: "10px",
        transformOrigin: "0%", // <- this is important
        backgroundColor: "black",
        zIndex: 9999,
      }}
    />
  );
};

export default ScrollIndicator;
