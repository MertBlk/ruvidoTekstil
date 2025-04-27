import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <img src="/public/fabric.jpg" alt="Mağaza Fotoğrafı" className="store-image" />
            <h1>İletişim</h1>
            <div className="contact-details">
                <p><strong>Adres:</strong> Örnek Mahallesi, 123. Sokak, İstanbul</p>
                <p><strong>Telefon:</strong> +90 555 123 45 67</p>
                <p><strong>E-posta:</strong> info@ruvidotekstil.com</p>
                <p><strong>Konum:</strong> <a href="https://goo.gl/maps/example" target="_blank" rel="noopener noreferrer">Google Haritalar'da Gör</a></p>
            </div>
            <div className="patch-effect" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h1>Hakkımızda</h1>
            </div>
        </div>
    );
};

export default Contact;