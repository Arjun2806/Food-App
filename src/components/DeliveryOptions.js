import React, { useContext, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { CheckoutContext } from "../context/CheckOutContext";
import { Field, Form, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DeliveryOptions = () => {
  const { containerOpen, setContainerOpen, handleSaveAndContinue } =
    useContext(CheckoutContext);

  const deliveryRef = useRef(null);
  const duration = 500;

  const { values, handleChange, handleBlur, errors, touched, validateForm } =
    useFormikContext();

  //validation of the fields

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

  // add delivery options

  const [deliveryOption, setDeliveryOption] = useState("Delivery");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleOptionChange = (option) => {
    setDeliveryOption(option);
  };

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
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
        <Form>
          <div className="option-buttons">
            <button
              type="button"
              className={`option-button ${
                deliveryOption === "Delivery" ? "active" : ""
              }`}
              onClick={() => handleOptionChange("Delivery")}
            >
              Delivery
            </button>
            <button
              type="button"
              className={`option-button ${
                deliveryOption === "Pickup" ? "active" : ""
              }`}
              onClick={() => handleOptionChange("Pickup")}
            >
              Pickup
            </button>
          </div>
          {deliveryOption === "Delivery" && (
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
              {errors.name && touched.name && (
                <div className="error">{errors.name}</div>
              )}

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
                {errors.mobileNumber && touched.mobileNumber && (
                  <div className="error">{errors.mobileNumber}</div>
                )}
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
                {errors.email && touched.email && (
                  <div className="error">{errors.email}</div>
                )}
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
              {errors.address && touched.address && (
                <div className="error">{errors.address}</div>
              )}
            </div>
          )}

          {deliveryOption === "Pickup" && (
            <div className="pickup-section">
              <div className="pickup-options">
                <label>
                  <Field type="radio" name="pickupOption" value="one" className="radio-button" />
                  <div className="pickup-option">
                    <strong>Downtown Location</strong>
                    <br />
                    Address: 123 Main Street, Suite 101, Cityville, ST 12345
                  </div>
                </label>
                <label>
                  <Field type="radio" name="pickupOption" value="two" className="radio-button" />
                  <div className="pickup-option">
                    <strong>Suburban Location</strong>
                    <br />
                    Address: 456 Elm Avenue, Building B, Townsville, ST 67890
                  </div>
                </label>
              </div>

              <div className="date-picker">
                <label>
                  <strong>Selecte Pickup Time:</strong>
                </label>
                <div className="date-picker-container">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    filterTime={filterPassedTime}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    className="custom-datepicker"
                  />
                  <img
                    src="./clock.png"
                    alt="clock"
                    className="clock"
                    // onClick={() => document.querySelector('.custom-datepicker').click()}
                  />
                </div>
              </div>
            </div>
          )}

          <button
            className="save-button"
            type="button"
            onClick={async () => {
              const errors = await validateForm();
              if (Object.keys(errors).length ===0) {
                handleSaveAndContinue();
              }
            }}
          >
            SAVE & CONTINUE
          </button>
        </Form>
      </CSSTransition>
    </div>
  );
};

export default DeliveryOptions;
