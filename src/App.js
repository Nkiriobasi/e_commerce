import React, { useState, useEffect } from 'react';
import { Products, Navbar } from './components';
import { commerce } from '././lib/commerce';
import { Routes, Route } from "react-router-dom";


function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // const [cart, setCart] = useState({});

  
  // Fetching the products
  const fetchProducts = () => {
    setIsLoading(true); // display loading screen
    commerce.products.list().then( products => {
      setProducts(products.data);
      setIsLoading(false);   // Hide loading screen 
    }).catch(() => {
      setErrorMessage("Unable to fetch user list");
      setIsLoading(false);
    });
  }

  // Featching cart contents

  // const fetchCart = () => {
  //   commerce.cart.retrieve().then( cart => {
  //     setCart(cart);
  //   }).catch( error => {
  //     throw Error(error);
  //   });
  // }



  // Adding a product to the cart

  // const handleAddToCart = (productId, quantity) => {
  //   commerce.cart.add(productId, quantity).then( item => {
  //     setCart(item.cart);
  //   }).catch( error => {
  //     throw Error(error);
  //   });
  // }
  

  useEffect(() => {
    fetchProducts();
    // fetchCart();
  }, [])


  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Products 
          products={products} 
          isLoading={isLoading} 
          // onAddToCart={handleAddToCart} 
          errorMessage={errorMessage} />} 
        />
      </Routes>
    </div>
  );
}

export default App;
