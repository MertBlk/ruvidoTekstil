import './Home.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider';

const Home = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
        document.body.classList.add('home');
        
        // Mobil cihazları tespit et
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        // Başlangıçta ve pencere boyutu değiştiğinde kontrol et
        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => {
            document.body.classList.remove('home');
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="home-container">
            <div className={`front-page ${isMobile ? 'mobile-view' : ''}`}>
                <div className="front-page-left">
                    <span className="front-text">RUVIDO</span>
                    <span className="front-text-sub">TEKSTİL</span>
                </div>
                <div className="front-page-right">
                    <Slider />
                </div>
            </div>

            <div className="products-grid" >
                <div className="product-card card-1">
                    <Link to="/products" className="product-link">
                        <div className="product-image-container">
                            <img src="/tisortler.jpeg" alt="Ürünlerimiz" className="product-image" />
                            <div className="product-overlay">
                                <h3>Ürünlerimiz</h3>
                                <p className="product-category">Kalite ve Konfor</p>
                                <p className="product-description">Özel tasarımlar, özgün dokunuşlar ve sınırsız seçeneklerle fark yaratıyoruz.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="product-card card-2">
                    <Link to="/about" className="product-link">
                        <div className="product-image-container">
                            <img src="/ipliBaski.jpeg" alt="Tasarım" className="product-image" />
                            <div className="product-overlay">
                                <h3>Tasarım</h3>
                                <p className="product-category">Benzersiz İmza</p>
                                <p className="product-description">Her ayrıntıda markanıza sizin kadar özel bir imza. Ruvido ile her ürün, sizin benzersiz tarzınızı yansıtır.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="product-card card-3">
                    <Link to="/contact" className="product-link">
                        <div className="product-image-container">
                            <img src="/havluBeyaz.jpeg" alt="İletişim" className="product-image" />
                            <div className="product-overlay">
                                <h3>Bizimle İletişime Geç!</h3>
                                <p className="product-category">Hızlı Dönüş</p>
                                <p className="product-description">Sorularınız için bize ulaşın. Size en kısa sürede geri dönüş yapalım.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;