import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          !event.target.classList.contains('menu-toggle') && 
          !event.target.parentElement?.classList.contains('menu-toggle')) {
        setMenuOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <h3 className="logo">
        <span className="logo-highlight">Neuro</span>Care
      </h3>
      
      <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul ref={menuRef} className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li className="close-menu" onClick={() => setMenuOpen(false)}>×</li>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/SelfCare" onClick={() => setMenuOpen(false)}>Self Care</Link></li>
        <li><Link to="/Features" onClick={() => setMenuOpen(false)}>Features</Link></li>
        <li><Link to="https://ai-health-assistant-neuro.streamlit.app/" onClick={() => setMenuOpen(false)}>Health Assistant</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;