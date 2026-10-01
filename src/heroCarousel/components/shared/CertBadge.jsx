export default function CertBadge({ shape, color, label, cross, size = 76 }) {
  if (shape === "triangle" || shape === "octagon") {
    const clip =
      shape === "triangle"
        ? "polygon(50% 6%, 96% 92%, 4% 92%)"
        : "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)";
    return (
      <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
        <div style={{ position: "absolute", inset: 0, clipPath: clip, background: color }} />
        <div style={{ position: "absolute", inset: 2.5, clipPath: clip, background: "#fff" }} />
        <span
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: shape === "triangle" ? 14 : 0,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 700,
            fontSize: 14,
            color,
          }}
        >
          {label}
        </span>
      </div>
    );
  }
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: shape === "circle" ? "50%" : 16,
        border: `2px solid ${color}`,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontWeight: 700,
        fontSize: 14,
        color,
      }}
    >
      {cross && (
        <>
          <span
            style={{
              position: "absolute",
              left: "50%",
              top: "14%",
              bottom: "14%",
              width: 1.4,
              background: color,
              opacity: 0.55,
              transform: "translateX(-50%)",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "14%",
              right: "14%",
              height: 1.4,
              background: color,
              opacity: 0.55,
              transform: "translateY(-50%)",
            }}
          />
        </>
      )}
      {label}
    </div>
  );
}
