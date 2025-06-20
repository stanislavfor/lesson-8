import React, { useState } from 'react';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', price: 100, quantity: 1 },
        { id: 2, name: 'Product 2', price: 200, quantity: 2 },
    ]);

    const updateQuantity = (id, quantity) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity } : item
        ));
    };

    const grandTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Cart</h1>
            <div className="cart-items">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        />
                    </div>
                ))}
            </div>
            <div className="grand-total">
                <h2>GRAND TOTAL ${grandTotal}</h2>
            </div>
        </div>
    );
};

export default CartPage;
