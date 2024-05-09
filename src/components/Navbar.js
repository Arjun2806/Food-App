import { useContext, useState } from "react";
import { FoodContext } from "../context/foodContext";
import { TiShoppingCart } from "react-icons/ti";
import CartPanel from "./CartPanel";

const Navbar = () => {
  const {handleSearch, input} = useContext(FoodContext);

  const [showCart, setShowCart] = useState(false);

  const handlevisible = () => {
    setShowCart(!showCart);
  };


  return (
    <div className="navbar">
      <img src="./logo.png" className="App-logo" alt="logo" />
      <h1>Yummly</h1>
      <TiShoppingCart className="cart-icon" onClick={handlevisible}  />
      {/* <div className={`cart-panel ${showCart ? "open" : ""}`}>
        <CartPanel />
      </div> */}
      {showCart && <CartPanel />}
      <input
        type="search"
        name="search"
        placeholder="Search here"
        value={input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Navbar;
