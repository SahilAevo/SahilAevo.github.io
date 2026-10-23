import { useState } from 'react'

export default function ProjectsView({ onBack, onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 'upsc',
      category: 'web',
      categoryLabel: 'Fullstack Web App',
      status: 'Live & Active',
      title: 'UPSC Civil Services Preparation Hub',
      desc: 'An end-to-end learning platform engineered for civil services aspirants. Features timed mock tests with percentile analytics, syllabus milestone tracking, and categorized high-yield study resources.',
      tech: ['React 19', 'Vite', 'Node.js', 'Express', 'Chart.js', 'Modular CSS'],
      highlights: [
        'Real-time exam simulation with sectional countdown timer',
        'Detailed answer analysis & negative marking tracker',
        'Custom syllabus checklist with persistent local state'
      ],
      links: {
        github: 'https://github.com/dilkhushjha769/UPSC-Website',
        demo: '#'
      }
    },
    {
      id: 'sahilaevo',
      category: 'web',
      categoryLabel: 'Portfolio & Ecosystem',
      status: 'Continuous Deployment',
      title: 'SahilAevo Creative Ecosystem',
      desc: 'Personal portfolio, technical article repository, and mentorship hub built with glassmorphic aesthetics, zero runtime CSS bloat, and sub-300ms bundle builds.',
      tech: ['React 19', 'Vite', 'Modern CSS Tokens', 'GitHub Actions', 'HMR'],
      highlights: [
        'Dynamic typewriter subtitle engine with zero layout shifts',
        'Multi-interface navigation with instant state-driven views',
        'Automated CI/CD pipeline deploying directly to GitHub Pages'
      ],
      links: {
        github: 'https://github.com/SahilAevo/SahilAevo.github.io',
        demo: 'https://sahilaevo.github.io/'
      }
    },
    {
      id: 'doc-ai',
      category: 'systems',
      categoryLabel: 'Systems & AI Pipeline',
      status: 'Research Pipeline',
      title: 'Intelligent Knowledge Extractor',
      desc: 'Automated document ingestion system that parses complex multi-column academic textbooks, exam syllabus blueprints, and notes into structured, searchable markdown.',
      tech: ['Python 3.12', 'PyPDF', 'Regex Parsers', 'Vector Embeddings', 'LLM Chains'],
      highlights: [
        'Extracts formulas, diagrams, and summary callouts automatically',
        'Generates automated flashcards and chapter key-takeaways',
        'High-throughput batch processing for large PDF libraries'
      ],
      links: {
        github: 'https://github.com/sahilaevo',
        demo: '#'
      }
    },
    {
      id: 'jan-sathi',
      category: 'tools',
      categoryLabel: 'Civic Utility Tool',
      status: 'Prototype',
      title: 'Jan Sathi Citizen Assistance Guide',
      desc: 'A user-centric guided navigation tool designed to assist citizens in discovering eligible government initiatives, documentation checklists, and application steps.',
      tech: ['JavaScript', 'HTML5 Semantic UI', 'Schema Validation', 'Offline Storage'],
      highlights: [
        'Step-by-step eligibility wizard tailored to applicant criteria',
        'Document verification checklist with download-ready summaries',
        'Accessible, high-contrast UI designed for all demographics'
      ],
      links: {
        github: 'https://github.com/sahilaevo',
        demo: '#'
      }
    }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="interface-view projects-view">
      {/* Top Interface Nav */}
      <div className="interface-nav">
        <button onClick={onBack} className="back-btn" aria-label="Back to overview">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to Hub</span>
        </button>

        <div className="interface-breadcrumbs">
          <span className="crumb-root" onClick={onBack}>SahilAevo</span>
          <span className="crumb-sep">/</span>
          <span className="crumb-current">Projects</span>
        </div>

        <div className="quick-category-tabs">
          <button onClick={() => onNavigate('articles_blogs')} className="quick-tab">Articles & Blogs</button>
          <button onClick={() => onNavigate('jee_guidance')} className="quick-tab">JEE Guidance</button>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="interface-hero">
        <div className="hero-pill-tag">
          <span>💻</span>
          <span>Engineering Showcase</span>
        </div>
        <h1 className="interface-title">Featured Projects & Builds</h1>
        <p className="interface-subtitle">
          Fullstack web applications, tools, and technical architectures built with passion, precision, and modern web standards.
        </p>

        {/* Filter Chips */}
        <div className="filter-chips">
          <button
            className={`filter-chip ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects ({projects.length})
          </button>
          <button
            className={`filter-chip ${activeFilter === 'web' ? 'active' : ''}`}
            onClick={() => setActiveFilter('web')}
          >
            Web Apps (2)
          </button>
          <button
            className={`filter-chip ${activeFilter === 'systems' ? 'active' : ''}`}
            onClick={() => setActiveFilter('systems')}
          >
            AI & Systems (1)
          </button>
          <button
            className={`filter-chip ${activeFilter === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveFilter('tools')}
          >
            Tools & Prototypes (1)
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-card-header">
              <span className="project-category-badge">{project.categoryLabel}</span>
              <span className="project-status-badge">{project.status}</span>
            </div>

            <h2 className="project-title">{project.title}</h2>
            <p className="project-desc">{project.desc}</p>

            <div className="project-highlights">
              <div className="highlights-title">Key Highlights:</div>
              <ul>
                {project.highlights.map((h, idx) => (
                  <li key={idx}>
                    <span className="bullet-check">✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-tech-stack">
              {project.tech.map((t, idx) => (
                <span key={idx} className="tech-badge">{t}</span>
              ))}
            </div>

            <div className="project-card-footer">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-btn secondary"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>Source Code</span>
              </a>

              {project.links.demo !== '#' && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-btn primary"
                >
                  <span>Live Preview</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
