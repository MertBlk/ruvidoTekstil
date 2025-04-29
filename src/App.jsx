import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';
import Navbar from './Navbar';
import ProductDetail from './ProductDetail';
import About from './About'; // Import the new About component
import Footer from './Footer';
import Navbar2 from './Navbar2'; // Import the new Navbar2 component

function App() {
  return (
    <>
      <Router>
        <Navbar2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} /> {/* Add this line for the About page */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
