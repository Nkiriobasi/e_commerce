import React from 'react';
import ProductItem from './ProductItem/ProductItem';
import './Products.scss';



const Products = ({ products, onAddToCart }) => {
    
  return (
    <React.Fragment>
        <div className='products'>
            <div className="container">
                {products.map(product => {
                    return (
                        <ProductItem 
                            key={product.id} 
                            product={product} 
                            onAddToCart={onAddToCart} 
                        />
                    )
                })}
            </div>
        </div>
    </React.Fragment>
  )
}

export default Products;