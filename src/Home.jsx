import './Home.css';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider';

const Home = () => {
    useEffect(() => {
        // Ana sayfa yüklendiğinde body'ye 'home' sınıfını ekle
        document.body.classList.add('home');
        return () => {
            // Ana sayfadan çıkıldığında 'home' sınıfını kaldır
            document.body.classList.remove('home');
        };
    }, []);

    return (
        <div>
            <div className="front-page">
                <div className="front-page-left">
                    <span className="front-text">RUVIDO</span>
                    <span className="front-text-sub">TEKSTİL</span>
                </div>
                <div className="front-page-right">
                    <Slider />
                </div>
            </div>
           
            <div className="products-grid">
                <div className="product-card card-1">
                    <Link to="/products" className="product-link">
                        <img src="/tisortler.jpeg" alt="Ürünlerimiz" className="product-image" />
                        <h3>Ürünlerimiz</h3>
                        <p>Özel tasarımlar, özgün dokunuşlar ve sınırsız seçeneklerle fark yaratıyoruz.</p>
                    </Link>
                </div>
                <div className="product-card card-2">
                    <Link to="/about" className="product-link">
                        <img src="/ipliBaski.jpeg" alt="Tasarım" className="product-image" />
                        <h3>Tasarım</h3>
                        <p>Her ayrıntıda markanıza sizin kadar özel bir imza. Ruvido ile her ürün, sizin benzersiz tarzınızı yansıtır.</p>
                    </Link>
                </div>
                <div className="product-card card-3">
                    <Link to="/contact" className="product-link">
                        <img src="/" alt="Güven" className="product-image" />
                        <h3>Bizimle İletişime Geç!</h3>
                        <p> Sorularınız için bize ulaşın. Size en kısa sürede geri dönüş yapalım. </p>
                    </Link>
                </div>
            </div>
            
        </div>
        
    );
};


export default Home;