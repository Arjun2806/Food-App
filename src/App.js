import React from "react";
import Navbar from "./components/Navbar";
import FoodContextProvider from "./context/foodContext";
import './App.css';
import Category from "./components/Category";
import Card from "./components/Card";

const App = () => {
  return (
   <FoodContextProvider>
    <div>
      <Navbar />
      <Category />
      <Card/>
    </div>
   </FoodContextProvider>
  );
};

export default App;
