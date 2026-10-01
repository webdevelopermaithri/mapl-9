import { useState } from "react";
import "../components/AllProducts/ap-base.css";
import Hero from "../components/AllProducts/Hero.jsx";
import ProductGrid from "../components/AllProducts/ProductGrid.jsx";
import JoinMissionCta from "../components/shared/JoinMissionCta.jsx";
import { allProducts, featuredAllProduct } from "../data/allProductsCatalog.js";

const GRID_ID = "all-products-grid";

// This is the "All Products" nav dropdown link's page: the complete,
// filterable MEGHDOOT directory (every model + a full comparison
// table), as opposed to the "Products Overview" page which only
// shows the six category summary cards.
export default function AllProducts() {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleJumpToCategory = (category) => {
    setActiveCategory(category);
    document.getElementById(GRID_ID)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="ap-page">
      <Hero
        featured={featuredAllProduct}
        productCount={allProducts.length}
        onJumpToCategory={handleJumpToCategory}
      />
      <ProductGrid
        id={GRID_ID}
        products={allProducts}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <JoinMissionCta />
    </main>
  );
}
