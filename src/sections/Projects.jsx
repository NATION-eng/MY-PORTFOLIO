import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import AnimateOnScroll from "../components/AnimateOnScroll";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <AnimateOnScroll variant="fade" delay={0.1}>
        <div className="projects__header">
          <p className="projects__label">Portfolio</p>
          <h2 className="projects__title">Selected Works</h2>
          <p className="projects__subtitle">
            A curated collection of projects I've designed and developed
          </p>
        </div>
      </AnimateOnScroll>

      <div className="projects__grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
