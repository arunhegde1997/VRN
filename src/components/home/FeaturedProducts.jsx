const products = [
  {
    id: 1,
    name: "Black Pepper",
    weight: "100g",
    price: "₹190",
    image: "https://images.unsplash.com/photo-1583224874280-25ccf9a6a8f3?w=500"
  },
  {
    id: 2,
    name: "Turmeric Powder",
    weight: "100g",
    price: "₹40",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500"
  },
  {
    id: 3,
    name: "Cardamom",
    weight: "25g",
    price: "₹140",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500"
  },
  {
    id: 4,
    name: "Wild Honey",
    weight: "1kg",
    price: "₹500",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=500"
  }
];

function FeaturedProducts() {
  return (
    <section className="products-section">
      <div className="container">

        <h2 className="section-title">
          Featured Products
        </h2>

        <p className="section-subtitle">
          Discover our handpicked selection of premium organic spices
          and natural products
        </p>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>

              <span className="price-badge">
                {product.price}
              </span>

              <img
                src={product.image}
                alt={product.name}
              />

              <div className="product-content">
                <h3>{product.name}</h3>

                <p>{product.weight}</p>

                <button>
                  View Details
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;