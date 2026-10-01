import { CATEGORIES } from "../../../data/portfolioEntries";
// Reuses the Water page's CSS as-is so every category subsection looks
// and feels identical to it, without touching or duplicating that file.
import "../Water/WaterTopHero.css";

function titleCase(str) {
  return str.charAt(0) + str.slice(1).toLowerCase();
}

// Pulled straight from the same CATEGORIES list that drives the filter
// bar lower on the page (and All Portfolio), so every button up here is
// interconnected with every button below — add/remove a category in one
// place and both rows stay in sync automatically.
const topCategories = CATEGORIES.map((c) => titleCase(c));

export default function CategoryTopHero({ category, activeId, onSelect }) {
  return (
    <section className="wp-top-hero wp-top-hero--single">
      <div className="wp-top-hero__col wp-top-hero__col--text">
        <p className="wp-top-hero__eyebrow">
          <span className="wp-top-hero__eyebrow-rule" />
          R&amp;D Portfolio
        </p>
        <h1 className="wp-top-hero__title">
          {titleCase(category)} research
          <br />
          portfolio.
        </h1>
        <p className="wp-top-hero__lede">
          Explore Maithri&apos;s R&amp;D work by category. Each page organizes
          the research concepts, operational value, key metrics and
          deployment opportunities from the R&amp;D-to-marketing brief into a
          clean, scannable grid — pulled from the same catalog as the full
          portfolio directory.
        </p>

        <div className="wp-top-hero__tabs" role="tablist" aria-label="Jump to a research category">
          {topCategories.map((label) => {
            const id = label.toLowerCase();
            return (
              <button
                key={id}
                role="tab"
                aria-selected={activeId === id}
                className={`wp-top-hero__tab${activeId === id ? " wp-top-hero__tab--active" : ""}`}
                onClick={() => onSelect?.(id)}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
