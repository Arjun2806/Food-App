import { useContext, useRef, useState } from "react";
import { FoodContext } from "../context/FoodContext";
import { TiShoppingCart } from "react-icons/ti";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useColorScheme } from "../hooks/useColorScheme";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Navbar = ({ toggle }) => {
  const { handleSearch, input } = useContext(FoodContext);
  const { isDark, setIsDark } = useColorScheme();

  const [isFocused, setIsFocused] = useState(false);
  const searchInputRef = useRef(null);

const handleonClick = () => {
  setIsFocused(true);
  searchInputRef.current.focus();
};


  return (
    <div className="navbar">
      <div className="logo-container">
      <img src="./logo.png" className="App-logo" alt="logo" />
      </div>
      <h1>Yummly</h1>
      <div className="search-container">
      <TiShoppingCart className="cart-icon" onClick={toggle} />
      <div className="theme-container">
      <p>Switch Theme</p>
      <DarkModeSwitch
        onChange={setIsDark}
        checked={isDark}
        className="dark-mode-switch"
        animationProperties={{ duration: 400 }}
        aria-label="Dark mode toggle"
        sunColor="#ebeb2c"
      />
      </div>
      {/* <i className="search-icon" onClick={()=> handleonClick}>🔍</i> */}
      <FaMagnifyingGlass className="search-icon" onClick={handleonClick} />
       <input
        type="search"
        name="search"
        placeholder="Search here"
        value={input}
        onChange={handleSearch}
        ref={searchInputRef}
        className={isFocused ? "focused" : ""}
        onBlur={() => setIsFocused(false)}
      />
      </div>
   
    </div>
  );
};

export default Navbar;
