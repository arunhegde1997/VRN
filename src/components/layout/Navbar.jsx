import headerLogo from "../../assets/images/header_logo.png";
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
          <img src={headerLogo} alt="VRN Logo" />
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;