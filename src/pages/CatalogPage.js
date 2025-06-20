import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const CatalogPage = () => {
    const [selectedSize, setSelectedSize] = useState('');

    const filteredProducts = selectedSize
        ? products.filter(p => p.size === selectedSize)
        : products;

    return (
        <div className="container">
            <h2>Catalog</h2>
            <div>
                <label>Filter by Size: </label>
                {['XS', 'S', 'M', 'L'].map(size => (
                    <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={selectedSize === size ? 'active' : ''}
                    >
                        {size}
                    </button>
                ))}
                <button onClick={() => setSelectedSize('')}>All</button>
            </div>
            <div className="product-grid">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;
