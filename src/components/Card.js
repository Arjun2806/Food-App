import React from 'react'
import FoodData from '../FoodData'
import { AiFillStar } from 'react-icons/ai'

const Card = () => {
  return (
    <div className="food-container">
    {FoodData.map(({ id, img, name, desc, price, rating }) => (
      <div key={id} className="card">
        <img src={img} alt="" className="food-image" />
        <div className="details">
          <h2>{name}</h2>
          <span className="price">₹{price}</span>
        </div>
        <p className="description">{desc.slice(0, 50)}...</p>
        <div className="rating-container">
          <span className="rating">
            <AiFillStar className="star" />
            {rating}
          </span>
          <button className="add-to-cart">Go to Recipe</button>
        </div>
      </div>
    ))}
  </div>
  
  )
}

export default Card