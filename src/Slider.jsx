import React, { useState, useEffect } from 'react';
import './Slider.css';

const slides = [
  {
    image: '/r1.jpeg',
    title: 'Kalite',
    description: 'En yüksek standartlarda üretilmiş kumaşlar.'
  },
  {
    image: '/r2.jpeg',
    title: 'Tasarım',
    description: 'Modern ve yenilikçi tasarımlar.'
  },
  {
    image: '/r3.jpeg',
    title: 'Güven',
    description: 'Müşteri memnuniyetini ön planda tutan hizmet.'
  }
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500); // 3.5 saniyede bir değişsin
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="slide" style={{ backgroundImage: `url(${slides[current].image})` }}>
        <div className="slide-content">
          <h2>{slides[current].title}</h2>
          <p>{slides[current].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
