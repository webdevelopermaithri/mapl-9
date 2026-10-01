// Single source of truth for "which route does this category pill go to".
// Every R&D category pill/button across the site (top hero tabs, filter
// bars, R&D Overview cards, All Portfolio pills) should call this so they
// all redirect to the exact same place, matching the routes in App.jsx.
export function categoryPath(idOrLabel) {
  const id = String(idOrLabel).toLowerCase()
  return id === 'all' ? '/rnd/all-portfolio' : `/rnd/${id}`
}
