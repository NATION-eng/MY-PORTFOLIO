import AnimateOnScroll from "../components/AnimateOnScroll";

const About = () => {
  return (
    <section className="about" id="about">
      <AnimateOnScroll variant="fade" delay={0.1}>
        <div className="about__header">
          <p className="about__label">About</p>
          <h2 className="about__title">Behind the Pixels</h2>
          <p className="about__subtitle">A quick peek into my world</p>
        </div>
      </AnimateOnScroll>

      <div className="about__grid">
        <AnimateOnScroll variant="slide" delay={0.2} className="about__images">
          <div className="about__img-stack">
            <img
              src="/Images/me.jpeg"
              alt="Nation Chiburoma Amadi"
              className="about__img about__img--main"
              loading="lazy"
            />
            <img
              src="/Images/enugu.jpeg"
              alt="Enugu landscape"
              className="about__img about__img--secondary"
              loading="lazy"
            />
          </div>
          <img
            src="/Images/bayelsa.jpeg"
            alt="Bayelsa landscape"
            className="about__img about__img--tertiary"
            loading="lazy"
          />
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade" delay={0.3} className="about__content">
          <p>
            I'm a passionate Software Engineer, Full-Stack Developer, AI Architect,
            and AI Integration Specialist from Rivers State, Nigeria. Born
            in Port Harcourt, I developed an early fascination with technology
            — how systems interact, what makes them tick. That curiosity evolved
            into architecting distributed web platforms and intelligent autonomous AI pipelines.
          </p>
          <p>
            I specialize in turning ambitious ideas into reality — engineering
            production-grade applications with modern full-stack architectures (React, Next.js, Node.js, Python)
            and integrating cutting-edge LLMs, autonomous agents, and RAG workflows.
          </p>
          <p>
            Creativity has always been my escape — first through drawing, now
            through design and development. When I'm not coding, you'll find
            me discovering hidden food spots, exploring new places, or gaming.
          </p>
          <p className="about__philosophy">
            I believe great software is built at the intersection of
            empathy, craft, and relentless curiosity.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default About;
