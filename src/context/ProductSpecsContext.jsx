import { createContext, useCallback, useContext, useState } from "react";

// Lets the "Full specs →" button on ANY ProductCard — on the All
// Products grid or any /products/:categorySlug page, since they all
// render the same ProductCard — open one shared slide-in specs
// drawer, without prop-drilling through every grid/page.
const ProductSpecsContext = createContext(null);

export function ProductSpecsProvider({ children }) {
  const [activeProduct, setActiveProduct] = useState(null);

  const openSpecs = useCallback((product) => setActiveProduct(product), []);
  const closeSpecs = useCallback(() => setActiveProduct(null), []);

  return (
    <ProductSpecsContext.Provider value={{ activeProduct, openSpecs, closeSpecs }}>
      {children}
    </ProductSpecsContext.Provider>
  );
}

export function useProductSpecs() {
  const ctx = useContext(ProductSpecsContext);
  if (!ctx) {
    throw new Error("useProductSpecs must be used within a ProductSpecsProvider");
  }
  return ctx;
}
