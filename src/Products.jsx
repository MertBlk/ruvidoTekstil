import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
    const [filter, setFilter] = useState('');

    const products = [
        { id: 1, name: 'Ürün 1', category: 'Kategori A', image: '/r1.jpeg' },
        { id: 2, name: 'Ürün 2', category: 'Kategori B',  image: '/r2.jpeg' },
        { id: 3, name: 'Ürün 3', category: 'Kategori A', image: '/r3.jpeg' },
        { id: 4, name: 'Ürün 4', category: 'Kategori C', image: '/vite.svg' },
        { id: 5, name: 'Ürün 5', category: 'Kategori B', image: '/r1.jpeg' },
        { id: 6, name: 'Ürün 6', category: 'Kategori C', image: '/r2.jpeg' },
        { id: 7, name: 'Ürün 7', category: 'Kategori A', image: '/r3.jpeg' },
        { id: 8, name: 'Ürün 8', category: 'Kategori B', image: '/vite.svg' },
    ];

    const categories = ['Kategori A', 'Kategori B', 'Kategori C'];

    const filteredProducts = products.filter(product =>
        filter === '' || product.category === filter
    );

    return (
        <div className="products-container fade-in">
            <div className="filter-bar fade-in delay-100">
                <button 
                    className={`filter-button ${filter === '' ? 'active' : ''}`}
                    onClick={() => setFilter('')}
                >
                    Tümü
                </button>
                {categories.map((category, index) => (
                    <button
                        key={category}
                        className={`filter-button ${filter === category ? 'active' : ''} fade-in delay-${(index + 2) * 100}`}
                        onClick={() => setFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="products-grid">
                {filteredProducts.map((product, index) => (
                    <div key={product.id} className={`product-card fade-in delay-${(index + 2) * 100}`}>
                        <Link to={`/products/${product.id}`} className="product-link">
                            <img src={product.image} alt={`${product.name} - ${product.category}`} className="product-image" />
                            <h3>{product.name}</h3>
                            <p>Kategori: {product.category}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;