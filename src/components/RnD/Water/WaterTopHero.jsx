import { categories } from '../../../data/waterPortfolio'
import './WaterTopHero.css'

// Pulled straight from the same `categories` list that drives the filter
// bar lower on the page, so every button up here is interconnected with
// every button below (including "Water" itself) — add/remove a category
// in data/waterPortfolio.js and both rows stay in sync automatically.
const topCategories = categories.map((c) => c.label)

export default function TopHero({ activeId, onSelect }) {
  return (
    <section className="wp-top-hero wp-top-hero--single">
      <div className="wp-top-hero__col wp-top-hero__col--text">
        <p className="wp-top-hero__eyebrow">
          <span className="wp-top-hero__eyebrow-rule" />
          R&amp;D Portfolio
        </p>
        <h1 className="wp-top-hero__title">
          Water research
          <br />
          portfolio.
        </h1>
        <p className="wp-top-hero__lede">
          Explore Maithri&apos;s R&amp;D work by category. Each page organizes
          the research concepts, operational value, key metrics and
          deployment opportunities from the R&amp;D-to-marketing brief into a
          clean, scannable grid.
        </p>

        <div className="wp-top-hero__tabs" role="tablist" aria-label="Jump to a research category">
          {topCategories.map((label) => {
            const id = label.toLowerCase()
            return (
              <button
                key={id}
                role="tab"
                aria-selected={activeId === id}
                className={`wp-top-hero__tab${activeId === id ? ' wp-top-hero__tab--active' : ''}`}
                onClick={() => onSelect?.(id)}
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
