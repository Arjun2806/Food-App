import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from "./Navbar";
import Category from "./Category";
import Footer from "./Footer";
import CartPanel from './CartPanel';


const Layout = () => {

const [showCart, setShowCart] = useState(false);

const handlevisible = () =>{
  setShowCart(!showCart);
}

  return (
    <div style={{position:"relative", maxwidth:"100vw", overflow:"hidden"}}>
    <CartPanel showCart={showCart} />
    <Navbar toggle={handlevisible} />
    <Category/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout