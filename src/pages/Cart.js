import React from 'react';
// import productArray from "../components/productsArray.json";
import "../styles/cart.css"

const Cart = ({ items, onRemoveItem }) => {
  return (
    <>
    <section className='cart-box'>
      <h1 className='coming-soon'> Shopping Cart Coming Soon! </h1>
      <p className='thank-you'> Thank you for your paitence!</p>
    </section>
    </>
  );
};

export default Cart;


