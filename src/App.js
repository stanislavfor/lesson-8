import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/" element={<CatalogPage />} />
            </Routes>
        </Router>
    );
}

export default App;
