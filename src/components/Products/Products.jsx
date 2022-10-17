import React from 'react';
import ProductItem from './ProductItem/ProductItem';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './Products.scss';




const Products = ({ products, onAddToCart, isLoading, errorMessage }) => {
    
  return (
    <React.Fragment>
        <div className='products'>
            <div className="container">
                {isLoading ? <LoadingSpinner /> : products.map(product => {
                    return (
                        <ProductItem 
                            key={product.id} 
                            product={product} 
                            onAddToCart={onAddToCart} 
                        />
                    )
                })}
                {errorMessage && <div className="error">{errorMessage}</div>}
            </div>
        </div>
    </React.Fragment>
  )
}

export default Products;