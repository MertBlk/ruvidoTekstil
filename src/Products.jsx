import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
    const [filter, setFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState(''); // Arama terimi için state eklendi

    const products = [
        // T-Shirt Ürünleri
        { id: 10, name: 'Siyah Polo T-Shirt', category: 'Giyim', images: ['/siyahPolo.jpeg', '/siyahPolo2.jpeg', '/t1.jpeg', '/tsiyah.jpeg'] },
        { id: 12, name: 'Gri Polo T-Shirt', category: 'Giyim', images: ['/griPolo.jpeg', '/griPolo2.jpeg'] },
        { id: 14, name: 'Kahverengi Polo T-Shirt', category: 'Giyim', images: ['/kahvePolo.jpeg'] },
        { id: 15, name: 'Lacivert Polo T-Shirt', category: 'Giyim', images: ['/laciPolo.jpeg'] },
        { id: 16, name: 'Renkli Polo T-Shirt', category: 'Giyim', images: ['/renkliPolo.jpeg', '/renklipolo2.jpeg'] },
        
        { id: 20, name: 'Beyaz Polo T-Shirt', category: 'Giyim', images: ['/tbeyaz.jpeg'] },
        { id: 21, name: 'Bej  Polo T-Shirt', category: 'Giyim', images: ['/tbej.jpeg', '/tbej2.jpeg'] },
        // Düz Ürünler
        { id: 26, name: 'Beyaz Düz T-Shirt', category: 'Tekstil', images: ['/bDuz.jpeg', '/bDuz2.jpeg', '/bduz3.jpeg'] },
        { id: 29, name: 'Gri Düz T-Shirt', category: 'Tekstil', images: ['/griDuz.jpeg'] },
        { id: 30, name: 'Kırmızı Düz T-Shirt', category: 'Tekstil', images: ['/kırmızıDuz.jpeg'] },
        { id: 31, name: 'Siyah Düz T-Shirt', category: 'Tekstil', images: ['/siyahDuz.jpeg', '/siyahDuz2.jpeg','/sTisort.jpeg'] },
   
        // Çanta Ürünleri
        { id: 33, name: 'Siyah Çanta', category: 'Aksesuar', images: ['/siyahCanta.jpeg', '/siyahCanta2.jpeg'] },
        { id: 35, name: 'Baskılı Çanta', category: 'Aksesuar', images: ['/cantaBaski.jpeg'] },
        { id: 36, name: 'İpli Çanta', category: 'Aksesuar', images: ['/ipliCanta.jpeg'] },
        
        // Şapka Ürünleri
        { id: 37, name: 'Siyah Şapka', category: 'Aksesuar', images: ['/siyahSapka.jpeg', '/duzSiyahSapka.jpeg'] },
        { id: 38, name: 'Düz Beyaz Şapka', category: 'Aksesuar', images: ['/duzBeyazSpka.jpeg'] },
        { id: 39, name: 'Düz Siyah Şapka', category: 'Aksesuar', images: ['/duzSiyahSapka.jpeg', '/siyahSapka.jpeg'] },
        
        // Yastık Ürünleri
        { id: 40, name: 'Boyun Yastığı', category: 'Boyun Yastığı', images: ['/byastik.jpeg', '/byastik2.jpeg'] },
        { id: 42, name: 'Boyun Yastığı Bej', category: 'Boyun Yastığı', images: ['/bYastik3.jpeg'] },
        { id: 43, name: 'Boyun Yastığı Beyaz', category: 'Boyun Yastığı', images: ['/bYastık.jpeg'] },
        { id: 44, name: 'Boyun Yastığı Mavi', category: 'Boyun Yastığı', images: ['/bYastıkMavi.jpeg'] },
        { id: 45, name: 'Boyun Yastığı Yeşil', category: 'Boyun Yastığı', images: ['/bYastikY.jpeg'] },
        
        // Havlu Ürünleri
        { id: 1, name: 'Beyaz Havlu', category: 'Havlu', images: ['/havluBeyaz.jpeg', '/havluBeyaz2.jpeg', '/HavluBeyaz3.jpeg'] },
        
        { id: 4, name: 'Mor Havlu', category: 'Havlu', images: ['/havluMor.jpeg'] },
        { id: 5, name: 'Sarı Havlu', category: 'Havlu', images: ['/havluSari.jpeg'] },
        { id: 6, name: 'Klasik Havlu', category: 'Havlu', images: ['/havlu.jpeg', '/havlu2.jpeg', '/havlu3.jpeg'] },
        
        { id: 9, name: 'Renkli Havlu', category: 'Havlu', images: ['/renkliHavlu.jpeg'] },
        
        // İpli Ürünler
        { id: 46, name: 'İpli Model 2', category: 'Çanta', images: ['/ipli2.jpeg'] },
        { id: 47, name: 'İpli Model 3', category: 'Çanta', images: ['/ipli3.jpeg'] },
        { id: 48, name: 'İpli Baskı', category: 'Çanta', images: ['/ipliBaski.jpeg'] },
        { id: 49, name: 'İpli Mavi', category: 'Çanta', images: ['/ipliMavi.jpeg'] },
        { id: 50, name: 'İpli Renkli', category: 'Çanta', images: ['/ipliRenkli.jpeg'] },
        
        // Diğer Ürünler
        { id: 51, name: 'Saç Bandı', category: 'Saç Bandı', images: ['/sac.jpeg', '/sacBandi.jpeg'] },
        { id: 52, name: 'Özel Saç Bandı', category: 'Saç Bandı', images: ['/sacBandi.jpeg'] },
        
        
   
    ];

    const categories = ['Giyim', 'Saç Bandı', 'Boyun Yastığı', 'Havlu', 'Çanta', ];

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
                    filteredProducts.map((product) => (
                        <div key={product.id} className={`product-card`}>
                            <Link to={`/products/${product.id}`} className="product-link">
                                <img src={product.images[0]} alt={`${product.name} - ${product.category}`} className="product-image" />
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