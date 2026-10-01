import CategoryPortfolioCard from "./CategoryPortfolioCard";
// Reuses the Water page's grid CSS as-is so the layout looks identical.
import "../Water/WaterPortfolioGrid.css";

export default function CategoryPortfolioGrid({ entries }) {
  if (entries.length === 0) {
    return (
      <div className="wp-grid-empty">
        <p>No entries filed under this category yet.</p>
      </div>
    );
  }

  return (
    <div className="wp-portfolio-grid">
      {entries.map((entry) => (
        <CategoryPortfolioCard entry={entry} key={entry.id} />
      ))}
    </div>
  );
}
