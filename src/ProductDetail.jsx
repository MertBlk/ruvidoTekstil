import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';

// Ürün listesi component dışına taşındı
const products = [
    {
      id: 1,
      name: 'Polo Yaka T-Shirt Siyah',
      category: 'Giyim',
      price: 450,
      images: ['/tsiyah.jpeg', '/t1.jpeg'],
      description:
        'Kurumsal giyim koleksiyonları için tasarlanmış, %100 pamuklu siyah polo yaka t-shirt. Toptan alıma uygundur. Firma logonuza özel baskı veya nakış seçeneğiyle sunulabilir.'
    },
    {
      id: 2,
      name: 'Polo Yaka T-Shirt Beyaz',
      category: 'Giyim',
      price: 450,
      images: ['/tbeyaz.jpeg'],
      description:
        'Beyaz renkli, dayanıklı ve klasik kesimli polo yaka t-shirt. Kurumsal kimliği yansıtmak isteyen firmalar için idealdir. Toptan siparişe ve özel logo uygulamasına uygundur.'
    },
    {
      id: 3,
      name: 'Polo Yaka T-Shirt Bej',
      category: 'Giyim',
      price: 450,
      images: ['/tbej.jpeg', '/tbej2.jpeg'],
      description:
        'Modern bej rengiyle dikkat çeken polo yaka t-shirt, kurumsal kullanım için şık ve konforlu bir seçenektir. Toptan temin edilebilir, markanıza özel baskı hizmetiyle sunulur.'
    },
    {
      id: 4,
      name: 'Saç Bandı',
      category: 'Aksesuar',
      price: 150,
      images: ['/sac.jpeg'],
      description:
        'Üretim, hizmet ve gıda sektörlerinde personel için pratik kullanım sağlar. Esnek yapısıyla her saç tipine uygundur. Toptan satışa uygundur, kurumsal renk ve logo seçenekleri mevcuttur.'
    },
    {
      id: 5,
      name: 'Boyun Yastığı',
      category: 'Ev Ürünleri',
      price: 250,
      images: ['/byastik.jpeg', '/byastik2.jpeg'],
      description:
        'Seyahat ve ofis kullanımı için ergonomik destek sağlayan boyun yastığı. Hafızalı sünger yapısıyla üst düzey konfor sunar. Kurumsal promosyon ürünü olarak toptan sipariş edilebilir.'
    }
  ];

const ProductDetail = () => {
    const { id } = useParams();
    const [mainImageIndex, setMainImageIndex] = useState(0);

    const product = useMemo(() => products.find(p => p.id === parseInt(id)), [id]);

    if (!product) {
        return <div>Ürün bulunamadı!</div>;
    }

    // Ana görsel değiştirme fonksiyonu
    const handleImageChange = useCallback((idx) => {
        setMainImageIndex(idx);
    }, []);

    useEffect(() => {
        setMainImageIndex(0);
    }, [id]);

    // Önerilen ürünler hesaplaması
    const suggested = useMemo(() => {
        const relatedProducts = products.filter(p => p.id !== product.id);
        return [...relatedProducts]
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
    }, [product.id]);

    // Önerilen ürünler için ana görsel
    const getSuggestedImage = useCallback((item) => {
        return item.images && item.images.length > 0 ? item.images[0] : '/vite.svg';
    }, []);

    return (
        <>
            <div className="product-detail-gallery-layout">
                <div className="gallery-thumbnails-vertical">
                    {product.images.map((img, idx) => (
                        <div
                            key={idx}
                            className={`gallery-thumb-box${mainImageIndex === idx ? ' active' : ''}`}
                            onClick={() => handleImageChange(idx)}
                        >
                            <img
                                src={img}
                                alt={`${product.name} thumb ${idx + 1}`}
                                className="gallery-thumbnail-vertical"
                            />
                        </div>
                    ))}
                </div>
                <div className="gallery-main-image-block-vertical">
                    <img 
                        key={`${product.id}-${mainImageIndex}`}
                        src={product.images[mainImageIndex]} 
                        alt={product.name} 
                        className="gallery-main-image-vertical" 
                    />
                </div>
                <div className="gallery-product-info">
                    <h1>{product.name}</h1>
                    
                    <div className="gallery-product-category">{product.category}</div>
                    <div className="gallery-product-desc">{product.description}</div>
                
                </div>
            </div>
            <div className="suggested-products-section">
                <h2>Bu ürünler de ilginizi çekebilir</h2>
                <div className="suggested-products">
                    {suggested.map((item) => (
                        <Link to={`/products/${item.id}`} key={item.id} className="suggested-product-card">
                            <img src={getSuggestedImage(item)} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.category}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductDetail;