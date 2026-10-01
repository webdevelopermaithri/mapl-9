import { useEffect, useRef, useState } from 'react'

/**
 * Adds a lightweight scroll-reveal effect (fade + rise) the first time
 * an element enters the viewport. Mirrors the subtle entrance motion
 * used across the Maithri site without re-triggering on every scroll.
 */
export default function useReveal(threshold = 0.01) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // If this element is the target of a "#hash" link (e.g. the hero's
    // "Latest news" card linking to /media-house#news), it can be scrolled
    // into view *immediately* on page load, before images/content further
    // up the page finish loading and settle the page's final layout. That
    // scroll can happen before (or without) the IntersectionObserver below
    // ever reporting it as intersecting, which left the section stuck at
    // opacity: 0 — i.e. it rendered blank even though it was on screen.
    // Anchor-linked sections should always be visible immediately rather
    // than waiting on a scroll-triggered reveal, so skip the animation
    // entirely for this case.
    if (node.id && window.location.hash === `#${node.id}`) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
