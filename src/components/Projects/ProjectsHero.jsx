import './ProjectsPage.css'
import { projectsHero } from '../../data/projectsContent'
import backgroundImage from '../../assets/projects-full/images/projects-hero-bg-ocean.jpg'
import RecognitionBar from './RecognitionBar'

export default function ProjectsHero() {
  return (
    <section className="hero">
      {/* Background Image */}
      <div className="hero__bg" aria-hidden="true">
        <img
          src={backgroundImage}
          alt="Background"
          className="hero__bg-image"
        />
      </div>

      {/* Dark Overlay */}
      <div className="hero__bg-overlay" aria-hidden="true" />

      {/* Hero Content */}
      <div className="hero__content">
        <div className="eyebrow eyebrow--light">
          {projectsHero.eyebrow}
        </div>

        <h1 className="hero__title">
          {projectsHero.titlePlain}
          <br />
          <em>{projectsHero.titleEm}</em>
        </h1>

        <p className="hero__subtitle">
          {projectsHero.subtitle}
        </p>
      </div>

      {/* Recognition Strip — real org logos with text fallback */}
      <RecognitionBar />
    </section>
  )
}