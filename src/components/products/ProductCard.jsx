function ProductCard({ product }) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-content">

        <h3>{product.name}</h3>

        <p className="price">
          ₹{product.price}
        </p>

        <p className="weight">
          {product.weight}
        </p>

        <p className="description">
          {product.description}
        </p>

        <button className="buy-btn">
          Buy Now
        </button>

      </div>

    </div>
  );
}

export default ProductCard;