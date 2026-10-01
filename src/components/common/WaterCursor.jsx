import { useEffect, useRef, useState } from "react";

// Site-wide water-bubble cursor. Only activates on devices with a real
// mouse (pointer: fine) so touchscreens keep their native behaviour.
// The bubble trails the pointer with a little easing for a fluid,
// water-like feel, and grows/brightens over anything clickable.
const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, select, textarea, label, summary, .cursor-pointer, [onclick], img, picture, svg';

export default function WaterCursor() {
  const dropRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.body.classList.add("has-water-cursor");
    return () => document.body.classList.remove("has-water-cursor");
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    const onOver = (e) => {
      if (e.target.closest && e.target.closest(INTERACTIVE_SELECTOR)) setHovering(true);
    };
    const onOut = (e) => {
      if (e.target.closest && e.target.closest(INTERACTIVE_SELECTOR)) setHovering(false);
    };
    const onLeave = () => {
      if (dropRef.current) dropRef.current.style.opacity = "0";
    };
    const onEnter = () => {
      if (dropRef.current) dropRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    let raf;
    const tick = () => {
      // ease toward the real pointer position for a soft, fluid trail
      pos.current.x += (target.current.x - pos.current.x) * 0.22;
      pos.current.y += (target.current.y - pos.current.y) * 0.22;
      if (dropRef.current) {
        dropRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  const size = hovering ? 44 : 30;

  return (
    <div
      ref={dropRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: size,
        height: size,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 999999,
        opacity: 1,
        // Soft, mostly-transparent glassy bubble — solid-ish white core
        // fading out to fully transparent at the rim, like a soap bubble.
        background: hovering
          ? "radial-gradient(circle at 34% 30%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.7) 22%, rgba(214,235,255,0.32) 48%, rgba(180,220,255,0.12) 72%, rgba(180,220,255,0) 100%)"
          : "radial-gradient(circle at 34% 30%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.55) 24%, rgba(214,235,255,0.22) 50%, rgba(180,220,255,0.08) 74%, rgba(180,220,255,0) 100%)",
        border: hovering
          ? "1px solid rgba(255,255,255,0.75)"
          : "1px solid rgba(255,255,255,0.5)",
        // Glassy inner highlight plus a very soft outer shadow — the shadow
        // is subtle enough to keep the glass look, but gives the bubble an
        // edge so it doesn't disappear against white/light backgrounds.
        boxShadow: hovering
          ? "inset 0 0 8px rgba(255,255,255,0.6), 0 2px 10px rgba(20,40,60,0.16), 0 0 0 1px rgba(20,40,60,0.06)"
          : "inset 0 0 6px rgba(255,255,255,0.5), 0 1px 7px rgba(20,40,60,0.13), 0 0 0 1px rgba(20,40,60,0.05)",
        backdropFilter: "blur(0.5px)",
        transition:
          "width 0.2s ease, height 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease",
      }}
    />
  );
}
