import { createFileRoute, Link } from '@tanstack/react-router'
import { allEducations, allProjects } from 'content-collections'
import { ArrowDownToLine, ArrowRight, BookOpen, Code2, Sparkles } from 'lucide-react'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

const skillGroups = [
  { title: 'Core', skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Python'] },
  { title: 'Frameworks & APIs', skills: ['React', 'Bootstrap', 'RESTful APIs', 'spaCy / NLP'] },
  { title: 'Design & Delivery', skills: ['Responsive Design', 'Figma', 'Accessibility', 'Component-Driven Development'] },
]

const certifications = [
  'Frontend Developer Path',
  'Learn React',
  'Intro to AI Engineering',
]

function Resume() {
  return (
    <div className="page-section inner-page resume-page">
      <header className="resume-hero reveal">
        <div>
          <p className="eyebrow">Resume · Front-end development</p>
          <h1>Building a strong craft, one interface at a time.</h1>
        </div>
        <a href="/Shivyansh-Thakur-Resume.pdf" download className="button button-primary">
          Download PDF <ArrowDownToLine size={18} aria-hidden="true" />
        </a>
      </header>

      <section className="resume-summary reveal">
        <span className="summary-mark">ST</span>
        <div>
          <h2>Profile</h2>
          <p>
            Front-end developer focused on building responsive, accessible
            interfaces with React and modern CSS. Experienced designing
            complete UI/UX flows in Figma and shipping them as
            production-ready components, with working knowledge of REST API
            integration and Python-based data pipelines.
          </p>
        </div>
      </section>

      <div className="resume-grid">
        <section className="resume-block reveal">
          <div className="resume-block-title">
            <Code2 size={22} aria-hidden="true" />
            <h2>Technical skills</h2>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.skills.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-block reveal">
          <div className="resume-block-title">
            <BookOpen size={22} aria-hidden="true" />
            <h2>Education</h2>
          </div>
          {allEducations.map((education) => (
            <div className="education-item" key={education.school}>
              <span>{education.startDate} — {education.endDate ?? 'Current'}</span>
              <h3>{education.summary}</h3>
              <p>{education.school}</p>
            </div>
          ))}
        </section>
      </div>

      <section className="resume-block resume-projects reveal">
        <div className="resume-block-title">
          <Sparkles size={22} aria-hidden="true" />
          <h2>Project experience</h2>
        </div>
        <div className="resume-project-grid">
          {[...allProjects].sort((a, b) => a._meta.path.localeCompare(b._meta.path)).map((project) => (
            <article key={project._meta.path}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.tags.slice(0, 3).join(' · ')}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="certification-strip reveal">
        <span>Certifications</span>
        {certifications.map((certification) => <p key={certification}>{certification}</p>)}
      </section>

      <section className="resume-contact reveal">
        <div>
          <p className="eyebrow">Based in Palampur, India</p>
          <h2>Interested in working together?</h2>
        </div>
        <Link to="/contact" className="text-link">
          Contact me <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </section>
    </div>
  )
}
