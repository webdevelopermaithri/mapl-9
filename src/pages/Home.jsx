import { useEffect } from 'react'
import HeroCarousel from '../heroCarousel/components/carousel/HeroCarousel.jsx'

export default function Home() {
  // The hero carousel has its own internal scroll (slide by slide). To
  // avoid a second, outer page scrollbar stacking on top of it, we lock
  // scrolling on both <html> and <body> while Home is mounted (locking
  // body alone isn't enough if anything ever renders below the carousel
  // and pushes the document past 100vh — the <html> element would still
  // scroll). The navbar is a transparent, fixed overlay on this page
  // (see Navbar.css `.navbar--home`), so the carousel fills the full
  // viewport height with no offset needed.
  useEffect(() => {
    const root = document.documentElement
    const prevRootOverflow = root.style.overflow
    const prevBodyOverflow = document.body.style.overflow
    root.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    return () => {
      root.style.overflow = prevRootOverflow
      document.body.style.overflow = prevBodyOverflow
    }
  }, [])

  return (
    <div style={{ '--hero-navbar-h': '0px' }}>
      <HeroCarousel />
    </div>
  )
}
