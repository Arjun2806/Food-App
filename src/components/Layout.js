import React from 'react'
import { Outlet } from 'react-router'
import Navbar from "./Navbar";
import Category from "./Category";
import Footer from "./Footer";
import CartPanel from './CartPanel';


const Layout = () => {
  return (
    <div style={{position:"absolute"}}>
    <CartPanel />
    <Navbar/>
    <Category/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout