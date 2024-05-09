import React  from "react";
import { IoCloseSharp } from "react-icons/io5";

const CartPanel = () => {

  return (
    <div className="cart-panel">
      <div className="cart-details">
        <h3>Cart Details</h3>
        <IoCloseSharp className="close-icon"  />
      </div>
    </div>
  );
};

export default CartPanel;
