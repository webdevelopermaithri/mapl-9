import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Eyebrow from "./common/Eyebrow";

// Same lightweight drifting-sphere canvas used on the Technology page's
// "Join the Mission" CTA (and reused on Products' version of it), swapped
// in here in place of the old photo-real bubbles video for a consistent,
// cleaner background across all CTA sections.
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

// Same scattered floating-bubble positions as the Technology/Products CTA.
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

export default function CollaborateSection() {
  const navigate = useNavigate();
  return (
    <section style={{ position: "relative", padding: "40px 8vw 72px", background: "#EFF5FB", overflow: "hidden", textAlign: "center" }}>
      <BubbleCanvasBackground />
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

      <div style={{ maxWidth: 780, margin: "0 auto", position: "relative" }}>
        <Eyebrow center>JOIN THE MISSION</Eyebrow>
        <h2 className="whero-serif" style={{ fontSize: "clamp(32px, 4vw, 54px)", color: "#0B2545", fontWeight: 600, margin: 0, lineHeight: 1.14 }}>
          Drink different. <span style={{ fontStyle: "italic", color: "#1E56A0", fontWeight: 500 }}>Think ahead.</span>
        </h2>
        <p style={{ fontSize: 16.5, color: "#5A6779", lineHeight: 1.7, marginTop: 22 }}>
          We welcome you to become a part of the water revolution.
        </p>

        <div style={{ marginTop: 38, display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={() => navigate("/design-your-water-system#contact")}
            className="cta-btn"
            style={{
              background: "#1E56A0",
              color: "#fff",
              border: "none",
              borderRadius: 999,
              padding: "16px 30px",
              fontSize: 15.5,
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
            }}
          >
            Contact Us <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
