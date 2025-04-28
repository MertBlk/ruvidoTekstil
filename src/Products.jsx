import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
    const [filter, setFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState(''); // Arama terimi için state eklendi

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

    // Filtreleme mantığı güncellendi: Hem kategori hem de arama terimi
    const filteredProducts = products.filter(product => {
        const categoryMatch = filter === '' || product.category === filter;
        const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && searchMatch;
    });

    // Arama input'u için handler fonksiyonu
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="products-container">
            <div className="filter-bar">
                {/* Kategori filtre butonları */}
                <button
                    className={`filter-button ${filter === '' ? 'active' : ''}`}
                    onClick={() => setFilter('')}
                >
                    Tümü
                </button>
                {categories.map((category, index) => (
                    <button
                        key={category}
                        className={`filter-button ${filter === category ? 'active' : ''}`}
                        onClick={() => setFilter(category)}
                    >
                        {category}
                    </button>
                ))}
                {/* Arama input alanı */}
                <input
                    type="text"
                    placeholder="Ürün ara..."
                    className="search-input"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="products-grid">
                {/* Ürün listesi (filteredProducts kullanılıyor) */}
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                        <div key={product.id} className={`product-card`}>
                            <Link to={`/products/${product.id}`} className="product-link">
                                <img src={product.image} alt={`${product.name} - ${product.category}`} className="product-image" />
                                <h3>{product.name}</h3>
                                <p>Kategori: {product.category}</p>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="no-results">Aramanızla eşleşen ürün bulunamadı.</p> // Eşleşme olmadığında mesaj
                )}
            </div>
        </div>
    );
};

export default Products;