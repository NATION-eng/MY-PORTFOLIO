import { motion } from "framer-motion";

// FlipIn rotates the child element into view along X or Y axis
const FlipIn = ({ children, axis = "Y", duration = 0.8 }) => {
  // Set the initial rotation based on the selected axis
  const rotateProp = axis === "X" ? { rotateX: 90 } : { rotateY: 90 };

  return (
    <motion.div
      initial={{ ...rotateProp, opacity: 0 }} // Start rotated and invisible
      animate={{ rotateX: 0, rotateY: 0, opacity: 1 }} // Animate to normal position and visible
      transition={{ duration, ease: "easeOut" }} // Animation settings
    >
      {children}
    </motion.div>
  );
};

export default FlipIn;