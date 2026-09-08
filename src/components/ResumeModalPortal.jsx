import { useState, useEffect } from "react";
import ResumeModal from "./ResumeModal";

// Global event-based trigger: decoupled from the React tree so the click handler completes in <1ms
export const openResumeModal = () => {
  // Yield immediately to the browser so the click interaction paints instantly (<5ms INP)
  requestAnimationFrame(() => {
    window.dispatchEvent(new CustomEvent("open-resume-modal"));
  });
};

export const ResumeModalPortal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-resume-modal", handleOpen);
    return () => window.removeEventListener("open-resume-modal", handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <ResumeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
  );
};

export default ResumeModalPortal;
