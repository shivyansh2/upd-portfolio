import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  CheckCircle2,
  MapPin,
  MousePointer2,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const skills = [
  'React',
  'JavaScript ES6+',
  'Python',
  'HTML5',
  'CSS3',
  'Responsive Design',
  'REST APIs',
  'Bootstrap',
  'Web Accessibility',
]

function Home() {
  return (
    <>
      <section className="hero page-section">
        <div className="hero-copy reveal reveal-1">
          <div className="availability-pill">
            <span /> Available for internships &amp; junior roles
          </div>
          <p className="eyebrow">Front-end developer · Palampur, India</p>
          <h1>
            I shape ideas into <em>clear, responsive</em> digital experiences.
          </h1>
          <p className="hero-intro">
            I’m Shivyansh Thakur, a front-end developer focused on interfaces
            that feel intuitive, look intentional, and work smoothly on every
            screen.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="button button-primary">
              Explore my work <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/contact" className="text-link">
              Start a conversation <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="hero-stage reveal reveal-2" aria-label="Front-end development highlights">
          <div className="stage-grid" aria-hidden="true" />
          <div className="stage-orbit stage-orbit-one" aria-hidden="true" />
          <div className="stage-orbit stage-orbit-two" aria-hidden="true" />
          <div className="code-window">
            <div className="window-bar">
              <span />
              <span />
              <span />
              <small>interface.tsx</small>
            </div>
            <div className="code-body">
              <p><b>const</b> experience = {'{'}</p>
              <p className="code-indent">responsive: <i>true</i>,</p>
              <p className="code-indent">accessible: <i>true</i>,</p>
              <p className="code-indent">thoughtful: <i>true</i>,</p>
              <p>{'}'}</p>
            </div>
          </div>
          <div className="stage-card stage-card-top">
            <MousePointer2 size={20} aria-hidden="true" />
            <span>Interaction</span>
            <strong>Purposeful</strong>
          </div>
          <div className="stage-card stage-card-bottom">
            <CheckCircle2 size={20} aria-hidden="true" />
            <span>Current focus</span>
            <strong>React interfaces</strong>
          </div>
          <div className="stage-location">
            <MapPin size={16} aria-hidden="true" /> Palampur, HP
          </div>
        </div>
      </section>

      <section className="marquee-band" aria-label="Core capabilities">
        <div>
          <span>Responsive UI</span><i>◆</i><span>React Development</span><i>◆</i>
          <span>Accessible Markup</span><i>◆</i><span>REST API Integration</span><i>◆</i>
        </div>
      </section>

      <section className="page-section featured-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Featured case study</p>
          <h2>Designing a food-ordering journey from discovery to checkout.</h2>
        </div>
        <article className="featured-project reveal">
          <div className="project-visual">
            <img
              src="/projects/food-app.png"
              alt="Five-screen mobile food delivery application designed in Figma"
            />
          </div>
          <div className="project-story">
            <span className="project-number">01 / Figma UI Concept</span>
            <h3>Authentic Indian Flavours</h3>
            <p>
              A mobile food-delivery concept that guides customers through
              browsing, dish details, cart management, payment, and order
              confirmation with a warm visual system inspired by Indian cuisine.
            </p>
            <ul className="project-notes">
              <li>Clear five-step ordering flow</li>
              <li>Reusable cards and controls</li>
              <li>Warm, appetite-led visual language</li>
            </ul>
            <Link to="/projects" className="text-link">
              View project details <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </article>
      </section>

      <section className="page-section capabilities-section">
        <div className="capabilities-intro reveal">
          <Braces size={31} aria-hidden="true" />
          <p className="eyebrow">What I bring</p>
          <h2>Strong foundations, curious thinking, and care for the details.</h2>
          <p>
            I translate layouts into maintainable interfaces and adapt quickly
            when a project introduces a new tool, constraint, or challenge.
          </p>
        </div>
        <div className="skills-cloud reveal">
          {skills.map((skill, index) => (
            <span key={skill} className={index % 3 === 0 ? 'skill-accent' : ''}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="page-section closing-cta reveal">
        <p className="eyebrow">Have a role or project in mind?</p>
        <h2>Let’s build something people understand at first glance.</h2>
        <Link to="/contact" className="button button-light">
          Get in touch <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </>
  )
}
