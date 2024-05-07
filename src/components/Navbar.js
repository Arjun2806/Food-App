import { useContext } from "react";
import { FoodContext } from "../context/foodContext";

const Navbar = () => {

  const {displayFood, setDisplayFood, handleSearch, input} = useContext(FoodContext);

  return (
    <div className="navbar">
      <img src="./logo.png" className="App-logo" alt="logo" />
      <h1>Yummly</h1>
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
