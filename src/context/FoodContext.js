import { createContext, useEffect, useReducer, useState } from "react";
import FoodData from "../FoodData";
import FoodReducer from "./FoodReducer";

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

  const [state, dispatch] = useReducer(FoodReducer, {
    All: true,
    Lunch: false,
    Breakfast: false,
    Dinner: false,
    Snacks: false,
    Drinks: false,
  });


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
    const trueCategory = newArray.filter((data) =>category[data] === true)[0];
    const filterCategory = FoodData.filter(
      (foodItem) => trueCategory === "All" || foodItem.category === trueCategory
    );
    setDisplayFood(filterCategory);
    setInput("");
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
