import React from "react";

export default function Blob({ top, left, size = 56, opacity = 0.5 }) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        width: size,
        height: size,
        borderRadius: "50%",
        background: "radial-gradient(circle at 35% 35%, #FFFFFF 0%, #CFE0F5 70%)",
        opacity,
        pointerEvents: "none",
      }}
    />
  );
}
