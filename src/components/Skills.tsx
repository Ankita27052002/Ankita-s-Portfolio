import { useScrollReveal } from '../hooks/useScrollReveal'

const categories = [
  {
    title: '⚡ Languages & Frameworks',
    color: '',
    tags: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL', 'HTML5', 'CSS3', 'TailwindCSS', 'Material UI', 'shadcn/ui'],
  },
  {
    title: '🛠 Tools & Platforms',
    color: 'purple',
    tags: ['Redux Toolkit', 'Firebase Auth', 'Vite', 'Webpack', 'Babel', 'Git', 'Figma', 'npm / yarn'],
  },
  {
    title: '🚀 Web Performance',
    color: 'cyan',
    tags: ['RESTful APIs', 'Code Splitting', 'Lazy Loading', 'SEO', 'CDN', 'Responsive Design', 'Flexbox', 'CSS Grid'],
  },
  {
    title: '🤝 Soft Skills',
    color: 'purple',
    tags: ['Agile / Scrum', 'Communication', 'Collaboration', 'Problem-Solving', 'Adaptability'],
  },
]

export default function Skills() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">
          <span className="gradient-text">Skills</span>
        </h2>

        <div ref={ref} className="skills-grid fade-up">
          {categories.map(cat => (
            <div key={cat.title} className="skill-card">
              <p className="skill-card-title">{cat.title}</p>
              <div className="skill-tags">
                {cat.tags.map(t => (
                  <span key={t} className={`tag ${cat.color}`}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
