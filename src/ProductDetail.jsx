import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();

    // Örnek ürün verisi
    const productList = [
        { id: 1, name: 'Ürün 1', description: 'Bu birinci ürün.', image: '/assets/product1.jpg' },
        { id: 2, name: 'Ürün 2', description: 'Bu ikinci ürün.', image: '/assets/product2.jpg' },
        { id: 3, name: 'Ürün 3', description: 'Bu üçüncü ürün.', image: '/assets/product3.jpg' },
        { id: 4, name: 'Ürün 4', description: 'Bu dördüncü ürün.', image: '/assets/product4.jpg' },
    ];

    const product = productList.find(p => p.id === parseInt(id));

    if (!product) {
        return <h1>Ürün bulunamadı</h1>;
    }

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} className="product-detail-image" />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetail;