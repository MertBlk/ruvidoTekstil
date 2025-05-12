import React from 'react';
import './Footer.css'; // CSS dosyasını unutma!

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Ruvido Tekstil</h2>
          </div>

          <div className="footer-section">
            <h3>Sosyal Medya</h3>
            <p><a href="https://www.instagram.com/ruvido.tr">Instagram</a></p>
          </div>

          <div className="footer-section">
            <h3>İletişim</h3>
            <p>ruvidotekstil@gmail.com</p>
            <p>+90 545 615 18 75</p>
            <p>+90 545 833 49 25</p>
            <p>+90 538 895 96 61</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 Ruvido Tekstil. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;