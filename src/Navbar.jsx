import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-logo">Ruvido</div>
            <nav>
                <ul className="navbar-links">
                    <li><Link to="/">Ana Sayfa</Link></li>
                    <li><Link to="/products">Ürünler</Link></li>
                    <li><Link to="/contact">İletişim</Link></li>
                    <li><Link to="/about">Hakkında</Link></li> {/* Added new link for About */}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;