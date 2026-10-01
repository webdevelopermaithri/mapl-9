import { useEffect, useRef, useState } from 'react';
import { formatIndian } from '../utils/formatNumber.js';

// Module-level cache of metric ids that have already finished their
// count-up once. The Impact Atlas callout cards get unmounted and
// remounted whenever a tab switch changes which two metrics are shown
// (React drops the old ones and creates fresh instances for the new
// ones), which used to reset each card's local state and made the
// number restart its climb from 0 every time you clicked a tab. Since
// the underlying value never changes, once an id has counted up we can
// just render it at its final value immediately instead of animating
// again.
const completedIds = new Set();

/**
 * Animates 0 -> target once `start` becomes true, then holds at target.
 * `start` is meant to come from useScrolledIntoView on the parent section,
 * so every number in that section begins counting together, only after
 * the user has actually scrolled the section into view (not on initial
 * page load, even if the section happens to be partly visible then).
 *
 * Pass `id` (a stable, unique key for the metric) so a remount of the
 * same metric — e.g. switching Impact Atlas tabs — doesn't replay the
 * animation from zero.
 */
export function useCountUp(target, { duration = 1400, start = false, id } = {}) {
  const alreadyDone = id != null && completedIds.has(id);

  const [display, setDisplay] = useState(alreadyDone ? target : 0);
  const [done, setDone] = useState(alreadyDone);
  const hasRun = useRef(alreadyDone);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // ease-out-cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplay(target);
        setDone(true);
        if (id != null) completedIds.add(id);
      }
    };

    requestAnimationFrame(tick);
  }, [start, target, duration, id]);

  return { formatted: formatIndian(display), value: display, done };
}
