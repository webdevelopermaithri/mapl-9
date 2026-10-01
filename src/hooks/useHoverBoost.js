import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-while-hovered "run" effect for Impact Atlas numbers.
 *
 * The number only climbs while BOTH conditions are true: the cursor is
 * sitting on the card AND the page is being scrolled (mouse wheel /
 * trackpad) at that moment. Each scroll tick nudges the number up
 * (capped); once scrolling stops, or the cursor leaves the card, the
 * boost eases back down to 0 and the number settles back to its real
 * value.
 */
export function useHoverBoost(baseValue, { cap, scale = 0.05, decayDelay = 180, decayRate = 70 } = {}) {
  const [hovered, setHovered] = useState(false);
  const [boost, setBoost] = useState(0);
  const boostRef = useRef(0);
  const lastWheelRef = useRef(0);
  const targetCap = cap ?? Math.max(8, Math.round(baseValue * 0.12));

  // Continuous decay loop: brings boost back to 0 once scrolling has
  // paused (decayDelay) or the cursor has left the card.
  useEffect(() => {
    let raf;
    let last = performance.now();

    const loop = (now) => {
      const dt = now - last;
      last = now;

      const scrollIdle = now - lastWheelRef.current > decayDelay;
      if ((scrollIdle || !hovered) && boostRef.current > 0) {
        boostRef.current = Math.max(0, boostRef.current - (decayRate * dt) / 1000);
        setBoost(Math.round(boostRef.current));
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [hovered, decayDelay, decayRate]);

  const hoverHandlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onWheel: (e) => {
      lastWheelRef.current = performance.now();
      boostRef.current = Math.min(targetCap, boostRef.current + Math.abs(e.deltaY) * scale);
      setBoost(Math.round(boostRef.current));
    },
  };

  return { boost, hovered, hoverHandlers };
}
