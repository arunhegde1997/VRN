import ProductCard from "./ProductCard";
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
    price: 190,
    weight: "100g",
    description: "Premium quality black pepper.",
    image:
      Black_pepper
  },

  {
    id: 2,
    name: "Turmeric Powder",
    price: 40,
    weight: "100g",
    description: "Pure natural turmeric powder.",
    image:
      Turmeric_Powder
  },

  {
    id: 3,
    name: "Cardamom",
    price: 140,
    weight: "25g",
    description: "Fresh green cardamom.",
    image:
      Cardamom
  },
  {
     id: 4,
    name: "Wild Honey",
    weight: "1kg",
    price: "₹500",
    description: "Pure Natural wild Honey.",
    image: Wild_Honey,
  },
  {
    id: 5,
    name: "Areca Nut",
    weight: "1kg",
    price: "₹500",
    description: "Premium quality areca nut.",
    image: Areca_Nut,
    
    
  },
  {
    id: 6,
    name: "Bird eye chilli ",
    weight: "1kg",
    price: "₹500",
    description: "Premium quality bird eye chilli.",
    image: Bird_eye_chilli,
    
    
  },
  {
    id: 7,
    name: "Clove",
    weight: "50g",
    price: "₹150",
    description: "Premium quality clove.",
    image: Clove,
    
    
  },
];

function ProductGrid() {
  return (
    <section className="products-grid-section">
      <div className="products-grid">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>
    </section>
  );
}

export default ProductGrid;