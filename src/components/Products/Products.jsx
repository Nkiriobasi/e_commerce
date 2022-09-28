import React from 'react';
import Product from './Product/Product';
import './Products.scss';


const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes.', prize: '$5'},
    { id: 2, name: 'Macbook', description: 'Apple macbook.', prize: '$10'},
    { id: 3, name: 'Macbook', description: 'Apple macbook.', prize: '$15'},
    { id: 4, name: 'Macbook', description: 'Apple macbook.', prize: '$20'},
    { id: 5, name: 'Macbook', description: 'Apple macbook.', prize: '$20'},
    { id: 6, name: 'Macbook', description: 'Apple macbook.', prize: '$20'},
    { id: 7, name: 'Macbook', description: 'Apple macbook.', prize: '$20'},
    { id: 8, name: 'Macbook', description: 'Apple macbook.', prize: '$20'},
    { id: 9, name: 'Macbook', description: 'Apple macbook.', prize: '$20'},
]

const Products = () => {
  return (
    <React.Fragment>
        <div className='products'>
            {products.map(product => {
                return (
                    <React.Fragment key={product.id}>
                        <Product product={product} />
                    </React.Fragment>
                )
            })}
        </div>
    </React.Fragment>
  )
}

export default Products;