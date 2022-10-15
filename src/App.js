import React, { useState, useEffect } from 'react';
import { Products, Navbar } from './components';
import { commerce } from '././lib/commerce';


function App() {
  const [ products, setProducts ] = useState([]);
  // const [ cart, setCart ] = useState({});
  
  // Fetching the products
  const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }

  // // Featching cart contents
  // const fetchCart = async () => {
  //   setCart(await commerce.cart.retrieve());
  // }

  // // Adding the products to the cart
  // const handleAddToCart = async ( productId, quantity ) => {
  //   const item = await commerce.cart.add(productId, quantity);
  //   setCart(item.cart);
  // }
  

  useEffect(() => {
    fetchProducts();
    // fetchCart();
  }, [])

  console.log(products)

  
  return (
    <div className="app">
      <Navbar  />
      <Products products={products}   />
    </div>
  );
}

export default App;
