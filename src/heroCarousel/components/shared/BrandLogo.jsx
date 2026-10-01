import { useState } from "react";

export default function BrandLogo({ b }) {
  const [failed, setFailed] = useState(false);
  const showFallback = !b.logo || failed;

  return (
    <div
      style={{
        flex: "0 0 auto",
        height: 50,
        maxWidth: 260,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {showFallback ? (
        <span
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 18,
            fontWeight: 700,
            color: "#3a4750",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          {b.name}
        </span>
      ) : (
        <img
          src={b.logo}
          alt={b.name}
          onError={() => setFailed(true)}
          style={{
            height: "100%",
            width: "auto",
            maxWidth: 260,
            objectFit: "contain",
          }}
        />
      )}
    </div>
  );
}
