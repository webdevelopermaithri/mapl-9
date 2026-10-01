import Hero from '../components/Impact/Hero.jsx'
import RecognitionBar from '../components/RecognitionBar/RecognitionBar.jsx'
import ImpactAtlasIntro from '../components/Impact/ImpactAtlasIntro.jsx'
import ImpactAtlasGrid from '../components/Impact/ImpactAtlasGrid.jsx'
import AwardsGrid from '../components/Impact/AwardsGrid.jsx'
import ClientLogos from '../components/Impact/ClientLogos.jsx'
import JoinMissionCta from '../components/shared/JoinMissionCta.jsx'
import '../components/Impact/ImpactLanding.css'

// Full Impact page, ported from the standalone maithri-landing build.
// Navbar, Footer and FloatingButtons are already rendered once by
// App.jsx, so this page only composes its own sections.
//
// The Impact Atlas is split into two halves: the intro (heading +
// two callout numbers) stays near the top, while the tab-driven full
// metrics grid now runs after the Recognition/Awards section, so the
// page reads as story -> proof (awards) -> proof (numbers).
//
// Closing section now reuses the shared "Join the Mission" CTA (same
// one used on About Us / Home) instead of the page-specific FinalCTA,
// so every page ends on the same consistent closing section.
export default function Impact() {
  return (
    <>
      <Hero />
      <RecognitionBar />
      <ImpactAtlasIntro />
      <AwardsGrid />
      <ImpactAtlasGrid />
      <ClientLogos />
      <JoinMissionCta />
    </>
  )
}
