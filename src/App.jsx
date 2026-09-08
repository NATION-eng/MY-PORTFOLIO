import { useState, useCallback, useTransition, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TechMarquee from "./components/TechMarquee";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

const ResumeModal = lazy(() => import("./components/ResumeModal"));

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [, startTransition] = useTransition();

  const handleOpenResume = useCallback(() => {
    // Non-blocking React 18 transition: yields immediately to the browser for <16ms INP
    startTransition(() => {
      setResumeOpen(true);
    });
  }, []);

  const handleCloseResume = useCallback(() => {
    setResumeOpen(false);
  }, []);

  return (
    <>
      <Navbar onOpenResume={handleOpenResume} />
      <main>
        <Hero onOpenResume={handleOpenResume} />
        <TechMarquee />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
      {resumeOpen && (
        <Suspense fallback={null}>
          <ResumeModal isOpen={resumeOpen} onClose={handleCloseResume} />
        </Suspense>
      )}
    </>
  );
}

export default App;
