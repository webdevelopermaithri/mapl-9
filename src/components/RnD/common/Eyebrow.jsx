import React from "react";

export default function Eyebrow({ children, color = "#1E56A0", center = false }) {
  return (
    <div
      className="whero-eyebrow"
      style={{
        fontSize: 13,
        fontWeight: 600,
        color,
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 22,
        justifyContent: center ? "center" : "flex-start",
      }}
    >
      <span style={{ width: 28, height: 1.5, background: color }} />
      {children}
    </div>
  );
}
