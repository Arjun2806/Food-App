import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const CartPanel = () => {

    const [showCart, setShowCart] = useState(false);

  return (
    <div className="cart-panel">
      <div className="cart-details">
        <h3>Cart Details</h3>
        <IoCloseSharp className="close-icon" onClick={()=> setShowCart(!showCart)}  />
      </div>
    </div>
  );
};

export default CartPanel;
