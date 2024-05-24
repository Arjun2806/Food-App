import React, { createContext, useState, useEffect } from "react";

export const CheckoutContext = createContext();

export const CheckoutContextWrapper = ({ children }) => {
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    address: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");
  const [discount, setDiscount] = useState({ label: "", amount: 0 });
  const [containerOpen, setContainerOpen] = useState(0);
  //eslint-disable-next-line
  const [cartItems, setCartItems] = useState([]); // Example cartItems state
  //eslint-disable-next-line
  const [quantity, setQuantity] = useState({}); // Example quantity state

  useEffect(() => {
    const savedPaymentMethod = localStorage.getItem("paymentMethod");
    if (savedPaymentMethod) {
      setPaymentMethod(savedPaymentMethod);
    }

    const clearLocalStorage = () => {
      localStorage.removeItem("paymentMethod");
    };

    window.addEventListener("beforeunload", clearLocalStorage);

    return () => {
      window.removeEventListener("beforeunload", clearLocalStorage);
    };
  }, []);

  const handleDeliveryChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({ ...deliveryInfo, [name]: value });
  };

  const handlePaymentChange = (e) => {
    const selectedPayment = e.target.value;
    setPaymentMethod(selectedPayment);
  
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
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
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

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * quantity[item.id],
    0
  );

  const estimatedDelivery = 110;
  const today = new Date();
  const options = { weekday: "short", day: "numeric", month: "short" };
  const formattedDate = today
    .toLocaleDateString("en-IN", options)
    .toUpperCase();
  const finalTotal = totalAmount + estimatedDelivery - discount.amount;

  const values = {
    deliveryInfo,
    paymentMethod,
    discount,
    containerOpen,
    setContainerOpen,
    handleDeliveryChange,
    handlePaymentChange,
    validate,
    handleSaveAndContinue,
    handleSubmit,
    cartItems,
    quantity,
    totalAmount,
    estimatedDelivery,
    formattedDate,
    finalTotal,
  };

  return (
    <CheckoutContext.Provider value={values}>
      {children}
    </CheckoutContext.Provider>
  );
};
