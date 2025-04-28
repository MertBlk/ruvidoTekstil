import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container fade-in">
            <h1 className="fade-in delay-100">Hakkımızda</h1>
            <div className="about-content">
                <p className="fade-in delay-200">
                    Ruvido Tekstil, 2023 yılında Sakarya'da kurulmuş bir tekstil firmasıdır. Kendinden eminlerin tercihi olan markamız, kaliteli kumaş üretimi ve geniş ürün yelpazesi ile sektördeki yerini almıştır. Müşteri memnuniyetini ön planda tutarak, her zaman en iyi hizmeti sunmayı hedefliyoruz
                </p>
                <p className="fade-in delay-300">
                Vizyonumuz, Sürdürülebilir ve yenilikçi tasarımlarla global tekstil dünyasında fark yaratmak.
                Misyonumuz, Müşteri odaklı yaklaşımımızla, yüksek kalite standartlarında ürünler sunarak sektörde güvenin ve şıklığın adresi olmak.
                </p>
            </div>
        </div>
    );
};

export default About;