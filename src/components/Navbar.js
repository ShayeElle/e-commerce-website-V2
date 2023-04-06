import React from "react";
import {  Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../styles/nav-bar.css';
import '../styles/shared.css';
// import Button from "./Button";


function Navbar() {

  return (
    <>
    <header className='store-name'> 
        <h1> SHONEN LIFT </h1> 
        <Link to="/" >
          <img className='shop_logo' src="http://localhost:3000/images/shonenLift_logo.PNG" alt="logo" />
        </Link>
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
        <li>
          <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} /></Link>
        </li>
     </ul>
    </nav>
    </>
    );
}

export default Navbar;

