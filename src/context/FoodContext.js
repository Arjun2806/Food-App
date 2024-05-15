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

// for quantity
const [quantity, setQuantity] = useState({});

// for show modal in card 
const [showModal, setShowModal] = useState(false);


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

const decreaseQuantity = (itemId) => {
 
  // Calculate the updated quantity for the given item ID
  const updatedquantity = quantity[itemId] - 1;  
  
  //Check if the updated quantity is less than or equal to 0

  if (updatedquantity <= 0) {
    //If the updated quantity is 0 or less, remove the item from cartItems
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== itemId);
    setCartItems(newCartItems);

    //Also remove the item from the quantity state
    setQuantity(prev => {
      const updatedQuantity = {...prev};
      delete updatedQuantity[itemId];
      return updatedQuantity;
    })
  }
  else {
    //If the updated quantity is more than 0, simply update the quantity state
    setQuantity(prev => ({...prev, [itemId]: updatedquantity}))
  }

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
    decreaseQuantity,
    showModal,
    setShowModal
  };

  return <FoodContext.Provider value={values}>{children}</FoodContext.Provider>;
};

export default FoodContextProvider;
