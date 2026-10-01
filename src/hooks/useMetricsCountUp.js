import { useEffect, useRef, useState } from 'react';

/**
 * Animates every metric's 0 -> target count-up exactly once, together,
 * and holds the finished values afterward.
 *
 * This lives in the parent (ImpactAtlas), not in the individual card
 * components, on purpose: the Impact Atlas tabs (Reach / Water / Waste)
 * change which two metrics are shown as "callout" cards, which used to
 * unmount and remount those card components on every click — resetting
 * their local animation state and making the number restart from 0
 * every time a tab was clicked. Since the state lives here instead, in
 * a component that never unmounts when a tab changes, the numbers are
 * computed once and simply stay put no matter how the tabs are
 * clicked.
 */
export function useMetricsCountUp(metrics, { duration = 1400, start = false } = {}) {
  const [values, setValues] = useState(() => {
    const initial = {};
    metrics.forEach((m) => { initial[m.id] = 0; });
    return initial;
  });
  const [settled, setSettled] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // ease-out-cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      const next = {};
      metrics.forEach((m) => {
        next[m.id] = progress < 1 ? Math.floor(eased * m.value) : m.value;
      });
      setValues(next);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setSettled(true);
      }
    };

    requestAnimationFrame(tick);
    // metrics is a stable module-level constant array, so it's safe to
    // omit from deps here — only start/duration should retrigger this.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, duration]);

  return { values, settled };
}

/**
 * Animates a single number 0 -> target, and re-runs the animation every
 * time `resetKey` changes (e.g. a different metric id being shown after
 * a tab click) — as long as `active` is true. Used for the two "callout"
 * cards, whose displayed metric swaps when the Reach / Water / Waste tab
 * changes, so switching tabs re-triggers the count-up on the new number
 * instead of just snapping straight to its final value.
 */
export function useCountUp(target, { duration = 900, active = true, resetKey } = {}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;

    let cancelled = false;
    const startTime = performance.now();

    const tick = (now) => {
      if (cancelled) return;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(progress < 1 ? Math.floor(eased * target) : target);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    return () => {
      cancelled = true;
    };
    // Re-run whenever the target metric changes (resetKey) or the
    // section becomes active — target itself is derived from resetKey
    // so it doesn't need to be a separate dependency.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey, active, duration]);

  return value;
}
