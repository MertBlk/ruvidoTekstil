import React, { useState, useEffect } from 'react';
import './Slider.css';
import { Link } from 'react-router-dom'; // Link bileşenini import et

const initialSlidesData = [

  {
    image: '/slider2.png',
    mobileImage: '/sliderMobil2.jpeg',
    // buttonText: 'Hakkımızda',
    // buttonLink: '/about'
  },
  // Buraya diğer slaytlarınızı da ekleyebilirsiniz
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % initialSlidesData.length);
    }, 3500);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  const currentSlideData = initialSlidesData[current];
  const imageUrl = isMobile && currentSlideData.mobileImage
    ? currentSlideData.mobileImage
    : currentSlideData.image;



  return (
    <div className="slider">
      <div className="slide" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="slide-content">
          
        </div>
      </div>
    </div>
  );
};

export default Slider;
