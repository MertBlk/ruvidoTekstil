import './Home.css';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            {/* fade-in sınıfı kaldırıldı */}
            <div className="home-hero-section">
                {/* fade-in ve delay sınıfları kaldırıldı */}
                <div className="layer layer-1">RUVIDO TEKSTİL</div>
                <div className="layer layer-2">KALİTE</div>
                <div className="layer layer-3">TASARIM</div>
                {/* fade-in ve delay sınıfları kaldırıldı */}
                <Link to="/products" className='home-button'>
                    Ürünlere Git
                </Link>
            </div>
            <div className="products-grid">
                {/* fade-in ve delay sınıfları kaldırıldı */}
                <div className="product-card card-1">
                    <Link to="/about" className="product-link">
                        <img src="/r1.jpeg" alt="Kalite" className="product-image" />
                        <h3>Kalite</h3>
                        <p>En yüksek standartlarda üretilmiş ürünler.</p>
                    </Link>
                </div>
                {/* fade-in ve delay sınıfları kaldırıldı */}
                <div className="product-card card-2">
                    <Link to="/about" className="product-link">
                        <img src="/r2.jpeg" alt="Tasarım" className="product-image" />
                        <h3>Tasarım</h3>
                        <p>Modern ve yenilikçi tasarımlar.</p>
                    </Link>
                </div>
                {/* fade-in ve delay sınıfları kaldırıldı */}
                <div className="product-card card-3">
                    <Link to="/about" className="product-link">
                        <img src="/r3.jpeg" alt="Güven" className="product-image" />
                        <h3>Güven</h3>
                        <p>Müşteri memnuniyetini ön planda tutan hizmet.</p>
                    </Link>
                </div>
            </div>
        </div>
        
    );
};


export default Home;