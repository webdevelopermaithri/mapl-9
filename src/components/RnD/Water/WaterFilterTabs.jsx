import './WaterFilterTabs.css'

export default function FilterTabs({ categories, activeId, onSelect, resultCount }) {
  return (
    <div className="wp-filter-bar">
      <div className="wp-filter-tabs" role="tablist" aria-label="Filter portfolio by category">
        {categories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={activeId === cat.id}
            className={`wp-filter-tab${activeId === cat.id ? ' wp-filter-tab--active' : ''}`}
            onClick={() => onSelect(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <span className="wp-filter-count">{String(resultCount).padStart(2, '0')} entries</span>
    </div>
  )
}
