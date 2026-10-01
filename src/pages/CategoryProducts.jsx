import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import "../components/AllProducts/ap-base.css";
import CategoryHero from "../components/AllProducts/CategoryHero.jsx";
import CategoryGrid from "../components/AllProducts/CategoryGrid.jsx";
import JoinMissionCta from "../components/shared/JoinMissionCta.jsx";
import { allProducts, slugToCategory } from "../data/allProductsCatalog.js";

// Renders any single-category product page, e.g. /products/commercial,
// /products/community, /products/advanced-awg, etc. The category is
// resolved from the :categorySlug route param — see App.jsx for the
// route and Navbar.jsx for the links that point here.
export default function CategoryProducts() {
  const { categorySlug } = useParams();
  const category = slugToCategory(categorySlug);

  const categoryProducts = useMemo(
    () => (category ? allProducts.filter((p) => p.category === category) : []),
    [category]
  );

  const otherCategories = useMemo(() => {
    if (!category) return [];
    const seen = new Set();
    return allProducts
      .map((p) => p.category)
      .filter((cat) => cat !== category && !seen.has(cat) && seen.add(cat));
  }, [category]);

  // Unknown slug (typo'd URL, old bookmark, etc.) — send people to the
  // full directory instead of showing a broken page.
  if (!category) {
    return <Navigate to="/products/all" replace />;
  }

  return (
    <main className="ap-page">
      <CategoryHero
        category={category}
        featured={categoryProducts[0]}
        productCount={categoryProducts.length}
        otherCategories={otherCategories}
      />
      <CategoryGrid category={category} products={categoryProducts} />
      <JoinMissionCta />
    </main>
  );
}
