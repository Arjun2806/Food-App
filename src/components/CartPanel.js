import React, { useContext }  from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FoodContext } from "../context/foodContext";

const CartPanel = ({showCart}) => {

   const {cartItems} = useContext(FoodContext);
    
  return (
    <div className="cart-panel" style={{right:showCart ? "0px" : "-600px"}}>
      <div className="cart-details">
        <h3>Cart Details</h3>
        <IoCloseSharp className="close-icon"  />
        {cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt="img" />
            <p>{item.name}</p>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPanel;
