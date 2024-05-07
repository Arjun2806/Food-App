// eslint-disable-next-line
import { createContext, useEffect, useState } from "react";
import FoodData from "../FoodData";

export const FoodContext = createContext();

const FoodContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState({
    All: true,
    Lunch: false,
    Breakfast: false,
    Dinner: false,
    Snacks: false,
    Drinks: false,
  });
  const [displayFood, setDisplayFood] = useState(FoodData);

  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  useEffect(() => {
    if (input === "") {
      setDisplayFood(FoodData);
    } else {
      const filteredCards = displayFood.filter((foodItem) =>
        foodItem.name.toLowerCase().includes(input.toLowerCase())
      );
      setDisplayFood(filteredCards);
    }
  }, [input]);

  const handleClick = (data) => {
    for (const key in category) {
      category[key] = false;
    }
    setCategory({ ...category, [data]: true });
  };

  useEffect(() => {
    const newArray = Object.keys(category);
    const trueCategory = newArray.filter((data) => {
      return category[data] === true;
    })[0];
    const filterCategory = displayFood.filter(
      (foodItem) => trueCategory === "All" || foodItem.category === trueCategory
    );
    setDisplayFood(filterCategory);
  }, [category]);

  const values = {
    input,
    setInput,
    category,
    setCategory,
    displayFood,
    setDisplayFood,
    handleSearch,
    handleClick,
  };

  return <FoodContext.Provider value={values}>{children}</FoodContext.Provider>;
};

export default FoodContextProvider;
