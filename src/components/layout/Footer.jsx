import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";
import footerLogo from "../../assets/images/header_logo.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          {/* <h2>VedanthRam Naturals</h2>

          <p className="tagline">
            Malenaada Ruchi Mane Bagilige
          </p>

          <p className="description">
            Bringing the authentic taste and purity of
            Uttara Kannada's organic products to every home.
            100% natural, farm-fresh, and chemical-free products.
          </p> */}
          <div className="footer-brand">
  <img
    src={footerLogo}
    alt="VRN Footer Logo"
    className="footer-logo"
  />

  <p className="description">
   Bringing the authentic taste and purity of
            Uttara Kannada's organic products to every home.
            100% natural, farm-fresh, and chemical-free products.
  </p>
</div>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Shop Now</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>
            <FaPhone /> 8431839208
          </p>

          <p>
            <FaEnvelope /> vrnproducts@gmail.com
          </p>

          <p>
            <FaMapMarkerAlt />
            #16 Hosagadde,
            PO Itagi,
            Siddapur,
            Uttara Kannada - 581322
          </p>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          © 2026 VedanthRam Naturals.
          All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;