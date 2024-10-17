import React from 'react';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

interface ProductsContainerProps {
    products: Product[];
}

const ProductsContainer: React.FC<ProductsContainerProps> = ({ products }) => {
    return (
        <div className="products-container">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.imageUrl} alt={product.name} className="product-image" />
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductsContainer;