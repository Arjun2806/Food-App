import React, { useContext, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { CheckoutContext } from "../context/CheckOutContext";
import { Field, useFormikContext, Formik, Form } from "formik";

const DeliveryOptions = () => {
  const { containerOpen, setContainerOpen, handleSaveAndContinue } = useContext(CheckoutContext);
  const deliveryRef = useRef(null);
  const duration = 500;

  const validateName = (name) => {
    if (!name) {
      return "Name is required";
    }
    return null;
  };

  const validateMobileNumber = (mobileNumber) => {
    if (!mobileNumber) {
      return "Mobile Number is required";
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      return "Invalid mobile number";
    }
    return null;
  };

  const validateEmail = (email) => {
    if (!email) {
      return "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return "Invalid email address";
    }
    return null;
  };

  const validateAddress = (address) => {
    if (!address) {
      return "Address is required";
    }
    return null;
  };

  const validate = (values) => {
    const errors = {};

    const nameError = validateName(values.name);
    if (nameError) {
      errors.name = nameError;
    }

    const mobileNumberError = validateMobileNumber(values.mobileNumber);
    if (mobileNumberError) {
      errors.mobileNumber = mobileNumberError;
    }

    const emailError = validateEmail(values.email);
    if (emailError) {
      errors.email = emailError;
    }

    const addressError = validateAddress(values.address);
    if (addressError) {
      errors.address = addressError;
    }

    return errors;
  };

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
          initialValues={{ name: '', mobileNumber: '', email: '', address: '' }}
          validate={validate}
          onSubmit={(values, { setSubmitting }) => {
            handleSaveAndContinue();
            setSubmitting(false);
          }}
        >
          {({ handleChange, handleBlur, values, handleSubmit, errors, touched }) => (
            <Form>
              <div className="address-section">
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter Full Name"
                  className="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  validate={validateName}
                />
                {errors.name && touched.name && <div className="error">{errors.name}</div>}

                <div className="Mobile-number">
                  <Field
                    type="text"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    className="number"
                    value={values.mobileNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    validate={validateMobileNumber}
                  />
                  {errors.mobileNumber && touched.mobileNumber && <div className="error">{errors.mobileNumber}</div>}
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    validate={validateEmail}
                  />
                  {errors.email && touched.email && <div className="error">{errors.email}</div>}
                </div>

                <Field
                  as="textarea"
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
                  validate={validateAddress}
                />
                {errors.address && touched.address && <div className="error">{errors.address}</div>}

                <button
                  className="save-button"
                  type="button"
                  onClick={handleSubmit}
                >
                  SAVE & CONTINUE
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </CSSTransition>
    </div>
  );
};

export default DeliveryOptions;
