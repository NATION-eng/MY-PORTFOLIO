import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiPrinter, FiMail, FiPhone, FiMapPin, FiGithub } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const ResumeModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="resume-backdrop" onClick={onClose}>
        {/* Floating Top Control Bar */}
        <motion.div 
          className="resume-toolbar"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="resume-toolbar__badge">
            <span className="pulse-dot"></span>
            ATS-Optimized &amp; Verified
          </div>
          <div className="resume-toolbar__actions">
            <button className="resume-toolbar__btn resume-toolbar__btn--primary" onClick={handlePrint} title="Print or Save as PDF">
              <FiPrinter />
              <span>Print / Save PDF</span>
            </button>
            <button className="resume-toolbar__btn resume-toolbar__btn--close" onClick={onClose} aria-label="Close modal">
              <FiX />
            </button>
          </div>
        </motion.div>

        {/* Paper Document Container */}
        <motion.div 
          ref={modalRef}
          className="resume-paper"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <header className="resume-doc__header">
            <div className="resume-doc__header-left">
              <h1 className="resume-doc__name">CHINONSO NATION</h1>
              <p className="resume-doc__title">Full-Stack Software Engineer &amp; AI Integration Specialist</p>
              <p className="resume-doc__summary">
                Results-driven Software Engineer with 4+ years of hands-on experience architecting and shipping mission-critical web applications, enterprise digital platforms, and production AI workflows. Deeply proficient in React, Node.js, Python, TypeScript, and modern Cloud Infrastructure. Proven record of delivering commercial software for fintech, energy, e-commerce, and education sectors, serving thousands of active users with 99.9% uptime.
              </p>
            </div>
            <div className="resume-doc__contact-list">
              <a href="mailto:chinonsonwaigwe46@gmail.com" className="resume-doc__contact-item">
                <FiMail /> chinonsonwaigwe46@gmail.com
              </a>
              <a href="tel:+2348161237136" className="resume-doc__contact-item">
                <FiPhone /> +234 816 123 7136
              </a>
              <a href="https://wa.me/2348116079309" target="_blank" rel="noreferrer" className="resume-doc__contact-item">
                <FaWhatsapp /> +234 811 607 9309 (WhatsApp)
              </a>
              <span className="resume-doc__contact-item">
                <FiMapPin /> Lagos, Nigeria (Available Globally / Remote)
              </span>
              <a href="https://github.com/NATION-eng" target="_blank" rel="noreferrer" className="resume-doc__contact-item">
                <FiGithub /> github.com/NATION-eng
              </a>
            </div>
          </header>

          {/* Core Technical Competencies */}
          <section className="resume-doc__section">
            <h2 className="resume-doc__heading">Core Technical Competencies</h2>
            <div className="resume-doc__skills-grid">
              <div className="resume-doc__skill-category">
                <strong>AI &amp; Machine Learning Integration:</strong>
                <span> LLM Integration (OpenAI, Anthropic, Gemini, DeepSeek), RAG Pipelines (Retrieval-Augmented Generation), Vector Databases (Pinecone, ChromaDB), LangChain, LlamaIndex, Autonomous Agent Workflows, Prompt Engineering, Structured Tool-Calling, AI Automation &amp; Fine-Tuning.</span>
              </div>
              <div className="resume-doc__skill-category">
                <strong>Frontend Architecture:</strong>
                <span> React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Framer Motion, HTML5/CSS3, State Management (Redux Toolkit, Zustand, Context API), Responsive &amp; Mobile-First Web Architecture, PWA.</span>
              </div>
              <div className="resume-doc__skill-category">
                <strong>Backend &amp; API Development:</strong>
                <span> Node.js, Express.js, Python (FastAPI, Flask), RESTful API Engineering, GraphQL, Microservices, Authentication (JWT, OAuth2), WebSockets, Serverless Functions.</span>
              </div>
              <div className="resume-doc__skill-category">
                <strong>Databases &amp; Cloud DevOps:</strong>
                <span> PostgreSQL, MongoDB, MySQL, Redis, Supabase, Firebase, Docker, Git/GitHub, CI/CD Pipelines, Vercel, AWS (S3, EC2), Linux Server Administration, Performance Optimization.</span>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="resume-doc__section">
            <h2 className="resume-doc__heading">Professional Experience</h2>

            {/* Role 1 */}
            <div className="resume-doc__job">
              <div className="resume-doc__job-header">
                <div>
                  <h3 className="resume-doc__job-role">Lead Full-Stack Software Engineer &amp; AI Solutions Architect</h3>
                  <span className="resume-doc__job-company">M-CEL TECH &bull; Lagos, Nigeria</span>
                </div>
                <span className="resume-doc__job-date">2023 &ndash; Present</span>
              </div>
              <ul className="resume-doc__job-bullets">
                <li>Spearheaded end-to-end architecture and deployment of enterprise client portals, high-throughput e-commerce engines, and corporate digital ecosystems using React, TypeScript, and Node.js.</li>
                <li>Engineered custom AI automation pipelines and smart business agents for enterprise clients, cutting manual support triage time by 60% and enabling automated multi-channel lead enrichment.</li>
                <li>Implemented scalable PostgreSQL &amp; Supabase database architectures with optimized indexing, reducing database query latencies by 42% on peak traffic spikes.</li>
                <li>Mentored junior engineers and led agile development sprints, instituting code review standards, CI/CD automation, and modern component design patterns.</li>
              </ul>
            </div>

            {/* Role 2 */}
            <div className="resume-doc__job">
              <div className="resume-doc__job-header">
                <div>
                  <h3 className="resume-doc__job-role">Full-Stack Engineer (Contract / Engineering Lead)</h3>
                  <span className="resume-doc__job-company">Independent Software Consultancy</span>
                </div>
                <span className="resume-doc__job-date">2021 &ndash; 2023</span>
              </div>
              <ul className="resume-doc__job-bullets">
                <li>Architected <strong>Vaultify</strong>, a modern fintech banking and asset-management portal with secure authentication, multi-currency wallets, and transactional audit logging.</li>
                <li>Designed and deployed <strong>VOLT Energy</strong>, a clean-tech solar enterprise platform featuring real-time solar ROI calculators and multi-tier commercial proposal generators.</li>
                <li>Built <strong>GreenHarvest Agro</strong>, an e-commerce platform connecting agricultural producers with direct B2B purchasers, featuring real-time inventory tracking and order fulfillment.</li>
                <li>Created custom LLM-powered interactive tools, knowledge-base bots, and semantic search interfaces integrating OpenAI &amp; Claude APIs with local caching.</li>
              </ul>
            </div>

            {/* Role 3 */}
            <div className="resume-doc__job">
              <div className="resume-doc__job-header">
                <div>
                  <h3 className="resume-doc__job-role">Software Engineering Instructor &amp; Technical Mentor</h3>
                  <span className="resume-doc__job-company">M-CEL Tech Academy</span>
                </div>
                <span className="resume-doc__job-date">2022 &ndash; 2024</span>
              </div>
              <ul className="resume-doc__job-bullets">
                <li>Designed comprehensive hands-on curriculum covering modern JavaScript, React.js, backend web servers, database modeling, and AI-assisted programming workflows.</li>
                <li>Trained and mentored 100+ aspiring software developers, leading practical production capstone projects and conducting technical code reviews.</li>
              </ul>
            </div>
          </section>

          {/* Featured Key Projects */}
          <section className="resume-doc__section">
            <h2 className="resume-doc__heading">Selected Featured Production Projects</h2>
            <div className="resume-doc__projects-grid">
              <div className="resume-doc__project-item">
                <div className="resume-doc__project-title">
                  <strong>Vaultify</strong> &ndash; Fintech Digital Banking Suite
                </div>
                <p className="resume-doc__project-desc">
                  Engineered a secure financial management web platform featuring multi-asset accounts, dynamic currency conversions, role-based access control, and transaction telemetry. Built with React, Tailwind CSS, and RESTful APIs.
                </p>
              </div>

              <div className="resume-doc__project-item">
                <div className="resume-doc__project-title">
                  <strong>M-CEL TECH Enterprise Portal</strong>
                </div>
                <p className="resume-doc__project-desc">
                  Corporate technology ecosystem showcasing software solutions, client management, and automated consultation scheduling with real-time analytics. Deployed to production at mceltech.com.
                </p>
              </div>

              <div className="resume-doc__project-item">
                <div className="resume-doc__project-title">
                  <strong>VOLT Energy Platform</strong>
                </div>
                <p className="resume-doc__project-desc">
                  Commercial renewable energy portal with interactive solar kilowatt-capacity estimation calculators, commercial project showcases, and automated RFQ workflows.
                </p>
              </div>

              <div className="resume-doc__project-item">
                <div className="resume-doc__project-title">
                  <strong>Production AI Agents &amp; Semantic Tools</strong>
                </div>
                <p className="resume-doc__project-desc">
                  Engineered end-to-end LLM tool-calling systems, dynamic prompt chains, and automated workflow orchestrations using LangChain, OpenAI APIs, and modern serverless runtimes.
                </p>
              </div>
            </div>
          </section>

          {/* Education & Credentials */}
          <section className="resume-doc__section">
            <h2 className="resume-doc__heading">Education &amp; Credentials</h2>
            <div className="resume-doc__edu-row">
              <div>
                <strong>Diploma in Software Engineering</strong> &bull; NIIT (National Institute of Information Technology)
              </div>
              <span className="resume-doc__edu-status">Certified</span>
            </div>
            <div className="resume-doc__edu-row" style={{ marginTop: '0.4rem' }}>
              <div>
                <strong>Continuous Professional Specialization:</strong> Full-Stack React Architecture, Advanced Node.js, AI Agent Engineering &amp; Modern Cloud Systems.
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
