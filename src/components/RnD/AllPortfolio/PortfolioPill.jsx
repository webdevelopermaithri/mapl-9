import React from "react";

export default function PortfolioPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        "px-5 py-2 rounded-full text-xs font-semibold tracking-wide border bg-transparent transition-colors " +
        (active
          ? "border-blue-500 text-blue-600"
          : "border-slate-300 text-slate-600 hover:border-slate-400")
      }
    >
      {label}
    </button>
  );
}
