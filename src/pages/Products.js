import React, { useState } from "react";
import ArrayCard from "../components/ArrayCard";
import ProductsCard from "../components/ProductsCard";
import '../styles/products.css';




function Products(props) {
  
  return (
    <>
      <section className="products-header">
        <img
          id="manlift"
          src="/static/images/bumper_platesHD.jpg"
          alt="Colorful Bumper Plates"
        />
        <div className="product-header-text">
          <h1>PRO EQUIPMENT</h1>
        </div>
      </section>

      <ArrayCard />
      {/* <ProductsCard /> */}
    </>
  );
}

export default Products;
