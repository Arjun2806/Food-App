import React, { useContext, useRef, useState } from "react";
import { FoodContext } from "../context/foodContext";
import { CSSTransition } from "react-transition-group";

const Checkout = () => {
  const { cartItems, quantity } = useContext(FoodContext);

  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    address: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");

  const handleDeliveryChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({ ...deliveryInfo, [name]: value });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const [containerOpen, setContainerOpen] = useState(1);

  const handleSaveAndContinue = () => {
    setContainerOpen(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContainerOpen(3);
  };

  const deliveryRef = useRef(null);
  const paymentRef = useRef(null);
  const orderReviewRef = useRef(null);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * quantity[item.id],
    0
  );

  const estimatedDelivery = 110;
  const duration = 800;

  const today = new Date();
  const options = { weekday: "short", day: "numeric", month: "short" };
  const formattedDate = today
    .toLocaleDateString("en-IN", options)
    .toUpperCase();

  return (
    <main>
      <div className="checkout">
        <div className="heading">
          <h1>CHECKOUT</h1>
        </div>
        <div className="checkout-container">
          <div className="left-section">
            <div className="delivery-section">
              <h2 onClick={() => setContainerOpen(1)}>1. DELIVERY OPTIONS</h2>
              <CSSTransition
                in={containerOpen === 1}
                timeout={duration}
                classNames="section"
                unmountOnExit
                nodeRef={deliveryRef}
                appear={true}
              >
                <div className="address-section" ref={deliveryRef}>
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
                  <button className="save-button" onClick={handleSaveAndContinue}>
                    SAVE & CONTINUE
                  </button>
                </div>
              </CSSTransition>
            </div>

            <div className="payment-section">
              <h2 onClick={() => setContainerOpen(2)}>2. PAYMENT OPTIONS</h2>
              <CSSTransition
                in={containerOpen === 2}
                timeout={duration}
                classNames="section"
                unmountOnExit
                nodeRef={paymentRef}
                appear={true}
              >
                <form ref={paymentRef}>
                  <div className="payment-method">
                    <input
                      type="checkbox"
                      id="disney-gift-card"
                      name="payment"
                      value="Disney Gift Card"
                      onChange={handlePaymentChange}
                    />
                    <label htmlFor="disney-gift-card">Yummly Gift Card</label>
                    <div className="images">
                      <img
                        src="./gift-card.png"
                        alt="Disney Rewards Redemption Card"
                      />
                    </div>
                    <div className="text">
                      <small>
                        New! You can now use up to 5 gift cards on orderYummly!
                      </small>
                    </div>
                  </div>
                  <hr />

                  <div className="payment-method">
                    <input
                      type="checkbox"
                      id="disney-rewards"
                      name="payment"
                      value="Disney Rewards Redemption Card"
                      onChange={handlePaymentChange}
                    />
                    <label htmlFor="disney-rewards">
                      Yummly Rewards Redemption Card
                    </label>
                    <div className="images">
                      <img
                        src="./rewardcard.png"
                        alt="Disney Rewards Redemption Card"
                      />
                    </div>
                  </div>
                  <hr />

                  <div className="payment-method">
                    <input
                      type="radio"
                      id="credit-card"
                      name="payment"
                      value="Credit or Debit Card"
                      onChange={handlePaymentChange}
                    />
                    <label htmlFor="credit-card">Credit or Debit Card</label>
                    <div className="images">
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

                  <div className="payment-method">
                    <input
                      type="radio"
                      id="netbanking"
                      name="payment"
                      value="Net Banking"
                      onChange={handlePaymentChange}
                    />
                    <label htmlFor="netbanking">Net Banking</label>
                    <div className="images">
                      <img src="netbanking.png" alt="Net Banking" />
                    </div>
                  </div>
                  <hr />

                  <div className="payment-method">
                    <input
                      type="radio"
                      id="upi"
                      name="payment"
                      value="Upi"
                      onChange={handlePaymentChange}
                    />
                    <label htmlFor="upi">UPI</label>
                    <div className="images">
                      <img src="google-pay.png" alt="Upi" />
                    </div>
                  </div>

                  <button type="submit" className="review-button" onClick={handleSubmit}>
                    Review Order
                  </button>
                </form>
              </CSSTransition>
            </div>

            <div className="order-review">
              <h2 onClick={() => setContainerOpen(3)}>3. ORDER REVIEW</h2>
              <CSSTransition
                in={containerOpen === 3}
                timeout={duration}
                classNames="section"
                unmountOnExit
                nodeRef={orderReviewRef}
                appear={true}
              >
                <div className="order-info" ref={orderReviewRef}>
                  <h4>Delivery Information</h4>
                  <p>Name: {deliveryInfo.name}</p>
                  <p>Mobile Number: {deliveryInfo.mobileNumber}</p>
                  <p>Email: {deliveryInfo.email}</p>
                  <p>Address: {deliveryInfo.address}</p>
                  <h4>Payment Method</h4>
                  <h5>{paymentMethod}</h5>
                </div>
              </CSSTransition>
            </div>
          </div>

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
              <h4>
                TOTAL <span>₹{(totalAmount + estimatedDelivery).toFixed(2)}</span>
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
        </div>
      </div>
    </main>
  );
};

export default Checkout;
