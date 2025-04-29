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
            <div className="home-hero-section">
                
                {/* Slider eklendi */}
                <Slider />
               
            </div>
           
            <div className="products-grid">
                {/* fade-in ve delay sınıfları kaldırıldı */}
                <div className="product-card card-1">
                    <Link to="/products" className="product-link">
                        <img src="/r1.jpeg" alt="Ürünlerimiz" className="product-image" />
                        <h3>Ürünlerimiz</h3>
                        <p>Özel tasarımlar, özgün dokunuşlar ve sınırsız seçeneklerle fark yaratıyoruz.</p>
                    </Link>
                </div>
                {/* fade-in ve delay sınıfları kaldırıldı */}
                <div className="product-card card-2">
                    <Link to="/about" className="product-link">
                        <img src="/r2.jpeg" alt="Tasarım" className="product-image" />
                        <h3>Tasarım</h3>
                        <p>Her ayrıntıda markanıza sizin kadar özel bir imza. Ruvido ile her ürün, sizin benzersiz tarzınızı yansıtır.</p>
                    </Link>
                </div>
                {/* fade-in ve delay sınıfları kaldırıldı */}
                <div className="product-card card-3">
                    <Link to="/contact" className="product-link">
                        <img src="/r3.jpeg" alt="Güven" className="product-image" />
                        <h3>Bizimle İletişme Geç!</h3>
                        <p> Sorularınız için bize ulaşın. Size en kısa sürede geri dönüş yapalım. </p>
                    </Link>
                </div>
            </div>
            <div className="neden-biz-section">
                <h2>Neden Biz?</h2>
                <p>
                Ruvido Tekstil olarak, kaliteyi, güveni ve yenilikçi tasarımı bir araya getirerek sektörde standartları yeniden tanımlıyoruz. Müşteri odaklı yaklaşımımız, zengin ürün çeşitliliğimiz ve sürdürülebilir üretim anlayışımızla her zaman yanınızdayız.
                </p>
            </div>
        </div>
        
    );
};


export default Home;