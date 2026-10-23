import { useState } from 'react'

export default function ArticlesView({ onBack, onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [readingArticle, setReadingArticle] = useState(null)

  const articles = [
    {
      id: 'web-interfaces-2026',
      category: 'frontend',
      categoryLabel: 'Frontend Architecture',
      readTime: '5 min read',
      date: 'Oct 2026',
      title: 'Designing High-Impact Web Interfaces in 2026',
      subtitle: 'Moving beyond cookie-cutter templates with glassmorphism, micro-interactions, and deliberate typography.',
      desc: 'Most AI-generated and template-driven websites suffer from homogeny. Here is a practical guide on crafting distinctive, memorable digital experiences using modern CSS tokens, tactile animations, and harmonic dark palettes.',
      tags: ['Frontend', 'UI Design', 'CSS Architecture', 'UX Polish'],
      content: [
        {
          heading: '1. The Problem of Modern Interface Homogeny',
          body: 'As automated starters and standard component kits exploded in popularity, the modern web saw a massive convergence toward identical layouts: generic rounded cards, standard Bootstrap/Tailwind purple-blue buttons, and predictable SaaS landing pages. To build something memorable, an engineer must treat visual craftsmanship with the same rigor as backend scalability.'
        },
        {
          heading: '2. Curated Palettes Over Raw Hex Codes',
          body: 'Never use raw saturated primaries. Tailor your dark mode using deep slate-indigo backgrounds (#090A0F, #12141F) and layer subtle ambient mesh gradients behind your cards. A 1px border with 8% opacity and a backdrop blur of 20px instantly delivers depth without visual clutter.'
        },
        {
          heading: '3. Meaningful Micro-Interactions',
          body: 'Animation should communicate state and delight, not distract. Subtle transforms (translateY(-3px)), button press feedback, smooth caret blinks, and dynamic card expansions create a feeling of tactility that invites users to interact and stay longer.'
        },
        {
          heading: '4. Performance First',
          body: 'Aesthetic richness must not come at the expense of performance. By leveraging CSS native variables and modern browser layout engines rather than massive runtime animation libraries, your bundle stays under 100KB with instantaneous HMR and sub-second load times.'
        }
      ]
    },
    {
      id: 'react-vite-systems',
      category: 'architecture',
      categoryLabel: 'System Architecture',
      readTime: '7 min read',
      date: 'Oct 2026',
      title: 'Building Scalable Fullstack Systems with React 19 & Vite',
      subtitle: 'A pragmatic blueprint for organizing clean modules, state boundaries, and instant developer feedback loops.',
      desc: 'A comprehensive walkthrough of structuring scalable applications from scratch without framework lock-in. Learn how to architect clean view transitions, state synchronization, and zero-headache CI/CD deployments.',
      tags: ['React 19', 'Architecture', 'Vite', 'State Management'],
      content: [
        {
          heading: '1. Module Boundaries and Separation of Concerns',
          body: 'Too many React projects drown in nested prop drilling or over-engineered global stores. By isolating interfaces into self-contained domain components with clear input props and action callbacks, testing and refactoring become seamless.'
        },
        {
          heading: '2. Leveraging React 19 Optimizations',
          body: 'React 19 brings concurrent stability and compiler optimizations. Avoid calling impure functions during renders (like new Date() directly inside JSX), and keep effects purely synchronized with external systems.'
        },
        {
          heading: '3. Blazing Fast Bundling with Vite',
          body: 'Vite transforms modern development with instant ES-module HMR. Ensuring your asset paths and base URLs are configured cleanly for both local preview and production static hosting (like GitHub Pages) is essential.'
        }
      ]
    },
    {
      id: 'why-sahilaevo',
      category: 'personal',
      categoryLabel: 'Personal Reflection',
      readTime: '4 min read',
      date: 'Oct 2026',
      title: 'Why I Created SahilAevo: Building in Public',
      subtitle: 'Carving out an independent digital home for building, writing, and sharing transparent progress in public.',
      desc: 'Reflecting on the decision to build an independent personal corner on the web. Why social media feeds are not enough for long-term compounding knowledge and software experimentation.',
      tags: ['Building in Public', 'Vision', 'Dev Life', 'Milestones'],
      content: [
        {
          heading: '1. The Value of Owned Digital Real Estate',
          body: 'Relying exclusively on third-party platforms means living on rented digital land. Having your own domain, repository, and design space gives you total creative control over how you present your projects and ideas to the world.'
        },
        {
          heading: '2. Documenting the Journey',
          body: 'Whether it is cracking tough coding patterns, preparing for competitive exams like JEE, or shipping fullstack web apps, transparent documentation turns solitary effort into community value.'
        }
      ]
    },
    {
      id: 'eraser-workflow',
      category: 'architecture',
      categoryLabel: 'Workflow & Prototyping',
      readTime: '5 min read',
      date: 'Sep 2026',
      title: 'From Wireframe to Production: The Eraser Workflow',
      subtitle: 'How rapid visual brainstorming and systematic component decomposition accelerate idea-to-ship cycles.',
      desc: 'Examining the workflow of translating low-fidelity wireframes into high-aesthetic production code. How visual clarity eliminates guesswork and speeds up execution tenfold.',
      tags: ['Prototyping', 'Productivity', 'Workflow', 'Design Systems'],
      content: [
        {
          heading: '1. Low-Fidelity First, High-Aesthetic Later',
          body: 'Never jump straight into CSS before having a rock-solid layout mental model. Sketching blocks in a lightweight whiteboard like Eraser allows you to stress-test hierarchy and content flow before writing a single line of code.'
        },
        {
          heading: '2. Translating Shapes into CSS Grids',
          body: 'Once the wireframe is set, mapping containers to CSS Grid and Flexbox with consistent tokenized gaps makes layout assembly predictable and bulletproof across mobile and desktop.'
        }
      ]
    },
    {
      id: 'engineering-stack-principles',
      category: 'personal',
      categoryLabel: 'Developer Life',
      readTime: '5 min read',
      date: 'Sep 2026',
      title: 'My Daily Engineering Stack & Principles',
      subtitle: 'The tools, mindsets, and deliberate routines that keep software development focused, fast, and enjoyable.',
      desc: 'A look behind the scenes at my daily developer toolkit: operating system choices, terminal configurations, IDE customization, and cognitive principles for deep work.',
      tags: ['Productivity', 'Tools', 'Habits', 'Engineering'],
      content: [
        {
          heading: '1. The Minimalist Tool Stack',
          body: 'Fast editors, clean terminals, and minimal distractions. The best toolchain is the one that gets out of your way and lets your thoughts translate directly into working code without latency.'
        },
        {
          heading: '2. Daily Deep Work Blocks',
          body: 'Uninterrupted 90-minute blocks of intense focus accomplish more than 8 hours of fragmented, multi-tasking effort. Protecting focus is an engineer superpower.'
        }
      ]
    },
    {
      id: 'compounding-small-wins',
      category: 'personal',
      categoryLabel: 'Growth Milestone',
      readTime: '4 min read',
      date: 'Aug 2026',
      title: 'Compounding Small Wins in Software Engineering',
      subtitle: 'Why everyday 1% improvements in code quality and design thinking outshine sporadic bursts of effort.',
      desc: 'How steady incremental progress in understanding algorithms, system abstractions, and UI polish compounds over months into undeniable software engineering milestones.',
      tags: ['Growth', 'Consistency', 'Mindset', 'Compounding'],
      content: [
        {
          heading: '1. The Math of Consistency',
          body: 'Improving by 1% every day makes you 37 times better over a year. Small habits like refactoring one messy function, reading one technical paper, or analyzing one bug notebook entry build immense momentum.'
        },
        {
          heading: '2. Embracing the Marathon',
          body: 'Technology moves fast, but foundational principles—data structures, networking, clean UI hierarchy, and empathetic communication—remain timeless.'
        }
      ]
    }
  ]

  const filteredArticles = activeFilter === 'all'
    ? articles
    : articles.filter((a) => a.category === activeFilter)

  return (
    <div className="interface-view articles-view">
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
          <span className="crumb-current">Articles & Blogs</span>
        </div>

        <div className="quick-category-tabs">
          <button onClick={() => onNavigate('projects')} className="quick-tab">Projects</button>
          <button onClick={() => onNavigate('jee_guidance')} className="quick-tab">JEE Guidance</button>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="interface-hero">
        <div className="hero-pill-tag">
          <span>📄</span>
          <span>Writings & Insights</span>
        </div>
        <h1 className="interface-title">Articles & Developer Blogs</h1>
        <p className="interface-subtitle">
          In-depth technical guides, software architecture blueprints, and personal developer reflections on building in public.
        </p>

        {/* Filter Chips */}
        <div className="filter-chips">
          <button
            className={`filter-chip ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Posts ({articles.length})
          </button>
          <button
            className={`filter-chip ${activeFilter === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveFilter('frontend')}
          >
            Frontend & UI (1)
          </button>
          <button
            className={`filter-chip ${activeFilter === 'architecture' ? 'active' : ''}`}
            onClick={() => setActiveFilter('architecture')}
          >
            Architecture (2)
          </button>
          <button
            className={`filter-chip ${activeFilter === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveFilter('personal')}
          >
            Personal & Life (3)
          </button>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="articles-grid">
        {filteredArticles.map((article) => (
          <article key={article.id} className="article-card">
            <div className="article-card-header">
              <span className="article-category-badge">{article.categoryLabel}</span>
              <div className="article-meta">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>

            <h2 className="article-title">{article.title}</h2>
            <p className="article-subtitle-text">{article.subtitle}</p>
            <p className="article-desc">{article.desc}</p>

            <div className="article-tags">
              {article.tags.map((t, idx) => (
                <span key={idx} className="tag-pill">#{t}</span>
              ))}
            </div>

            <div className="article-card-footer">
              <button
                className="read-article-btn"
                onClick={() => setReadingArticle(article)}
              >
                <span>Read Full Article</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Full Article Reader Modal */}
      {readingArticle && (
        <div className="article-modal-backdrop" onClick={() => setReadingArticle(null)}>
          <div className="article-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-badge-row">
                <span className="modal-category">{readingArticle.categoryLabel}</span>
                <span className="modal-read-time">{readingArticle.readTime}</span>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setReadingArticle(null)}
                aria-label="Close article"
              >
                ✕
              </button>
            </div>

            <h1 className="modal-title">{readingArticle.title}</h1>
            <p className="modal-subtitle">{readingArticle.subtitle}</p>
            <div className="modal-author-bar">
              <span>By SahilAevo</span>
              <span>•</span>
              <span>Published {readingArticle.date}</span>
            </div>

            <div className="modal-body">
              {readingArticle.content.map((sec, idx) => (
                <section key={idx} className="article-section">
                  <h2>{sec.heading}</h2>
                  <p>{sec.body}</p>
                </section>
              ))}
            </div>

            <div className="modal-footer">
              <button
                className="modal-done-btn"
                onClick={() => setReadingArticle(null)}
              >
                Close & Return to Articles
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
