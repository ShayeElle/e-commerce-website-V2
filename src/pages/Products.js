import React, { useState } from "react";
import ArrayCard from "../components/ArrayCard";
import ProductsCard from "../components/ProductsCard";
// import productArray from "../data/productsArray.json";
import '../styles/products.css';
// import '../styles/filter.css';
function Products(props) {
  
  return (
    <>
      <section className="products-header">
        <img
          id="manlift"
          src="/images/bumper_platesHD.jpg"
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
