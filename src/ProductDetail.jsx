import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';

const isMobile = () => window.innerWidth <= 768;

// Ürün listesinden price, minOrder ve deliveryTime özelliklerini kaldırıyorum
const products = [
    // Tüm ürünler için customization alanına 10 renk seçeneği ile ekleniyor
    { id: 10, name: 'Polo T-Shirt Model-1', category: 'Giyim', images: ['/siyahPolo.jpeg', '/siyahPolo2.jpeg', '/t1.jpeg', '/tsiyah.jpeg'],
      description: 'Kurumsal giyim koleksiyonları için tasarlanmış, %100 pamuklu  ,Polo Yaka T-shirt. Toptan alıma uygundur ',
      details: {
        customization: 'İşletmenizin kimliğini yansıtan havlularla fark yaratın. Logo, slogan ve kurumsal renklerinize uyumlu tasarımlar sayesinde, markanız her detayda ön plana çıkar. Geniş materyal seçenekleri ve kişiselleştirilebilir üretim anlayışımızla, ihtiyaçlarınıza özel çözümler sunuyoruz. %100 Pamuk 10 renk seçeneği ile'
      }
    },
    { id: 12, name: 'Gri Polo T-Shirt Model-2', category: 'Giyim', images: ['/griPolo.jpeg', '/griPolo2.jpeg'],
      description: 'Giyim Profesyonel görünüm için tasarlanmış %50 Pamuk / %50 Viskon Polo T-shirt. Kurumsal kimliğinizi tamamlayacak şık bir seçenek.',
      details: {
        customization: 'İşletmenizin kimliğini yansıtan havlularla fark yaratın. Logo, slogan ve kurumsal  istediğiniz renk seçenekleri ve uyumlu tasarımlar sayesinde, markanız her detayda ön plana çıkar. Geniş materyal seçenekleri ve kişiselleştirilebilir üretim anlayışımızla, ihtiyaçlarınıza özel çözümler sunuyoruz. 10 renk seçeneği ile'
      }
    },
    { id: 14, name: 'Kahverengi Polo T-Shirt Model-3', category: 'Giyim', images: ['/kahvePolo.jpeg'],
      description: 'Profesyonel görünüm için tasarlanmış  %70 Pamuk / %30 Polyester\'den üretilmiş  Polo T-shirt. ',
      details: {
        customization: 'İşletmenizin kimliğini yansıtan havlularla fark yaratın. Logo, slogan ve kurumsal renklerinize uyumlu tasarımlar sayesinde, markanız her detayda ön plana çıkar. Geniş materyal seçenekleri ve kişiselleştirilebilir üretim anlayışımızla, ihtiyaçlarınıza özel çözümler sunuyoruz. 10 renk seçeneği ile'
      }
    },
    { id: 15, name: 'Polo T-Shirt Model-1', category: 'Giyim', images: ['/laciPolo.jpeg'], 
     description: 'Kurumsal giyim koleksiyonları için tasarlanmış, %100 pamuklu Polo Yaka T-shirt. Toptan alıma uygundur',
      details: {
        customization: 'İşletmenizin kimliğini yansıtan havlularla fark yaratın. Logo, slogan ve kurumsal renklerinize uyumlu tasarımlar sayesinde, markanız her detayda ön plana çıkar. Geniş materyal seçenekleri ve kişiselleştirilebilir üretim anlayışımızla, ihtiyaçlarınıza özel çözümler sunuyoruz. 10 renk seçeneği ile'
      }
    },
    { id: 16, name: 'Renkli Polo T-Shirt Model-2', category: 'Giyim', images: ['/renkliPolo.jpeg', '/renklipolo2.jpeg'], 
      description: 'Profesyonel görünüm için tasarlanmış %50 Pamuk / %50 Viskon Polo T-shirt. Kurumsal kimliğinizi tamamlayacak şık bir seçenek.',
      details: {
        customization: 'İşletmenizin kimliğini yansıtan havlularla fark yaratın. Logo, slogan ve kurumsal renklerinize uyumlu tasarımlar sayesinde, markanız her detayda ön plana çıkar. Geniş materyal seçenekleri ve kişiselleştirilebilir üretim anlayışımızla, ihtiyaçlarınıza özel çözümler sunuyoruz. 10 renk seçeneği ile'
      }
    },
   
    { id: 20, name: 'Polo T-Shirt Model-1', category: 'Giyim', images: ['/tbeyaz.jpeg'], 
      description: 'Kurumsal giyim koleksiyonları için tasarlanmış, %100 pamuklu Polo Yaka T-shirt. Toptan alıma uygundur',
      details: {
        customization: 'İşletmenizin kimliğini yansıtan havlularla fark yaratın. Logo, slogan ve kurumsal renklerinize uyumlu tasarımlar sayesinde, markanız her detayda ön plana çıkar. Geniş materyal seçenekleri ve kişiselleştirilebilir üretim anlayışımızla, ihtiyaçlarınıza özel çözümler sunuyoruz. 10 renk seçeneği ile'
      }
    },
    { id: 21, name: 'Polo T-Shirt Model-2', category: 'Giyim', images: ['/tbej.jpeg', '/tbej2.jpeg'],
      description: 'Giyim Profesyonel görünüm için tasarlanmış %50 Pamuk / %50 Viskon Polo T-shirt. Kurumsal kimliğinizi tamamlayacak şık bir seçenek.',
      details: {
        customization: 'İşletmenizin kimliğini yansıtan havlularla fark yaratın. Logo, slogan ve kurumsal renklerinize uyumlu tasarımlar sayesinde, markanız her detayda ön plana çıkar. Geniş materyal seçenekleri ve kişiselleştirilebilir üretim anlayışımızla, ihtiyaçlarınıza özel çözümler sunuyoruz. 10 renk seçeneği ile'
      }
    },
  
    
    // Düz Ürünler,
    { id: 30, name: 'T-Shirt Model-1', category: 'Tekstil', images: ['/kırmızıDuz.jpeg'], 
      description: 'Kurumsal giyim koleksiyonları için tasarlanmış, %100 pamuklu T-shirt. Toptan alıma uygundur',
      details: {
        customization: 'Logo ve özel desenler eklenebilir 10 renk seçeneği ile'
      }
    },
    { id: 26, name: 'T-Shirt Model-2', category: 'Tekstil', images: ['/bDuz.jpeg', '/bDuz2.jpeg', '/bduz3.jpeg'], 
      description: 'Profesyonel görünüm için tasarlanmış %50 Pamuk / %50 Viskon  T-shirt. Kurumsal kimliğinizi tamamlayacak şık bir seçenek.',
      details: {
        customization: 'Özel baskı ve desen uygulamaları yapılabilir 10 renk seçeneği ile'
      }
    },
    { id: 29, name: 'T-Shirt Model-3', category: 'Tekstil', images: ['/griDuz.jpeg'], 
      description: 'Profesyonel görünüm için tasarlanmış  %70 Pamuk / %30 Polyester\'den üretilmiş T-shirt.',
      details: {
        customization: 'Kurumsal desenler ekleme imkanı 10 renk seçeneği ile'
      }
    },
    
    { id: 31, name: 'T-Shirt Model-1', category: 'Tekstil', images: ['/siyahDuz.jpeg', '/siyahDuz2.jpeg'], 
      description: 'Klasik renkli düz kumaş, her türlü dekoratif amaçla kullanılabilir.',
      details: {
        customization: 'Kurumsal giyim koleksiyonları için tasarlanmış, %100 pamuklu  T-shirt. Toptan alıma uygundur 10 renk seçeneği ile'
      }
    },
    
    // Çanta Ürünleri
    { id: 33, name: 'Siyah Çanta', category: 'Aksesuar', images: ['/siyahCanta.jpeg', '/siyahCanta2.jpeg'], 
      description: 'Dayanıklı ve şık tasarımlı siyah çanta, kurumsal hediye ve promosyon amaçlı kullanım için ideal.',
      details: {
        customization: 'Logo baskısı ve kurumsal renklerle üretilebilir 10 renk seçeneği ile'
      }
    },
    { id: 35, name: 'Çanta Baskı', category: 'Aksesuar', images: ['/baskiliCanta.jpeg'], 
      description: 'Özel baskı teknikleriyle kişiselleştirilebilen promosyon çantası.',
      details: {
        customization: 'Tam renkli baskı ve logo uygulamaları yapılabilir 10 renk seçeneği ile'
      }
    },
    { id: 36, name: 'İpli Çanta', category: 'Aksesuar', images: ['/ipliCanta.jpeg'], 
      description: 'Pratik ipli kapama sistemiyle kullanım kolaylığı sağlayan çanta modeli.',
      details: {
        customization: 'Logo ve kurumsal kimlik uygulamaları 10 renk seçeneği ile'
      }
    },
    
    // Şapka Ürünleri
    { id: 37, name: 'Siyah Şapka', category: 'Aksesuar', images: ['/siyahSapka.png', '/siyahSapka2.png'],
      description: 'Şık ve dayanıklı siyah şapka, kurumsal etkinlik ve promosyon amaçlı kullanım için uygundur.',
      details: {
        customization: 'Logo nakışı ve özel etiketleme yapılabilir 10 renk seçeneği ile'
      }
    },
    { id: 38, name: 'Düz Beyaz Şapka', category: 'Aksesuar', images: ['/duzBeyazS.png', '/duzBeyazS2.png'], 
      description: 'Klasik beyaz şapka, promosyon ve etkinlikler için ideal bir seçenek.',
      details: {
        customization: 'Logo nakışı ve baskı seçenekleri mevcuttur 10 renk seçeneği ile'
      }
    },
    { id: 39, name: 'Düz Siyah Şapka', category: 'Aksesuar', images: ['/duzSiyah.png','/duzSiyah2.png' ], 
      description: 'Standart siyah şapka, her ortama uyum sağlayan tasarımıyla dikkat çeker.',
            details: {
        customization: 'Özel logo ve tasarım uygulamaları yapılabilir 10 renk seçeneği ile'
      }
    },
    
    // Yastık Ürünleri
    { id: 40, name: 'Boyun Yastığı', category: 'Ev Ürünleri', images: ['/byastik.jpeg', '/byastik2.jpeg'], 
      description: 'Seyahat ve ofis kullanımı için ergonomik destek sağlayan boyun yastığı. Kurumsal promosyon ürünü olarak ideal.',
      details: {
        customization: 'Logo baskısı ve renk seçimi ile özelleştirilebilir 10 renk seçeneği ile'
      }
    },
    
    { id: 42, name: 'Boyun Yastığı Model 2', category: 'Ev Ürünleri', images: ['/bYastik3.jpeg', '/bYastık.jpeg', '/bYastıkMavi.jpeg','/bYastikY.jpeg'],
      description: 'Dışı polar, içi yün dolgu ile konforlu ve kaliteli tasarım.',
      details: {
        customization: 'Logo baskısı ve özel renk  seçenekleri 10 renk seçeneği ile'
      }
    },
    
    { id: 44, name: 'Boyun Yastığı Model-2', category: 'Ev Ürünleri', images: ['/bYastıkMavi.jpeg'], 
      description: 'Ferahlatıcı mavi rengiyle dinlendirici bir etki yaratan konforlu boyun yastığı.',
      details: {
        customization: 'Logo ve kurumsal renk uygulamaları yapılabilir 10 renk seçeneği ile'
      }
    },
    { id: 45, name: 'Boyun Yastığı Model-2', category: 'Ev Ürünleri', images: ['/bYastikY.jpeg'], 
      description: 'En son teknoloji ile geliştirilen, maksimum konfor sağlayan yeni nesil boyun yastığı.',
      details: {
        customization: 'Özel tasarım ve logo uygulamaları mümkündür 10 renk seçeneği ile'
      }
    },
    
    // Havlu Ürünleri
    { id: 1, name: 'Beyaz Havlu', category: 'Havlu', images: ['/havluBeyaz.jpeg', '/havluBeyaz2.jpeg', '/HavluBeyaz3.jpeg'], 
      description: 'Yüksek kaliteli beyaz havlu, yumuşak dokusu ve emici özelliği ile otel ve tesisler için idealdir.',
      details: {
        customization: 'Kurumsal logo nakışı eklenebilir 10 renk seçeneği ile'
      }
    },
    { id: 2, name: 'Beyaz Havlu Model 2', category: 'Havlu', images: ['/havluBeyaz2.jpeg', '/havluBeyaz.jpeg'], 
      description: 'Özel dokuma tekniği ile üretilmiş, dayanıklı beyaz havlu. Otel, spa ve sağlık tesisleri için uygundur.',
      details: {
        customization: 'Renk ve logo özelleştirmeleri yapılabilir 10 renk seçeneği ile'
      }
    },
    { id: 3, name: 'Beyaz Havlu Model 3', category: 'Havlu', images: ['/HavluBeyaz3.jpeg', '/havluBeyaz.jpeg'], 
      description: 'Premium kalitede beyaz havlu, uzun ömürlü ve yumuşak dokusu ile profesyonel kullanım için tasarlanmıştır.',
      details: {
        customization: 'Logo baskısı ve özel etiketleme yapılabilir 10 renk seçeneği ile'
      }
    },
    { id: 4, name: 'Mor Havlu', category: 'Havlu', images: ['/havluMor.jpeg'], 
      description: 'Şık mor rengi ile dikkat çeken, yüksek emici özelliğe sahip kaliteli havlu.',
      details: {
        customization: 'Logo ve kurumsal renklere uygun tasarım yapılabilir 10 renk seçeneği ile'
      }
    },
    { id: 5, name: 'Sarı Havlu', category: 'Havlu', images: ['/havluSari.jpeg'], 
      description: 'Canlı sarı rengiyle enerjik bir atmosfer yaratan, yumuşak dokulu havlu.',
      details: {
        customization: 'Logo nakışı ve özel paketleme seçenekleri sunulur 10 renk seçeneği ile'
      }
    },
    { id: 6, name: 'Klasik Havlu', category: 'Havlu', images: ['/havlu.jpeg', '/havlu2.jpeg', '/havlu3.jpeg'], 
      description: 'Çok amaçlı kullanıma uygun, standart ebatlarda klasik havlu modeli.',
      details: {
        customization: 'Logo ve kurumsal kimlik uygulamaları yapılabilir 10 renk seçeneği ile'
      }
    },
    { id: 7, name: 'Klasik Havlu Model 2', category: 'Havlu', images: ['/havlu2.jpeg', '/havlu.jpeg'], 
      description: 'Farklı dokuma tekniği ile üretilmiş, standart boyutlu kaliteli havlu.',
      details: {
        customization: 'Logo baskısı ve nakış seçenekleri 10 renk seçeneği ile'
      }
    },
    { id: 8, name: 'Klasik Havlu Model 3', category: 'Havlu', images: ['/havlu3.jpeg', '/havlu.jpeg'], 
      description: 'Alternatif desen ve dokuma detaylarıyla öne çıkan klasik havlu çeşidi.',
      details: {
        customization: 'Özel desen ve logo uygulamaları 10 renk seçeneği ile'
      }
    },
    { id: 9, name: 'Renkli Havlu', category: 'Havlu', images: ['/renkliHavlu.jpeg'], 
      description: 'Çeşitli renk seçenekleriyle canlı mekanlar için ideal havlu çeşidi.',
      details: {
        customization: 'Renklere uyumlu logo ve tasarım uygulamaları 10 renk seçeneği ile'
      }
    },
    
    // İpli Ürünler
    { id: 46, name: 'İpli Model 2', category: 'Tekstil', images: ['/ipli2.jpeg'], 
      description: 'İpli detaylarla zenginleştirilmiş özel tekstil ürünü.',
      details: {
        customization: 'Özel tasarım ve renk seçenekleri 10 renk seçeneği ile'
      }
    },
    { id: 47, name: 'İpli Model 3', category: 'Tekstil', images: ['/ipli3.jpeg'], 
      description: 'Premium kalitede, dikkat çekici ipli detaylara sahip tekstil ürünü.',
      details: {
        customization: 'Logo ve kurumsal kimlik uygulamaları 10 renk seçeneği ile'
      }
    },
    { id: 48, name: 'İpli Baskı', category: 'Tekstil', images: ['/ipliBaski.jpeg'], 
      description: 'Özel baskı tekniği ile üretilmiş, ipli detaylara sahip tekstil ürünü.',
      details: {
        minOrder: '50 adet',
        deliveryTime: '10 iş günü',
        customization: 'Tam renk baskı ve özel tasarım imkanı 10 renk seçeneği ile'
      }
    },
    { id: 49, name: 'İpli Mavi', category: 'Tekstil', images: ['/ipliMavi.jpeg'], 
      description: 'Mavi tonlarında, modern tasarımlı ipli tekstil ürünü.',
      details: {
        customization: 'Logo ve kurumsal renk uygulamaları 10 renk seçeneği ile'
      }
    },
    { id: 50, name: 'İpli Renkli', category: 'Tekstil', images: ['/ipliRenkli.jpeg'], 
      description: 'Farklı renk seçeneklerine sahip, modern ipli tekstil ürünü.',
      details: {
        minOrder: '50 adet',
        deliveryTime: '7-10 iş günü',
        customization: 'Özel renk ve logo uygulamaları yapılabilir 10 renk seçeneği ile'
      }
    },
    
    // Diğer Ürünler
    { id: 51, name: 'Saç Bandı', category: 'Aksesuar', images: ['/sac.jpeg','/sacBandi2.jpeg'], 
      description: 'Esnek yapısı ve cırt özelliği ile kafa yapısına göre ayarlanabilir kullanım sağlanabilir..',
      details: {
        customization: 'Renk ve logo özelleştirmesi yapılabilir 10 renk seçeneği ile'
      }
    },
    { id: 52, name: 'Spa ve Güzellik Merkezi Saç Bandı', category: 'Aksesuar', images: ['/sacBandi.jpeg'],
      description: 'Profesyonel kullanım için idealdir.',
      details: {
        customization: 'Logo ve kurumsal renklere uygun tasarım yapılabilir 10 renk seçeneği ile'
      }
    },

    // Şal Ürünleri
    { id: 53, name: ' Şal', category: 'Şal', images: ['/sal.jpeg'], 
      description: '%100 ipek dokuma, zarif desen ve yumuşak dokusuyla her mevsim kullanılabilir özellikte lüks şal.',
      details: {

        customization: 'Kurumsal kimliğinize özel renk ve desenlerle tasarlanabilir. Logo ve marka işlemesi yapılabilir. Premium ipek dokusu ve zarif tasarımıyla özel günlerde hediye olarak da tercih edilebilir 10 renk seçeneği ile'
      }
    },
    { id: 54, name: 'Şal Model-2', category: 'Şal', images: ['/sal2.jpeg'], 
      description: 'Modern geometrik desenli, yumuşak malzemeden üretilen hafif ve nefes alabilen şık şal modeli.',
      details: {

        customization: 'İşletmenizin kurumsal renklerine uygun tasarımlar yapılabilir. Logo baskısı ve özel paketleme seçenekleri mevcuttur. Etkinlikler ve organizasyonlar için toplu sipariş verilebilir 10 renk seçeneği ile'
      }
    },
    
    { id: 9, name: 'Renkli Havlu', category: 'Havlu', images: ['/renkliHavlu.jpeg'], 
      description: 'Çeşitli renk seçenekleriyle canlı mekanlar için ideal havlu çeşidi.',
      details: {

        customization: 'Renklere uyumlu logo ve tasarım uygulamaları 10 renk seçeneği ile'
      }
    },
    
    // İpli Ürünler
    { id: 46, name: 'İpli Model 2', category: 'Tekstil', images: ['/ipli2.jpeg'], 
      description: 'İpli detaylarla zenginleştirilmiş özel tekstil ürünü.',
      details: {

        customization: 'Özel tasarım ve renk seçenekleri 10 renk seçeneği ile'
      }
    },
    { id: 47, name: 'İpli Model 3', category: 'Tekstil', images: ['/ipli3.jpeg'], 
      description: 'Premium kalitede, dikkat çekici ipli detaylara sahip tekstil ürünü.',
      details: {

        customization: 'Logo ve kurumsal kimlik uygulamaları 10 renk seçeneği ile'
      }
    },
    { id: 48, name: 'İpli Baskı', category: 'Tekstil', images: ['/ipliBaski.jpeg'], 
      description: 'Özel baskı tekniği ile üretilmiş, ipli detaylara sahip tekstil ürünü.',
      details: {
        minOrder: '50 adet',
        deliveryTime: '10 iş günü',
        customization: 'Tam renk baskı ve özel tasarım imkanı 10 renk seçeneği ile'
      }
    },
    { id: 49, name: 'İpli Mavi', category: 'Tekstil', images: ['/ipliMavi.jpeg'], 
      description: 'Mavi tonlarında, modern tasarımlı ipli tekstil ürünü.',
      details: {

        customization: 'Logo ve kurumsal renk uygulamaları 10 renk seçeneği ile'
      }
    },
    { id: 50, name: 'İpli Renkli', category: 'Tekstil', images: ['/ipliRenkli.jpeg'], 
      description: 'Farklı renk seçeneklerine sahip, modern ipli tekstil ürünü.',
      details: {
        minOrder: '50 adet',
        deliveryTime: '7-10 iş günü',
        customization: 'Özel renk ve logo uygulamaları yapılabilir 10 renk seçeneği ile'
      }
    },
    
  
    
    
 
    
   
   
];

