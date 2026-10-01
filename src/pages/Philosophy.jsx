import Hero from '../components/Philosophy/Hero.jsx'
import StorySection from '../components/Philosophy/StorySection.jsx'
import JourneyTimeline from '../components/Philosophy/JourneyTimeline.jsx'
import ValuesSection from '../components/Philosophy/ValuesSection.jsx'
import ManagementSection from '../components/Philosophy/ManagementSection.jsx'
import AdvisorsSection from '../components/Philosophy/AdvisorsSection.jsx'
import JoinMissionCta from '../components/shared/JoinMissionCta.jsx'

// Single-scroll Philosophy page — same section order as the original
// standalone build. Footer + FloatingButtons are now rendered once,
// globally, in App.jsx (no navbar here either — the global Navbar
// from App.jsx already covers that).
//
// Sections 5 (Management) and 6 (Advisors) replace the old placeholder
// LeadershipSection with the real "THE MANAGEMENT" / "THE ADVISORS"
// carousels (photos + bios) from the management-advisors-pages build.
export default function Philosophy() {
  return (
    <div className="phi-page">
      <Hero />
      <StorySection />
      <JourneyTimeline />
      <ValuesSection />
      <ManagementSection />
      <AdvisorsSection />
      <JoinMissionCta />
    </div>
  )
}
