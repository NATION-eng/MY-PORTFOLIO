import React from "react";
import {
  SiOpenai,
  SiAnthropic,
  SiGooglegemini,
  SiLangchain,
  SiHuggingface,
  SiPytorch,
  SiTensorflow,
  SiOllama,
  SiPython,
  SiFastapi,
  SiStreamlit,
  SiNvidia,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiRedis,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiVercel,
  SiGithubactions,
  SiGit,
  SiFigma,
} from "react-icons/si";

// Track 1: AI Models, Intelligent Frameworks & Machine Learning
const aiStack = [
  { name: "OpenAI / GPT-4o", icon: SiOpenai, color: "#10A37F" },
  { name: "Anthropic Claude", icon: SiAnthropic, color: "#D97757" },
  { name: "Google Gemini", icon: SiGooglegemini, color: "#93C5FD" },
  { name: "LangChain Agents", icon: SiLangchain, color: "#2DD4BF" },
  { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "Ollama (Local LLMs)", icon: SiOllama, color: "#F1F5F9" },
  { name: "Python", icon: SiPython, color: "#38BDF8" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
  { name: "NVIDIA CUDA", icon: SiNvidia, color: "#76B900" },
];

// Track 2: Full-Stack Architecture, Cloud, DevOps & Distributed Systems
const platformStack = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Node.js", icon: SiNodedotjs, color: "#4ADE80" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#60A5FA" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Redis Cache", icon: SiRedis, color: "#FF4438" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "AWS Cloud", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "Vercel Edge", icon: SiVercel, color: "#F8FAFC" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#60A5FA" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Figma", icon: SiFigma, color: "#A855F7" },
];

const TechMarquee = () => {
  const doubledAI = [...aiStack, ...aiStack, ...aiStack];
  const doubledPlatform = [...platformStack, ...platformStack, ...platformStack];

  return (
    <section className="marquee-section" aria-label="AI Models, Tools, and Engineering Platforms">
      <div className="marquee-header">
        <span className="marquee-header__pill">TECHNICAL ARSENAL</span>
        <h3 className="marquee-header__title">AI Models, Modern Frameworks &amp; Cloud Infrastructure</h3>
      </div>

      <div className="marquee-container">
        {/* Track 1: AI & Intelligent Agents (Scrolls Left) */}
        <div className="marquee marquee--ai">
          <div className="marquee__track marquee__track--left">
            {doubledAI.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div className="marquee__item" key={"ai-" + i}>
                  <div className="marquee__icon-box" style={{ color: tech.color }}>
                    <Icon size={30} />
                  </div>
                  <span className="marquee__label">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Track 2: Full-Stack & Cloud Platforms (Scrolls Right) */}
        <div className="marquee marquee--platforms">
          <div className="marquee__track marquee__track--right">
            {doubledPlatform.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div className="marquee__item" key={"plat-" + i}>
                  <div className="marquee__icon-box" style={{ color: tech.color }}>
                    <Icon size={30} />
                  </div>
                  <span className="marquee__label">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(TechMarquee);
