import { useScrollReveal } from '../hooks/useScrollReveal'

const entries = [
  {
    icon: '🎓',
    degree: 'B.Tech — Computer Science & Engineering',
    sub: 'Specialization: Artificial Intelligence & Machine Learning',
    school: 'Quantum University',
    meta: ['📅 Sep 2020 – Aug 2024', '📍 Roorkee, Uttarakhand'],
    result: 'CGPA: 9.18',
  },
  {
    icon: '📘',
    degree: 'Higher Secondary Education (Class XII)',
    sub: 'WBCHSE Board',
    school: 'Suren Chandra Modern School',
    meta: ['📅 Passout: 2020', '📍 Durgapur, West Bengal'],
    result: '97.2%',
  },
  {
    icon: '📗',
    degree: 'Secondary Education (Class X)',
    sub: 'WBBSE Board',
    school: 'Suren Chandra Modern School',
    meta: ['📅 Passout: 2018', '📍 Durgapur, West Bengal'],
    result: '93.28%',
  },
]


export default function Education() {
  const ref = useScrollReveal<HTMLDivElement>()
  const rightRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="education" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <p className="section-label">Academic background</p>
        <h2 className="section-title">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="edu-layout">
          <div ref={ref} className="edu-list fade-up">
            {entries.map(e => (
              <div key={e.degree} className="edu-card">
                <div className="edu-icon">{e.icon}</div>
                <div>
                  <p className="edu-degree">{e.degree}</p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: 6 }}>{e.sub}</p>
                  <p className="edu-uni">{e.school}</p>
                  <div className="edu-meta">
                    {e.meta.map(m => <span key={m}>{m}</span>)}
                    <span className="edu-cgpa">⭐ {e.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div ref={rightRef} className="edu-right fade-up">
            <div className="edu-quote-card">
              <div className="edu-quote-icon">💡</div>
              <p className="edu-quote-text">
                "The more that you read, the more things you will know.
                The more that you learn, the more places you'll go."
              </p>
              <p className="edu-quote-author">— Dr. Seuss</p>
            </div>

            <div className="edu-skills-bar-wrap">
              <p className="edu-skills-bar-title">Academic Strengths</p>
              {[
                { label: 'Problem Solving', pct: 92 },
                { label: 'Data Structures & Algorithms', pct: 85 },
                { label: 'Machine Learning', pct: 80 },
                { label: 'Web Development', pct: 95 },
              ].map((b, i) => (
                <div key={b.label} className="edu-bar-row">
                  <div className="edu-bar-top">
                    <span>{b.label}</span>
                    <span>{b.pct}%</span>
                  </div>
                  <div className="edu-bar-track">
                    <div
                      className="edu-bar-fill"
                      style={{ '--bar-pct': `${b.pct}%`, animationDelay: `${i * 0.15}s` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
