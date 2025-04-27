import React from 'react';
import './Footer.css'; // CSS dosyasını unutma!

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Ruvido Tekstil</h2>
          <p>Kendinden Eminlerin Tercihi.</p>
        </div>

        <div className="footer-section links">
          <h3>Sosyal Medya</h3>
          <ul>
            <li><a href="https://www.instagram.com/ruvido">Instagram</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>İletişim</h3>
          <p>info@ruvido.com</p>
          <p>+90 555 555 55 55</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Ruvido Tekstil. Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
};

export default Footer;