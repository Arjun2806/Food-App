import React, { useContext } from "react";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import Recipe from "./Recipe";
import { FoodContext } from "../context/foodContext";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};


const Model = () => {
const {showModal,setShowModal} = useContext(FoodContext);

  return (
    <div>
      <IoCloseSharp onClick={()=>setShowModal(false)} className="close-icon" />
      <Modal isOpen={showModal} style={customStyles}>
        <Recipe />
      </Modal>
    </div>
  );
};

export default Model;
