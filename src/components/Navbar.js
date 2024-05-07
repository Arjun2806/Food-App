import { useContext, useState } from "react";
import { FoodContext } from "../context/foodContext";

const Navbar = () => {

const {displayFood, setDisplayFood} = useContext(FoodContext);
const [searchInput, setSearchInput] = useState("");

const handleSearch = (e) => {
  e.preventDefault();
  const inputValue = e.target.value;
  setSearchInput(inputValue);

  // Filter the cards to display based on the search input
  const filteredCards = displayFood.filter(foodItem =>
    foodItem.name && foodItem.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  setDisplayFood(filteredCards);
};

  return (
    <div className="navbar">
      <img src="./logo.png" className="App-logo" alt="logo" />
      <h1>Yummly</h1>
      <input
        type="search"
        name="search"
        placeholder="Search here"
        value={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Navbar;
