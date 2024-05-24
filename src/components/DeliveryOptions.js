import React, { useContext, useRef } from "react";
import { Formik } from "formik";
import { CSSTransition } from "react-transition-group";
import { CheckoutContext } from "../context/CheckOutContext";

const DeliveryOptions = () => {
  const {
    deliveryInfo,
    validate,
    containerOpen,
    setContainerOpen,
  } = useContext(CheckoutContext);

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
        <Formik
          initialValues={deliveryInfo}
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
  );
};

export default DeliveryOptions;
