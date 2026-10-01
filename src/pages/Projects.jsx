import ProjectsHero from '../components/Projects/ProjectsHero.jsx'
import FeaturedProject from '../components/Projects/FeaturedProject.jsx'
import ProjectsGrid from '../components/Projects/ProjectsGrid.jsx'
import SectorCarousel from '../components/Projects/SectorCarousel.jsx'
import JoinMissionCta from '../components/shared/JoinMissionCta.jsx'
import { privateSectorSlides } from '../data/projectsContent.js'

// Full Projects page, ported over from the updated maithri-projects
// build exactly as designed: hero (with its own recognition marquee
// strip), the featured case study, the filterable case-studies grid
// with flip-to-read cards, and the Private/Public Sector proof
// carousels. Navbar, Footer and FloatingButtons are already rendered
// globally by App.jsx, so this page only owns its own sections — same
// pattern as pages/MediaHouse.jsx.
//
// Closing section now reuses the shared "Join the Mission" CTA (same
// one used on About Us / Home / Impact) instead of the page-specific
// ProjectsCta, so every page ends on the same consistent closing
// section.
export default function Projects() {
  return (
    <main>
      <ProjectsHero />
      <FeaturedProject />
      <ProjectsGrid />
      <SectorCarousel
        id="private-sector-projects"
        eyebrow="Private Sector"
        titlePlain="Trusted by industry,"
        titleEm="proven on the ground."
        slides={privateSectorSlides}
      />
      <JoinMissionCta />
    </main>
  )
}
