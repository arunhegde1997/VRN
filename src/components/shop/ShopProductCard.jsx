function ShopProductCard({ product }) {
  return (
    <div className="shop-product-card">

      <img
        src={product.image}
        alt={product.name}
        className="shop-product-image"
      />

      <div className="shop-product-info">
        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <h4>
          ₹{product.price}
          <span> / {product.weight}</span>
        </h4>
      </div>

      <button className="cart-btn">
          Add to Cart
      </button>

    </div>
  );
}

export default ShopProductCard;