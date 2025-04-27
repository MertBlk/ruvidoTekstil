import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container fade-in">
            <h1 className="fade-in delay-100">Hakkımızda</h1>
            <div className="about-content">
                <p className="fade-in delay-200">
                    Ruvido Tekstil olarak, kalite ve tasarımı bir araya getirerek müşterilerimize en iyi hizmeti sunmayı hedefliyoruz. Yılların deneyimi ve uzman ekibimizle sektörde öncü bir konumdayız.
                </p>
                <p className="fade-in delay-300">
                    Vizyonumuz, sürdürülebilir ve yenilikçi çözümlerle tekstil sektöründe fark yaratmaktır. Misyonumuz ise müşteri memnuniyetini her zaman ön planda tutarak, güvenilir ve kaliteli ürünler sunmaktır.
                </p>
            </div>
        </div>
    );
};

export default About;