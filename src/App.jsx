import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';
import Navbar from './Navbar';
import ProductDetail from './ProductDetail';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
