// Transparent water-bubble cursor, no trailing effects, grows on button hover.
export default function CustomCursor({ cursorRef, isHoveringBtn, isDarkSlide }) {
  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: isHoveringBtn ? 54 : 30,
        height: isHoveringBtn ? 54 : 30,
        marginLeft: isHoveringBtn ? -27 : -15,
        marginTop: isHoveringBtn ? -27 : -15,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        background: isDarkSlide ? "rgba(20,40,60,0.06)" : "rgba(255,255,255,0.08)",
        border: isHoveringBtn
          ? isDarkSlide
            ? "1.5px solid rgba(20,40,60,0.85)"
            : "1.5px solid rgba(255,255,255,0.9)"
          : isDarkSlide
          ? "1.5px solid rgba(20,40,60,0.55)"
          : "1.5px solid rgba(255,255,255,0.6)",
        boxShadow: isHoveringBtn
          ? "inset 0 0 10px rgba(255,255,255,0.5), inset -4px -4px 8px rgba(255,255,255,0.25)"
          : "inset 0 0 6px rgba(255,255,255,0.35), inset -3px -3px 6px rgba(255,255,255,0.2)",
        transition:
          "width 0.25s ease, height 0.25s ease, margin 0.25s ease, border 0.25s ease, box-shadow 0.25s ease",
      }}
    />
  );
}
