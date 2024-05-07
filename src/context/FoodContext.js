import { createContext,useState } from "react";
import FoodData from "../FoodData";

export const FoodContext = createContext(FoodData);

const FoodContextProvider = ({ children }) => {

  const [input, setInput] = useState("");
  const [category, setCategory] = useState();
  const [displayFood, setDisplayFood] = useState([FoodData]);
  
  
  
  const values = {input, setInput, category, setCategory, displayFood, setDisplayFood};
  
  return (
    <FoodContext.Provider value={values}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;