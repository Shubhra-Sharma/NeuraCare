import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar">
       <h3 className="logo">
            <span className="logo-highlight">Neura</span>Care
          </h3>
      <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/SelfCare">Self Care</Link></li>
      <li><Link to="/Features">Features</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
