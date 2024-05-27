import React, { useContext, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { CheckoutContext } from "../context/CheckOutContext";
import { Link } from "react-router-dom";
import { useFormikContext } from 'formik';

const ReviewOrder = () => {

 const {values} = useFormikContext();

  const {
    paymentMethod,
    containerOpen,
    setContainerOpen,
    handleSaveAndContinue,
  } = useContext(CheckoutContext);

  const orderReviewRef = useRef(null);
  const duration = 500;

  return (
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
          <p>Name: {values.name}</p>
          <p>Mobile Number: {values.mobileNumber}</p>
          <p>Email: {values.email}</p>
          <p>Address: {values.address}</p>
          <p>Payment Method: {paymentMethod}</p>
          <Link to="/" className="place-order-button" onClick={handleSaveAndContinue}>
            PLACE ORDER
          </Link>
        </div>
      </CSSTransition>
    </div>
  );
};

export default ReviewOrder;
