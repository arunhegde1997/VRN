import Black_pepper from "../../assets/images/Black_pepper.png";
import Turmeric_Powder from "../../assets/images/Turmeric_powder.png";
import Cardamom from "../../assets/images/Cardamom.png";
import Wild_Honey from "../../assets/images/Wild_honey.png";
import Areca_Nut from "../../assets/images/Arecanut.png";
import Bird_eye_chilli from "../../assets/images/Bird_eye_chillli.png";
import Clove from "../../assets/images/Clove.png";

const products = [
  {
    id: 1,
    name: "Black Pepper",
    weight: "100g",
    price: "₹190",
    image: Black_pepper,
  },
  {
    id: 2,
    name: "Turmeric Powder",
    weight: "100g",
    price: "₹40",
    image: Turmeric_Powder,
  },
  {
    id: 3,
    name: "Cardamom",
    weight: "25g",
    price: "₹140",
    image: Cardamom,
  },
  {
    id: 4,
    name: "Wild Honey",
    weight: "1kg",
    price: "₹500",
    image: Wild_Honey,
  },
  {
    id: 5,
    name: "Areca Nut",
    weight: "1kg",
    price: "₹500",
    image: Areca_Nut,
  },
  
  {
    id: 6,
    name: "Bird eye chilli ",
    weight: "1kg",
    price: "₹500",
    image: Bird_eye_chilli,
  },
  {
    id: 7,
    name: "Clove",
    weight: "50g",
    price: "₹150",
    image: Clove,
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