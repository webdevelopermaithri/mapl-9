import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Same lightweight drifting-sphere canvas used on the "Join the Mission"
// section, reused here so the hero's light-blue background carries the
// same soft bubble atmosphere instead of a few static dots.
function BubbleCanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    let width, height;
    let animationId;

    const BUBBLE_COUNT = 16;
    const bubbles = [];

    class Bubble {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 22 + 8;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.alpha = Math.random() * 0.35 + 0.25;
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

// A handful of static floating bubbles layered on top of the canvas —
// same treatment as "Join the Mission", scaled down to fit the hero.
const BUBBLES = [
  { top: "14%", left: "5%", size: 18, opacity: 0.45 },
  { top: "70%", left: "10%", size: 12, opacity: 0.3 },
  { top: "20%", left: "46%", size: 10, opacity: 0.35 },
  { top: "82%", left: "40%", size: 14, opacity: 0.3 },
  { top: "10%", left: "92%", size: 12, opacity: 0.35 },
  { top: "60%", left: "96%", size: 16, opacity: 0.35 },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-20 pb-16 lg:pt-28"
    >
      {/* animated bubble background */}
      <BubbleCanvasBackground />

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

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1fr_1.25fr] lg:px-10">
        {/* Left Content */}
        <div>
          <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            <span className="h-px w-6 bg-brand" />
            MEGHDOOT<sup className="tm-mark">®</sup> Core Platform
          </p>

          <h1 className="font-serif text-6xl leading-[1.05] text-ink lg:text-7xl">
            <span
              className="font-serif"
              style={{
                fontSize: "0.7em",
                display: "inline-block",
              }}
            >
              Water from
            </span>{" "}
            <span
              className="font-serif font-bold"
              style={{
                fontSize: "0.55em",
                display: "inline-block",
              }}
            >
              the
            </span>{" "}
            <br />
            <em className="italic text-brand" style={{ fontSize: "1em" }}>air we breathe.</em>
          </h1>

          <p className="mt-7 max-w-md text-lg leading-relaxed text-ink/60">
            MEGHDOOT<sup className="tm-mark">®</sup> is Maithri's foundational Atmospheric Water Generation
            flagship innovation. Purpose-built for every climate, scalable from
            a classroom to a city, and engineered to the highest purity
            standards out of the box.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/design-your-water-system#contact"
              className="rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
            >
              Request Specification →
            </Link>

            <Link
              to="/projects"
              className="rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
            >
              Explore Projects <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Right Image — enlarged so the process diagram reads clearly */}
        <div className="relative mx-auto aspect-video w-full max-w-3xl lg:max-w-none">
          <div className="animate-float absolute inset-0 overflow-hidden rounded-[2.5rem] shadow-2xl">
            <video
              className="h-full w-full object-contain bg-white"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/media/technology-process-flow.webm" type="video/webm" />
              <source src="/media/technology-process-flow.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
