import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  FaLeaf,
  FaHandshake,
  FaSeedling,
  FaUsers
} from "react-icons/fa";
import { FaBullseye, FaEye } from "react-icons/fa";

function About() {
  return (
    <>
      <Navbar />

      <section className="about-hero">
        <div className="about-overlay">
          <h1>About VedanthRam Naturals</h1>
          <p>
            Bringing the Authentic Taste of Uttara Kannada
            to Every Home
          </p>
        </div>
      </section>

      <section className="our-story">
        <div className="container">
          <h2>Our Story</h2>

          <p>
            At VedanthRam Naturals (VRN), our journey began with a simple yet powerful vision: to share the incredible natural wealth of Uttara Kannada with families across India. Nestled in the Western Ghats, Uttara Kannada is blessed with rich biodiversity and centuries-old farming traditions that have been passed down through generations.
          </p>

          <p>
            Our main intention is to provide high-quality natural and organic products to our customers and promote a healthy lifestyle. We work directly with local farmers who use traditional, sustainable farming methods that respect the land and preserve its natural fertility. Every product we offer is a testament to their dedication and expertise.
          </p>
          <p>We are committed to bringing the authentic products of Uttara Kannada to every home. Our spices and natural products are carefully sourced to ensure purity, freshness, and traditional taste. We believe that when you choose our products, you're not just buying spices – you're embracing a healthier way of life and supporting sustainable farming communities.</p>
          <p>We aim to make our products a part of every kitchen and to see our customers healthy and happy. That's the VedanthRam promise – pure, natural, and straight from the heart of Malenaadu.</p>
        </div>

      </section>
      <section className="mission-vision">
  <div className="container">

    <div className="mv-card">
      <FaBullseye className="mv-icon" />
      <h2>Our Mission</h2>

      <p>
        To deliver natural and healthy products that enhance the well-being of our customers while supporting local farmers and preserving traditional farming practices. We strive to ensure that every product maintains the highest standards of purity, freshness, and authenticity.
      </p>
    </div>

    <div className="mv-card">
      <FaEye className="mv-icon" />
      <h2>Our Vision</h2>

      <p>
        To reach every home in India with our authentic organic products, making healthy living accessible to all. We envision a future where natural, chemical-free products become the norm in every kitchen, contributing to healthier families and a healthier planet.
      </p>
    </div>

  </div>
</section>
<section className="uttara-kannada">
  <div className="container uk-container">

    <div className="uk-content">
      <h2>Inspired by Uttara Kannada</h2>

      <p>
        Uttara Kannada is known for its lush green forests,
        fertile lands, and rich agricultural heritage.
      </p>

      <p>
        The region produces some of Karnataka's finest
        spices, honey, and natural products. At
        VedanthRam Naturals, we bring these authentic
        treasures directly from local farmers to your home.
      </p>

      <p>
        Every product reflects the purity, freshness,
        and traditional values of Malenadu.
      </p>
    </div>

    <div className="uk-image">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="Uttara Kannada Nature"
      />
    </div>

  </div>
</section>
<section className="values-section">
  <div className="container">

    <h2 className="section-title">
      Our Core Values
    </h2>

    <div className="values-grid">

      <div className="value-card">
        <FaLeaf className="value-icon" />
        <h3>Quality</h3>
        <p>
          We never compromise on product quality and authenticity.
        </p>
      </div>

      <div className="value-card">
        <FaHandshake className="value-icon" />
        <h3>Trust</h3>
        <p>
          Building long-term relationships with customers through transparency.
        </p>
      </div>

      <div className="value-card">
        <FaSeedling className="value-icon" />
        <h3>Sustainability</h3>
        <p>
          Supporting eco-friendly farming and protecting nature.
        </p>
      </div>

      <div className="value-card">
        <FaUsers className="value-icon" />
        <h3>Community</h3>
        <p>
          Empowering local farmers and strengthening rural communities.
        </p>
      </div>

    </div>
  </div>
</section>

      <Footer />
    </>
  );
}

export default About;