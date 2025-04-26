import React from 'react';
import './Slider.css';

const Slider = () => {
    return (
        <div className="slider">
            <div className="slide" style={{ backgroundImage: 'url(https://via.placeholder.com/1200x400)' }}>
                <h2>Hoş Geldiniz</h2>
                <p>Firmamızın ürünlerini keşfedin.</p>
            </div>
            <div className="slide" style={{ backgroundImage: 'url(https://via.placeholder.com/1200x400)' }}>
                <h2>Kalite ve Güven</h2>
                <p>Yılların tecrübesiyle hizmetinizdeyiz.</p>
            </div>
        </div>
    );
};

export default Slider;