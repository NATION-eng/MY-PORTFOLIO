import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TechMarquee from "./components/TechMarquee";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}

export default App;
