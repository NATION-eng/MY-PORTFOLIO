import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  // Hide custom cursor on touch devices
  useEffect(() => {
    if ("ontouchstart" in window) {
      document.documentElement.style.cursor = "auto";
    }
  }, []);

  return (
    <>
      <motion.div
        className="custom-cursor"
        style={{
          translateX: x,
          translateY: y,
        }}
      />
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>
    </>
  );
}

export default CustomCursor;
