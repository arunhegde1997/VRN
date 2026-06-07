import { Link } from "react-router-dom";

function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="contact-cta-overlay">
        <h2>Visit Our Shop</h2>

        <p>
          Explore our complete range of organic products
        </p>

        <Link to="/shop" className="cta-btn">
          Shop Now
        </Link>
      </div>
    </section>
  );
}

export default ContactCTA;