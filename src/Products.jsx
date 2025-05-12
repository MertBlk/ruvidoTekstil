import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
    const [filter, setFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    
    // visibleProductIndex'i takip etmek için bir ref oluşturuyoruz
    const visibleProductIndexRef = useRef(0);

    const products = [
        { id: 51, name: 'Saç Bandı', category: 'Saç Bandı', images: ['/sac.jpeg'],
          description: 'Pratik ve kullanışlı saç bandı, Cırtsız.' },
        { id: 52, name: 'Spa ve Güzellik Merkezi İçin Saç Bandı', category: 'Saç Bandı', images: ['/sacBandi.jpeg'],
        description: 'Özel tasarım saç bandı.' },

        //Boyun Yastığı Ürünleri
        { id: 40, name: 'Boyun Yastığı', category: 'Boyun Yastığı', images: ['/byastik.jpeg', '/byastik2.jpeg'],
          description: 'Gabardin dış yüzey, elyaf dolgulu iç yapı ile premium konfor.' },
        { id: 42, name: 'Boyun Yastığı Model-2', category: 'Boyun Yastığı', images: ['/bYastik3.jpeg', '/bYastık.jpeg', '/bYastıkMavi.jpeg','/bYastikY.jpeg'],
          description: 'Dışı polar, içi yün dolgu ile konforlu ve kaliteli tasarım.' },
       

        // HAvlu Ürünleri
        { id: 1, name: 'Havlu Model-1', category: 'Havlu', images: ['/havluBeyaz.jpeg', '/havluBeyaz2.jpeg', '/HavluBeyaz3.jpeg'],
          description: '%100 Pamuk Yumuşak dokusu ve yüksek emiciliği ile doğal pamuk konforu.' },
        { id: 4, name: 'Havlu Model-2', category: 'Havlu', images: ['/havluMor.jpeg'],
          description: '%50 Pamuk / %50 Viskon: Pamuk doğallığı ile viskonun hafifliği ve parlaklığı bir arada.' },
        { id: 5, name: 'Havlu Model-3', category: 'Havlu', images: ['/havluSari.jpeg'],
          description: '%100 Bambu: Doğal antibakteriyel özellik ve ekstra yumuşaklık.' },
        { id: 6, name: 'Klasik Havlu', category: 'Havlu', images: ['/havlu.jpeg', '/havlu2.jpeg', '/havlu3.jpeg'],
          description: 'Her mekana uyumlu klasik havlu tasarımı.' },
        { id: 9, name: 'Renkli Havlu', category: 'Havlu', images: ['/renkliHavlu.jpeg'],
          description: 'Çeşitli renk seçenekleriyle havlu modeli.' },
        // T-Shirt Ürünleri
        { id: 10, name: 'Siyah Polo T-Shirt', category: 'Giyim', images: ['/siyahPolo.jpeg', '/siyahPolo2.jpeg', '/t1.jpeg', '/tsiyah.jpeg'], 
          description: 'Kaliteli kumaştan üretilmiş şık siyah polo t-shirt.' },
        { id: 12, name: 'Gri Polo T-Shirt', category: 'Giyim', images: ['/griPolo.jpeg', '/griPolo2.jpeg'],
          description: 'Kurumsal kullanıma uygun gri polo yaka t-shirt.' },
        { id: 14, name: 'Kahverengi Polo T-Shirt', category: 'Giyim', images: ['/kahvePolo.jpeg'],
          description: 'Sıcak kahverengi tonuyla dikkat çeken polo t-shirt.' },
        { id: 15, name: 'Lacivert Polo T-Shirt', category: 'Giyim', images: ['/laciPolo.jpeg'],
          description: 'Klasik lacivert renkte dayanıklı polo t-shirt.' },
        { id: 16, name: 'Renkli Polo T-Shirt', category: 'Giyim', images: ['/renkliPolo.jpeg', '/renklipolo2.jpeg'],
          description: 'Canlı renk seçenekleriyle şık polo t-shirt modeli.' },
        { id: 20, name: 'Beyaz Polo T-Shirt', category: 'Giyim', images: ['/tbeyaz.jpeg'],
          description: 'Temiz ve şık görünümlü beyaz polo t-shirt.' },
        { id: 21, name: 'Bej  Polo T-Shirt', category: 'Giyim', images: ['/tbej.jpeg', '/tbej2.jpeg'],
          description: 'Zarif bej tonunda kaliteli polo t-shirt.' },
        { id: 26, name: 'Beyaz Düz T-Shirt', category: 'Giyim', images: ['/bDuz.jpeg', '/bDuz2.jpeg', '/bduz3.jpeg'],
          description: 'Sade ve rahat beyaz düz t-shirt.' },
        { id: 29, name: 'Gri Düz T-Shirt', category: 'Giyim', images: ['/griDuz.jpeg'],
          description: 'Her kombine uyum sağlayan gri düz t-shirt.' },
        { id: 30, name: 'Kırmızı Düz T-Shirt', category: 'Giyim', images: ['/kırmızıDuz.jpeg'],
          description: 'Canlı kırmızı renkte göz alıcı düz t-shirt.' },
        { id: 31, name: 'Siyah Düz T-Shirt', category: 'Giyim', images: ['/siyahDuz.jpeg', '/siyahDuz2.jpeg','/sTisort.jpeg'],
          description: 'Şık ve zamansız tasarım siyah düz t-shirt.' },
   
        // Çanta Ürünleri
        { id: 33, name: 'Siyah Çanta', category: 'Çanta', images: ['/siyahCanta.jpeg', '/siyahCanta2.jpeg'],
          description: 'Dayanıklı ve şık tasarımlı siyah çanta.' },
            { id: 36, name: 'İpli Çanta', category: 'Çanta', images: ['/ipliCanta.jpeg'],
          description: 'Pratik ipli tasarıma sahip kullanışlı çanta.' },
        { id: 35, name: 'Baskılı Çanta', category: 'Çanta', images: ['/baskiliCanta.jpeg'],
          description: 'Özel baskı teknikleriyle tasarlanmış çanta.' },
      
        // İpli Ürünler
        { id: 46, name: 'İpli Model 2', category: 'Çanta', images: ['/ipli2.jpeg'],
          description: 'Kullanışlı ipli çanta tasarımı.' },
        { id: 47, name: 'İpli Model 3', category: 'Çanta', images: ['/ipli3.jpeg'],
          description: 'Modern ipli çanta modeli.' },
        { id: 48, name: 'İpli Baskı', category: 'Çanta', images: ['/ipliBaski.jpeg'],
          description: 'Özel baskılı ipli çanta.' },
        { id: 49, name: 'İpli Mavi', category: 'Çanta', images: ['/ipliMavi.jpeg'],
          description: 'Mavi renkli şık ipli çanta.' },
        { id: 50, name: 'İpli Renkli', category: 'Çanta', images: ['/ipliRenkli.jpeg'],
          description: 'Renkli detaylarla zenginleştirilmiş ipli çanta.' },
        
        // Şapka Ürünleri
        { id: 37, name: 'Siyah Şapka', category: 'Şapka', images: ['/siyahSapka.png', '/siyahSapka2.png'],
          description: 'Şık siyah şapka, her stile uyum sağlar.' },
        { id: 38, name: 'Düz Beyaz Şapka', category: 'Şapka', images: ['/duzBeyazSpka.jpeg'],
          description: 'Sade tasarımlı beyaz şapka modeli.' },
        { id: 39, name: 'Düz Siyah Şapka', category: 'Şapka', images: ['/duzSiyahSapka.jpeg', '/siyahSapka.jpeg'],
          description: 'Klasik siyah şapka, günlük kullanıma uygun.' },
        //Şal
        { id: 53, name: 'Şal', category: 'Şal', images: ['/sal.jpeg', ],
          description: 'Polar Şal.' },
        { id: 54, name: 'Şal Model-2', category: 'Şal', images: ['/sal2.jpeg'],
          description: 'Yumuşak dokulu TV şalı.' },
    ];

    const categories = ['Boyun Yastığı', 'Saç Bandı', 'Havlu','Şal', 'Giyim', 'Çanta', 'Şapka',];

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

    // Render öncesi sayacı sıfırlıyoruz
    visibleProductIndexRef.current = 0;

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

                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => {
                        // Her bir ürün için visibleProductIndexRef'in değerini kullanıp sonra artırıyoruz
                        const patternIndex = visibleProductIndexRef.current % 3;
                        let cardClassName = "product-card card";

                        if (patternIndex === 0 || patternIndex === 2) { // Sol ve sağ kartlar uzun
                            cardClassName += " tall";
                        }
                        
                        // Sonraki ürün için sayacı artır
                        visibleProductIndexRef.current++;

                        return (
                            <div key={product.id} className={cardClassName}>
                                <Link to={`/products/${product.id}`} className="product-link">
                                    <div className="product-image-container">
                                        <img 
                                            src={product.images[0]} 
                                            alt={`${product.name} - ${product.category}`} 
                                            className="product-image"
                                        />
                                        <div className="product-overlay">
                                            <h3>{product.name}</h3>
                                            <p className="product-category">{product.category}</p>
                                            <p className="product-description">{product.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })
                ) : (
                    <p className="no-results">Aramanızla eşleşen ürün bulunamadı.</p>
                )}
            </div>
        </div>
    );
};

export default Products;