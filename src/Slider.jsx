import React, { useState, useEffect } from 'react';
import './Slider.css';

const initialSlidesData = [ // Adını değiştirdim karışıklığı önlemek için
  {
    image: '/slider.png',
    title: 'Kalite',
    mobileImage: '/slider.png', // Eğer masaüstü ile aynıysa bile belirtmek iyi bir pratik
    description: 'İşinize göre özel tasarımlar ve kaliteli ürünler sunuyoruz.'
  },
  {
    image: '/slider2.png',
    title: 'Tasarım',
    mobileImage: '/sliderMobil.png', // Mobil için farklı bir görsel
    description: 'Firmanız için özel tasarımlar ve kaliteli ürünler sunuyoruz.'
  },
  // Buraya diğer slaytlarınızı da ekleyebilirsiniz
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Başlangıç değeri

  useEffect(() => {
    // Ekran boyutu değiştiğinde isMobile state'ini güncelle
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobil breakpoint'inizi buradan ayarlayabilirsiniz (örn: 768px)
    };

    window.addEventListener('resize', handleResize);

    // Otomatik slayt geçişi
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % initialSlidesData.length);
    }, 3500);

    // Component unmount olduğunda event listener'ı ve interval'ı temizle
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []); // Boş bağımlılık dizisi, sadece mount ve unmount'ta çalışır

  // Kullanılacak görseli belirle
  const currentSlideData = initialSlidesData[current];
  const imageUrl = isMobile && currentSlideData.mobileImage
    ? currentSlideData.mobileImage
    : currentSlideData.image;

  return (
    <div className="slider">
      <div className="slide" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="slide-content">
          <h2>{currentSlideData.title}</h2>
          <p>{currentSlideData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
