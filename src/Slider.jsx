import React, { useState, useEffect } from 'react';
import './Slider.css';
import { Link } from 'react-router-dom'; // Link bileşenini import et

const initialSlidesData = [
  {
    image: '/slider.png',
    mobileImage: '/slider.png',
    // İsteğe bağlı: Her slayt için farklı link ve buton metni
    // buttonText: 'Ürünler',
    // buttonLink: '/products'
  },
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

  // Eğer her slayt için farklı buton metni ve linki olacaksa:
  // const buttonText = currentSlideData.buttonText || "Keşfetmeye Başla!";
  // const buttonLink = currentSlideData.buttonLink || "/default-link"; // Varsayılan bir link

  // Eğer tek bir sabit link ve metin olacaksa:
  const buttonText = "Keşfetmeye Başla!";
  const buttonLink = "/products"; // Yönlendirilecek sayfanın yolu (örneğin ürünler sayfası)

  return (
    <div className="slider">
      <div className="slide" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="slide-content">
          <Link to={buttonLink} className="slider-button-link">
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
