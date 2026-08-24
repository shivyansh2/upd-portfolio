import { createFileRoute, Link } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { ArrowUpRight, Coffee, Figma, LayoutDashboard, ScanText } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

const projectIcons = [Figma, ScanText, LayoutDashboard, Coffee]

function Projects() {
  const projects = [...allProjects].sort((a, b) =>
    a._meta.path.localeCompare(b._meta.path),
  )

  return (
    <div className="page-section inner-page">
      <header className="page-intro reveal">
        <p className="eyebrow">Selected work · Recent projects</p>
        <h1>Projects built around real user journeys.</h1>
        <p>
          Interface concepts and front-end builds exploring responsive layouts,
          useful interactions, structured data, and clear visual hierarchy.
        </p>
      </header>

      <div className="projects-list">
        {projects.map((project, index) => {
          const Icon = projectIcons[index] ?? Figma
          return (
            <article className="project-row reveal" key={project._meta.path}>
              <div className="project-index">0{index + 1}</div>
              <div className="project-main">
                <div className="project-title-line">
                  <Icon size={24} aria-hidden="true" />
                  <h2>{project.title}</h2>
                </div>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              {project.image ? (
                <div className="project-row-image">
                  <img src={project.image} alt={`${project.title} interface preview`} />
                </div>
              ) : (
                <div className={`project-placeholder project-placeholder-${index}`}>
                  <Icon size={48} aria-hidden="true" />
                  <span>{index === 1 ? 'Upload → Parse → Edit' : 'Metrics · Inventory · Activity'}</span>
                </div>
              )}
            </article>
          )
        })}
      </div>

      <section className="project-cta reveal">
        <div>
          <p className="eyebrow">Looking for a motivated junior developer?</p>
          <h2>I’m ready to contribute, learn, and ship.</h2>
        </div>
        <Link to="/contact" className="button button-primary">
          Let’s talk <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </div>
  )
}
