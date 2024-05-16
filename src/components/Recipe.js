import { useContext } from "react";
import { FoodContext } from "../context/foodContext";
import { IoCloseSharp } from "react-icons/io5";


const Recipe = () => {
  const {setShowModal,recipeItems} = useContext(FoodContext);

  // console.log(recipeItems)

  return (
    <div className="recipe-page">
      <IoCloseSharp onClick={()=>setShowModal(false)} className="close-icon1" />
      <h2>Recipe Details of {recipeItems?.name} </h2>

      <h4>Description:<span>{recipeItems?.desc}</span> </h4>
      <div className="details">
      <div className="video-container">
        <iframe
          width="650"
          height="350"
          src="https://www.youtube.com/embed/1j6Lcy7qPIY?si=KsTdkKtwNm1b2i2h"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

      </div>
      <div className="recipe-details">
        <h2>Ingredients to used in this recipe</h2>
        <ol>
          <li>1 small pizza crust</li>
          <li>1/2 cup tomato sauce</li>
          <li>1/2 cup shredded mozzarella cheese</li>
          <li>1/4 cup grated Parmesan cheese</li>
          <li>1 egg</li>
          <li>Salt and pepper to taste</li>
        </ol>
      </div>
      </div>
    </div>
  );
};

export default Recipe;
