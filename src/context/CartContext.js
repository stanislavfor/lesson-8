import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prev =>
            prev.find(item => item.id === product.id)
                ? prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
                : [...prev, { ...product, quantity: 1 }]
        );
    };

    const updateQuantity = (id, quantity) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const getTotal = () => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, getTotal }}>
            {children}
        </CartContext.Provider>
    );
};
