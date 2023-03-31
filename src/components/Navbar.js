import React from "react";
import {  Link } from "react-router-dom";
import '../styles/nav-bar.css';
import '../styles/shared.css';

function Navbar() {
  return (
    <>
    <header className='store-name'> 
        <h1> SHONEN LIFT </h1> 
        <img className='shop_logo' src="images/shonenLift-logo.png" alt="logo" />
    </header>
    <nav className='nav-links' id='myTopnav'>
     <ul>
        <li>
         <Link to="/">Home</Link>
        </li>
        <li>
         <Link to="/products">Shop</Link>
        </li>
        <li>
         <Link to="/contact">Contact</Link>
        </li>
     </ul>
    </nav>
    </>
    );
}

export default Navbar;

