import { createContext, useEffect, useReducer, useState } from "react";
import FoodData from "../FoodData";
import FoodReducer from "./FoodReducer";

export const FoodContext = createContext();

const FoodContextProvider = ({ children }) => {

  // for intial value
  const intialCategories = {
    All: false,
    Lunch: false,
    Breakfast: false,
    Dinner: false,
    Snacks: false,
    Drinks: false,
  };

  const [input, setInput] = useState("");


  const intializeFucc = (args) => {
    args.All = true;
    return args;
  };

  
  //  userReducer to change the state
  const [category, dispatch] = useReducer(
    FoodReducer,
    intialCategories,
    intializeFucc
  );

  const [displayFood, setDisplayFood] = useState(FoodData);

// we set the carItems

const [cartItems, setCartItems] = useState([]);

// for show the cart panel
const [visibleCart, setVisibleCart] = useState(false);

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

 // click event to change the state
  const handleClick = (data) => {
    dispatch({ type: data, intialCategories });
  };


// for delete the item from the cart

  const handleDelete = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };



  useEffect(() => {
    const newArray = Object.keys(category);
    const trueCategory = newArray.filter((data) => category[data] === true)[0];
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
    displayFood,
    setDisplayFood,
    handleSearch,
    handleClick,
    cartItems,
    setCartItems,
    visibleCart,
    setVisibleCart,
    handleDelete
  };

  return <FoodContext.Provider value={values}>{children}</FoodContext.Provider>;
};

export default FoodContextProvider;
