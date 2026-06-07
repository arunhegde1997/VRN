import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ProductsHero from "../components/products/ProductsHero";
import CategoryFilter from "../components/products/CategoryFilter";
import ProductGrid from "../components/products/ProductGrid";
import ProductBenefits from "../components/products/ProductBenefits";

function Products() {
  return (
    <>
      <Navbar />

      <ProductsHero />

      <CategoryFilter />

      <ProductGrid />

      <ProductBenefits />

      <Footer />
    </>
  );
}

export default Products;