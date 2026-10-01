import './ProjectsPage.css'
import WorldMapReal from '../shared/WorldMapReal.jsx'

// Image 2 — previously the single spotlighted case study; now replaced
// with the global footprint map showing every country MEGHDOOT is live in.
export default function FeaturedProject() {
  return (
    <section className="featured">
      <span className="floating-bubble floating-bubble--sm" aria-hidden="true" />
      <div className="section-inner">
        <div className="eyebrow eyebrow--dark">Global Footprint</div>
        <h2 className="projects-grid__title">
          Where MEGHDOOT<sup className="tm-mark">®</sup> is already <em>at work.</em>
        </h2>
        <p className="featured__map-subtitle">
          Live deployments spanning six continents — from desert kiosks to island communities.
        </p>

        <div className="featured__map">
          <WorldMapReal />
        </div>
      </div>
    </section>
  )
}
