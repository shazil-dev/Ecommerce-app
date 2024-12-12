import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./compenents/navbar";
import Footer from "./compenents/footer";
import "./style.css";

import Products from "./compenents/Products/products";
import Wishlist from "./compenents/wishlist";
import MyCart from "./compenents/cart";
import Order from "./compenents/order";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Context } from "./compenents/context";

const storeWishlist = () => {
  let storeWishlist = localStorage.getItem("store_wishlist");
  if (storeWishlist) {
    return JSON.parse(localStorage.getItem("store_wishlist"));
  } else {
    return [];
  }
};

const storeCart = () => {
  let storeCart = localStorage.getItem("store_cart");
  if (storeCart) {
    return JSON.parse(localStorage.getItem("store_cart"));
  } else {
    return [];
  }
};

function App() {
  const [data, setData] = useState([]);
  const [CartData, setCart] = useState(storeCart());
  const [wishlist, setWishlist] = useState(storeWishlist());
  const [count, setCount] = useState(0);

  const [show, setshow] = useState(true);

  const fetchProducts = async () => {
    const response = fetch("https://fakestoreapi.com/products?");
    setData(await (await response).json());
  };

  //storing wishlist & cart locally'
  localStorage.setItem("store_wishlist", JSON.stringify(wishlist));
  localStorage.setItem("store_cart", JSON.stringify(CartData));

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleClick = (item) => {
    if (CartData.indexOf(item) !== -1) return;
    setCart([...CartData, item]);
    setCount(count + 1);
  };

  const handleWishlist = (item) => {
    const wishlist = JSON.parse(localStorage.getItem("store_wishlist")) || [];

    // Checking if the item already exists in the wishlist
    const itemIndex = wishlist.findIndex(
      (wishlistItem) => wishlistItem.id === item.id
    );

    if (itemIndex !== -1) {
      // Item exists: Removing it from the wishlist
      const updatedWishlist = wishlist.filter(
        (wishlistItem) => wishlistItem.id !== item.id
      );
      localStorage.setItem("store_wishlist", JSON.stringify(updatedWishlist));
      console.log(`Removed item with id ${item.id} from wishlist`);
    } else {
      // Item does not exist: Adding iit to the wishlist
      const updatedWishlist = [...wishlist, item];
      localStorage.setItem("store_wishlist", JSON.stringify(updatedWishlist));
      console.log(`Added item with id ${item.id} to wishlist`);
    }
  };

  const handleDelete = (id) => {
    const arr = CartData.filter((item) => item.id !== id);
    setCart(arr);
    setCount(count - 1);
  };

  return (
    <>
      <Router>
        <Navbar count={count} show={show} setshow={setshow} />

        <Routes>
          <Route
            path="/"
            element={
              show ? (
                <Context.Provider value={{ handleClick, handleWishlist }}>
                  <Products productData={data} />
                </Context.Provider>
              ) : (
                <MyCart CartData={CartData} handleDelete={handleDelete} />
              )
            }
          />
          <Route
            path="/cart"
            element={<MyCart CartData={CartData} handleDelete={handleDelete} />}
          />
          <Route
            path="/wishlist"
            element={<Wishlist wishlist={wishlist} handleClick={handleClick} />}
          />
          <Route path="/order" element={<Order CartData={CartData} />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
