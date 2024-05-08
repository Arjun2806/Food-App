import React from "react";
import FoodContextProvider from "./context/foodContext";
import './App.css';
import Card from "./components/Card";
import Recipe from "./components/Recipe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";


const App = () => {
  return (
   <FoodContextProvider>
    <Router>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Card />} />
        <Route path="/recipe/:name" element={<Recipe />} />
        </Route>
      </Routes>
    </Router>
   </FoodContextProvider>
  );
};

export default App;
