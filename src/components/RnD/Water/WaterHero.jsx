import './WaterHero.css'

export default function Hero() {
  return (
    <section className="wp-hero">
      <p className="wp-hero__eyebrow">
        <span className="wp-hero__eyebrow-rule" />
        R&amp;D Portfolio
      </p>
      <h1 className="wp-hero__title">
        Concepts moving from <em>research to pilots.</em>
      </h1>
      <p className="wp-hero__lede">
        Browse the complete R&amp;D map from the PDF: compact AWG, advanced
        harvesting, healthcare, hydrogen, industrial recovery, digital
        infrastructure, sustainability and credits.
      </p>
    </section>
  )
}
