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
         
          
          {/* Diğer sayfalar için Navbar ve Footer içeren yapı */}
          <Route path="/" element={
            <>
              <Navbar2 />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/products" element={
            <>
              <Navbar2 />
              <Products />
              <Footer />
            </>
          } />
          <Route path="/products/:id" element={
            <>
              <Navbar2 />
              <ProductDetail />
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Navbar2 />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <Navbar2 />
              <About />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
