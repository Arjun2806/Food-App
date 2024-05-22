import React, { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

const Category = () => {

  const {category,handleClick} = useContext(FoodContext);

  const categoryArr = Object.keys(category);
  
  return (
    <div>
    <div className="category">
      <h2>Find your favorite food</h2>
      <div className="category-buttons">
        {
          categoryArr.map((data)=>{
              return <button key={data} style={{backgroundColor: category[data] ? '#34d399' : '#e0cccc', color: category[data] ? 'white' : 'black'}} onClick={()=>handleClick(data)} >{data}</button>
          })
        }
      </div>
    </div>
    </div>

  );
};

export default Category;
