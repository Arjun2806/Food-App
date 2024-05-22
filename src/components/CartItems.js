import { MdDelete } from "react-icons/md";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import React, { useContext } from "react";
import { FoodContext } from "../context/FoodContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const CartItems = ({id,name,img,price,quantity}) => {

const {handleDelete, addToCart,decreaseQuantity} = useContext(FoodContext);

  return (
    <div className="cart-item">
      <img src={img} alt="img" />
      <div className="cart-item-details">
          <h4>{name}</h4>
          <h5>₹{price}</h5>
          <div className="quantity">
          <FiMinusCircle
                  className="minus-icon"
                  onClick={() => decreaseQuantity(id)}
                />
          <span>{quantity}</span>
          <FiPlusCircle className="plus-icon" onClick={() => {addToCart({ id, name, price, quantity, img})
        }}/>
          </div>
        </div>
        <MdDelete className="delete-icon" onClick={()=>{handleDelete(id)
          toast.error(`${name} deleted from cart`);
        }}/>
      </div>
  )
}

export default CartItems