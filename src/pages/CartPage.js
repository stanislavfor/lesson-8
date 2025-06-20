import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
    const { cartItems, updateQuantity, getTotal } = useContext(CartContext);

    return (
        <div className="container">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Cart is empty.</p>
            ) : (
                <table>
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.size}</td>
                            <td>${item.price}</td>
                            <td>
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                />
                            </td>
                            <td>${item.price * item.quantity}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
            <h3>Grand Total: ${getTotal()}</h3>
        </div>
    );
};

export default CartPage;
