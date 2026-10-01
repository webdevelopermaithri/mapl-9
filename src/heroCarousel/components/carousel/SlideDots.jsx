import { useState } from "react";

export default function SlideDots({ slides, navSlideCount, activeIndex, scrollToSlide, setIsHoveringBtn }) {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div
      className="hero-nav-dots"
      style={{
        position: "fixed",
        right: 24,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 3,
        display: activeIndex < navSlideCount ? "flex" : "none",
        flexDirection: "column",
        gap: 14,
      }}
    >
      {slides.slice(0, navSlideCount).map((s, i) => {
        const isActive = activeIndex === i;
        const isHovered = hoverIndex === i;
        return (
          <button
            key={i}
            onClick={() => scrollToSlide(i)}
            onMouseEnter={() => {
              setIsHoveringBtn(true);
              setHoverIndex(i);
            }}
            onMouseLeave={() => {
              setIsHoveringBtn(false);
              setHoverIndex(null);
            }}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: 22,
              height: 22,
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              border: isActive || isHovered
                ? "1.5px solid #1f6fb2"
                : "1.5px solid transparent",
              background: "transparent",
              cursor: "none",
              boxSizing: "border-box",
              transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
              transform: isHovered ? "scale(1.1)" : "scale(1)",
              boxShadow: isHovered
                ? "0 0 0 4px rgba(31,111,178,0.18)"
                : "0 0 0 0 rgba(31,111,178,0)",
            }}
          >
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: isActive ? "#1f6fb2" : "rgba(20,54,92,0.25)",
                transform: isActive ? "scale(1.3)" : "scale(1)",
                boxShadow: isActive
                  ? "0 0 0 4px rgba(31,111,178,0.20)"
                  : "0 0 0 0 rgba(31,111,178,0)",
                transition: "background 0.3s, transform 0.3s, box-shadow 0.3s",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
