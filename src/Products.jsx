import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';

const Products = () => {
    const navigate = useNavigate();

    const productList = [
        { id: 1, name: 'Ürün 1', description: 'Bu birinci ürün.', image: '/assets/product1.jpg' },
        { id: 2, name: 'Ürün 2', description: 'Bu ikinci ürün.', image: '/assets/product2.jpg' },
        { id: 3, name: 'Ürün 3', description: 'Bu üçüncü ürün.', image: '/assets/product3.jpg' },
        { id: 4, name: 'Ürün 4', description: 'Bu dördüncü ürün.', image: '/assets/product4.jpg' },
    ];

    const handleCardClick = (id) => {
        navigate(`/products/${id}`);
    };

    return (
        <div className="products">
            <h1>Ürünlerimiz</h1>
            <div className="product-grid">
                {productList.map(product => (
                    <div key={product.id} className="product-card" onClick={() => handleCardClick(product.id)}>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;