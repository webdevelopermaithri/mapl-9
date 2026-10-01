import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Decorative floating water-bubble circles, scattered around the CTA copy.
// Positions/sizes are tuned to loosely match the reference layout, not a grid.
const BUBBLES = [
  { top: "18%", left: "6%", size: 22, opacity: 0.5 },
  { top: "34%", left: "13%", size: 12, opacity: 0.35 },
  { top: "56%", left: "8%", size: 16, opacity: 0.4 },
  { top: "74%", left: "18%", size: 10, opacity: 0.3 },
  { top: "22%", left: "52%", size: 14, opacity: 0.45 },
  { top: "10%", left: "76%", size: 10, opacity: 0.35 },
  { top: "58%", left: "88%", size: 20, opacity: 0.4 },
  { top: "78%", left: "94%", size: 12, opacity: 0.3 },
  { top: "40%", left: "96%", size: 8, opacity: 0.3 },
];

// Animated 3D-shaded bubble background, drawn on a full-bleed canvas —
// replaces the previous looping video background with a lightweight,
// gently-drifting sphere animation.
function BubbleCanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    let width, height;
    let animationId;

    const BUBBLE_COUNT = 18;
    const bubbles = [];

    class Bubble {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 25 + 10;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.alpha = Math.random() * 0.4 + 0.3;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < -50) this.x = width + 50;
        if (this.x > width + 50) this.x = -50;
        if (this.y < -50) this.y = height + 50;
        if (this.y > height + 50) this.y = -50;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        const gradient = ctx.createRadialGradient(
          this.x - this.radius * 0.3,
          this.y - this.radius * 0.3,
          this.radius * 0.1,
          this.x,
          this.y,
          this.radius
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.95)");
        gradient.addColorStop(0.5, "rgba(230, 240, 255, 0.6)");
        gradient.addColorStop(1, "rgba(195, 215, 235, 0.1)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;
    };

    resize();
    for (let i = 0; i < BUBBLE_COUNT; i++) bubbles.push(new Bubble());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      bubbles.forEach((b) => {
        b.update();
        b.draw();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

export default function JoinMissionSection({ setIsHoveringBtn }) {
  const [hoveredCta, setHoveredCta] = useState(null);
  return (
    <section
      style={{
        position: "relative",
        height: "auto",
        minHeight: "unset",
        boxSizing: "border-box",
        overflow: "hidden",
        scrollSnapAlign: "start",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(180deg, #f0f4f9 0%, #e5edf5 50%, #f4f8fc 100%)",
      }}
    >
      {/* animated bubble background, replacing the previous looping video */}
      <BubbleCanvasBackground />

      {/* floating decorative bubbles */}
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.9), rgba(150,190,225,0.25))",
            border: "1px solid rgba(120,165,205,0.35)",
            opacity: b.opacity,
            pointerEvents: "none",
          }}
        />
      ))}

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 900,
          margin: "0 auto",
          padding: "120px 6% 100px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            color: "#3b6fd6",
            fontFamily: "Arial, sans-serif",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 2.5,
            textTransform: "uppercase",
            marginBottom: 26,
          }}
        >
          <span style={{ width: 28, height: 1.5, background: "#3b6fd6" }} />
          Join the Mission
        </div>

        <h1
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 400,
            fontSize: "clamp(24px, 3.4vw, 44px)",
            lineHeight: 1.25,
            margin: "0 0 26px",
            color: "#16232e",
          }}
        >
          Drink different.{" "}
          <em style={{ fontStyle: "italic", fontWeight: 400, color: "#3b6fd6" }}>Think ahead.</em>
        </h1>

        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 17,
            lineHeight: 1.7,
            color: "#5b6b78",
            maxWidth: 620,
            margin: "0 auto 40px",
          }}
        >
          We welcome you to become a part of the water revolution.
        </p>

        <div
          style={{
            display: "flex",
            gap: "clamp(8px, 3vw, 16px)",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/design-your-water-system#contact"
            onMouseEnter={() => {
              setIsHoveringBtn(true);
              setHoveredCta(0);
            }}
            onMouseLeave={() => {
              setIsHoveringBtn(false);
              setHoveredCta(null);
            }}
            style={{
              fontFamily: "Arial, sans-serif",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              whiteSpace: "nowrap",
              fontSize: "clamp(13px, 3.2vw, 15px)",
              fontWeight: 600,
              padding: "clamp(11px, 2.6vw, 16px) clamp(16px, 4.5vw, 28px)",
              borderRadius: 30,
              border: "none",
              background: hoveredCta === 0 ? "#164e80" : "#1f6fb2",
              color: "#fff",
              cursor: "none",
              textDecoration: "none",
              transform: hoveredCta === 0 ? "translateY(-2px) scale(1.03)" : "translateY(0) scale(1)",
              boxShadow: hoveredCta === 0 ? "0 12px 26px rgba(31,111,178,0.35)" : "0 0 0 rgba(31,111,178,0)",
              transition: "background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            Contact Us
            <span
              style={{
                display: "inline-block",
                transform: hoveredCta === 0 ? "translateX(3px)" : "translateX(0)",
                transition: "transform 0.2s ease",
              }}
            >
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
