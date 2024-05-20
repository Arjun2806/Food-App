import React from "react";

const Checkout = () => {
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
                  placeholder=" Enter Full Name"
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

            <div className="payment-section">
              <h3>2. PAYMENT OPTIONS</h3>
            </div>

            {/* ORDER REVIEW SECTION STARTS FROM HERE */}

            <div className="order-review">
              <h3>3. ORDER REVIEW</h3>{" "}
            </div>
          </div>

          {/* CART SECTION STARTS FROM HERE */}

          <div className="cartpage">
            <div className="cart-heading1">
              <h3>IN YOUR CART</h3>
            </div>
            <div className="cart-total">
              <p>Total Amount <span1>₹500</span1> </p>
              <p>Estimated Delivery <span2>₹110</span2> </p>
              <h4>
                TOTAL <span>₹610</span>
              </h4>
            </div>
            <hr />
            <div className="cart-items">
              <div className="cart-heading2">
                <h4>ARRIVES BY THU, 22 JUL</h4>
              </div>
              <div className="cart-image">
                <img src="" alt="pizza" />
              </div>
              <div className="cart-food-details">
                <h4>Pizza</h4>
                <p>price:₹610</p>
                <p>Quantity: 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;