import { useState, useEffect, lazy, Suspense } from "react";

const ResumeModal = lazy(() => import("./ResumeModal"));

// Global event-based trigger: decoupled from the React tree so the click handler completes in <1ms
export const openResumeModal = () => {
  // Yield to browser immediately so the click interaction paints in the current frame (<16ms INP)
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
    <Suspense fallback={null}>
      <ResumeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Suspense>
  );
};

export default ResumeModalPortal;
