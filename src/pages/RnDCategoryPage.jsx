import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import CategoryTopHero from '../components/RnD/CategoryPortfolio/CategoryTopHero.jsx'
import CategoryHero from '../components/RnD/CategoryPortfolio/CategoryHero.jsx'
import CategoryPortfolioGrid from '../components/RnD/CategoryPortfolio/CategoryPortfolioGrid.jsx'
import '../components/RnD/Water/WaterPage.css'
import { ENTRIES } from '../data/portfolioEntries.js'
import { categoryPath } from '../utils/categoryRoutes.js'

// One reusable "category" R&D subsection page — same look and structure
// as the Water page (reusing its wp-* layout CSS), pulling entries live
// from data/portfolioEntries.js — the exact same catalog that powers
// "All Portfolio" (/rnd/all-portfolio). Rendered for Healthcare,
// Horticulture, Industrial and Sustainability (see App.jsx routes).
//
// Category navigation lives in the single pill row at the top
// (CategoryTopHero) — the second, duplicate pill/filter row that used to
// sit below the hero was removed since it repeated the exact same tabs.
// Every pill still redirects to that category's own dedicated page —
// clicking "Healthcare" while on the Industrial page takes you to
// /rnd/healthcare, and so on.
export default function RnDCategoryPage({ category }) {
  const navigate = useNavigate()
  const activeCategory = category.toLowerCase()

  const visibleEntries = useMemo(
    () => ENTRIES.filter((entry) => entry.category.toLowerCase() === activeCategory),
    [activeCategory]
  )

  const goToCategory = (id) => {
    if (id === activeCategory) return
    navigate(categoryPath(id))
  }

  return (
    <main className="wp-page">
      <div className="wp-page__container">
        <CategoryTopHero category={category} activeId={activeCategory} onSelect={goToCategory} />
        <div className="wp-page__divider" />
        <CategoryHero category={category} />
        <CategoryPortfolioGrid entries={visibleEntries} />
      </div>
    </main>
  )
}
