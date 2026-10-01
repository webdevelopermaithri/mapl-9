import React from "react";
import { CATEGORY_STYLES } from "../../../data/portfolioEntries";
import { tm } from "../../../utils/formatTM.jsx";

import meghdootFeather from "../../../assets/rnd/portfolio/meghdoot-feather.jpg";
import meghdootUltraLite from "../../../assets/rnd/portfolio/meghdoot-ultra-lite.jpg";
import compactDehumidification1 from "../../../assets/rnd/portfolio/compact-dehumidification-1.jpg";
import compactDehumidification2 from "../../../assets/rnd/portfolio/compact-dehumidification-2.png";
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

const IMAGES = {
  "meghdoot-feather": meghdootFeather,
  "meghdoot-ultra-lite": meghdootUltraLite,
  "compact-dehumidification-1": compactDehumidification1,
  "compact-dehumidification-2": compactDehumidification2,
  "advanced-awg": advancedAwg,
  "hybrid-awg": hybridAwg,
  "passive-awh": passiveAwh,
  "agriculture-water": agricultureWater,
  "cold-storage-environment": coldStorageEnvironment,
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

// Same real product photography used on the Water and Category portfolio
// subsections, keyed by entry id — so the All Portfolio page shows the
// actual photos too instead of a plain gradient wherever one exists.
// Entries without a match here keep the gradient placeholder.
const ENTRY_PHOTOS = {
  "meghdoot-feather": [meghdootFeather],
  "meghdoot-ultra-lite": [meghdootUltraLite],
  "compact-dehumidification": [compactDehumidification1],
  "advanced-awg": [advancedAwg],
  "hybrid-awg": [hybridAwg],
  "passive-awh": [passiveAwh],
  "agriculture-water": [agricultureWater],
  "cold-storage-environment": [coldStorageOman],
  "healthcare-water": [healthcareWater],
  "lab-ultrapure": [labUltrapure],
  "semiconductor-electronics": [semiconductorElectronics],
  "green-hydrogen-feedwater": [greenHydrogenFeedwater],
  "cooling-tower-reclamation": [coolingTowerReclamation],
  "data-center-resilience": [dataCenterResilience],
  "circular-economy-awg": [circularEconomyAwg],
  "carbon-capture-pathway": [carbonCapturePathway],
  "water-credits-tokens": [waterCreditsTokens],
  "carbon-credit-contribution": [carbonCreditContribution],
  "esg-sustainability-awg": [esgSustainabilityAwg],
};

// Content overrides scoped to this (All Portfolio) card only — lets a
// specific entry show different copy here than on the Category/Water
// portfolio pages, which pull the shared text straight from
// portfolioEntries.js.
const CONTENT_OVERRIDES = {
  "compact-dehumidification": {
    eyebrow: "DEFENSE AND COASTAL UTILITY",
    subtitle: "Precision humidity control with usable water recovery.",
    description:
      "A compact, energy-efficient dehumidification system for radomes, cabins, control units and other enclosed environments exposed to high humidity.",
    tags: ["HUMIDITY CONTROL", "WATER BY-PRODUCT", "CONFINED-SPACE DESIGN"],
    bullets: [
      "Protects sensitive equipment in coastal and high-humidity environments.",
      "Maintains optimal operating conditions in space-constrained zones.",
      "Combines environmental control with recoverable water generation.",
    ],
  },
};

export default function PortfolioCard({ entry: rawEntry }) {
  const entry = { ...rawEntry, ...(CONTENT_OVERRIDES[rawEntry.id] || {}) };
  const style = CATEGORY_STYLES[entry.category] || CATEGORY_STYLES.WATER;
  const explicitImages = (entry.images || []).map((key) => IMAGES[key]).filter(Boolean);
  const images = explicitImages.length > 0 ? explicitImages : (ENTRY_PHOTOS[entry.id] || []);

  return (
    <div className="w-full h-full flex flex-col rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
      <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-500 flex">
        {images.length > 0 ? (
          images.length === 1 ? (
            <img
              src={images[0]}
              alt={entry.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex">
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${entry.title} ${i + 1}`}
                  className="flex-1 min-w-0 h-full object-cover"
                />
              ))}
            </div>
          )
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/10" />
        <span
          className={
            "relative z-10 m-4 w-10 h-10 rounded-full flex items-center justify-center text-lg " +
            style.badge
          }
        >
          ◐
        </span>
        <span
          className={
            "relative z-10 m-4 ml-auto self-start px-3 py-1 rounded-full text-[11px] font-bold tracking-wide bg-white/90 h-fit " +
            style.badge
          }
        >
          {entry.category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs font-bold tracking-widest text-blue-600 mb-2">
          {entry.eyebrow}
        </p>
        <h3 className="text-2xl font-serif mb-2 text-slate-900">{tm(entry.title)}</h3>
        <p className="font-semibold text-slate-800 mb-3">{entry.subtitle}</p>
        <p className="text-slate-500 mb-4 leading-relaxed text-sm">{tm(entry.description)}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className={"px-3 py-1 rounded-full text-[11px] font-bold tracking-wide " + style.tag}
            >
              {tag}
            </span>
          ))}
        </div>

        <ul className="space-y-2">
          {entry.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
