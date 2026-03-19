import AnimateOnScroll from "./AnimateOnScroll";

const ProjectCard = ({ project, index }) => {
  const isReversed = index % 2 !== 0;

  return (
    <AnimateOnScroll variant="fade" delay={0.15}>
      <article className={`project-card ${isReversed ? "project-card--reversed" : ""}`}>
        <div className="project-card__images">
          <img
            src={project.image1}
            alt={`${project.title} screenshot 1`}
            loading="lazy"
            className="project-card__img"
          />
          <img
            src={project.image2}
            alt={`${project.title} screenshot 2`}
            loading="lazy"
            className="project-card__img"
          />
        </div>

        <div className="project-card__content">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__desc">{project.description}</p>
          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-card__tag">{tag}</span>
            ))}
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
          >
            View Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
      </article>
    </AnimateOnScroll>
  );
};

export default ProjectCard;
