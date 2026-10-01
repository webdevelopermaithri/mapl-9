import React, { useRef, useState, useEffect } from "react";
import { GRID_FILTERS, GRID_APPLICATIONS } from "../../data/gridApplications";

function ApplicationsGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const items =
    activeFilter === "All"
      ? GRID_APPLICATIONS
      : GRID_APPLICATIONS.filter(
          (a) => a.tag.toLowerCase() === activeFilter.toLowerCase()
        );

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [items.length]);

  const scrollByCards = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <div style={{ background: "#fff" }}>
      {/* HERO — front section unchanged */}
      <div
        style={{
          padding: "56px clamp(20px, 6vw, 48px) 28px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 18,
          }}
        >
          <span style={{ width: 24, height: 1, background: "#1e3a5f" }} />
          <span
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 12,
              letterSpacing: 2,
              fontWeight: 700,
              color: "#1e3a5f",
            }}
          >
            12 INDUSTRIES &middot; ONE PLATFORM
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(32px, 4.5vw, 48px)",
            fontWeight: 400,
            color: "#16232f",
            margin: "0 0 28px",
          }}
        >
          Where AWG{" "}
          <span style={{ fontStyle: "italic", color: "#2f6fd6" }}>
            changes everything.
          </span>
        </h1>

        {/* filter pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 10,
            fontFamily: "Arial, sans-serif",
          }}
        >
          <span style={{ color: "#8a94a0", fontSize: 15, marginRight: 4 }}>
            ⏷
          </span>
          {GRID_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                border:
                  activeFilter === f
                    ? "1px solid #2f6fd6"
                    : "1px solid #d7dce2",
                background: "transparent",
                color: activeFilter === f ? "#2f6fd6" : "#5c6570",
                borderRadius: 20,
                padding: "8px 18px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* CARD TRACK — figure/figcaption cards, scrolled horizontally,
          with arrow buttons centered vertically at each end */}
      <div style={{ position: "relative", padding: "20px 0 56px" }}>
        <button
          onClick={() => scrollByCards(-1)}
          aria-label="Scroll left"
          disabled={!canScrollLeft}
          style={{
            position: "absolute",
            left: 12,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 3,
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: "1px solid #d7dce2",
            background: "#fff",
            boxShadow: "0 4px 14px rgba(20,30,45,0.12)",
            color: canScrollLeft ? "#16232f" : "#c3c9d0",
            fontSize: 18,
            cursor: canScrollLeft ? "pointer" : "default",
          }}
        >
          ‹
        </button>

        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: 24,
            overflowX: "auto",
            scrollSnapType: "x proximity",
            scrollbarWidth: "none",
            padding: "0 64px",
          }}
        >
          {items.map((item, i) => (
            <figure
              key={i}
              style={{
                scrollSnapAlign: "start",
                flex: "0 0 280px",
                margin: 0,
                border: "1px solid #e7eaee",
                borderRadius: 10,
                overflow: "hidden",
                fontFamily: "Arial, sans-serif",
                background: "#fff",
              }}
            >
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    height: 220,
                    background: item.image
                      ? `#0b5f82 url(${item.image}) center / cover no-repeat`
                      : item.gradient,
                  }}
                  role="img"
                  aria-label={item.title}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    background: "rgba(255,255,255,0.92)",
                    color: "#16232f",
                    fontSize: 10.5,
                    fontWeight: 700,
                    letterSpacing: 1,
                    borderRadius: 12,
                    padding: "5px 12px",
                  }}
                >
                  {item.tag}
                </span>
              </div>

              <figcaption style={{ padding: "20px 20px 24px" }}>
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 20,
                    color: "#16232f",
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </div>
                <p
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.6,
                    color: "#6b7480",
                    margin: 0,
                  }}
                >
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <button
          onClick={() => scrollByCards(1)}
          aria-label="Scroll right"
          disabled={!canScrollRight}
          style={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 3,
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: "1px solid #d7dce2",
            background: "#fff",
            boxShadow: "0 4px 14px rgba(20,30,45,0.12)",
            color: canScrollRight ? "#16232f" : "#c3c9d0",
            fontSize: 18,
            cursor: canScrollRight ? "pointer" : "default",
          }}
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default ApplicationsGrid;
