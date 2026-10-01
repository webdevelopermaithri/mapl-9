import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Every navigation (navbar links, buttons, in-page links) lands the user at
// the top of the destination page immediately — UNLESS the link includes a
// "#hash" (e.g. the R&D "Publications" and "Blogs" dropdown links), in which
// case it jumps straight to that section instead, so anchor links actually
// land where they point. Rendered once in App.jsx, outside <Routes>.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const scrollToTarget = () => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'instant', block: 'start' })
        }
        return el
      }

      // The destination page's sections (images, videos, reveal
      // animations above the target) can still be mounting/loading and
      // changing the page's layout height right after navigation, so a
      // single scroll attempt on the next frame can land short of the
      // target once everything settles. Re-run the scroll a few times
      // over the following moments to correct for that layout shift and
      // guarantee the target section actually ends up in view.
      const timers = [0, 60, 200, 500, 900].map((delay) =>
        setTimeout(scrollToTarget, delay),
      )

      if (!document.getElementById(id)) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      }

      return () => timers.forEach(clearTimeout)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
