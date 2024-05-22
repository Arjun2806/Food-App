import React, { useContext,useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FoodContext } from "../context/FoodContext";
import CartItem from "./CartItems";
import { Transition } from "react-transition-group";
import { Link } from "react-router-dom";

const duration = 250;

const defaultStyle = {
  transition: `right ${duration}ms ease-in-out`,
  // right:"0px",
};

const transitionStyles = {
  entering: { right: "-600px" },
  entered: { right: "0px" },
  exiting: { right: "0px" },
  exited: { right: "-600px" },
};

const CartPanel = ({ showCart, toggle }) => {
  const { cartItems, quantity } = useContext(FoodContext);

  const nodeRef = useRef(null);

  // Calculate total number of items
  const totalItems = cartItems.reduce(
    (sum, item) => sum + quantity[item.id],
    0
  );

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * quantity[item.id],
    0
  );

  return (
    <Transition nodeRef={nodeRef} in={showCart} timeout={duration}>
      {(state) => (
        <div
          className="cart-panel"
          style={{ ...defaultStyle, ...transitionStyles[state] }}
          ref={nodeRef}

        >
          <div className="cart-details">
            <div className="cart-heading">
              <h3>Cart Details</h3>
              <IoCloseSharp className="close-icon" onClick={toggle} />
            </div>
            <div className="cart-items">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    quantity={quantity[item.id]}
                  />
                ))
              ) : (
                <div className="empty-cart">
                  <h3>Cart is empty</h3>
                </div>
              )}
            </div>
            <div className="checkout-summary">
              <h4>Items: {totalItems}</h4>
              <h4>Total Amount: ₹{totalAmount.toFixed(2)}</h4>
              <hr />
              <Link to="/checkout" 
               className="checkout-button">Buy Now</Link>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default CartPanel;
