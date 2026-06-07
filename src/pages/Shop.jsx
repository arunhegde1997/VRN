import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ShopHero from "../components/shop/ShopHero";
 import ShopProducts from "../components/shop/ShopProducts";
import Cart from "../components/shop/Cart";

function Shop() {
  return (
    <>
      <Navbar />

      <ShopHero />

      <section className="shop-content">
        <div className="container shop-layout">

          <ShopProducts />

          <Cart />

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Shop;