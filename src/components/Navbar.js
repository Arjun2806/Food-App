import { useContext } from "react";
import { FoodContext } from "../context/foodContext";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  const {handleSearch, input} = useContext(FoodContext);



  return (
    <div className="navbar">
      <img src="./logo.png" className="App-logo" alt="logo" />
      <h1>Yummly</h1>
      <TiShoppingCart className="cart-icon"  />
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
