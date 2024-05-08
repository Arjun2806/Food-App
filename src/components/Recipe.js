import { useParams, Link } from "react-router-dom";

const Recipe = () => {
  const { name } = useParams();

  return (
    <div className="recipe-page">
      {/* Home button to navigate back to the home page */}
      <Link to="/" className="home-button">
        Back to Home
      </Link>
      <h2>Recipe Details of {name}</h2>
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
  );
};

export default Recipe;
