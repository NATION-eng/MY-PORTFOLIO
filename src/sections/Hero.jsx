import AnimateOnScroll from "../components/AnimateOnScroll";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <AnimateOnScroll variant="bounce" delay={0.1}>
          <p className="hero__greeting">Hi, I'm Nation Chiburoma</p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade" delay={0.3}>
          <h1 className="hero__title">
            <span className="hero__title-accent">Software</span> &{" "}
            <br className="hero__br" />
            Front-End Developer <br />
            you can <span className="hero__title-accent">Rely</span> on
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade" delay={0.5}>
          <p className="hero__subtitle">
            I turn complex ideas into experiences users love and investors trust.
            <span className="hero__subtitle-extended">
              {" "}I help early-stage startups, founders, and SaaS teams craft
              story-driven brands and products.
            </span>
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
            <a
              href="tel:+2348161237136"
              className="hero__cta hero__cta--secondary"
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
