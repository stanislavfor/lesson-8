import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';

function App() {
    return (
        <CartProvider>
            <Router>
                <header className="header">
                    <div className="container">
                        <h1>My Shop</h1>
                        <nav>
                            <Link to="/">Catalog</Link> | <Link to="/cart">Cart</Link>
                        </nav>
                    </div>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<CatalogPage />} />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                </main>
            </Router>
        </CartProvider>
    );
}

export default App;
