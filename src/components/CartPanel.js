import React, { useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FoodContext } from "../context/foodContext";
import { MdDelete } from "react-icons/md";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";

const CartPanel = ({ showCart }) => {
  const { cartItems,visibleCart,setVisibleCart } = useContext(FoodContext);

  return (
    <div className="cart-panel" style={{ right: showCart ? "0px" : "-600px" }}>
      <div className="cart-details">
        <div className="cart-heading">
          <h3>Cart Details</h3>
          <IoCloseSharp className="close-icon" onClick={()=>setVisibleCart(!visibleCart)} />
        </div>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt="img" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <h5>₹{item.price}</h5>
                <div className="quantity">
                  <FiMinusCircle className="minus-icon" />
                  <span>1</span>
                  <FiPlusCircle className="plus-icon" />
                </div>
              </div>
              <MdDelete className="delete-icon" />
            </div>
          ))}
        </div>
        <div className="checkout-summary">
          <h3>Items:1</h3>
          <h3>Total Amount:500</h3>
          <hr />
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPanel;
