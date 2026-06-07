import ShopProductCard from "./ShopProductCard";

const products = [
  {
    id: 1,
    name: "Black Pepper",
    price: 190,
    weight: "100g",
    description: "Premium quality black pepper.",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500"
  },

  {
    id: 2,
    name: "Turmeric Powder",
    price: 40,
    weight: "100g",
    description: "Pure organic turmeric powder.",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500"
  },

  {
    id: 3,
    name: "Cardamom",
    price: 140,
    weight: "25g",
    description: "Fresh green cardamom.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500"
  }
];

function ShopProducts() {
  return (
    <div>
      <h2 className="shop-title">
        Available Products
      </h2>

      {products.map((product) => (
        <ShopProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ShopProducts;