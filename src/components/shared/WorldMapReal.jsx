import React, { useEffect, useState } from "react";

// Presence map, now sourced from the standalone Leaflet-based HTML file
// (public/media/meghdoot-presence-map-37-countries.html) instead of the
// old hand-drawn SVG. Rendered inside a responsive iframe so the map's own
// styles, tooltips, hover states and legend all work unmodified.
export default function WorldMapReal() {
  const [height, setHeight] = useState(620);

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth <= 640) {
        setHeight(460);
      } else {
        setHeight(620);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "980px",
        margin: "0 auto",
        borderRadius: "18px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(20,30,60,0.08)",
      }}
    >
      <iframe
        src="/media/meghdoot-presence-map-37-countries.html"
        title="MEGHDOOT® presence map — 40 countries"
        scrolling="no"
        style={{
          width: "100%",
          height: `${height}px`,
          border: "none",
          display: "block",
          overflow: "hidden",
        }}
      />
    </div>
  );
}
