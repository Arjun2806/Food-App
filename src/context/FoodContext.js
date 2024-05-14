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

const [quantity, setQuantity] = useState({});


// for handle search input
  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setInput(inputValue);
  };


// increase the quantity based on item is present in cart or not 

const addToCart = (itemToAdd) => {

  const testIdFucntion = (input) => {
    return input.id === itemToAdd.id
  }

  const index = cartItems.findIndex(testIdFucntion);

  if (index === -1) {
    const updatedCartItems = [...cartItems, itemToAdd];
    setCartItems(updatedCartItems);
    setQuantity(prev => ({...prev, [itemToAdd.id]: 1}));
  } else {
    setQuantity(prev => ({...prev, [itemToAdd.id]: prev[itemToAdd.id] + 1}))
  }
};  

// decerese the quantity based on item is present in cart or not

const decreaseQuantity = (itemToRemove) => {
 
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
    handleDelete,
    addToCart,
    quantity,
    decreaseQuantity
  };

  return <FoodContext.Provider value={values}>{children}</FoodContext.Provider>;
};

export default FoodContextProvider;
