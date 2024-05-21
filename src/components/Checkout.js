import React, { useContext, useState } from "react";
import { FoodContext } from "../context/foodContext";

const Checkout = () => {
  const { cartItems, quantity } = useContext(FoodContext);

// delivery section info store in state
const [deliveryInfo, setDeliveryInfo] = useState({
  name: "",
  mobileNumber: "",
  email: "",
  address: "",
});

// selected payment method stored in state

const [paymentMethod, setPaymentMethod] = useState("");

const handleDeliveryChange = (e) => {
  const { name, value } = e.target;
  setDeliveryInfo({ ...deliveryInfo, [name]: value });
};

const handlePaymentChange = (e) => {
  setPaymentMethod(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();
};




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
                <h2>1. DELIVERY OPTIONS</h2>
              </div>
              <div className="address-section">
                <input
                  type="text"
                  className="name"
                  placeholder="Enter Full Name"
                  name="name"
                  value={deliveryInfo.name}
                  onChange={handleDeliveryChange}
                />
                <div className="Mobile-number">
                  <input
                    type="number"
                    className="number"
                    placeholder="Mobile Number"
                    name="mobileNumber"
                    value={deliveryInfo.mobileNumber}
                    onChange={handleDeliveryChange}
                  />
                  <input
                    type="text"
                    className="email"
                    placeholder="Email Address"
                    name="email"
                    value={deliveryInfo.email}
                    onChange={handleDeliveryChange}
                  />
                </div>
                <textarea
                  id="address"
                  className="address"
                  name="address"
                  rows="9"
                  cols="60"
                  placeholder="Enter Your Address"
                  value={deliveryInfo.address}
                  onChange={handleDeliveryChange}
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
                    onChange={handlePaymentChange}
                  />
                  <label for="disney-gift-card">Yummly Gift Card</label>
                  <div class="images">
                    <img
                      src="./gift-card.png"
                      alt="Disney Rewards Redemption Card"
                    />
                  </div>
                  <div class="text">
                    <small>
                      New! You can now use up to 5 gift cards on orderYummly!
                    </small>
                  </div>
                </div>
                <hr />

                <div class="payment-method">
                  <input
                    type="checkbox"
                    id="disney-rewards"
                    name="payment"
                    value="Disney Rewards Redemption Card"
                    onChange={handlePaymentChange}
                  />
                  <label for="disney-rewards">
                    Yummly Rewards Redemption Card
                  </label>
                  <div class="images">
                    <img
                      src="./rewardcard.png"
                      alt="Disney Rewards Redemption Card"
                    />
                  </div>
                </div>
                <hr />

                <div class="payment-method">
                  <input
                    type="radio"
                    id="credit-card"
                    name="payment"
                    value="Credit or Debit Card"
                    onChange={handlePaymentChange}
                  />
                  <label for="credit-card">Credit or Debit Card</label>
                  <div class="images">
                    <img
                      src="mastercard.png"
                      alt="Credit or Debit Card logos"
                    />
                    <img src="visa.png" alt="Credit or Debit Card logos" />
                    <img
                      src="american-express.png"
                      alt="Credit or Debit Card logos"
                    />
                  </div>
                </div>
                <hr />

                <div class="payment-method">
                  <input
                    type="radio"
                    id="netbanking"
                    name="payment"
                    value="Net Banking"
                    onChange={handlePaymentChange}
                  />
                  <label for="netbanking">Net Banking</label>
                  <div class="images">
                    <img src="netbanking.png" alt="Net Banking" />
                  </div>
                </div>
                <hr />

                <div class="payment-method">
                  <input
                   type="radio"
                   id="upi"
                   name="payment"
                   value="Upi"
                   onChange={handlePaymentChange}
                   />
                  <label for="upi">UPI</label>
                  <div class="images">
                    <img src="google-pay.png" alt="Upi" />
                  </div>
                </div>


                <button type="submit" class="review-button" onClick={handleSubmit}>
                  Review Order
                </button>
              </form>
            </div>

            {/* ORDER REVIEW SECTION STARTS FROM HERE */}
            <div className="order-review">
              <h2>3. ORDER REVIEW</h2>
              <div className="order-info">
                <h4>Delivery Information</h4>
                <p>Name: {deliveryInfo.name}</p>
                <p>Mobile Number: {deliveryInfo.mobileNumber}</p>
                <p>Email: {deliveryInfo.email}</p>
                <p>Address: {deliveryInfo.address}</p>
                <h4>Payment Method</h4>
                <h5>{paymentMethod}</h5>
              </div>
              <div className="order-payment-info">
                
              </div>
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
