import { iconMap, photoMap } from '../../../data/waterVisuals'
import { tm } from '../../../utils/formatTM.jsx'
import './WaterPortfolioCard.css'

import meghdootFeather from '../../../assets/rnd/portfolio/meghdoot-feather.jpg'
import meghdootUltraLite from '../../../assets/rnd/portfolio/meghdoot-ultra-lite.jpg'
import advancedAwg from '../../../assets/rnd/portfolio/advanced-awg.jpg'
import hybridAwg from '../../../assets/rnd/portfolio/hybrid-awg.png'
import passiveAwh from '../../../assets/rnd/portfolio/passive-awh.png'
import coolingTowerReclamation from '../../../assets/rnd/portfolio/cooling-tower-reclamation-water.png'

// Real product photography, keyed by the water portfolio entry id.
// Entries without a match here fall back to the painterly gradient
// from waterVisuals.js.
const ENTRY_PHOTOS = {
  'meghdoot-feather': meghdootFeather,
  'meghdoot-ultra-lite': meghdootUltraLite,
  'advanced-awg-system': advancedAwg,
  'hybrid-awg': hybridAwg,
  'passive-awh-system': passiveAwh,
  'cooling-tower-reclamation': coolingTowerReclamation,
}

export default function PortfolioCard({ entry }) {
  const Icon = iconMap[entry.icon]
  const photo = ENTRY_PHOTOS[entry.id]

  return (
    <article className="wp-card">
      <div
        className="wp-card__photo"
        style={photo ? undefined : { background: photoMap[entry.photo] }}
      >
        {photo && (
          <img src={photo} alt={entry.title} className="wp-card__photo-img" />
        )}
        <span className="wp-card__icon-badge">{Icon && <Icon size={18} />}</span>
        <span className="wp-card__category-pill">{entry.category}</span>
      </div>

      <div className="wp-card__body">
        <p className="wp-card__eyebrow">{entry.eyebrow}</p>
        <h3 className="wp-card__title">{tm(entry.title)}</h3>
        <p className="wp-card__tagline">{entry.tagline}</p>
        <p className="wp-card__description">{entry.description}</p>

        <div className="wp-card__tags">
          {entry.tags.map((tag) => (
            <span className="wp-card__tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <ul className="wp-card__bullets">
          {entry.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
