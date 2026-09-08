import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, FiPrinter, FiMail, FiPhone, FiMapPin, FiGithub, 
  FiLinkedin, FiExternalLink, FiCpu, FiCode, FiServer, 
  FiDatabase, FiAward, FiCheckCircle, FiSun, FiMoon 
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const ResumeModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [viewMode, setViewMode] = useState('executive'); // 'executive' | 'ats'

  useEffect(() => {
    if (!isOpen) return;

    // Defer overflow lock to next frame so the click interaction paints immediately (<16ms INP)
    const rafId = requestAnimationFrame(() => {
      document.body.style.overflow = 'hidden';
    });

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(rafId);
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    // Run outside the click event task so the native print dialog never blocks the event handler
    setTimeout(() => {
      window.print();
    }, 150);
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
            <span className="resume-toolbar__badge-text">
              {viewMode === 'executive' ? 'Executive CV Dossier' : 'Classic ATS Paper View'}
            </span>
          </div>

          <div className="resume-toolbar__actions">
            {/* View Mode Switcher */}
            <div className="resume-toolbar__toggle-group">
              <button 
                type="button"
                className={"resume-toolbar__toggle-btn" + (viewMode === 'executive' ? ' active' : '')}
                onClick={() => setViewMode('executive')}
                title="Executive interactive visual dossier"
              >
                <FiMoon className="toggle-icon" />
                <span>Executive</span>
              </button>
              <button 
                type="button"
                className={"resume-toolbar__toggle-btn" + (viewMode === 'ats' ? ' active' : '')}
                onClick={() => setViewMode('ats')}
                title="Classic clean paper layout"
              >
                <FiSun className="toggle-icon" />
                <span>Clean Paper</span>
              </button>
            </div>

            {/* Print / Save to PDF */}
            <button 
              type="button"
              className="resume-toolbar__btn resume-toolbar__btn--primary" 
              onClick={handlePrint} 
              title="Print or Save as Official PDF"
            >
              <FiPrinter />
              <span>Print / PDF</span>
            </button>

            {/* Close */}
            <button 
              type="button"
              className="resume-toolbar__btn resume-toolbar__btn--close" 
              onClick={onClose} 
              aria-label="Close modal"
            >
              <FiX />
            </button>
          </div>
        </motion.div>

        {/* Paper / Dossier Document Container */}
        <motion.div 
          ref={modalRef}
          className={"resume-paper resume-paper--" + viewMode}
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 25 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Banner */}
          <header className="resume-header">
            <div className="resume-header__top">
              <div>
                <div className="resume-header__status-badge">
                  <span className="pulse-dot"></span>
                  <span>AVAILABLE FOR SENIOR &amp; LEAD OPPORTUNITIES</span>
                </div>
                <h1 className="resume-header__name">NATION CHIBUROMA AMADI</h1>
                <p className="resume-header__role">
                  Senior Full-Stack Software Engineer &amp; AI Systems Architect
                </p>
              </div>

              <div className="resume-header__quick-stats">
                <div className="resume-stat-pill">
                  <span className="resume-stat-val">4+</span>
                  <span className="resume-stat-lbl">Years Exp.</span>
                </div>
                <div className="resume-stat-pill">
                  <span className="resume-stat-val">15+</span>
                  <span className="resume-stat-lbl">Deployed Apps</span>
                </div>
                <div className="resume-stat-pill">
                  <span className="resume-stat-val">99.9%</span>
                  <span className="resume-stat-lbl">Prod Uptime</span>
                </div>
              </div>
            </div>

            {/* Executive Bio / Pitch */}
            <p className="resume-header__summary">
              High-impact Software Engineer and Technical Lead with 4+ years of production experience architecting mission-critical web applications, enterprise platforms, and production-grade AI agent pipelines. Deeply versed in modern full-stack architectures (React, Next.js, Node.js, Python, TypeScript) and autonomous LLM integrations. Proven track record of spearheading scalable commercial systems across fintech, energy, and e-commerce that serve thousands of users with resilient cloud infrastructures.
            </p>

            {/* Interactive Contact Matrix */}
            <div className="resume-contact-bar">
              <a href="mailto:chiburomanation6@gmail.com" className="resume-contact-link">
                <FiMail className="icon" /> chiburomanation6@gmail.com
              </a>
              <a href="tel:+2348161237136" className="resume-contact-link">
                <FiPhone className="icon" /> +234 816 123 7136 (Direct Call)
              </a>
              <a href="https://wa.me/2348116079309" target="_blank" rel="noreferrer" className="resume-contact-link resume-contact-link--wa">
                <FaWhatsapp className="icon" /> +234 811 607 9309 (WhatsApp)
              </a>
              <span className="resume-contact-link">
                <FiMapPin className="icon" /> Lagos &amp; Port Harcourt, Nigeria &bull; Remote Worldwide
              </span>
              <a href="https://github.com/NATION-eng" target="_blank" rel="noreferrer" className="resume-contact-link">
                <FiGithub className="icon" /> github.com/NATION-eng
              </a>
              <a href="https://www.linkedin.com/in/chiburoma-nation-752395312" target="_blank" rel="noreferrer" className="resume-contact-link">
                <FiLinkedin className="icon" /> linkedin.com/in/chiburoma-nation-752395312
              </a>
            </div>
          </header>

          {/* Main 2-Column Body Layout */}
          <div className="resume-grid">
            {/* LEFT COLUMN: Skills & Specializations (38%) */}
            <aside className="resume-col-side">
              {/* AI & Machine Learning Superpower */}
              <div className="resume-card resume-card--ai-glow">
                <div className="resume-card__title-row">
                  <FiCpu className="resume-card__icon resume-card__icon--ai" />
                  <h2 className="resume-card__title">AI &amp; Intelligent Systems</h2>
                </div>
                <div className="resume-tag-cloud">
                  <span className="resume-tag resume-tag--highlight">LLM Integrations</span>
                  <span className="resume-tag resume-tag--highlight">RAG Pipelines</span>
                  <span className="resume-tag resume-tag--highlight">Autonomous Agents</span>
                  <span className="resume-tag">OpenAI &amp; Anthropic APIs</span>
                  <span className="resume-tag">LangChain &amp; LlamaIndex</span>
                  <span className="resume-tag">Vector DBs (Chroma/Pinecone)</span>
                  <span className="resume-tag">Structured Tool-Calling</span>
                  <span className="resume-tag">Prompt Engineering</span>
                  <span className="resume-tag">Workflow Automation</span>
                </div>
              </div>

              {/* Full-Stack Competencies */}
              <div className="resume-card">
                <div className="resume-card__title-row">
                  <FiCode className="resume-card__icon" />
                  <h2 className="resume-card__title">Frontend Architecture</h2>
                </div>
                <div className="resume-tag-cloud">
                  <span className="resume-tag resume-tag--accent">React.js</span>
                  <span className="resume-tag resume-tag--accent">Next.js</span>
                  <span className="resume-tag">TypeScript</span>
                  <span className="resume-tag">JavaScript (ES6+)</span>
                  <span className="resume-tag">Tailwind CSS</span>
                  <span className="resume-tag">Framer Motion</span>
                  <span className="resume-tag">Redux Toolkit / Zustand</span>
                  <span className="resume-tag">Mobile-First UI / PWA</span>
                </div>
              </div>

              <div className="resume-card">
                <div className="resume-card__title-row">
                  <FiServer className="resume-card__icon" />
                  <h2 className="resume-card__title">Backend &amp; Cloud Systems</h2>
                </div>
                <div className="resume-tag-cloud">
                  <span className="resume-tag">Node.js</span>
                  <span className="resume-tag">Express.js</span>
                  <span className="resume-tag">Python (FastAPI, Flask)</span>
                  <span className="resume-tag">RESTful APIs</span>
                  <span className="resume-tag">PostgreSQL</span>
                  <span className="resume-tag">Supabase &amp; Firebase</span>
                  <span className="resume-tag">MongoDB &amp; Redis</span>
                  <span className="resume-tag">Docker &amp; CI/CD</span>
                </div>
              </div>

              {/* Education & Credentials */}
              <div className="resume-card">
                <div className="resume-card__title-row">
                  <FiAward className="resume-card__icon" />
                  <h2 className="resume-card__title">Education &amp; Credentials</h2>
                </div>
                <div className="resume-edu-block">
                  <div className="resume-edu-block__header">
                    <h3 className="resume-edu-block__degree">Diploma in Software Engineering</h3>
                    <span className="resume-badge resume-badge--green">Certified</span>
                  </div>
                  <p className="resume-edu-block__school">NIIT (National Institute of Information Technology)</p>
                  <p className="resume-edu-block__note">
                    Rigorous curriculum in software principles, algorithms, full-stack database architectures, and distributed systems.
                  </p>
                </div>
              </div>
            </aside>

            {/* RIGHT COLUMN: Experience & Key Deliverables (62%) */}
            <main className="resume-col-main">
              {/* Professional Experience */}
              <section className="resume-section">
                <div className="resume-section__header">
                  <h2 className="resume-section__title">Professional Experience</h2>
                  <span className="resume-section__line"></span>
                </div>

                {/* Timeline Role 1 */}
                <article className="resume-timeline-item">
                  <div className="resume-timeline-bullet"></div>
                  <div className="resume-timeline-header">
                    <div>
                      <h3 className="resume-timeline-role">Lead Full-Stack Engineer &amp; AI Solutions Architect</h3>
                      <p className="resume-timeline-company">M-CEL TECH &bull; Port Harcourt, Nigeria</p>
                    </div>
                    <span className="resume-timeline-badge">2023 &ndash; Present</span>
                  </div>
                  <ul className="resume-timeline-bullets">
                    <li>
                      Spearheaded architecture, design systems, and deployments of high-impact web portals, client enterprise ecosystems, and automated digital workflows serving multi-tier corporate users.
                    </li>
                    <li>
                      Engineered enterprise AI customer triage and lead qualification workflows using LLM function calling and RAG knowledge-retrieval, reducing client support resolution time by <strong>60%</strong>.
                    </li>
                    <li>
                      Designed robust PostgreSQL and Supabase schemas with optimized compound indexing and caching, cutting critical database query response times by <strong>42%</strong> during heavy traffic spikes.
                    </li>
                    <li>
                      Led cross-functional sprint planning, instituted clean code review standards, and automated deployment pipelines via GitHub Actions and Vercel.
                    </li>
                  </ul>
                  <div className="resume-role-tags">
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Node.js</span>
                    <span>Supabase</span>
                    <span>AI Tool-Calling</span>
                    <span>Tailwind CSS</span>
                  </div>
                </article>

                {/* Timeline Role 2 */}
                <article className="resume-timeline-item">
                  <div className="resume-timeline-bullet"></div>
                  <div className="resume-timeline-header">
                    <div>
                      <h3 className="resume-timeline-role">Full-Stack Software Consultant &amp; System Architect</h3>
                      <p className="resume-timeline-company">Independent Software Consultancy</p>
                    </div>
                    <span className="resume-timeline-badge">2021 &ndash; 2023</span>
                  </div>
                  <ul className="resume-timeline-bullets">
                    <li>
                      Architected <strong>Vaultify</strong>, a digital fintech suite with encrypted user authentication, multi-currency transaction ledgers, and dynamic financial charts.
                    </li>
                    <li>
                      Built <strong>VOLT Energy</strong>, an industrial solar clean-tech portal featuring an interactive PV capacity calculator, quote builder, and commercial proposal engine.
                    </li>
                    <li>
                      Engineered <strong>GreenHarvest Agro</strong>, an e-commerce platform for agricultural distribution with real-time stock sync, cart state persistence, and WhatsApp ordering automation.
                    </li>
                    <li>
                      Delivered bespoke AI integrations including semantic doc search, dynamic prompt engineering chains, and generative customer interaction bots.
                    </li>
                  </ul>
                  <div className="resume-role-tags">
                    <span>Next.js</span>
                    <span>React</span>
                    <span>Python</span>
                    <span>REST APIs</span>
                    <span>FastAPI</span>
                    <span>PostgreSQL</span>
                  </div>
                </article>

                {/* Timeline Role 3 */}
                <article className="resume-timeline-item">
                  <div className="resume-timeline-bullet"></div>
                  <div className="resume-timeline-header">
                    <div>
                      <h3 className="resume-timeline-role">Software Engineering Instructor &amp; Technical Mentor</h3>
                      <p className="resume-timeline-company">M-CEL Tech Academy &bull; Port Harcourt, Nigeria</p>
                    </div>
                    <span className="resume-timeline-badge">2023 &ndash; Present</span>
                  </div>
                  <ul className="resume-timeline-bullets">
                    <li>
                      Authored practical hands-on curricula on modern JavaScript (ES6+), React state architectures, backend RESTful design, and AI-assisted engineering workflows.
                    </li>
                    <li>
                      Mentored 100+ aspiring software engineers from fundamentals to deploying full-stack capstone projects into production.
                    </li>
                  </ul>
                </article>
              </section>

              {/* Selected Production Deliverables */}
              <section className="resume-section">
                <div className="resume-section__header">
                  <h2 className="resume-section__title">Commercial Production Deployments</h2>
                  <span className="resume-section__line"></span>
                </div>

                <div className="resume-projects-grid">
                  <div className="resume-project-card">
                    <div className="resume-project-card__top">
                      <h4 className="resume-project-card__name">Vaultify Fintech Suite</h4>
                      <a href="https://vaultify-rho.vercel.app/" target="_blank" rel="noreferrer" className="resume-project-card__link">
                        Live Demo <FiExternalLink />
                      </a>
                    </div>
                    <p className="resume-project-card__desc">
                      Multi-asset digital banking and asset portfolio dashboard with wallet analytics, transaction monitoring, and secure user flows.
                    </p>
                    <span className="resume-project-card__stack">React &bull; Tailwind CSS &bull; RESTful APIs</span>
                  </div>

                  <div className="resume-project-card">
                    <div className="resume-project-card__top">
                      <h4 className="resume-project-card__name">M-CEL TECH Enterprise</h4>
                      <a href="https://mceltech.com/" target="_blank" rel="noreferrer" className="resume-project-card__link">
                        Live Site <FiExternalLink />
                      </a>
                    </div>
                    <p className="resume-project-card__desc">
                      Flagship digital tech platform with client management systems, interactive consultation booking, and modern branding aesthetics.
                    </p>
                    <span className="resume-project-card__stack">React &bull; TypeScript &bull; Modern CSS &bull; Node</span>
                  </div>

                  <div className="resume-project-card">
                    <div className="resume-project-card__top">
                      <h4 className="resume-project-card__name">VOLT Energy Clean-Tech</h4>
                      <a href="https://voltenergy-nine.vercel.app/" target="_blank" rel="noreferrer" className="resume-project-card__link">
                        Live Site <FiExternalLink />
                      </a>
                    </div>
                    <p className="resume-project-card__desc">
                      Commercial renewable energy portal with interactive solar kilowatt-capacity estimation calculators and automated proposal workflows.
                    </p>
                    <span className="resume-project-card__stack">React &bull; Interactive Calculators &bull; Tailwind</span>
                  </div>

                  <div className="resume-project-card">
                    <div className="resume-project-card__top">
                      <h4 className="resume-project-card__name">GreenHarvest Agro</h4>
                      <a href="https://greenharvest-agro.vercel.app/" target="_blank" rel="noreferrer" className="resume-project-card__link">
                        Live Site <FiExternalLink />
                      </a>
                    </div>
                    <p className="resume-project-card__desc">
                      Agricultural supply chain and direct B2B e-commerce platform with automated catalog updates and instant WhatsApp order routing.
                    </p>
                    <span className="resume-project-card__stack">React &bull; Cart Architecture &bull; WhatsApp API</span>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
