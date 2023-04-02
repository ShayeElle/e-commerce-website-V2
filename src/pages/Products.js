import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import '../styles/products.css';

const Products = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8800/products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);

  console.log(Products);

return (
    <div>
      <section className="products-header">
      <img id="manlift" src="/images/BumperPlatesHD.jpg" alt="Colorful Bumper Plates" />
      <div class="product-header-text">
        <h1> PRO EQUIPTMENT </h1>
    </div>
      </section>
      <div className="products-container">
        {Products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <div className="product-details">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <span className="product-price">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;