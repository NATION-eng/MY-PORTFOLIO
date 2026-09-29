import { useState, useEffect } from "react";
import ResumeModal from "./ResumeModal";

// Global event-based trigger: decoupled from the React tree so the click handler returns instantly.
export const openResumeModal = () => {
  // setTimeout(0) defers to the next macrotask, giving the browser a full paint cycle
  // before React mounts the modal tree — eliminates the span/button INP blocking issue.
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent("open-resume-modal"));
  }, 0);
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
