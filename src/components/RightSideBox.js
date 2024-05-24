import React, { useContext } from "react";
import { FoodContext } from "../context/FoodContext";
import { CheckoutContext } from "../context/CheckOutContext";

const RightSideBox = () => {
  const { cartItems, quantity } = useContext(FoodContext);
  const {discount} = useContext(CheckoutContext);


  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * quantity[item.id],
    0
  );

  const estimatedDelivery = 100;

  const today = new Date();
  const options = { weekday: "short", day: "numeric", month: "short" };
  const formattedDate = today.toLocaleDateString("en-IN", options).toUpperCase();

  // Calculate discount based on certain conditions
  const finalTotal = totalAmount + estimatedDelivery - discount.amount;

  return (
    <div className="cartpage">
      <div className="cart-heading1">
        <h3>IN YOUR CART</h3>
      </div>
      <div className="cart-total">
        <p>
          Subtotal <span>₹{totalAmount.toFixed(2)}</span>
        </p>
        <p>
          Estimated Delivery <span>₹{estimatedDelivery}</span>
        </p>
        {discount.amount > 0 && (
          <p>
            {discount.label} <span>-₹{discount.amount.toFixed(2)}</span>
          </p>
        )}
        <h4>
          TOTAL <span>₹{finalTotal.toFixed(2)}</span>
        </h4>
      </div>
      <hr />
      <div className="cart-heading2">
        <h4>ARRIVES BY {formattedDate}</h4>
      </div>
      <div className="cart-items-container">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-image">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Quantity: {quantity[item.id]}</p>
                <h5>₹{(item.price * quantity[item.id]).toFixed(2)}</h5>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-cart1">
            <h3>Your cart is empty</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSideBox;
