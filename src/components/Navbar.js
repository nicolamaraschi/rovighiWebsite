import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/logo2.png`} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        <span className="navbar-menu-icon-bar"></span>
        <span className="navbar-menu-icon-bar"></span>
        <span className="navbar-menu-icon-bar"></span>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ecommerce">Ecommerce</Link></li>
        <li><Link to="/servizi">Servizi</Link></li>
        {/*
        <li><Link to="/orologi">Orologi</Link></li>
        */}
        <li><Link to="/contatti">Contatti</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
