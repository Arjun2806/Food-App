import React from "react";
import FoodContextProvider from "./context/FoodContext";
import "./App.css";
import Card from "./components/Card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";
import Checkout from "./components/Checkout";
import About from "./components/About";
import Error from "./components/Error";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick
      />
      <FoodContextProvider>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Card />} />
            </Route>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </FoodContextProvider>
    </>
  );
};

export default App;
