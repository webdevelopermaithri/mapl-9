import React from "react";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioGrid({ id, entries }) {
  return (
    <>
      <div id={id} className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <p className="text-xs font-bold tracking-widest text-blue-600 mb-4 flex items-center gap-2">
          <span className="w-6 h-px bg-blue-600 inline-block" /> R&amp;D PORTFOLIO
        </p>
        <h2 className="text-4xl font-serif text-slate-900 mb-4">
          Concepts moving from <span className="italic text-blue-600">research to pilots.</span>
        </h2>
        <p className="text-slate-500 mb-8">
          Browse the complete R&amp;D map from the PDF: compact AWG, advanced harvesting,
          healthcare, horticulture, industrial recovery, and sustainability.
        </p>

        <p className="text-slate-400 text-sm mb-10">{entries.length} entries</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-20">
        {entries.map((entry) => (
          <PortfolioCard key={entry.id} entry={entry} />
        ))}
      </div>
    </>
  );
}
