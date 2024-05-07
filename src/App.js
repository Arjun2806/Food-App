import React from "react";
import Navbar from "./components/Navbar";
import FoodContextProvider from "./context/foodContext";
import './App.css';
import Category from "./components/Category";
import Card from "./components/Card";
import Recipe from "./components/Recipe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
   <FoodContextProvider>
    <Router>
      <Navbar />
      <Category />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </Router>
   </FoodContextProvider>
  );
};

export default App;
