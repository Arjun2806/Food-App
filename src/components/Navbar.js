import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";
import { TiShoppingCart } from "react-icons/ti";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useColorScheme } from "../hooks/useColorScheme";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Navbar = ({ toggle }) => {
  const { handleSearch, input } = useContext(FoodContext);

  const { isDark, setIsDark } = useColorScheme();


  return (
    <div className="navbar">
      <div className="logo-container">
      <img src="./logo.png" className="App-logo" alt="logo" />
      </div>
      <h1>Yummly</h1>
      <div className="search-container">
      <TiShoppingCart className="cart-icon" onClick={toggle} />
      <FaMagnifyingGlass className="search-icon" />
      <DarkModeSwitch
        onChange={setIsDark}
        checked={isDark}
        className="dark-mode-switch"
        animationProperties={{ duration: 300 }}
        aria-label="Dark mode toggle"
        sunColor="#ebeb2c"
      />
       <input
        type="search"
        name="search"
        placeholder="Search here"
        value={input}
        onChange={handleSearch}
      />
      </div>
   
    </div>
  );
};

export default Navbar;
