import React, { useContext } from "react";
import { FoodContext } from "../context/foodContext";

const Category = () => {

  const {category, setCategory,handleClick} = useContext(FoodContext);

  const categoryArr = Object.keys(category);
  
  return (
    <div className="category">
      <h2>Find your favorite food</h2>
      <div className="category-buttons">
        {
          categoryArr.map((data)=>{
              return <button key={data} style={{backgroundColor: category[data] ? '#34d399' : '#e0cccc'}} onClick={()=>handleClick(data)} >{data}</button>
          })
        }
        {/* <button>All</button>
        <button>Lunch</button>
        <button>Breakfast</button>
        <button>Dinner</button>
        <button>Snacks</button>
        <button>Drinks</button> */}
      </div>
    </div>
  );
};

export default Category;
