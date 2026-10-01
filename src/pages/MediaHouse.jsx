import Hero from '../components/MediaHouse/Hero.jsx'
import RecognitionTicker from '../components/MediaHouse/RecognitionTicker.jsx'
import LatestNews from '../components/MediaHouse/LatestNews.jsx'
import Podcast from '../components/MediaHouse/Podcast.jsx'
import Journal from '../components/MediaHouse/Journal.jsx'
import JoinMissionCta from '../components/shared/JoinMissionCta.jsx'

// Full Media House page: AquaTalks podcast, editorial journal, press/news
// and newsletter signup. Navbar, Footer and FloatingButtons are already
// rendered globally by App.jsx, so this page only owns its own sections.
export default function MediaHouse() {
  return (
    <main>
      <Hero />
      <RecognitionTicker />
      <LatestNews />
      <Podcast />
      <Journal />
      <JoinMissionCta />
    </main>
  )
}
