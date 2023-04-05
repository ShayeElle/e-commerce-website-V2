import React, { useState } from 'react';

const Button = ({ item, onAddToCart }) => {
  const [cartCount, setCartCount] = useState(0);
    
  const handleClick = () => {
    setCartCount(cartCount + 1);
    onAddToCart(item);
  };

  return (
    <button onClick={handleClick}>
      Add to cart ({cartCount})
    </button>
  );
};

export default Button;

//Takes two props: item (the item to be added to the cart) and onAddToCart (a function that will be called when the button is clicked and the item is added to the cart)

// useState hook to keep track of the number of times the button has been clicked and the item has been added to the cart

// when the button is clicked, the handleClick function updates the cartCount state and calls the onAddToCart function, passing in the item prop.

// the button's text displays the current value of cartCount, so the user can see how many times they've added the item to the cart.