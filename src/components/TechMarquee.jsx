const techLogos = [
  { src: "/Images/react.png", alt: "React" },
  { src: "/Images/htmlp.png", alt: "HTML5" },
  { src: "/Images/cssp.png", alt: "CSS3" },
  { src: "/Images/twind.png", alt: "Tailwind CSS" },
  { src: "/Images/bstrap.png", alt: "Bootstrap" },
];

const TechMarquee = () => {
  // Duplicate the logos for seamless infinite scroll
  const doubled = [...techLogos, ...techLogos];

  return (
    <section className="marquee" aria-label="Technologies I work with">
      <div className="marquee__track">
        {doubled.map((logo, i) => (
          <div className="marquee__item" key={i}>
            <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              width="60"
              height="60"
            />
            <span className="marquee__label">{logo.alt}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechMarquee;
