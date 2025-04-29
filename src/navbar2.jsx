import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar2.css";


const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="zara-navbar">
      <div className="navbar-left">
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menüyü Aç/Kapat"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className="navbar-center">
       
      </div>
      <div className="navbar-right">
      <div className={`mobile-menu${menuOpen ? " show" : ""}`}>
          <Link to="/">ANASAYFA</Link>
          <Link to="/products">ÜRÜNLER</Link>
          <Link to="/contact">İletişim</Link>
          <Link to="/about">Hakkımızda</Link>
      </div>
      </div>
    </nav>
  );    
};

export default Navbar2;
