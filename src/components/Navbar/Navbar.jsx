import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import logo from '../../assets/shopping.png';
import './Navbar.scss';


const Navbar = () => {
  
  return (
    <nav className='navbar'>
      <div className="container">
        <div className="nav__left">
          <div className="nav__logo">
            <img src={logo} alt="Commerce.js" className='logo' />
          </div>
          <h5 className='nav__text'>Commerce</h5>
        </div>
        
        <div className="nav__center"></div>

        <div className="nav__right">
          <div className="notification" aria-label='show cart items'>
            <HiShoppingCart className='notification__icon' />
            <span className="badge">{4}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;