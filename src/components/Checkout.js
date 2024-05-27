import React  from "react";
import { CheckoutContextWrapper } from "../context/CheckOutContext";
import DeliveryOptions from "./DeliveryOptions";
import PaymentOptions from "./PaymentOptions";
import ReviewOrder from "./ReviewOrder";
import RightSideBox from "./RightSideBox";
import { Formik } from "formik";

const Checkout = () => {

  


  return (
    <CheckoutContextWrapper>
      <div className="checkout">
        <div className="heading">
          <h1>CHECKOUT</h1>
        </div>
        <div className="checkout-container">
          <div className="left-section">
            <Formik 
            initialValues={{name:"",mobileNumber:"",email:"",address:"",PaymentOptions:""}}
            onSubmit={(values) => console.log(values)}
           
            >
            {() => (
                <>
                  <DeliveryOptions />
                  <PaymentOptions />
                  <ReviewOrder />
                </>
              )}
            </Formik>
          </div>
          <RightSideBox />
        </div>
      </div>
    </CheckoutContextWrapper>
  );
};

export default Checkout;
