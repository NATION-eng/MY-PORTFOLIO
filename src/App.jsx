import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TechMarquee from "./components/TechMarquee";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import ResumeModalPortal, { openResumeModal } from "./components/ResumeModalPortal";

function App() {
  return (
    <>
      <Navbar onOpenResume={openResumeModal} />
      <main>
        <Hero onOpenResume={openResumeModal} />
        <TechMarquee />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
      <ResumeModalPortal />
    </>
  );
}

export default App;
