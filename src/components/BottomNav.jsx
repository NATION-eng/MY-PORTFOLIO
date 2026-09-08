import { useState, useEffect } from "react";
import { FiHome, FiGrid, FiUser, FiSend, FiPhone } from "react-icons/fi";

const navItems = [
  { id: "hero", label: "Home", icon: FiHome },
  { id: "projects", label: "Works", icon: FiGrid },
  { id: "about", label: "About", icon: FiUser },
  { id: "contact", label: "Contact", icon: FiSend },
];

const BottomNav = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      const sections = ["hero", "projects", "about", "contact"];
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="mobile-dock" aria-label="Mobile Bottom App Dock">
      <div className="mobile-dock__container">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={(e) => scrollToSection(e, item.id)}
              className={"mobile-dock__item" + (isActive ? " mobile-dock__item--active" : "")}
              aria-label={item.label}
              type="button"
            >
              <div className="mobile-dock__icon-wrap">
                <Icon className="mobile-dock__icon" />
                {isActive && <span className="mobile-dock__glow-dot" />}
              </div>
              <span className="mobile-dock__label">{item.label}</span>
            </button>
          );
        })}

        {/* Quick Call Floating Action Button */}
        <a
          href="tel:+2348161237136"
          className="mobile-dock__call-action"
          aria-label="Call Nation Chiburoma Amadi directly"
          title="Direct Phone Line"
        >
          <FiPhone className="mobile-dock__call-icon" />
          <span className="mobile-dock__call-label">Call</span>
        </a>
      </div>
    </nav>
  );
};

export default BottomNav;
