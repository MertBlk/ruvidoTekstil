import React, { useState } from 'react';
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

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="slider">
      <button className="slider-arrow left" onClick={prevSlide} aria-label="Önceki">
        &#8592;
      </button>
      <div className="slide" style={{ backgroundImage: `url(${slides[current].image})` }}>
        <div className="slide-content">
          <h2>{slides[current].title}</h2>
          <p>{slides[current].description}</p>
        </div>
      </div>
      <button className="slider-arrow right" onClick={nextSlide} aria-label="Sonraki">
        &#8594;
      </button>
    </div>
  );
};

export default Slider;
