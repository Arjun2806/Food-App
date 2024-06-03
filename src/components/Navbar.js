import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { FoodContext } from "../context/FoodContext";
import { TiShoppingCart } from "react-icons/ti";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

// set localstorage and read the values from localstorage
const useColorScheme = () => {
  const systemPrefersDark = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });

  const [isDark, setIsDark] = useState(() => {
    // Retrieve the color scheme from localStorage
    const savedScheme = localStorage.getItem("colorScheme");
    return savedScheme !== null ? JSON.parse(savedScheme) : undefined;
  });

  const value = useMemo(
    () => (isDark === undefined ? !!systemPrefersDark : isDark),
    [isDark, systemPrefersDark]
  );

  useEffect(() => {
    // Persist the color scheme to localStorage
    localStorage.setItem("colorScheme", JSON.stringify(isDark));
  }, [isDark]);

  useEffect(() => {
    if (value) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [value]);

  return {
    isDark: value,
    setIsDark,
  };
};

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
        <Link to="/about">
          <img src="./logo.png" className="App-logo" alt="logo" />
        </Link>
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
            sunColor="#FF7F50"
          />
        </div>
        <div className="search-bar-container">
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
    </div>
  );
};

export default Navbar;
