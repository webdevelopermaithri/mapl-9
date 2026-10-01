import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BubbleField from "../common/BubbleField.jsx";

// Same drifting-sphere canvas animation used on the Technology page's
// closing "Join the Mission" CTA — shared here so every product page
// (Products, All Products, category pages, product detail) ends on the
// exact same animated section.
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

// Same scattered floating-bubble positions as the Technology page CTA.
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

export default function JoinMissionCta() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f0f4f9 0%, #e5edf5 50%, #f4f8fc 100%)",
      }}
    >
      {/* animated bubble background */}
      <BubbleCanvasBackground />

      {/* Rising bubble particles — same ambient animation used on the
          Projects page's closing CTA and the Impact Atlas section, so
          this closing section feels consistent with the rest of the site. */}
      <BubbleField count={22} />

      {/* floating decorative bubbles */}
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            background: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.9), rgba(150,190,225,0.25))",
            border: "1px solid rgba(120,165,205,0.35)",
            opacity: b.opacity,
            pointerEvents: "none",
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-10 pb-14 text-center lg:pt-14 lg:pb-16">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#3b6fd6]">
          <span className="h-[1.5px] w-7 bg-[#3b6fd6]" />
          Join the Mission
        </div>

        {/* Heading */}
        <h2 className="mx-auto max-w-3xl font-serif text-3xl font-normal text-[#16232e] md:text-5xl">
          Drink different.{" "}
          <em className="italic font-normal text-[#3b6fd6]">Think ahead.</em>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-500">
          We welcome you to become a part of the water revolution.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
          <Link
            to="/design-your-water-system#contact"
            className="whitespace-nowrap rounded-full bg-[#1f6fb2] px-5 py-3 text-xs font-semibold text-white shadow-lg transition hover:bg-[#164e80] hover:-translate-y-0.5 sm:px-6 sm:py-3.5 sm:text-sm md:px-8 md:py-4"
            style={{ color: "#ffffff" }}
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </section>
  );
}
