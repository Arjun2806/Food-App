import { CheckoutContextWrapper } from "../context/CheckOutContext";
import DeliveryOptions from "./DeliveryOptions";
import PaymentOptions from "./PaymentOptions";
import ReviewOrder from "./ReviewOrder";
import RightSideBox from "./RightSideBox";
import { Formik } from "formik";
// import { useAuth } from "../hooks/useAuth";

const Checkout = () => {

  // const { logout } = useAuth();

  // const handleLogout = () => {
  //   logout();
  // };


  return (
    <CheckoutContextWrapper>
      <div className="checkout">
        <div className="heading">
          <h1>CHECKOUT</h1>
          {/* <button onClick={handleLogout}>Logout</button> */}
        </div>
        <div className="checkout-container">
          <div className="left-section">
            <Formik
              initialValues={{
                name: "",
                mobileNumber: "",
                email: "",
                address: "",
                PaymentOptions: "",
              }}
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
