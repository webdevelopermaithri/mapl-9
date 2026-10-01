import ContactSection from '../components/DesignWaterSystem/ContactSection.jsx'
import FAQSection from '../components/DesignWaterSystem/FAQSection.jsx'
import '../components/DesignWaterSystem/DesignWaterSystem.css'

// Footer + FloatingButtons are now rendered once, globally, in App.jsx
export default function DesignSystem() {
  return (
    <div className="dyws-page page">
      <main>
        <ContactSection />
        <FAQSection />
      </main>
    </div>
  )
}
