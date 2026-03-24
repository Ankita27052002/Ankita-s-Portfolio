import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    name: 'TaskFlow AI',
    subtitle: 'Smart Task Management Platform',
    date: 'Nov 2025',
    demo: 'https://task-flow-ai-drab.vercel.app/',
    bullets: [
      'Built Kanban/Scrum app with React, Redux Toolkit, Firebase Auth.',
      'Integrated Llama models for sprint analytics and task prioritization.',
      'Velocity tracking, burndown charts, dashboards via Recharts.',
      'Responsive UI with TailwindCSS + shadcn/ui.',
    ],
    stack: ['TypeScript', 'React 18', 'Redux Toolkit', 'Firebase', 'Vite', '@dnd-kit', 'Framer Motion', 'OpenRouter AI', 'Axios'],
  },
  {
    name: 'ResumX',
    subtitle: 'AI-powered Resume Analyzer',
    date: 'Apr 2025',
    demo: 'https://resumx-five.vercel.app/',
    bullets: [
      'Developed AI resume analyzer with ATS scoring and recommendations.',
      'Implemented PDF parsing via pdf.js with fallback handling.',
      'Type-safe architecture with Context API + custom hooks.',
      'Accessible UI with drag-and-drop and tabbed navigation.',
    ],
    stack: ['React', 'TypeScript', 'Tailwind', 'Vite', 'OpenRouter API', 'PDF.js', 'Axios'],
  },
  {
    name: 'Cryptora',
    subtitle: 'Cryptocurrency Tracking App',
    date: 'Apr 2025',
    demo: 'https://cryptora-indol.vercel.app/',
    bullets: [
      'Built crypto dashboard visualizing 100+ coins.',
      'Integrated CoinGecko API for real-time market data.',
      'Watchlist feature persisted with localStorage.',
      'Responsive UI with dark/light mode toggle.',
    ],
    stack: ['React', 'Material UI', 'Chart.js', 'Axios', 'Framer Motion'],
  },
]

export default function Projects() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">Things I've built</p>
        <h2 className="section-title">
          <span className="gradient-text">Projects</span>
        </h2>

        <div ref={ref} className="projects-grid fade-up">
          {projects.map(p => (
            <div key={p.name} className="proj-card">
              <div className="proj-header">
                <div>
                  <p className="proj-name">{p.name}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 2 }}>{p.subtitle}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="proj-date">{p.date}</span>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-demo-btn"
                    aria-label={`Live demo for ${p.name}`}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>

              <ul className="proj-bullets">
                {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>

              <div className="proj-stack">
                {p.stack.map(t => <span key={t} className="tech">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
