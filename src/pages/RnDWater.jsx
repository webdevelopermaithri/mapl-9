import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import WaterTopHero from '../components/RnD/Water/WaterTopHero.jsx'
import WaterHero from '../components/RnD/Water/WaterHero.jsx'
import WaterPortfolioGrid from '../components/RnD/Water/WaterPortfolioGrid.jsx'
import '../components/RnD/Water/WaterPage.css'
import { waterPortfolio } from '../data/waterPortfolio.js'
import { categoryPath } from '../utils/categoryRoutes.js'

// "Water" — a dedicated R&D subsection/page, ported from the standalone
// maithri-water-portfolio build. Intentionally its own page (route:
// /rnd/water) rather than a section spliced into pages/RnD.jsx, so the
// existing R&D page, R&D Overview and All Portfolio subsection are left
// completely untouched. Navbar, Footer and FloatingButtons are already
// rendered once by App.jsx, so this page only composes its own content.
//
// Category navigation lives in the single pill row at the top
// (WaterTopHero) — the second, duplicate filter-tabs row that used to
// sit below the hero was removed since it repeated the exact same tabs.
// Every pill still redirects to that category's own dedicated page —
// clicking "Healthcare" here takes you to /rnd/healthcare, and so on.
export default function RnDWater() {
  const navigate = useNavigate()
  const activeCategory = 'water'

  const visibleEntries = useMemo(
    () => waterPortfolio.filter((entry) => entry.category === activeCategory),
    []
  )

  const goToCategory = (id) => {
    if (id === activeCategory) return
    navigate(categoryPath(id))
  }

  return (
    <main className="wp-page">
      <div className="wp-page__container">
        <WaterTopHero activeId={activeCategory} onSelect={goToCategory} />
        <div className="wp-page__divider" />
        <WaterHero />
        <WaterPortfolioGrid entries={visibleEntries} />
      </div>
    </main>
  )
}
