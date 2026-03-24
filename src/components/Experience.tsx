import { useScrollReveal } from '../hooks/useScrollReveal'

const jobs = [
  {
    company: 'Webminix',
    role: 'Front End Developer · Remote',
    period: 'Mar 2025 – Present',
    bullets: [
      'Delivered high-impact Collabyn ERP modules in React, improving delivery efficiency by 30% with reusable components.',
      'Reduced initial load time by 40% via code splitting, lazy loading, and render optimizations.',
      'Improved API reliability with robust integration layers and fallback mechanisms.',
      'Built centralized state logic using Context API and custom hooks.',
      'Delivered responsive, pixel-perfect UI for web and tablet.',
    ],
  },
  {
    company: 'Ecowell Health & Beauty Pvt. Ltd.',
    role: 'Front End Developer · Remote',
    period: 'Aug 2024 – Mar 2025',
    bullets: [
      'Built and optimized React.js websites, reducing load time by 25%.',
      'Integrated REST APIs and SEO improvements, increasing engagement by 15%.',
      'Managed product lifecycle including ingredients, packaging, and manufacturing coordination.',
      'Conducted code reviews and QA to maintain quality standards.',
      'Collaborated with designers and backend teams for scalable features.',
    ],
  },
  {
    company: 'ITJOBXS',
    role: 'SDE Intern · Remote',
    period: 'Apr 2024 – Jul 2024',
    bullets: [
      'Developed responsive web sections for itjobxs.com.',
      'Worked on bot detection and authentication systems.',
      'Integrated Google reCAPTCHA for security.',
      'Tech Stack: HTML, CSS, JS, Bootstrap, PHP, MySQL.',
    ],
  },
]

export default function Experience() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section id="experience" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <p className="section-label">Where I've worked</p>
        <h2 className="section-title">
          <span className="gradient-text">Experience</span>
        </h2>

        <div ref={ref} className="timeline fade-up">
          {jobs.map(job => (
            <div key={job.company} className="timeline-item">
              <div className="t-dot" />
              <div className="exp-card">
                <div className="exp-top">
                  <span className="exp-company">{job.company}</span>
                  <span className="exp-period">{job.period}</span>
                </div>
                <p className="exp-role">{job.role}</p>
                <ul className="exp-bullets">
                  {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
