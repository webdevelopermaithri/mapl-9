import React, { useState } from "react";
import Eyebrow from "../common/Eyebrow";
import PortfolioPill from "./PortfolioPill";
import PortfolioCard from "./PortfolioCard";
import { CATEGORIES, ENTRIES } from "../../../data/portfolioEntries";

// Full "All Portfolio" grid, ported from the standalone maithri-portfolio
// build. Sits right after the R&D overview (HeroSection) on the R&D page,
// giving visitors the complete, filterable list of every R&D concept.
export default function AllPortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filtered =
    activeCategory === "ALL" ? ENTRIES : ENTRIES.filter((e) => e.category === activeCategory);

  return (
    <section id="all-portfolio" style={{ padding: "70px 8vw 90px", maxWidth: 1440, margin: "0 auto" }}>
      <Eyebrow>ALL PORTFOLIO</Eyebrow>
      <h2
        className="whero-serif"
        style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, color: "#0B2545", margin: "0 0 16px 0", fontWeight: 600, maxWidth: 700 }}
      >
        Concepts moving from
        <br />
        <span style={{ fontStyle: "italic", color: "#1E56A0", fontWeight: 500 }}>research to pilots.</span>
      </h2>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: "#5A6779", maxWidth: 640, marginBottom: 32 }}>
        Browse the complete R&amp;D map: compact AWG, advanced harvesting, healthcare, hydrogen,
        industrial recovery, digital infrastructure, sustainability and credits.
      </p>

      <div className="flex flex-wrap gap-3 mb-2">
        {CATEGORIES.map((cat) => (
          <PortfolioPill
            key={cat}
            label={cat}
            active={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
          />
        ))}
      </div>
      <p className="text-slate-400 text-sm mb-10">{filtered.length} entries</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((entry) => (
          <PortfolioCard key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
}
