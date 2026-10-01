import React from "react";

export default function Icon({ name }) {
  const common = { width: 22, height: 22, stroke: "#1E56A0", strokeWidth: 1.8, fill: "none" };

  switch (name) {
    case "droplet":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path
            d="M12 3s7 7.5 7 12a7 7 0 1 1-14 0c0-4.5 7-12 7-12z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "flask":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path
            d="M9 3h6M10 3v6l-5.2 8.8A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-3.2L14 9V3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "chart":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M4 19V5M4 19h16M8 15l4-5 3 3 4-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "waves":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path
            d="M2 8c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2M2 14c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
