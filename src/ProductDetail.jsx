import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();

    // Ürün listesi güncellendi (ID 5-8 eklendi)
    const products = [
        { id: 1, name: 'Ürün 1', category: 'Kategori A', price: 100, image: '/r1.jpeg', description: 'Bu, Ürün 1 için detaylı bir açıklamadır.' },
        { id: 2, name: 'Ürün 2', category: 'Kategori B', price: 200, image: '/r2.jpeg', description: 'Bu, Ürün 2 için detaylı bir açıklamadır.' },
        { id: 3, name: 'Ürün 3', category: 'Kategori A', price: 150, image: '/r3.jpeg', description: 'Bu, Ürün 3 için detaylı bir açıklamadır.' },
        { id: 4, name: 'Ürün 4', category: 'Kategori C', price: 300, image: '/vite.svg', description: 'Bu, Ürün 4 için detaylı bir açıklamadır.' },
        // Eksik ürünler eklendi (placeholder fiyat ve açıklama ile)
        { id: 5, name: 'Ürün 5', category: 'Kategori B', price: 250, image: '/r1.jpeg', description: 'Bu, Ürün 5 için detaylı bir açıklamadır.' },
        { id: 6, name: 'Ürün 6', category: 'Kategori C', price: 350, image: '/r2.jpeg', description: 'Bu, Ürün 6 için detaylı bir açıklamadır.' },
        { id: 7, name: 'Ürün 7', category: 'Kategori A', price: 180, image: '/r3.jpeg', description: 'Bu, Ürün 7 için detaylı bir açıklamadır.' },
        { id: 8, name: 'Ürün 8', category: 'Kategori B', price: 280, image: '/vite.svg', description: 'Bu, Ürün 8 için detaylı bir açıklamadır.' },
    ];

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Ürün bulunamadı!</div>;
    }

    return (
        <div className="product-detail-container">
            {/* Alt metni ürün adını içerecek şekilde güncellendi */}
            <img src={product.image} alt={product.name} className="product-detail-image" />
            <div className="product-detail-info">
                <h1>{product.name}</h1>
                <p><strong>Kategori:</strong> {product.category}</p>
                <p><strong>Fiyat:</strong> {product.price} TL</p>
                <p>{product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail;