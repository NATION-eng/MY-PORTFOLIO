import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="navbar__inner">
          <a
            href="#"
            className="navbar__logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            NC<span className="navbar__logo-dot">.</span>
          </a>

          {/* Desktop navigation */}
          <nav className="navbar__links" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="navbar__link"
                onClick={(e) => handleNav(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="navbar__actions">
            <button
              type="button"
              className="navbar__resume-btn"
              onClick={onOpenResume}
              aria-label="View Resume"
            >
              Resume
            </button>

            <a
              href="tel:+2348161237136"
              className="navbar__quick-call"
              aria-label="Direct Call"
            >
              <FaPhoneAlt className="navbar__call-icon" />
              <span>08161237136</span>
            </a>

            <div className="navbar__socials">
              <a href="https://github.com/NATION-eng" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/chiburoma-nation-752395312" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`navbar__burger ${mobileOpen ? "navbar__burger--open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </motion.header>

      {/* Mobile App Drawer & Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="mobile-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              aria-label="Mobile Navigation Menu"
            >
              <div className="mobile-drawer__header">
                <div className="mobile-drawer__status">
                  <span className="mobile-drawer__status-dot" />
                  <span>Available for work</span>
                </div>
                <button
                  className="mobile-drawer__close"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <nav className="mobile-drawer__links">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="mobile-drawer__link"
                    onClick={(e) => handleNav(e, link.href)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mobile-drawer__actions">
                <button
                  type="button"
                  className="mobile-drawer__resume-btn"
                  onClick={() => {
                    setMobileOpen(false);
                    if (onOpenResume) onOpenResume();
                  }}
                >
                  <span>📄 View Resume / Credentials</span>
                </button>
                <a
                  href="tel:+2348161237136"
                  className="mobile-drawer__call-btn"
                >
                  <FaPhoneAlt />
                  <span>Call 08161237136</span>
                </a>
                <a
                  href="https://wa.me/2348116079309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-drawer__wa-btn"
                >
                  <FaWhatsapp />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="mobile-drawer__footer">
                <p className="mobile-drawer__email">chiburomanation6@gmail.com</p>
                <div className="mobile-drawer__socials">
                  <a href="https://github.com/NATION-eng" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/chiburoma-nation-752395312" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
