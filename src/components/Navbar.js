import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";
import { TiShoppingCart } from "react-icons/ti";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useColorScheme } from "../hooks/useColorScheme";

const Navbar = ({ toggle }) => {
  const { handleSearch, input } = useContext(FoodContext);

  const { isDark, setIsDark } = useColorScheme();


  return (
    <div className="navbar">
      <img src="./logo.png" className="App-logo" alt="logo" />
      <h1>Yummly</h1>
      <TiShoppingCart className="cart-icon" onClick={toggle} />

      <DarkModeSwitch
        onChange={setIsDark}
        checked={isDark}
        className="dark-mode-switch"
        animationProperties={{ duration: 300 }}
        aria-label="Dark mode toggle"
      />

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
