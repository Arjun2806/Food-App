import React, { useContext } from "react";
import { FoodContext } from "../context/foodContext";
import { AiFillStar } from "react-icons/ai";
import Modal from "react-modal";
import Recipe from "./Recipe";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const customStyles = {
//   content: {
//     top: "110px",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     height: "99vh",
//     width:"99vw",
//     maxHeight: "80vh", // Limit the height to 80% of the viewport height
//     overflow: "auto",
//     zIndex:"1"
//   },
// };

const customStyles = {
  content: {
    // position: 'absolute',
    top: "120px",
    left: "0",
    right: "0",
    bottom: "0",
    border: "none",
    height:""
    // overflow: 'auto',
    // WebkitOverflowScrolling: 'touch',
  },
};

const Card = () => {
  const { displayFood, addToCart, showModal, setShowModal } =
    useContext(FoodContext);

const handleClick = () =>{
  setShowModal(true);
}


  return (
    <>
      <div className="food-container">
        {displayFood.map(({ id, img, name, desc, price, rating }) => (
          <div key={id} className="card">
            <Modal isOpen={showModal} style={customStyles}>
              <Recipe name={name} desc={desc} />
            </Modal>
            <img src={img} alt="" className="food-image" />
            <div className="details">
              <h2>{name}</h2>
              <span className="price">₹{price}</span>
            </div>
            <p className="description">{desc.slice(0, 50)}...</p>
            <div className="rating-container">
              <span className="rating">
                <AiFillStar className="star" />
                {rating}
              </span>
              <button
                className="go-to-recipe"
                onClick={handleClick}
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
