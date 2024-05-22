import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = ({ toggle }) => {
  const { handleSearch, input } = useContext(FoodContext);

  return (
    <div className="navbar">
      <img src="./logo.png" className="App-logo" alt="logo" />
      <h1>Yummly</h1>
      {/* <div className="cart" onClick={toggle}> */}
      <TiShoppingCart className="cart-icon" onClick={toggle} />
      {/* </div> */}
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
