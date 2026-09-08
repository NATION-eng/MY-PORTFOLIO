import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiSupabase,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#38BDF8" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Node.js", icon: SiNodedotjs, color: "#4ADE80" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#60A5FA" },
  { name: "Supabase", icon: SiSupabase, color: "#34D399" },
  { name: "Git & GitHub", icon: SiGit, color: "#F87171" },
];

const TechMarquee = () => {
  const doubled = [...techStack, ...techStack, ...techStack];

  return (
    <section className="marquee" aria-label="Core Technologies I Build With">
      <div className="marquee__track">
        {doubled.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <div className="marquee__item" key={i}>
              <div className="marquee__icon-box" style={{ color: tech.color }}>
                <Icon size={36} />
              </div>
              <span className="marquee__label">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechMarquee;
