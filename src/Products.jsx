import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
    const [filter, setFilter] = useState('');

    const products = [
        { id: 1, name: 'Ürün 1', category: 'Kategori A', image: '/r1.jpeg' },
        { id: 2, name: 'Ürün 2', category: 'Kategori B',  image: '/r2.jpeg' },
        { id: 3, name: 'Ürün 3', category: 'Kategori A', image: '/r3.jpeg' },
        { id: 4, name: 'Ürün 4', category: 'Kategori C',     image: '/r2.jpeg' },
    ];

    const filteredProducts = products.filter(product =>
        filter === '' || product.category === filter
    );

    return (
        <div className="products-container">
            <div className="filter-bar">
                <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                    <option value="">Tüm Kategoriler</option>
                    <option value="Kategori A">Kategori A</option>
                    <option value="Kategori B">Kategori B</option>
                    <option value="Kategori C">Kategori C</option>
                </select>
            </div>
            <div className="products-grid">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <Link to={`/products/${product.id}`} className="product-link">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h3>{product.name}</h3>
                            <p>Kategori: {product.category}</p>
                            <p>Fiyat: {product.price} TL</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;