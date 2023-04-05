import React, { useState } from 'react';
import productArray from "../data/productsArray.json";

const Cart = ({ items, onRemoveItem }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {productArray.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => onRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;


// import React, { useState } from 'react';
// import ShoppingCart from './ShoppingCart';

// const App = () => {
//   const [cartItems, setCartItems] = useState([
//     { name: 'Item 1', price: 10 },
//     { name: 'Item 2', price: 20 },
//   ]);

//   const handleRemoveItem = (index) => {
//     const newCartItems = [...cartItems];
//     newCartItems.splice(index, 1);
//     setCartItems(newCartItems);
//   };

//   return (
//     <div>
//       <h1>My Shopping App</h1>
//       <ShoppingCart items={cartItems} onRemoveItem={handleRemoveItem} />
//     </div>
//   );
// };



