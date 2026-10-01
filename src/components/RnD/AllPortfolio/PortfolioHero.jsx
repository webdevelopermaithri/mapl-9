import React from "react";
import { HERO_PILLS } from "../../../data/portfolioEntries";

export default function PortfolioHero({ onExplore }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/60 to-slate-100">
      {/* decorative blurred blobs, matching the standalone portfolio reference */}
      <div className="pointer-events-none absolute -left-10 top-1/3 w-40 h-40 rounded-full bg-blue-200/40 blur-2xl" />
      <div className="pointer-events-none absolute left-1/3 top-24 w-16 h-16 rounded-full bg-white/70 blur-md" />
      <div className="pointer-events-none absolute left-16 bottom-10 w-6 h-6 rounded-full bg-blue-300/50 blur-sm" />
      <div className="pointer-events-none absolute right-[38%] bottom-24 w-4 h-4 rounded-full bg-blue-300/40 blur-sm" />
      <div className="pointer-events-none absolute right-10 top-1/4 w-20 h-20 rounded-full bg-white/50 blur-xl" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 py-16 lg:py-24 text-center">
        <p className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-blue-600 mb-6">
          <span className="w-6 h-px bg-blue-600 inline-block" /> R&amp;D PORTFOLIO
        </p>
        <h1 className="text-6xl lg:text-7xl font-serif text-slate-900 leading-[1.05] mb-6">
          Complete research portfolio.
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed">
          Explore Maithri's R&amp;D work by category. Each entry organizes the research
          concepts, operational value, key metrics and deployment opportunities from the
          R&amp;D-to-marketing brief into a clean, scannable grid.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {HERO_PILLS.map((label) => (
            <button
              key={label}
              onClick={() => onExplore(label)}
              className="px-5 py-2 rounded-full text-xs font-bold tracking-wide bg-white border border-slate-200 text-blue-600 shadow-sm hover:shadow transition-shadow"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
