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
            <a href="#contact" className="hero__cta" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
              Hire Me
            </a>
            <div className="hero__status">
              <span className="hero__status-dot" />
              Available for work
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Hero;
