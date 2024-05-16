import React, { useContext } from "react";
import { FoodContext } from "../context/foodContext";
import { AiFillStar } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const customStyles = {
//   content: {
//     top: "120px",
//     left: "0",
//     right: "0",
//     bottom: "0",
//     border: "none",
//   },
// };

const Card = () => {
  const { displayFood, addToCart, setShowModal,setRecipeItems } =
    useContext(FoodContext);

const handleClick = (name,desc) =>{
  setRecipeItems({
    name,desc
  })
  setShowModal(true);
}

  return (
    <>
      <div className="food-container">
        {displayFood.map(({ id, img, name, desc, price, rating }) => (
          <div key={id} className="card">
            
            <img src={img} alt="" className="food-image" />
            <div className="heading-details">
              <h2>{name}</h2>
              <h3 className="price">₹{price}</h3>
            </div>
            <p className="description">{desc.slice(0, 50)}...</p>
            <span className="rating">
                <AiFillStar className="star" />
                {rating}
              </span>
            <div className="rating-container">
              
              <button
                className="go-to-recipe"
                onClick={()=>handleClick(name,desc)}
              >
                Go to Recipe
              </button>
              <button
                className="add-to-cart"
                onClick={() => {
                  addToCart({ id, img, name, desc, price, rating });
                  toast.success(`${name} added to cart!`);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
