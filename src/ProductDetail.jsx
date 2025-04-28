import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';

// Ürün listesi component dışına taşındı
const products = [
    { id: 1, name: 'Ürün 1', category: 'Kategori A', price: 100, images: ['/r1.jpeg', '/r2.jpeg', '/r3.jpeg'], description: 'Bu, Ürün 1 için detaylı bir açıklamadır.' },
    { id: 2, name: 'Ürün 2', category: 'Kategori B', price: 200, images: ['/r2.jpeg', '/r1.jpeg', '/r3.jpeg'], description: 'Bu, Ürün 2 için detaylı bir açıklamadır.' },
    { id: 3, name: 'Ürün 3', category: 'Kategori A', price: 150, images: ['/r3.jpeg', '/r1.jpeg', '/r2.jpeg'], description: 'Bu, Ürün 3 için detaylı bir açıklamadır.' },
    { id: 4, name: 'Ürün 4', category: 'Kategori C', price: 300, images: ['/vite.svg', '/r1.jpeg', '/r2.jpeg'], description: 'Bu, Ürün 4 için detaylı bir açıklamadır.' },
    { id: 5, name: 'Ürün 5', category: 'Kategori B', price: 250, images: ['/r1.jpeg', '/r2.jpeg'], description: 'Bu, Ürün 5 için detaylı bir açıklamadır.' },
    { id: 6, name: 'Ürün 6', category: 'Kategori C', price: 350, images: ['/r2.jpeg', '/r3.jpeg'], description: 'Bu, Ürün 6 için detaylı bir açıklamadır.' },
    { id: 7, name: 'Ürün 7', category: 'Kategori A', price: 180, images: ['/r3.jpeg', '/r2.jpeg'], description: 'Bu, Ürün 7 için detaylı bir açıklamadır.' },
    { id: 8, name: 'Ürün 8', category: 'Kategori B',  images: ['/vite.svg', '/r1.jpeg'], description: 'Bu, Ürün 8 için detaylı bir açıklamadır.' },
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