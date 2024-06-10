import React, { useContext, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { CheckoutContext } from "../context/CheckOutContext";

const PaymentOptions = () => {
  const {
    containerOpen,
    setContainerOpen,
    handleSubmit,
    handlePaymentChange,
    paymentMethod,
    handleGiftCardChange,
    selectedGiftCards,
  } = useContext(CheckoutContext);

 
  const paymentRef = useRef(null);
  const duration = 500;

  


  return (
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
          <div className="gift-card-section">
            <input
              type="checkbox"
              id="Yummly-gift-card"
              name="giftCards"
              value="Yummly Gift Card"
              checked={selectedGiftCards.includes("Yummly Gift Card")}
              onChange={handleGiftCardChange}
            />
            <label htmlFor="Yummly-gift-card">Yummly Gift Card</label>
            <div className="images">
              <img src="./gift-card.png" alt="Yummly Rewards Redemption Card" />
            </div>
            <div className="text">
              <small>
                New! You can now use up to 5 gift cards on orderYummly!
              </small>
            </div>
          </div>
          <hr />

          <div className="gift-card-section">
            <input
              type="checkbox"
              id="Yummly-rewards"
              name="giftCards"
              value="Yummly Rewards Redemption Card"
              checked={selectedGiftCards.includes("Yummly Rewards Redemption Card")}
              onChange={handleGiftCardChange}
            />
            <label htmlFor="Yummly-rewards">
              Yummly Rewards Redemption Card
            </label>
            <div className="images">
              <img src="./rewardcard.png" alt="Yummly Rewards Redemption Card" />
            </div>
          </div>
          <hr />

          <div className="payment-method">
            <input
              type="radio"
              id="credit-card"
              name="paymentMethod"
              value="Credit or Debit Card"
              checked={paymentMethod === "Credit or Debit Card"}
               onChange={handlePaymentChange}
            />
            <label htmlFor="credit-card">Credit or Debit Card</label>
            <div className="images">
              <img src="mastercard.png" alt="Credit or Debit Card logos" />
              <img src="visa.png" alt="Credit or Debit Card logos" />
              <img src="american-express.png" alt="Credit or Debit Card logos" />
            </div>
          </div>
          <hr />

          <div className="payment-method">
            <input
              type="radio"
              id="netbanking"
              name="paymentMethod"
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
              name="paymentMethod"
              value="Upi"
              checked={paymentMethod === "Upi"}
               onChange={handlePaymentChange}
            />
            <label htmlFor="upi">UPI</label>
            <div className="images">
              <img src="google-pay.png" alt="Upi" />
            </div>
          </div>

          <button
            type="submit"
            className="review-button"
            onClick={handleSubmit}
          >
            Review Order
          </button>
        </form>
      </CSSTransition>
    </div>
  );
};

export default PaymentOptions;
