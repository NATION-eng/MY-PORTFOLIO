import { motion } from "framer-motion";
const BounceIn = ({ children }) => (
  <motion.div
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 300, damping: 20}}
  >
    {children}
  </motion.div>
);

export default BounceIn;
