import React from 'react'
import { Outlet } from 'react-router'
import Navbar from "./Navbar";
import Category from "./Category";
import Footer from "./Footer";


const Layout = () => {
  return (
    <>
    <Navbar/>
    <Category/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout