import ProductsOverview from "./ProductsOverview.jsx";

// Rendered at both "/products" (the "Products" nav button) and
// "/products-overview" (the "Products Overview" dropdown link), so
// both always display the identical MEGHDOOT product overview page.
export default function Products() {
  return <ProductsOverview />;
}
