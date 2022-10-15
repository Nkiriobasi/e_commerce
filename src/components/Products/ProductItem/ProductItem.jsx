import React from 'react';
import { MdAddShoppingCart } from "react-icons/md";

import './ProductItem.scss';

 
const ProductItem = ({ product, onAddToCart }) => {

  return (
    <section className='card'>
      <div className='card__media'>
        <img src={product.image.url} alt={product.name} />
      </div>

      <div className='card__content'>
        <div className='product__flex'>
          <h4 className='product__name'>{product.name}</h4>
          <h4 className='product__prie'>{product.price.formatted_with_symbol}</h4>
        </div>

        <h5 className='product__desc'>{product.description}</h5>
      </div>

      <div className='card__actions'>
        <button name="Add to cart" onClick={() => onAddToCart(product.id, 1)}>
          <MdAddShoppingCart className='atc__icon' />
        </button>
      </div>
    </section>
  );
}

export default ProductItem;