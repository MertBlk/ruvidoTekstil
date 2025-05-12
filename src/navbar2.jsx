import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./navbar2.css";  // Düzeltildi

const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Menü dışında bir yere tıklandığında menüyü kapatacak işlev
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Menü açıksa ve tıklama menü veya hamburger düğmesi dışında bir yerde ise
      if (
        menuOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    // Tıklama olayını belgeye ekle
    document.addEventListener("mousedown", handleOutsideClick);
    
    // Temizleme işlevi
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]); // menuOpen değiştiğinde useEffect'i yeniden çalıştır

  return (
    <nav className="zara-navbar">
      <div className="navbar-left">
        <button
          ref={hamburgerRef}
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menüyü Aç/Kapat"
        >
          <span />
          <span />
          <span />
        </button>
        <p className="navbar-title"></p>
      </div>
      <div className="navbar-right">
        <div 
          ref={menuRef}
          className={`mobile-menu${menuOpen ? " show" : ""}`}
        >
          <Link to="/">Anasayfa</Link>
          <Link to="/products">Ürünler</Link>
          <Link to="/contact">İletişim</Link>
          <Link to="/about">Hakkımızda</Link>
        </div>
      </div>
    </nav>
  );    
};

export default Navbar2;
