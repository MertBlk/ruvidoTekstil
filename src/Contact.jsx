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
                    <p><strong>Konum:</strong> <a href="https://www.google.com/maps/@40.7749427,30.3936349,3a,43.6y,248.44h,89.2t/data=!3m7!1e1!3m5!1szTeOSHVYakHnb8WwgYeQcQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0.7972052147592308%26panoid%3DzTeOSHVYakHnb8WwgYeQcQ%26yaw%3D248.43609913088054!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Google Haritalar'da Gör</a></p>
                </div>
                <div className="map-container fade-in delay-300">
                    <iframe
                        src="https://www.google.com/maps?q=40.7749427,30.3936349&z=16&output=embed"
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