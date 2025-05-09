import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact fade-in">
            
            <div className="contact-container">
                <div className="contact-details fade-in delay-200">
                    <h1>İletişim</h1>
                    <p><strong>Adres:</strong> Semerciler Çark Caddesi Adapazarı/Sakarya</p>
                    <p><strong>Telefon:</strong> +90 545 615 18 75</p>
                    <p><strong>Telefon:</strong> +90 545 833 49 25</p>
                    <p><strong>Telefon:</strong> +90 538 895 96 61</p>
                    <p><strong>E-posta:</strong>ruvidotekstil@gmail.com</p>
                    <p><strong>Konum:</strong> <a href="https://goo.gl/maps/example" target="_blank" rel="noopener noreferrer">Google Haritalar'da Gör</a></p>
                </div>
                <div className="map-container fade-in delay-300">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.7918762289287!2d30.39945701744385!3d40.78387650000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccb33776d10693%3A0xff671ab7c737fe87!2sSemerciler%20%C3%87ark%20Cd.%2C%20Adapazar%C4%B1%2FKarasu%2FSakarya!5e0!3m2!1str!2str!4v1653002710497!5m2!1str!2str"
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ruvido Tekstil Mağaza Konumu"
                        className="map-iframe"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;