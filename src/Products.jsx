import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
    const [filter, setFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState(''); // Arama terimi için state eklendi

    const products = [
        { id: 1, name: 'Polo Yaka T-Shirt Siyah', category: 'Giyim', image: '/tsiyah.jpeg' },
        { id: 2, name: 'Polo Yaka T-Shirt Beyaz', category: 'Giyim',  image: '/tbeyaz.jpeg' },
        { id: 3, name: 'Polo Yaka T-Shirt Bej', category: 'Giyim', image: '/tbej.jpeg' },
        { id: 4, name: 'Saç Bandı', category: 'Aksesuar', image: '/sac.jpeg' },
        { id: 5, name: 'Boyun Yastığı', category: 'Ev Ürünleri', image: '/byastik.jpeg' },
        
    ];

    const categories = ['Giyim', 'Aksesuar', 'Boyun Yastığı', ];

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
                    Tüm Ürünler
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