import { useState } from 'react'

export default function JeeGuidanceView({ onBack, onNavigate }) {
  const [activeTab, setActiveTab] = useState('teachers')

  const teachersData = [
    {
      subject: 'Physics',
      icon: '⚡',
      badge: 'Core Conceptual & Visual Intuition',
      strategy: 'Focus on root derivations, visual mechanical intuition, and solving multi-concept problems without memorizing formula shortcuts.',
      recommendations: [
        {
          name: 'Ashish Arora Sir (Physics Galaxy)',
          tag: 'Gold Standard for Concept Depth',
          details: 'Unrivaled for conceptual precision, Advanced Illustration series, and crisp Checklist revisions before mock exams.'
        },
        {
          name: 'Nitin Sachan Sir (INSP)',
          tag: 'JEE Advanced & Olympiad Problem Solving',
          details: 'Exceptional for developing out-of-the-box analytical problem solving in Mechanics and Electrodynamics.'
        },
        {
          name: 'Rajwant Sir / Alakh Pandey Sir (Physics Wallah)',
          tag: 'Rock-Solid Basics & Numerical Confidence',
          details: 'Best for building baseline conceptual clarity from absolute scratch and developing initial confidence.'
        }
      ]
    },
    {
      subject: 'Physical Chemistry',
      icon: '🧪',
      badge: 'Calculation Precision & Formula Mastery',
      strategy: 'Physical chemistry is pure mathematics applied to chemistry. Prioritize thermodynamics sign conventions, equilibrium approximations, and mole concept calculations.',
      recommendations: [
        {
          name: 'Faisal Sir / AKK Sir / Brijesh Jindal Sir',
          tag: 'Advanced Problem Solving & Nuance',
          details: 'Mastery in equilibrium, thermodynamics, and ionic solutions with clear mathematical modeling of reactions.'
        }
      ]
    },
    {
      subject: 'Organic Chemistry',
      icon: '🧬',
      badge: 'Mechanisms & Electronic Effects',
      strategy: 'Never memorize reactions in isolation. Master GOC (inductive, resonance, hyperconjugation, aromaticity) first. Every mechanism stems from stability of intermediates.',
      recommendations: [
        {
          name: 'Sachin Rana Sir / MS Chouhan Sir',
          tag: 'Pure Mechanism-Based Understanding',
          details: 'Step-by-step mechanism breakdowns, stereochemistry visualization, and reagent behavior analysis.'
        },
        {
          name: 'SKM Sir / RA Sir',
          tag: 'Exhaustive Advanced Problem Workouts',
          details: 'Deep drill sessions covering multi-step organic conversions and competitive trap questions.'
        }
      ]
    },
    {
      subject: 'Inorganic Chemistry',
      icon: '💎',
      badge: 'NCERT Line-by-Line Bible',
      strategy: '95% of JEE Mains inorganic questions originate directly from NCERT lines, tables, and footnote exceptions. Read NCERT with highlighters at least 4 times.',
      recommendations: [
        {
          name: 'Om Pandey Sir / VJ Sir',
          tag: 'NCERT Decoded & Exception Mnemonics',
          details: 'Highlighting exact NCERT sentences, coordination compound crystal field theory, and p-block/d-block trends.'
        }
      ]
    },
    {
      subject: 'Mathematics',
      icon: '📐',
      badge: 'Rigorous Practice & Speed Shortcuts',
      strategy: 'Math in JEE Mains is lengthy by design. Target high-weightage chapters first (Vectors, 3D Geometry, Matrices & Determinants, Definite Integrals, Coordinate Geometry).',
      recommendations: [
        {
          name: 'Mohit Tyagi Sir',
          tag: 'Exhaustive Classic Foundation',
          details: 'Complete YouTube syllabus coverage from board level to Olympiad with zero distractions and pure mathematics.'
        },
        {
          name: 'NV Sir / Sachin Sir (BounceBack Series)',
          tag: 'Rapid Conceptual Revision & PYQ Drills',
          details: 'High-speed one-shots focusing on high-frequency question patterns and smart elimination techniques.'
        },
        {
          name: 'Arvind Kalia Sir',
          tag: 'Shortcut Techniques & Visualization',
          details: 'Brilliant for coordinate geometry and calculus shortcut methods under intense exam timer pressure.'
        }
      ]
    }
  ]

  const resourcesData = [
    {
      tier: 'Tier 1 — The Non-Negotiable Core',
      badge: 'Must Complete 100%',
      color: '#10b981',
      items: [
        {
          title: 'NCERT Chemistry (Textbook + Exemplar)',
          desc: 'The single most important book for JEE. Every single line in Inorganic, every named reaction in Organic, and every table in Physical must be mastered.'
        },
        {
          title: 'Concepts of Physics (Vol 1 & 2) by Dr. H.C. Verma',
          desc: 'Read the theory carefully. Solve all Objective 1, Objective 2, and short answer exercises. It builds your fundamental physical intuition.'
        },
        {
          title: '45-Year Chapter-Wise PYQ Archives (Disha / Arihant / Marks App)',
          desc: 'Past Year Questions from 2019–2026 are the most authentic predictor of exam difficulty and question patterns.'
        }
      ]
    },
    {
      tier: 'Tier 2 — Advanced Problem Sets',
      badge: 'For 99+ Percentile & JEE Advanced',
      color: '#a855f7',
      items: [
        {
          title: 'Advanced Problems in Organic Chemistry by M.S. Chouhan',
          desc: 'The ultimate question bank for Organic Chemistry to test mechanism mastery and stereochemical outcomes.'
        },
        {
          title: 'Problems in General Physics by I.E. Irodov (Selective Problem List)',
          desc: 'Solve only selected problems in Mechanics and Electrodynamics to sharpen multi-concept synthesis for JEE Advanced.'
        },
        {
          title: 'Advanced Problems in Mathematics (Black Book) by Vikas Gupta & Pankaj Joshi',
          desc: 'Challenging calculus, algebra, and coordinate geometry problems that develop true mathematical stamina.'
        }
      ]
    },
    {
      tier: 'Tier 3 — The Golden Rules of Preparation',
      badge: 'Preparation Mindset',
      color: '#38bdf8',
      items: [
        {
          title: 'The "1 Book × 3 Times" Principle',
          desc: 'Never buy 10 books and solve 10% of each. Buy 1 standard material, solve 100% of it, and revise it 3 times. Mastery beats superficial breadth.'
        },
        {
          title: 'Short Notes & Formula Books',
          desc: 'Create your own 2-page summary sheets for every chapter containing key formulas, boundary conditions, and exception traps.'
        }
      ]
    }
  ]

  const mockStrategyRounds = [
    {
      round: 'Round 1: Speed & 100% Accuracy',
      time: '0 to 45 Minutes',
      target: '30–35 Questions',
      badge: 'Easy Direct Hits',
      icon: '⚡',
      color: '#10b981',
      desc: 'Scan the entire paper. Solve only single-step formula questions, direct NCERT Inorganic points, and straightforward definitions. If a question takes >90 seconds, immediately mark for review and skip!'
    },
    {
      round: 'Round 2: Moderate Calculations',
      time: '45 to 110 Minutes',
      target: '20–25 Questions',
      badge: 'Core Scorers',
      icon: '🎯',
      color: '#a855f7',
      desc: 'Tackle standard 2-3 step numericals, coordinate geometry problems, and physical chemistry questions marked during Round 1. Keep your scratch-pad calculations neat to prevent silly errors.'
    },
    {
      round: 'Round 3: Multi-Concept Problems',
      time: '110 to 160 Minutes',
      target: '10–15 Questions',
      badge: 'Rank Deciders',
      icon: '🧠',
      color: '#f59e0b',
      desc: 'Devote deep focus to the tougher, multi-layered math and physics questions. Apply elimination, check boundary limits, and maintain composure.'
    },
    {
      round: 'Final Buffer & Negative Control',
      time: '160 to 180 Minutes',
      target: 'Zero Guesswork',
      badge: 'Shield Your Marks',
      icon: '🛡️',
      color: '#ef4444',
      desc: 'Stop solving new questions. Double-check marked answers, verify numerical units, and strictly resist wild guessing. A single negative mark (-1) drops rank significantly!'
    }
  ]

  return (
    <div className="interface-view jee-view">
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
          <span className="crumb-current">JEE Mains & Advanced Guidance</span>
        </div>

        <div className="quick-category-tabs">
          <button onClick={() => onNavigate('projects')} className="quick-tab">Projects</button>
          <button onClick={() => onNavigate('articles_blogs')} className="quick-tab">Articles & Blogs</button>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="interface-hero">
        <div className="hero-pill-tag">
          <span>🎯</span>
          <span>Mentorship & Strategy Hub</span>
        </div>
        <h1 className="interface-title">JEE Mains & Advanced Guidance</h1>
        <p className="interface-subtitle">
          A battle-tested preparation framework: subject-wise teacher recommendations, curated high-yield resource stacks, and proven mock test paper-solving strategies.
        </p>

        {/* Sub-Tabs Selector */}
        <div className="jee-tabs-bar">
          <button
            className={`jee-tab-btn ${activeTab === 'teachers' ? 'active' : ''}`}
            onClick={() => setActiveTab('teachers')}
          >
            <span>👨‍🏫</span>
            <span>Teacher Guidance — Whom to Study From</span>
          </button>

          <button
            className={`jee-tab-btn ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            <span>📚</span>
            <span>Books & Resources Guidance</span>
          </button>

          <button
            className={`jee-tab-btn ${activeTab === 'mock' ? 'active' : ''}`}
            onClick={() => setActiveTab('mock')}
          >
            <span>📊</span>
            <span>Mock Test Approach & Analysis</span>
          </button>
        </div>
      </div>

      {/* TAB 1: TEACHER GUIDANCE */}
      {activeTab === 'teachers' && (
        <section className="jee-content-section" aria-label="Teacher guidance">
          <div className="section-intro-card">
            <h3>Subject-Wise Recommended Mentors</h3>
            <p>
              Success in JEE isn't about watching 100 hours of random lectures. It is about sticking to one trusted teacher who builds your fundamental intuition, working through their assignments, and solving problems independently.
            </p>
          </div>

          <div className="teachers-subject-grid">
            {teachersData.map((subj, idx) => (
              <div key={idx} className="subject-card">
                <div className="subject-header">
                  <div className="subject-title-wrap">
                    <span className="subject-icon">{subj.icon}</span>
                    <h3 className="subject-name">{subj.subject}</h3>
                  </div>
                  <span className="subject-badge">{subj.badge}</span>
                </div>

                <p className="subject-strategy-text">
                  <strong>Strategy:</strong> {subj.strategy}
                </p>

                <div className="recommendations-list">
                  {subj.recommendations.map((rec, rIdx) => (
                    <div key={rIdx} className="rec-box">
                      <div className="rec-header">
                        <span className="rec-name">{rec.name}</span>
                        <span className="rec-tag">{rec.tag}</span>
                      </div>
                      <p className="rec-details">{rec.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TAB 2: BOOKS & RESOURCES */}
      {activeTab === 'resources' && (
        <section className="jee-content-section" aria-label="Books and resources">
          <div className="section-intro-card">
            <h3>Curated Textbook & Question Bank Stack</h3>
            <p>
              Avoid "book-hoarding syndrome". The following list contains the exact high-yield materials that will take you from fundamental concepts to advanced percentile rankings.
            </p>
          </div>

          <div className="resources-stack">
            {resourcesData.map((tier, idx) => (
              <div key={idx} className="tier-group">
                <div className="tier-header">
                  <h3 className="tier-title">{tier.tier}</h3>
                  <span className="tier-badge" style={{ color: tier.color, borderColor: `${tier.color}40`, backgroundColor: `${tier.color}15` }}>
                    {tier.badge}
                  </span>
                </div>

                <div className="tier-cards-grid">
                  {tier.items.map((item, iIdx) => (
                    <div key={iIdx} className="resource-item-card">
                      <div className="res-card-top">
                        <span className="res-icon">📖</span>
                        <h4 className="res-title">{item.title}</h4>
                      </div>
                      <p className="res-desc">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TAB 3: MOCK TEST APPROACH */}
      {activeTab === 'mock' && (
        <section className="jee-content-section" aria-label="Mock test strategy">
          <div className="section-intro-card">
            <h3>The 3-Round Paper-Solving Methodology</h3>
            <p>
              A mock test is not a test of knowledge alone; it is a test of emotional control, speed, and question selection. Never attempt JEE in a linear 1 to 75 order!
            </p>
          </div>

          <div className="mock-rounds-grid">
            {mockStrategyRounds.map((r, idx) => (
              <div key={idx} className="round-card" style={{ borderTop: `3px solid ${r.color}` }}>
                <div className="round-header">
                  <div className="round-time-box">
                    <span className="round-icon">{r.icon}</span>
                    <span className="round-time">{r.time}</span>
                  </div>
                  <span className="round-badge" style={{ color: r.color, backgroundColor: `${r.color}18` }}>
                    {r.badge}
                  </span>
                </div>

                <h3 className="round-name">{r.round}</h3>
                <div className="round-target">
                  Target: <strong>{r.target}</strong>
                </div>
                <p className="round-desc">{r.desc}</p>
              </div>
            ))}
          </div>

          {/* Error Notebook Framework Card */}
          <div className="error-notebook-card">
            <div className="error-card-header">
              <span className="error-icon">📓</span>
              <div>
                <h3>The Mandatory Error Notebook Protocol</h3>
                <p>The single highest-ROI habit in JEE preparation</p>
              </div>
            </div>

            <div className="error-pillars-grid">
              <div className="error-pillar">
                <span className="pillar-num">1</span>
                <h4>Log Every Error</h4>
                <p>Immediately after every mock test, dedicate 2 hours to log every unattempted or wrong question into a physical notebook.</p>
              </div>

              <div className="error-pillar">
                <span className="pillar-num">2</span>
                <h4>Diagnose the Cause</h4>
                <p>Categorize whether it was a (A) Calculation mistake, (B) Conceptual gap, (C) Misread question, or (D) Time panic.</p>
              </div>

              <div className="error-pillar">
                <span className="pillar-num">3</span>
                <h4>Pre-Test Ritual</h4>
                <p>Read your entire Error Notebook the evening before your next mock test. This stops you from repeating identical errors.</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
