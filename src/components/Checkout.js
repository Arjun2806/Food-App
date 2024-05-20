import React from "react";

const Checkout = () => {
  return (
    <main>
      <div className="checkout">
        <div className="heading">
          <h1>Checkout</h1>
        </div>
        <div className="checkout-container">
          <div className="left-section">
            <div className="delivery-section">
              <div className="delivery-heading">
                <h3>1. DELIVERY OPTIONS</h3>
              </div>
              <div className="address-section">
                <input type="text" className="name" placeholder=" Enter Full Name" />
                <div className="Mobile-number">
                  <input type="number" className="number" placeholder="Mobile Number" />
                  <input type="text" className="email" placeholder="Email Address" />
                </div>
                <textarea id="address" className="address" name="address" rows="9" cols="60" placeholder="Enter Your Address"></textarea>
              </div>
              <button className="save-button">SAVE & CONTINUE</button>
            </div>
            <div className="payment-section">
              <h3>2. PAYMENT OPTIONS</h3>
           </div>
            <div className="order-review">
            <h3>3. ORDER REVIEW</h3>  </div>
          </div>
          <div className="cartpage">
            <div className="cart-heading">
              <h3>IN YOUR CART</h3>
            </div>
            <div className="cart-total">
                <h5>Total Amount: ₹500</h5>
                <h5>Estimated Delivery: ₹110</h5>
                <h4>Total: <span>₹610</span></h4>
            </div>
            <hr/>
            <div className="cart-items">
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

//.flex-container {
//   display: flex;
//   flex-direction: row;
//   flex-wrap: nowrap;
//   justify-content: center;
//   align-items: center;
//   align-content: normal;
// }

// .flex-items:nth-child(1) {
//   display: block;
//   flex-grow: 0;
//   flex-shrink: 1;
//   flex-basis: auto;
//   align-self: auto;
//   order: 0;
// }

// .flex-items:nth-child(2) {
//   display: block;
//   flex-grow: 0;
//   flex-shrink: 1;
//   flex-basis: auto;
//   align-self: auto;
//   order: 0;
// }
