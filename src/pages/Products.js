import React, { useState } from "react";
import ArrayCard from "../components/ArrayCard";
import FilterCard from "../components/FilterCard";
// import productArray from "../data/productsArray.json";
import '../styles/products.css';
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
      {/* <FilterCard /> */}
    </>
  );
}

export default Products;
