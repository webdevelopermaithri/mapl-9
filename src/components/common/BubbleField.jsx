import React, { useMemo } from 'react';
import './BubbleField.css';

// Small ambient bubble particles that drift upward across a dark
// section, matching the reference site's floating bubble background.
// Positions/timings are randomized once per mount via useMemo so they
// don't reshuffle on every re-render (e.g. tab clicks).
export default function BubbleField({ count = 18, blendMode = 'screen' }) {
  const bubbles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: 8 + Math.random() * 34,
      left: Math.random() * 100,
      bottom: -20 + Math.random() * -10,
      duration: 10 + Math.random() * 14,
      delay: Math.random() * 8,
    }));
  }, [count]);

  return (
    <div className="bubble-field" style={{ mixBlendMode: blendMode }} aria-hidden="true">
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="bubble-particle"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            bottom: `${b.bottom}%`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
