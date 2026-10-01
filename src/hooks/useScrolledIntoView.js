import { useEffect, useRef, useState } from 'react';

/**
 * True only once the element has scrolled into view. Unlike a plain
 * IntersectionObserver check, this requires the element to cross well
 * inside the viewport (via rootMargin) before firing, so a section that
 * merely happens to peek onto the initial screen on page load does not
 * trigger — the user has to actually scroll it in.
 */
export function useScrolledIntoView({ threshold = 0.3, rootMargin = '-15% 0px -15% 0px' } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
}
