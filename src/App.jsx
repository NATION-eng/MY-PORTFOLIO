import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TechMarquee from "./components/TechMarquee";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import ResumeModal from "./components/ResumeModal";

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <Navbar onOpenResume={() => setResumeOpen(true)} />
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <TechMarquee />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}

export default App;
