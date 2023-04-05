import React from "react";
import productArray from "../data/productsArray.json";
import "../styles/array-card.css";
import Button from "./Button";

const ArrayCard = () => {
    console.log(productArray);

    return (
            <div>
              <div className="products-container">
                {productArray.map((product) => (
                  <div key={product.id} className="product-item">
                    <img src={product.image} alt={product.title} />
                    <div className="product-details">
                      <h2>{product.title}</h2>
                      <p>{product.description}</p>
                      <span className="product-price">${product.price}</span>
                    </div>
                    <Button />
                  </div>
                ))}
              </div>
            </div>
          );
}

export default ArrayCard;