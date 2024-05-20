import React, { useContext } from "react";
import { FoodContext } from "../context/foodContext";

const Checkout = () => {
  const { cartItems, quantity } = useContext(FoodContext);

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * quantity[item.id],
    0
  );

  // Assuming a fixed estimated delivery fee
  const estimatedDelivery = 110;

  const today = new Date();
  const options = { weekday: "short", day: "numeric", month: "short" };
  const formattedDate = today
    .toLocaleDateString("en-IN", options)
    .toUpperCase();

  return (
    <main>
      <div className="checkout">
        <div className="heading">
          <h1>Checkout</h1>
        </div>
        <div className="checkout-container">
          {/* DELIVERY SECTION STARTS FROM HERE */}
          <div className="left-section">
            <div className="delivery-section">
              <div className="delivery-heading">
                <h3>1. DELIVERY OPTIONS</h3>
              </div>
              <div className="address-section">
                <input
                  type="text"
                  className="name"
                  placeholder="Enter Full Name"
                />
                <div className="Mobile-number">
                  <input
                    type="number"
                    className="number"
                    placeholder="Mobile Number"
                  />
                  <input
                    type="text"
                    className="email"
                    placeholder="Email Address"
                  />
                </div>
                <textarea
                  id="address"
                  className="address"
                  name="address"
                  rows="9"
                  cols="60"
                  placeholder="Enter Your Address"
                ></textarea>
              </div>
              <button className="save-button">SAVE & CONTINUE</button>
            </div>

            {/* PAYMENT SECTION STARTS FROM HERE */}
            <div class="payment-section">
              <h2>2. PAYMENT OPTIONS</h2>
              <form>
                <div class="payment-method">
                  <input
                    type="checkbox"
                    id="disney-gift-card"
                    name="payment"
                    value="Disney Gift Card"
                  />
                  <label for="disney-gift-card">
                    Yummly Gift Card
                    
                    <img
                      src="./gift-card.png"
                      alt="Disney Rewards Redemption Card"
                    />
                    <br/>
                    <small>
                      New! You can now use up to 5 gift cards on orderYummly!
                    </small>
                  </label>
                </div>
                <hr/>

                <div class="payment-method">
                  <input
                    type="checkbox"
                    id="disney-rewards"
                    name="payment"
                    value="Disney Rewards Redemption Card"
                  />
                  <label for="disney-rewards">
                    Yummly Rewards Redemption Card
                    <img
                      src="./rewardcard.png"
                      alt="Disney Rewards Redemption Card"
                    />
                  </label>
                </div>
                <hr/>
                <div class="payment-method">
                  <input
                    type="radio"
                    id="credit-card"
                    name="payment"
                    value="Credit or Debit Card"
                  />
                  <label for="credit-card">
                    Credit or Debit Card
                    <img
                      src="mastercard.png"
                      alt="Credit or Debit Card logos"
                    />
                    <img
                      src="visa.png"
                      alt="Credit or Debit Card logos"
                    />
                    <img
                      src="american-express.png"
                      alt="Credit or Debit Card logos"
                    />
                  </label>
                </div>
                <hr/>
                <div class="payment-method">
                  <input
                    type="radio"
                    id="netbanking"
                    name="payment"
                    value="Net Banking"
                  />
                  <label for="netbanking">
                    Net Banking
                    <img
                      src="netbanking.png"
                      alt="Net Banking"
                    />
                  </label>
                </div>
                <hr/>
                <div class="payment-method">
                  <input
                    type="radio"
                    id="upi"
                    name="payment"
                    value="Upi"
                  />
                  <label for="upi">
                    UPI
                    <img src="google-pay.png" alt="Upi" />
                  </label>
                </div>

                <button type="submit" class="review-button">
                  Review Order
                </button>
              </form>
            </div>

            {/* ORDER REVIEW SECTION STARTS FROM HERE */}
            <div className="order-review">
              <h3>3. ORDER REVIEW</h3>
            </div>
          </div>

          {/* CART SECTION STARTS FROM HERE */}
          <div className="cartpage">
            <div className="cart-heading1">
              <h3>IN YOUR CART</h3>
            </div>
            <div className="cart-total">
              <p>
                Subtotal <span>₹{totalAmount.toFixed(2)}</span>{" "}
              </p>
              <p>
                Estimated Delivery <span>₹{estimatedDelivery}</span>{" "}
              </p>
              <h4>
                TOTAL{" "}
                <span>₹{(totalAmount + estimatedDelivery).toFixed(2)}</span>
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
                    <div className="cart-food-details">
                      <h4>{item.name}</h4>
                      <p>Price: ₹{item.price}</p>
                      <p>Quantity: {quantity[item.id]}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-cart1">
                  <h3>Cart is empty</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
