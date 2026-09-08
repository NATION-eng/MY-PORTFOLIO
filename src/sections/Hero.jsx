import AnimateOnScroll from "../components/AnimateOnScroll";

const Hero = ({ onOpenResume }) => {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <AnimateOnScroll variant="bounce" delay={0.1}>
          <p className="hero__greeting">Hi, I'm Nation Chiburoma Amadi</p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade" delay={0.3}>
          <h1 className="hero__title">
            Software Engineer &amp; <br className="hero__br" />
            <span className="hero__title-accent">Full-Stack Developer</span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade" delay={0.5}>
          <p className="hero__subtitle">
            Building scalable web applications, fluid user interfaces, and resilient production architectures that users love and businesses trust.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade" delay={0.7}>
          <div className="hero__actions">
            <a
              href="#projects"
              className="hero__cta hero__cta--primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Selected Works
            </a>
            <button
              type="button"
              onClick={onOpenResume}
              className="hero__cta hero__cta--secondary"
              aria-label="View Resume & Credentials"
            >
              Resume / CV
            </button>
            <a
              href="tel:+2348161237136"
              className="hero__cta hero__cta--call"
              aria-label="Direct Phone Call"
            >
              Call 08161237136
            </a>
            <div className="hero__status">
              <span className="hero__status-dot" />
              <span>Available for hire</span>
            </div>
          </div>

          <div className="hero__metrics">
            <div className="hero__metric-item">
              <span className="hero__metric-number">15+</span>
              <span className="hero__metric-label">Apps Deployed</span>
            </div>
            <div className="hero__metric-divider" />
            <div className="hero__metric-item">
              <span className="hero__metric-number">100%</span>
              <span className="hero__metric-label">Responsive</span>
            </div>
            <div className="hero__metric-divider" />
            <div className="hero__metric-item">
              <span className="hero__metric-number">Next.js &amp; TS</span>
              <span className="hero__metric-label">Core Stack</span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Hero;
