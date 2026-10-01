import './ProjectsPage.css'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { projectCategories, projects } from '../../data/projectsContent'
import { ArrowIcon, CloseIcon, PinIcon, DropletIcon } from './MetaIcons'
import { tm } from '../../utils/formatTM.jsx'

// Images 3, 4 & 5 are really the same scroll of the same grid, so
// they're implemented as one section: the filter tabs narrow the same
// card list rather than three separate grids.
//
// Card behaviour: the card front is a full-bleed photo with a bottom
// gradient scrim showing only the category/year eyebrow and the project
// name — no subtitle or objective preview. The whole card is a button;
// clicking it opens a modal with all remaining project information —
// subtitle, objective, location, capacity, beneficiaries, stakeholders,
// impact and testimonial — set in a larger, easier-to-read type size.
export default function ProjectsGrid() {
  const [searchParams] = useSearchParams()
  const requestedCategory = searchParams.get('category')
  const initialId =
    requestedCategory && projectCategories.some((cat) => cat.id === requestedCategory)
      ? requestedCategory
      : 'all'

  const [activeId, setActiveId] = useState(initialId)
  const [activeProject, setActiveProject] = useState(null)

  // Keep the tab in sync if the navbar's Projects dropdown is used again
  // while already on this page (the query param changes but the
  // component doesn't remount).
  useEffect(() => {
    if (requestedCategory && projectCategories.some((cat) => cat.id === requestedCategory)) {
      setActiveId(requestedCategory)
    }
  }, [requestedCategory])

  const visible = useMemo(
    () => (activeId === 'all' ? projects : projects.filter((p) => p.categoryId === activeId)),
    [activeId],
  )

  // Lock background scroll while the modal is open, and allow Escape to close it.
  useEffect(() => {
    if (!activeProject) return undefined
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveProject(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeProject])

  return (
    <section id="case-studies" className="projects-grid">
      <div className="section-inner">
        <div className="eyebrow eyebrow--dark">
          Case Studies
        </div>
        <h2 className="projects-grid__title">
          Proof, beyond <em>promise.</em>
        </h2>

        <div className="projects-grid__tabs" role="tablist" aria-label="Filter case studies by category">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeId === cat.id}
              className={`projects-grid__tab${activeId === cat.id ? ' is-active' : ''}`}
              onClick={() => setActiveId(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid__cards">
          {visible.map((project) => (
            <button
              type="button"
              className="project-card"
              key={project.id}
              onClick={() => setActiveProject(project)}
              aria-haspopup="dialog"
              aria-label={`Read: ${project.title}`}
            >
              <img
                className="project-card__image"
                src={project.image}
                alt={project.title}
              />
              <span className="project-card__scrim" />
              <span className="project-card__content">
                <span className="project-card__eyebrow">
                  {project.categoryLabel}
                  {project.year ? ` · ${project.year}` : ''}
                </span>
                <span className="project-card__title">{tm(project.title)}</span>
              </span>
              <span className="project-card__hint">
                Read the story <ArrowIcon />
              </span>
            </button>
          ))}

          {visible.length === 0 && (
            <p className="projects-grid__empty">No case studies in this category yet — check back soon.</p>
          )}
        </div>
      </div>

      {activeProject && (
        <div
          className="project-modal-overlay"
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveProject(null)
          }}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              type="button"
              className="project-modal__close"
              onClick={() => setActiveProject(null)}
              aria-label="Close details"
            >
              <CloseIcon /> Close
            </button>

            <div className="project-modal__body project-modal__body--full">
              <div className="project-modal__tags">
                <span className="project-modal__badge">{activeProject.categoryLabel}</span>
                {activeProject.year && <span className="project-modal__year">{activeProject.year}</span>}
              </div>

              <h3 id="project-modal-title" className="project-modal__title">{tm(activeProject.title)}</h3>
              <p className="project-modal__subtitle">{activeProject.subtitle}</p>

              <p className="project-modal__objective">
                <strong>Objective for the Installation</strong>
                {tm(activeProject.objective)}
              </p>

              <dl className="project-modal__meta-list">
                <div>
                  <dt><PinIcon /> Location</dt>
                  <dd>{activeProject.location}</dd>
                </div>
                <div>
                  <dt><DropletIcon /> Capacity</dt>
                  <dd>{tm(activeProject.capacity)}</dd>
                </div>
                {activeProject.dailyBeneficiaries && (
                  <div>
                    <dt>Beneficiaries</dt>
                    <dd>{activeProject.dailyBeneficiaries}</dd>
                  </div>
                )}
                {activeProject.stakeholders && (
                  <div>
                    <dt>Stakeholders</dt>
                    <dd>{activeProject.stakeholders}</dd>
                  </div>
                )}
                {activeProject.launchDate && (
                  <div>
                    <dt>Launch Date</dt>
                    <dd>{activeProject.launchDate}</dd>
                  </div>
                )}
              </dl>

              {activeProject.installationSetup && activeProject.installationSetup.length > 0 && (
                <>
                  <p className="project-modal__section-label">Installation Setup</p>
                  <ul className="project-modal__impact-list">
                    {activeProject.installationSetup.map((line, i) => (
                      <li key={i}>{tm(line)}</li>
                    ))}
                  </ul>
                </>
              )}

              {activeProject.impact && activeProject.impact.length > 0 && (
                <>
                  <p className="project-modal__section-label">Impact of the Project</p>
                  <ul className="project-modal__impact-list">
                    {activeProject.impact.map((line, i) => (
                      <li key={i}>{tm(line)}</li>
                    ))}
                  </ul>
                </>
              )}

              {activeProject.testimonial && (
                <blockquote className="project-modal__testimonial">
                  <p>&ldquo;{tm(activeProject.testimonial.quote)}&rdquo;</p>
                  {activeProject.testimonial.author && (
                    <cite>— {activeProject.testimonial.author}</cite>
                  )}
                </blockquote>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
