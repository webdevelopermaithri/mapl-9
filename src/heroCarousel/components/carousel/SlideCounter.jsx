export default function SlideCounter({ navSlideCount, activeIndex }) {
  return (
    <div
      className="hero-slide-counter"
      style={{
        position: "fixed",
        bottom: 28,
        left: "6%",
        zIndex: 3,
        display: activeIndex < navSlideCount ? "flex" : "none",
        alignItems: "center",
        gap: 10,
        fontFamily: "Arial, sans-serif",
        fontSize: 13,
        color: "#5b6b78",
        letterSpacing: 1,
      }}
    >
      <span style={{ color: "#1f6fb2", fontWeight: 700 }}>
        {String(activeIndex + 1).padStart(2, "0")}
      </span>
      <span style={{ width: 40, height: 1, background: "rgba(20,54,92,0.25)" }} />
      <span>{String(navSlideCount).padStart(2, "0")}</span>
    </div>
  );
}
