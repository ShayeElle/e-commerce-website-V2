import React, { useEffect, useState } from "react";
import productArray from "../data/productsArray.json";
import axios from "axios";
import '../styles/products.css';


function Filters(props) {
const [products, setProducts] = useState([]);
const [category, setCategory] = useState("");
const [price, setPrice] = useState("Low");

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
    }, [category, price]);

    const categoryFilterHandler = (e) => {
      setCategory(e.target.value);
      console.log(e.target.value)
    }

    const priceFilterHandler = (e) => {
      setPrice(e.target.value);
      console.log(e.target.value)
    }

  return (
    <>
       <div className="centerGrid">
                <div classname="filterTitle"><h2>Filter By:</h2></div>
            <div className="filterContainer">
                <div className="filterField">
                    <label htmlFor="categoryFilter" className="filterLabel">Strength</label>
                    <select type="text" className="productFilter" name="categoryFilter" id="categoryFilter" onChange={categoryFilterHandler}>
                        <option value=""> All</option>
                        <option value=""> Weights </option>
                        <option value=""> Machines </option>
                        <option value=""> Accessories </option>
                    </select>
                </div>
            <div>
                <div className="filterField">
                    <label htmlFor="priceFilter" className="filterLabel">Price:</label>
                    <select type="text" className="productFilter" name="priceFilter" id="priceFilter" onChange={priceFilterHandler}>
                            <option value="Low"> Low to High</option>
                            <option value="High"> High to Low </option>
                            
                        </select>
                    </div>
                </div>
            </div>
       </div>
    </>
  )
}

export default Filters;
