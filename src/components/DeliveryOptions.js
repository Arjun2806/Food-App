import React, { useContext, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { CheckoutContext } from "../context/CheckOutContext";
import { useFormikContext } from "formik";

const DeliveryOptions = () => {
  const {
    containerOpen,
    setContainerOpen,
    handleSaveAndContinue
  } = useContext(CheckoutContext);

 const {handleChange,handleBlur, values,isSubmitting} = useFormikContext()

  const deliveryRef = useRef(null);
  const duration = 500;

  return (
    <div className="delivery-section">
      <h2 onClick={() => setContainerOpen(1)}>1. DELIVERY OPTIONS</h2>
      <CSSTransition
        in={containerOpen === 1}
        timeout={duration}
        classNames="section"
        unmountOnExit
        nodeRef={deliveryRef}
      >
      <form >
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
                 

                  <input
                    type="text"
                    className="email"
                    placeholder="Email Address"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                 
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

                <button
                  className="save-button"
                  type="button"
                  onClick={()=>handleSaveAndContinue()}
                >
                  SAVE & CONTINUE
                </button>
              </div>
            </form>
      </CSSTransition>
    </div>
  );
};

export default DeliveryOptions;
