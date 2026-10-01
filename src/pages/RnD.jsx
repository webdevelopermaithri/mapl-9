import HeroSection from '../components/RnD/HeroSection.jsx'
import RecognitionMarquee from '../components/RnD/RecognitionMarquee.jsx'
import TeamSection from '../components/RnD/TeamSection.jsx'
import PortfolioSection from '../components/RnD/PortfolioSection.jsx'
import CapabilitiesSection from '../components/RnD/CapabilitiesSection.jsx'
import ResearchLoopSection from '../components/RnD/ResearchLoopSection.jsx'
import PublicationsSection from '../components/RnD/PublicationsSection.jsx'
import CollaborateSection from '../components/RnD/CollaborateSection.jsx'
import '../components/RnD/RnDLanding.css'

// Full R&D page, ported from the standalone maithri-research build
// (with the updated scroll-driven Hero: floating rounded photo card,
// real portrait, expanded dialogue card copy). Navbar, Footer and
// FloatingButtons are already rendered once by App.jsx, so this page
// only composes its own sections.
export default function RnD() {
  return (
    <div className="whero-page">
      <HeroSection />
      <RecognitionMarquee />
      <TeamSection />
      <PortfolioSection />
      <CapabilitiesSection />
      <ResearchLoopSection />
      <PublicationsSection />
      <CollaborateSection />
    </div>
  )
}
