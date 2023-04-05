import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Route>
     </Routes>
    </BrowserRouter>
 );
}
