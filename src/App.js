import React from "react";
import Navbar from "./components/Navbar";
import FoodContextProvider from "./context/foodContext";
import './App.css';
import Category from "./components/Category";

const App = () => {
  return (
   <FoodContextProvider>
    <div>
      <Navbar />
      <Category />
    </div>
   </FoodContextProvider>
  );
};

export default App;
