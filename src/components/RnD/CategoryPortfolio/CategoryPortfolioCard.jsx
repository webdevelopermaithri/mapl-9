import { CATEGORY_VISUALS } from "../../../data/categoryVisuals";
// Reuses the Water page's card CSS as-is so cards look identical.
import "../Water/WaterPortfolioCard.css";

import meghdootFeather from "../../../assets/rnd/portfolio/meghdoot-feather.jpg";
import meghdootUltraLite from "../../../assets/rnd/portfolio/meghdoot-ultra-lite.jpg";
import compactDehumidification1 from "../../../assets/rnd/portfolio/compact-dehumidification-1.jpg";
import advancedAwg from "../../../assets/rnd/portfolio/advanced-awg.jpg";
import hybridAwg from "../../../assets/rnd/portfolio/hybrid-awg.png";
import passiveAwh from "../../../assets/rnd/portfolio/passive-awh.png";
import agricultureWater from "../../../assets/rnd/portfolio/agriculture-water.png";
import coldStorageEnvironment from "../../../assets/rnd/portfolio/cold-storage-environment.png";
import coldStorageSolution from "../../../assets/rnd/portfolio/cold-storage-solution.png";
import coldStorageOman from "../../../assets/rnd/portfolio/cold-storage-oman.png";
import healthcareWater from "../../../assets/rnd/portfolio/healthcare-water.jpg";
import labUltrapure from "../../../assets/rnd/portfolio/lab-ultrapure.jpg";
import semiconductorElectronics from "../../../assets/rnd/portfolio/semiconductor-electronics.jpg";
import greenHydrogenFeedwater from "../../../assets/rnd/portfolio/green-hydrogen-feedwater.jpg";
import coolingTowerReclamation from "../../../assets/rnd/portfolio/cooling-tower-reclamation.jpg";
import dataCenterResilience from "../../../assets/rnd/portfolio/data-center-resilience.jpg";
import circularEconomyAwg from "../../../assets/rnd/portfolio/circular-economy-awg.jpg";
import carbonCapturePathway from "../../../assets/rnd/portfolio/carbon-capture-pathway.jpg";
import waterCreditsTokens from "../../../assets/rnd/portfolio/water-credits-tokens.jpg";
import carbonCreditContribution from "../../../assets/rnd/portfolio/carbon-credit-contribution.jpg";
import esgSustainabilityAwg from "../../../assets/rnd/portfolio/esg-sustainability-awg.jpg";

// Same real photography used on the All Portfolio page, keyed by entry id,
// so every category subsection (Healthcare, Hydrogen, Agriculture, ...)
// shows the same product photos instead of a plain gradient wherever a
// photo exists. Entries without a match keep the category-level gradient.
const ENTRY_PHOTOS = {
  "meghdoot-feather": meghdootFeather,
  "meghdoot-ultra-lite": meghdootUltraLite,
  "compact-dehumidification": compactDehumidification1,
  "advanced-awg": advancedAwg,
  "hybrid-awg": hybridAwg,
  "passive-awh": passiveAwh,
  "agriculture-water": agricultureWater,
  "cold-storage-environment": [coldStorageOman],
  "cold-storage-solution": coldStorageSolution,
  "healthcare-water": healthcareWater,
  "lab-ultrapure": labUltrapure,
  "semiconductor-electronics": semiconductorElectronics,
  "green-hydrogen-feedwater": greenHydrogenFeedwater,
  "cooling-tower-reclamation": coolingTowerReclamation,
  "data-center-resilience": dataCenterResilience,
  "circular-economy-awg": circularEconomyAwg,
  "carbon-capture-pathway": carbonCapturePathway,
  "water-credits-tokens": waterCreditsTokens,
  "carbon-credit-contribution": carbonCreditContribution,
  "esg-sustainability-awg": esgSustainabilityAwg,
};

// Same card layout as WaterPortfolioCard, but sourced from
// data/portfolioEntries.js (the "All Portfolio" catalog) instead of a
// dedicated per-category dataset, and using a category-level gradient +
// icon (data/categoryVisuals.js) as a fallback when there's no photo.
export default function CategoryPortfolioCard({ entry }) {
  const visual = CATEGORY_VISUALS[entry.category] || CATEGORY_VISUALS.WATER;
  const Icon = visual.icon;
  const rawPhoto = ENTRY_PHOTOS[entry.id];
  const photos = Array.isArray(rawPhoto) ? rawPhoto : rawPhoto ? [rawPhoto] : [];

  return (
    <article className="wp-card">
      <div
        className="wp-card__photo"
        style={photos.length > 0 ? undefined : { background: visual.gradient }}
      >
        {photos.length === 1 && (
          <img src={photos[0]} alt={entry.title} className="wp-card__photo-img" />
        )}
        {photos.length > 1 && (
          <div style={{ position: "absolute", inset: 0, display: "flex" }}>
            {photos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${entry.title} ${i + 1}`}
                className="wp-card__photo-img"
                style={{ flex: 1, minWidth: 0 }}
              />
            ))}
          </div>
        )}
        <span className="wp-card__icon-badge">{Icon && <Icon size={18} />}</span>
        <span className="wp-card__category-pill">{entry.category}</span>
      </div>

      <div className="wp-card__body">
        <p className="wp-card__eyebrow">{entry.eyebrow}</p>
        <h3 className="wp-card__title">{entry.title}</h3>
        <p className="wp-card__tagline">{entry.subtitle}</p>
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
  );
}
