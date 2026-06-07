import {
  FaTractor,
  FaLeaf,
  FaCheckCircle,
  FaSeedling
} from "react-icons/fa";

function ProductBenefits() {
  return (
    <section className="product-benefits">
      <div className="container">
        <h2>Why Choose Our Products?</h2>

        <div className="benefits-grid">

          <div className="benefit-card">
              <FaTractor className="benefit-icon" />
            <h3>Directly Sourced</h3>
            <p>
              Every product comes directly from trusted farmers.
            </p>
          </div>

          <div className="benefit-card">
              <FaLeaf className="benefit-icon" />
            <h3>100% Organic and natural</h3>
            <p>
              No chemicals, pesticides or artificial additives.
            </p>
          </div>

          <div className="benefit-card">
              <FaCheckCircle className="benefit-icon" />
            <h3>Quality Tested</h3>
            <p>
              Carefully tested to ensure quality and purity.
            </p>
          </div>

          <div className="benefit-card">
              <FaSeedling className="benefit-icon" />
            <h3>Traditional Methods</h3>
            <p>
              Processed using traditional techniques.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProductBenefits;