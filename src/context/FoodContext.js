import { createContext,useState } from "react";
import FoodData from "../FoodData";

export const FoodContext = createContext();

const FoodContextProvider = ({ children }) => {

  const [input, setInput] = useState("");
  const [category, setCategory] = useState({
    All:true,
    Lunch:false,
    Breakfast:false,
    Dinner:false,
    Snacks:false,
    Drinks:false
  });
  const [displayFood, setDisplayFood] = useState(FoodData);
  
  
  
  const values = {input, setInput, category, setCategory, displayFood, setDisplayFood};
  
  return (
    <FoodContext.Provider value={values}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;