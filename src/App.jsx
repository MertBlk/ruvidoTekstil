import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';
import ProductDetail from './ProductDetail';
import About from './About';
import Footer from './Footer';
import Navbar2 from './navbar2'; 


function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Ana sayfa ve diğer sayfalar için sayfa düzeni */}
          <Route path="/" element={
            <div className="page-layout">
              <Navbar2 />
              <main className="main-content">
                <Home />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/products" element={
            <div className="page-layout">
              <Navbar2 />
              <main className="main-content">
                <Products />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/products/:id" element={
            <div className="page-layout">
              <Navbar2 />
              <main className="main-content">
                <ProductDetail />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/contact" element={
            <div className="page-layout">
              <Navbar2 />
              <main className="main-content">
                <Contact />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/about" element={
            <div className="page-layout">
              <Navbar2 />
              <main className="main-content">
                <About />
              </main>
              <Footer />
            </div>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
