import Hero from '../components/Technology/Hero.jsx'
import RecognitionBar from '../components/Technology/RecognitionBar.jsx'
import HowItWorks from '../components/Technology/HowItWorks.jsx'
import ProductFamily from '../components/Technology/ProductFamily.jsx'
import EngineeringSpecs from '../components/Technology/EngineeringSpecs.jsx'
import WaterQuality from '../components/Technology/WaterQuality.jsx'
import CtaBand from '../components/Technology/CtaBand.jsx'

// Footer + FloatingButtons are now rendered once, globally, in App.jsx
export default function Technology() {
  return (
    <main>
      <Hero />
      <RecognitionBar />
      <HowItWorks />
      <ProductFamily />
      <EngineeringSpecs />
      <WaterQuality />
      <CtaBand />
    </main>
  )
}
