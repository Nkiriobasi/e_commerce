import React from 'react';
import { MdAddShoppingCart } from "react-icons/md";

import './Product.scss';

 
const Product = ({product}) => {
 
  return (
    <section className='card'>
      <div className='card__media' image='' title={product.name} />

      <div className='card__content'>
        <div className='product__flex'>
          <h4 className='product__name'>{product.name}</h4>
          <h4 className='product__prize'>{product.prize}</h4>
        </div>

        <h5 className='product__desc'>{product.description}</h5>
      </div>

      <div className='card__actions'>
        <span aria-label="Add to Cart">
          <MdAddShoppingCart className='atc__icon' />
        </span>
      </div>
    </section>
  );
}

export default Product;