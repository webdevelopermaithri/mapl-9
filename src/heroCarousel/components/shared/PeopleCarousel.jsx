import { useEffect, useRef, useState } from "react";
import { shiftArrowBtnStyle } from "../../styles/shiftArrowBtnStyle";

const AUTO_PLAY_MS = 3500;

// Generic "one person at a time" carousel used by both the Management and
// Advisors sections on Home. Auto-advances continuously and loops, pausing
// while the visitor is hovering/interacting with it.
export default function PeopleCarousel({ title, people, setIsHoveringBtn }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = people.length;
  const person = people[index];

  const goPrev = () => setIndex((p) => (p - 1 + total) % total);
  const goNext = () => setIndex((p) => (p + 1) % total);

  const intervalRef = useRef(null);
  useEffect(() => {
    if (isPaused) return undefined;
    intervalRef.current = setInterval(() => {
      setIndex((p) => (p + 1) % total);
    }, AUTO_PLAY_MS);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, total]);

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        position: "relative",
        background: "#ffffff",
        height: "auto",
        minHeight: "unset",
        boxSizing: "border-box",
        scrollSnapAlign: "start",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "110px 6% 100px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 700,
            fontSize: 40,
            letterSpacing: 0.5,
            margin: "0 0 60px",
            color: "#163a8f",
          }}
        >
          {title}
        </h1>

        <div style={{ position: "relative" }}>
          {/* prev arrow */}
          <button
            onClick={goPrev}
            onMouseEnter={() => setIsHoveringBtn && setIsHoveringBtn(true)}
            onMouseLeave={() => setIsHoveringBtn && setIsHoveringBtn(false)}
            aria-label={`Previous ${title.toLowerCase()} member`}
            style={{
              ...shiftArrowBtnStyle,
              position: "absolute",
              left: -8,
              top: "40%",
              transform: "translateY(-50%)",
              border: "none",
              background: "transparent",
              color: "#2b3b4d",
              fontSize: 26,
              zIndex: 2,
            }}
          >
            &lsaquo;
          </button>

          {/* next arrow */}
          <button
            onClick={goNext}
            onMouseEnter={() => setIsHoveringBtn && setIsHoveringBtn(true)}
            onMouseLeave={() => setIsHoveringBtn && setIsHoveringBtn(false)}
            aria-label={`Next ${title.toLowerCase()} member`}
            style={{
              ...shiftArrowBtnStyle,
              position: "absolute",
              right: -8,
              top: "40%",
              transform: "translateY(-50%)",
              border: "none",
              background: "transparent",
              color: "#2b3b4d",
              fontSize: 26,
              zIndex: 2,
            }}
          >
            &rsaquo;
          </button>

          {/* active person card */}
          <div
            key={index}
            style={{
              animation: "peopleCarouselFadeIn 0.5s ease",
              padding: "0 60px",
            }}
          >
            <div
              style={{
                width: 220,
                height: 220,
                borderRadius: "50%",
                margin: "0 auto 34px",
                overflow: "hidden",
                background: "radial-gradient(circle at 50% 20%, #eaf3fb 0%, #ffffff 70%)",
                boxShadow: "0 12px 30px rgba(20,50,90,0.10)",
              }}
            >
              <img
                src={person.image}
                alt={person.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
              />
            </div>

            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 700,
                fontSize: 28,
                margin: "0 0 18px",
                color: "#163a8f",
              }}
            >
              {person.name}
            </h2>

            <p
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: 17,
                color: "#3b4a58",
                margin: "0 0 26px",
              }}
            >
              {person.role}
            </p>

            <p
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: 15.5,
                lineHeight: 1.75,
                color: "#3b6fd6",
                maxWidth: 760,
                margin: "0 auto",
              }}
            >
              {person.bio}
            </p>
          </div>
        </div>

        {/* dot navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 48,
          }}
        >
          {people.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              onMouseEnter={() => setIsHoveringBtn && setIsHoveringBtn(true)}
              onMouseLeave={() => setIsHoveringBtn && setIsHoveringBtn(false)}
              aria-label={`Go to ${title.toLowerCase()} member ${i + 1}`}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                border: "none",
                padding: 0,
                cursor: "none",
                background: i === index ? "#163a8f" : "#c7d3de",
                transition: "background 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes peopleCarouselFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
