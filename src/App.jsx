import { useState, useEffect } from 'react'
import profilephoto from './assets/profilephoto.jpeg'
import './App.css'

const CURRENT_YEAR = 2026
const EMAIL_ADDRESS = 'sahilaevo@gmail.com'

const TYPEWRITER_PHRASES = [
  "Projects, Articles, Blogs, and many more. Let's learn together!",
  "Exploring startups, Social Research and creative tools.",
  "JEE Mains & Advanced mentorship.",
  "Open for collaborations and building impactful ideas."
]

export default function App() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [quickMessage, setQuickMessage] = useState('')
  const [messageSent, setMessageSent] = useState(false)

  // Typewriter effect state: types letter-by-letter, then erases in one go and types the next
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex]

    // Once fully typed, pause to read, then erase in one go and advance to next phrase
    if (displayedText === currentPhrase) {
      const pauseTimer = setTimeout(() => {
        setDisplayedText('')
        setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length)
      }, 2200)
      return () => clearTimeout(pauseTimer)
    }

    // Brief natural pause before typing the first letter of a new phrase
    const typingDelay = displayedText === '' ? 350 : 55

    const timer = setTimeout(() => {
      setDisplayedText(currentPhrase.substring(0, displayedText.length + 1))
    }, typingDelay)

    return () => clearTimeout(timer)
  }, [displayedText, phraseIndex])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2200)
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!quickMessage.trim()) return
    const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=Message%20from%20Portfolio&body=${encodeURIComponent(quickMessage)}`
    window.location.href = mailtoUrl
    setMessageSent(true)
    setTimeout(() => {
      setMessageSent(false)
      setQuickMessage('')
    }, 3000)
  }

  const toggleCategory = (cat) => {
    setActiveCategory(activeCategory === cat ? null : cat)
  }

  const showcaseData = {
    projects: {
      title: 'Featured Projects',
      items: [
        {
          badge: 'Live Platform',
          title: 'UPSC Preparation Hub',
          desc: 'Comprehensive civil services learning portal featuring interactive mock test analytics, syllabus tracking, and curated study modules.',
          tags: ['React', 'Vite', 'Node.js', 'Modular CSS']
        },
        {
          badge: 'Creative Portfolio',
          title: 'SahilAevo Ecosystem',
          desc: 'High-performance personal creative hub with interactive showcase drawers, micro-interactions, and modern glassmorphic aesthetics.',
          tags: ['React 19', 'Glassmorphism', 'HMR', 'UI/UX']
        },
        {
          badge: 'AI Pipeline',
          title: 'Intelligent Knowledge Extractor',
          desc: 'Automated document ingestion and preprocessing pipeline designed for rapid research synthesis and study summaries.',
          tags: ['Python', 'Document Parsing', 'Automation']
        }
      ]
    },
    articles_blogs: {
      title: 'Articles & Blogs',
      items: [
        {
          badge: 'Technical Article',
          title: 'Designing High-Impact Web Interfaces in 2026',
          desc: 'Moving beyond generic templates: crafting memorable digital experiences with modern CSS architecture and subtle micro-interactions.',
          tags: ['Frontend', 'UI Design', 'CSS Architecture']
        },
        {
          badge: 'System Architecture',
          title: 'Building Scalable Fullstack Systems with React',
          desc: 'A pragmatic blueprint for organizing clean modules, state boundaries, and lightning-fast developer feedback loops.',
          tags: ['React', 'Architecture', 'Performance']
        },
        {
          badge: 'Personal Reflection',
          title: 'Why I Created SahilAevo',
          desc: 'Carving out an independent digital home for building, writing, and sharing transparent progress in public.',
          tags: ['Journey', 'Building in Public', 'Vision']
        },
        {
          badge: 'Workflow & Prototyping',
          title: 'From Wireframe to Production: The Eraser Workflow',
          desc: 'How visual brainstorming and systematic component decomposition accelerate idea-to-ship cycles.',
          tags: ['Workflow', 'Prototyping', 'Productivity']
        },
        {
          badge: 'Developer Life',
          title: 'Daily Engineering Stack & Principles',
          desc: 'The tools, mindsets, and deliberate routines that keep software development focused, fast, and enjoyable.',
          tags: ['Tools', 'Habits', 'Productivity']
        },
        {
          badge: 'Growth Milestone',
          title: 'Compounding Small Wins in Tech',
          desc: 'Why everyday 1% improvements in code quality and design thinking outshine sporadic bursts of effort.',
          tags: ['Growth', 'Consistency', 'Engineering']
        }
      ]
    },
    jee_guidance: {
      title: 'JEE Mains and Guidance',
      items: [
        {
          badge: 'Faculty & Mentors',
          title: 'Teacher Guidance — Whom to Study From',
          desc: 'Subject-wise top mentor recommendations: Physics (conceptual depth and visual mechanics intuition), Physical/Organic/Inorganic Chemistry (mechanisms and NCERT line-by-line mastery), and Mathematics (rigorous problem solving and speed shortcuts).',
          tags: ['Physics Mentors', 'Chemistry Faculties', 'Math Strategists', 'Online Lectures']
        },
        {
          badge: 'Standard Material',
          title: 'Books & Resources Guidance',
          desc: 'Strictly prioritized textbook stack: NCERT Chemistry (Inorganic line-by-line Bible), Concepts of Physics (H.C. Verma) & Irodov for selective problem sets, M.S. Chouhan for Organic Chemistry, and 45-Year Chapter-wise PYQ Archives.',
          tags: ['NCERT Line-by-Line', 'HCV & Irodov', 'M.S. Chouhan', '45-Year PYQs']
        },
        {
          badge: 'Strategy & Analysis',
          title: 'Mock Test Approach & Paper Solving Strategy',
          desc: 'The 3-Round test-taking methodology: Round 1 (Fast direct hits in 45 mins), Round 2 (Moderate questions in 60 mins), and Round 3 (Challenging multi-concept problems). Mandatory 2-hour error notebook analysis after every test to eliminate negative marking.',
          tags: ['3-Round Strategy', 'Error Notebook', 'Time Allocation', 'Negative Marking Control']
        }
      ]
    }
  }

  return (
    <div className="page-wrapper">
      {/* Top Navbar */}
      <header className="top-nav">
        <div className="brand-badge">
          <span className="brand-icon">⚡</span>
          <span>SahilAevo!</span>
        </div>
        <div className="nav-tagline">Projects, Writings & JEE Guidance</div>
      </header>

      {/* Main Card (Hero + Explore) */}
      <main className="main-card">
        {/* Profile Avatar without online badge */}
        <div className="avatar-container">
          <div className="avatar-ring">
            <img
              src={profilephoto}
              alt="Sahil Profile"
              className="profile-img"
              width="140"
              height="140"
            />
          </div>
        </div>

        {/* Identity & Subtitle */}
        <div className="hero-info-box">
          <h1 className="hero-title">SahilAevo!</h1>
          <p className="hero-tagline typewriter-tagline">
            <span className="typewriter-text">{displayedText}</span>
            <span className="typewriter-cursor">|</span>
          </p>
        </div>

        {/* Explore Badge */}
        <div className="explore-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
          </svg>
          Explore
        </div>

        {/* 3 Categories Grid: Projects | Articles & Blogs | JEE Mains&Advanced Guidance */}
        <div className="cards-grid">
          {/* Card 1: Projects */}
          <div
            className={`explore-card ${activeCategory === 'projects' ? 'active' : ''}`}
            onClick={() => toggleCategory('projects')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleCategory('projects')}
          >
            <div className="card-icon-wrap">💻</div>
            <h2 className="card-title">Projects</h2>
            <p className="card-desc">Fullstack web applications, tools, and technical creations.</p>
            <span className="card-pill">
              {activeCategory === 'projects' ? 'Hide Details ▲' : '3 Featured • View Details ▼'}
            </span>
          </div>

          {/* Card 2: Articles & Blogs (Merged) */}
          <div
            className={`explore-card ${activeCategory === 'articles_blogs' ? 'active' : ''}`}
            onClick={() => toggleCategory('articles_blogs')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleCategory('articles_blogs')}
          >
            <div className="card-icon-wrap">📄</div>
            <h2 className="card-title">Articles & Blogs</h2>
            <p className="card-desc">In-depth technical guides, engineering reflections, and dev logs.</p>
            <span className="card-pill">
              {activeCategory === 'articles_blogs' ? 'Hide Details ▲' : '6 Posts • View Details ▼'}
            </span>
          </div>

          {/* Card 3: JEE Mains and Guidance */}
          <div
            className={`explore-card ${activeCategory === 'jee_guidance' ? 'active' : ''}`}
            onClick={() => toggleCategory('jee_guidance')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleCategory('jee_guidance')}
          >
            <div className="card-icon-wrap">🎯</div>
            <h2 className="card-title">JEE Mains&Advanced Guidance</h2>
            <p className="card-desc">Teacher recommendations, curated books, and mock test strategy.</p>
            <span className="card-pill">
              {activeCategory === 'jee_guidance' ? 'Hide Details ▲' : '3 Modules • View Guidance ▼'}
            </span>
          </div>
        </div>

        {/* Interactive Showcase Drawer */}
        {activeCategory && showcaseData[activeCategory] && (
          <section className="showcase-drawer" aria-label="Category showcase">
            <div className="drawer-header">
              <div className="drawer-title">
                <span className="drawer-sparkle">✦</span>
                <span>{showcaseData[activeCategory].title}</span>
              </div>
              <button
                className="close-drawer-btn"
                onClick={() => setActiveCategory(null)}
                aria-label="Close drawer"
              >
                ✕ Close
              </button>
            </div>

            <div className="showcase-items-grid">
              {showcaseData[activeCategory].items.map((item, idx) => (
                <article key={idx} className="showcase-item-card">
                  <div>
                    <div className="item-top">
                      <span className="item-badge">{item.badge}</span>
                    </div>
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-desc">{item.desc}</p>
                  </div>
                  <div className="item-tags">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="item-tag">#{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Bottom Bar: Connect & Collaborate + Get in Touch */}
      <footer className="bottom-bar">
        {/* Left Section: Connect & Collaborate */}
        <div className="bottom-section connect-section">
          <div className="section-header">
            <h2 className="section-title">
              <span>🤝</span> Connect & Collaborate
            </h2>
            <p className="section-desc">
              Let's team up on impactful software projects, research on social issue, startup and many more.
            </p>
          </div>

          <div className="social-links-grid">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/sahilaevo?xtok=MThlOTBlZHRiMXNzbA=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-card instagram"
              aria-label="Instagram profile"
            >
              <div className="social-card-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div className="social-card-text">
                <span className="social-name">Instagram</span>
                <span className="social-handle">@sahilaevo</span>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/sahilaevo"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card github"
              aria-label="GitHub profile"
            >
              <div className="social-card-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
              <div className="social-card-text">
                <span className="social-name">GitHub</span>
                <span className="social-handle">@sahilaevo</span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card linkedin"
              aria-label="LinkedIn profile"
            >
              <div className="social-card-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="social-card-text">
                <span className="social-name">LinkedIn</span>
                <span className="social-handle">Sahil Aevo</span>
              </div>
            </a>

            {/* Twitter / X */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card x-twitter"
              aria-label="X Twitter profile"
            >
              <div className="social-card-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <div className="social-card-text">
                <span className="social-name">X (Twitter)</span>
                <span className="social-handle">@sahilaevo</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Section: Get in Touch */}
        <div className="bottom-section get-in-touch-section">
          <div className="section-header">
            <h2 className="section-title">
              <span>✉️</span> Get in Touch
            </h2>
            <p className="section-desc">
              Have a project idea, feedback, or need JEE guidance? Drop a direct note below.
            </p>
          </div>

          <div className="email-actions-box">
            <form onSubmit={handleSendMessage} className="quick-message-form">
              <input
                type="text"
                className="quick-message-input"
                placeholder="Type your message or inquiry..."
                value={quickMessage}
                onChange={(e) => setQuickMessage(e.target.value)}
              />
              <button type="submit" className="email-primary-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                {messageSent ? 'Opening Mail Client... 🚀' : 'Send Message'}
              </button>
            </form>

            <button
              type="button"
              className={`copy-email-btn ${copiedEmail ? 'copied' : ''}`}
              onClick={handleCopyEmail}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              {copiedEmail ? '✓ Copied sahilaevo@gmail.com!' : 'Copy Email Address'}
            </button>
          </div>
        </div>
      </footer>

      {/* Subtle Copyright */}
      <div className="page-footer">
        © {CURRENT_YEAR} SahilAevo. Crafted with passion & precision.
      </div>
    </div>
  )
}
