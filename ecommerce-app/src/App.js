import React from "react";
import {useEffect, useState} from "react"
import Navbar from "./compenents/navbar";
import Footer from "./compenents/footer";
import './style.css'

import Products from "./compenents/Products/products"
import Wishlist from "./compenents/wishlist";
import MyCart from "./compenents/cart";
import Order from "./compenents/order";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { Context } from "./compenents/context";

const storeWishlist = () => {
  let storeWishlist = localStorage.getItem('store_wishlist') 
  if(storeWishlist)  {
    return JSON.parse(localStorage.getItem('store_wishlist'))
  } else {
    return []
  }
  }

  const storeCart = () => {
  let storeCart = localStorage.getItem('store_cart') 
  if(storeCart)  {
    return JSON.parse(localStorage.getItem('store_cart'))
  } else {
    return []
  }
  }


function App() {
  const [data, setData] = useState([])
  const [CartData, setCart] = useState(storeCart())
  const [wishlist, setWishlist] = useState(storeWishlist())
  const [count, setCount] = useState(0)

  const [show, setshow] = useState(true)

    const fetchProducts = async () => {
      const response = fetch("https://fakestoreapi.com/products?");
      setData(await (await response).json());
    };

    //storing wishlist & cart locally'
    localStorage.setItem('store_wishlist', JSON.stringify(wishlist));
    localStorage.setItem('store_cart', JSON.stringify(CartData));
    
    useEffect( () => {
        fetchProducts();
    }, []);

    const handleClick = (item) => {
      if(CartData.indexOf(item) !== -1) return;
      setCart( [...CartData, item]);
      setCount(count+1)
    }

    const handleWishlist = (item) => {
      if(wishlist.indexOf(item) !== -1) return;
      setWishlist( [...wishlist, item]);
      // console.log("clicked wishlist");
    }

    const handleDelete = (id) => {
        const arr = CartData.filter((item) => item.id !== id);
        setCart(arr);
        setCount(count-1);
    }


  return (
    <>
    <Router>
      <Navbar count={count} show={show} setshow={setshow}/>

      <Routes>
          <Route path ="/" element={ 
            show? 
            <Context.Provider value={{handleClick, handleWishlist}}>
              <Products productData={data}/> 
            </Context.Provider> : <MyCart CartData={CartData} handleDelete={handleDelete}/>           
            }/>
          <Route path ="/cart" element={<MyCart CartData={CartData} handleDelete={handleDelete}/>}/>
          <Route path ="/wishlist" element={<Wishlist wishlist={wishlist} handleClick={handleClick}/>} />
          <Route path ="/order" element={<Order CartData={CartData} />}/>
      </Routes>

    </Router>    

      <Footer />
    </>
  );
}

export default App;
