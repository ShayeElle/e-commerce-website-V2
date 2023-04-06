import React, { useState, useEffect } from "react";
import productsArray from "../components/productsArray.json";
import Search from "./Search";
import "../styles/products.css"

const ArrayCard = () => {

  // const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);

  // const inputRef = useRef(null);

  // const handleChange = (e) => setSearch(e.target.value);

  useEffect(() => {
      setProducts(productsArray);
  }, []);

//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(3000);

//   console.log(productsArray);

//   useEffect(() => {
//     const filtered = products.filter((product) => {
//         const titleMatch = product.title.toLowerCase().includes(search.toLowerCase());
//         const priceMatch = product.price >= minPrice && product.price <= maxPrice;
//         return titleMatch && priceMatch;
//     });
//     setFilteredProducts(filtered);
// }, [products, search, minPrice, maxPrice]);


    return (
      <div className="wrapper__filter">
        <Search />
      </div>
    )
};

export default ArrayCard;