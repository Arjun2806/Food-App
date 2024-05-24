import React, { useContext, useRef, useState, useEffect } from "react";
import { FoodContext } from "../context/FoodContext";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { Formik } from "formik";

const Checkout = () => {
  const { cartItems, quantity } = useContext(FoodContext);

  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    address: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");
  const [discount, setDiscount] = useState({ label: "", amount: 0 });

  useEffect(() => {
    const savedPaymentMethod = localStorage.getItem("paymentMethod");
    if (savedPaymentMethod) {
      setPaymentMethod(savedPaymentMethod);
    }

    //clear localStorage on page refresh

    const clearLocalStorage = () => {
      localStorage.removeItem("paymentMethod");
    }

    window.addEventListener('beforeunload', clearLocalStorage);

    return () => {
      window.removeEventListener('beforeunload', clearLocalStorage);
    }

  }, []);

  const handleDeliveryChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({ ...deliveryInfo, [name]: value });
  };

  const handlePaymentChange = (e) => {
    const selectedPayment = e.target.value;
    setPaymentMethod(selectedPayment);
    localStorage.setItem("paymentMethod", selectedPayment);

    // Apply discount based on the selected payment method
    let discountAmount = 0;
    let discountLabel = "";
    if (selectedPayment === "Yummly Gift Card") {
      discountAmount = 100; // Example discount amount
      discountLabel = "Yummly Gift Card Discount";
    } else if (selectedPayment === "Yummly Rewards Redemption Card") {
      discountAmount = 50; // Example discount amount
      discountLabel = "Yummly Rewards Discount";
    }
    setDiscount({ label: discountLabel, amount: discountAmount });
  };

  const [containerOpen, setContainerOpen] = useState(0);
  
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.mobileNumber) {
      errors.mobileNumber = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(values.mobileNumber)) {
      errors.mobileNumber = "Invalid mobile number";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.address) {
      errors.address = "Address is required";
    }
    return errors;
  };


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
  const duration = 500;

  const today = new Date();
  const options = { weekday: "short", day: "numeric", month: "short" };
  const formattedDate = today
    .toLocaleDateString("en-IN", options)
    .toUpperCase();

  const finalTotal = totalAmount + estimatedDelivery - discount.amount;

  return (
    
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
              >
                <Formik
                 initialValues={{name:"",mobileNumber:"",email:"",address:""}}
                 validate={validate}
                 onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
                >
                 {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="address-section">
                      <input
                        type="text"
                        className="name"
                        placeholder="Enter Full Name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name && (
            <div className="error-message">{errors.name}</div>
          )}

                      <div className="Mobile-number">
                        <input
                          type="number"
                          className="number"
                          placeholder="Mobile Number"
                          name="mobileNumber"
                          value={values.mobileNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                       {errors.mobileNumber && touched.mobileNumber && (
              <div className="error-message">{errors.mobileNumber}</div>
            )}


                        <input
                          type="text"
                          className="email"
                          placeholder="Email Address"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.email && touched.email && (
              <div className="error-message">{errors.email}</div>
            )}
                      </div>

                      <textarea
                        id="address"
                        className="address"
                        name="address"
                        rows="9"
                        cols="60"
                        maxLength={100}
                        placeholder="Enter Your Address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                      {errors.address && touched.address && (
            <div className="error-message">{errors.address}</div>
          )}

                      <button
                        className="save-button"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        SAVE & CONTINUE
                      </button>
                    </div>
                  </form>
                )}
                </Formik>
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
              >
                <form ref={paymentRef}>
                  <div className="payment-method">
                    <input
                      type="checkbox"
                      id="Yummly-gift-card"
                      name="payment"
                      value="Yummly Gift Card"
                      checked={paymentMethod === "Yummly Gift Card"}
                      onChange={handlePaymentChange}
                    />
                    <label htmlFor="Yummly-gift-card">Yummly Gift Card</label>
                    <div className="images">
                      <img
                        src="./gift-card.png"
                        alt="Yummly Rewards Redemption Card"
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
                      id="Yummly-rewards"
                      name="payment"
                      value="Yummly Rewards Redemption Card"
                      checked={paymentMethod === "Yummly Rewards Redemption Card"}
                      onChange={handlePaymentChange}
                    />
                    <label htmlFor="Yummly-rewards">
                      Yummly Rewards Redemption Card
                    </label>
                    <div className="images">
                      <img
                        src="./rewardcard.png"
                        alt="Yummly Rewards Redemption Card"
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
                      checked={paymentMethod === "Credit or Debit Card"}
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
                      checked={paymentMethod === "Net Banking"}
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
                      checked={paymentMethod === "Upi"}
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
              >
                <div className="order-info">
                  {/* <h4>Delivery Information</h4> */}
                  <p>Name: {deliveryInfo.name}</p>
                  <p>Mobile Number: {deliveryInfo.mobileNumber}</p>
                  <p>Email: {deliveryInfo.email}</p>
                  <p>Address: {deliveryInfo.address}</p>
                  <p>Payment Method: {paymentMethod}</p>
                  <Link to="/" 
                  className="place-order-button" onClick={handleSaveAndContinue}>
                    PLACE ORDER
                  </Link>
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
        </div>
      </div>
    
  );
};

export default Checkout;