const ProductDetail = () => {
    const { id } = useParams();
    const [mainImageIndex, setMainImageIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const product = useMemo(() => products.find(p => p.id === parseInt(id)), [id]);

    if (!product) {
        return (
            <div className="product-not-found">
                <h2>Ürün bulunamadı!</h2>
                <p>Aradığınız ürün sistemimizde mevcut değil.</p>
                <Link to="/products" className="back-to-products">Tüm Ürünlere Dön</Link>
            </div>
        );
    }

    // Ana görsel değiştirme fonksiyonu
    const handleImageChange = useCallback((idx) => {
        setMainImageIndex(idx);
        if (isMobile()) setShowModal(true);
    }, []);

    useEffect(() => {
        setMainImageIndex(0);
    }, [id]);

    // Önerilen ürünler hesaplaması
    const suggested = useMemo(() => {
        // Aynı kategorideki ürünleri öncelikle seçelim
        const sameCategoryProducts = products.filter(p => p.category === product.category && p.id !== product.id);
        
        if (sameCategoryProducts.length >= 3) {
            return [...sameCategoryProducts]
                .sort(() => 0.5 - Math.random())
                .slice(0, 3);
        } else {
            // Aynı kategoride yeterli ürün yoksa, diğer ürünlerden de ekleyelim
            const otherProducts = products.filter(p => p.category !== product.category && p.id !== product.id);
            return [
                ...sameCategoryProducts,
                ...otherProducts.sort(() => 0.5 - Math.random()).slice(0, 3 - sameCategoryProducts.length)
            ];
        }
    }, [product.id, product.category]);

    // Önerilen ürünler için ana görsel
    const getSuggestedImage = useCallback((item) => {
        return item.images && item.images.length > 0 ? item.images[0] : '/fabric.png';
    }, []);

    return (
        <>
            <div className="product-detail-gallery-layout">
                <div className="gallery-thumbnails-vertical">
                    {product.images && product.images.map((img, idx) => (
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
                    {product.images && product.images.length > 0 ? (
                        <img 
                            key={`${product.id}-${mainImageIndex}`}
                            src={product.images[mainImageIndex]} 
                            alt={product.name} 
                            className="gallery-main-image-vertical" 
                            onClick={() => isMobile() && setShowModal(true)}
                            style={{ cursor: isMobile() ? 'zoom-in' : 'default' }}
                        />
                    ) : (
                        <div className="no-image">Görsel Mevcut Değil</div>
                    )}
                </div>
                <div className="gallery-product-info">
                    <h1>{product.name}</h1>
                    <div className="gallery-product-category">{product.category}</div>
                    {product.price && <div className="gallery-product-price">{product.price} TL'den başlayan fiyatlarla</div>}
                    <div className="gallery-product-desc">{product.description || 'Ürün açıklaması mevcut değil.'}</div>
                    
                    {product.details && (
                        <div className="product-details">
                            <h2>Ürün Detayları</h2>
                            <ul>
                                {product.details.minOrder && <li><strong>Minimum Sipariş:</strong> {product.details.minOrder}</li>}
                                {product.details.deliveryTime && <li><strong>Teslimat Süresi:</strong> {product.details.deliveryTime}</li>}
                                {product.details.customization && <li><strong>Kişiselleştirme:</strong> {product.details.customization}</li>}
                            </ul>
                        </div>
                    )}
                    
                    <div className="contact-for-order">
                        <p>Sipariş ve fiyat bilgisi için lütfen bizimle iletişime geçin</p>
                        <Link to="/contact" className="contact-button">İletişime Geç</Link>
                    </div>
                </div>
            </div>
            {/* Modal for mobile image zoom */}
            {showModal && (
                <div className="image-modal" onClick={() => setShowModal(false)}>
                    <img
                        src={product.images[mainImageIndex]}
                        alt={product.name}
                        className="image-modal-img"
                    />
                </div>
            )}
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