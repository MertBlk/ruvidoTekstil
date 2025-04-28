import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact fade-in">
            <img src="/magaza.jpeg" alt="Mağaza" className="store-image fade-in delay-100" />
            <div className="contact-details fade-in delay-200">
                <h1>İletişim</h1>
                <p><strong>Adres:</strong> Semerciler Çark Caddesi Adapazarı/Sakarya</p>
                <p><strong>Telefon:</strong> +90 555 123 45 67</p>
                <p><strong>E-posta:</strong> info@ruvidotekstil.com</p>
                <p><strong>Konum:</strong> <a href="https://goo.gl/maps/example" target="_blank" rel="noopener noreferrer">Google Haritalar'da Gör</a></p>
            </div>
        </div>
    );
};

export default Contact;