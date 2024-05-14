import React, { useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FoodContext } from "../context/foodContext";
import CartItem from "./CartItems";


const CartPanel = ({ showCart, toggle }) => {
  const { cartItems, quantity } = useContext(FoodContext);

  return (
    <div className="cart-panel" style={{ right: showCart ? "0px" : "-600px" }}>
      <div className="cart-details">
        <div className="cart-heading">
          <h3>Cart Details</h3>
          <IoCloseSharp className="close-icon" onClick={toggle} />
        </div>
        <div className="cart-items">
        {cartItems.map(item => <CartItem key={item.id} id={item.id} img={item.img} name={item.name} price={item.price} quantity={quantity[item.id]} />)}
        </div>
        <div className="checkout-summary">
          <h4>Items:1</h4>
          <h4>Total Amount:500</h4>
          <hr />
          <button className="checkout-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CartPanel;
