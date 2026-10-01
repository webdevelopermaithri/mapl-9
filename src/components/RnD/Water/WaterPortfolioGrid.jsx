import PortfolioCard from './WaterPortfolioCard'
import './WaterPortfolioGrid.css'

export default function PortfolioGrid({ entries }) {
  if (entries.length === 0) {
    return (
      <div className="wp-grid-empty">
        <p>No entries filed under this category yet.</p>
      </div>
    )
  }

  return (
    <div className="wp-portfolio-grid">
      {entries.map((entry) => (
        <PortfolioCard entry={entry} key={entry.id} />
      ))}
    </div>
  )
}
