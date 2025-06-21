import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const CatalogPage = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 100, size: 'S', image: '/images/product1.jpg' },
        { id: 2, name: 'Product 2', price: 200, size: 'M', image: '/images/product2.jpg' },
        { id: 3, name: 'Product 3', price: 300, size: 'L', image: '/images/product3.jpg' },
        { id: 4, name: 'Product 4', price: 150, size: 'XS', image: '/images/product4.jpg' },
        { id: 5, name: 'Product 5', price: 250, size: 'S', image: '/images/product5.jpg' },
        { id: 6, name: 'Product 6', price: 350, size: 'M', image: '/images/product6.jpg' },
        { id: 7, name: 'Product 7', price: 350, size: 'XL', image: '/images/product7.jpg' },
        { id: 8, name: 'Product 8', price: 350, size: 'L', image: '/images/product8.jpg' },
        { id: 9, name: 'Product 9', price: 350, size: 'XL', image: '/images/product9.jpg' }
    ]);
    const [filterSize, setFilterSize] = useState('');

    const filteredProducts = filterSize
        ? products.filter(product => product.size === filterSize)
        : products;

    return (
        <div>
            <h1>Catalog</h1>
            <div>
                <label>Filter by Size:</label>
                <select onChange={(e) => setFilterSize(e.target.value)}>
                    <option value="">All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </div>
            <div className="product-list">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;
