import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const navigate = useNavigate();
  
    // useEffect(() => {
    //   // Check login status (e.g., from local storage or an API)
    //   const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    //   setIsLoggedIn(userLoggedIn);
    // }, []);
  
    // const handleOrderFoodClick = () => {
    //   if (isLoggedIn) {
    //     navigate('/cart');
    //   } else {
    //     navigate('/login');
    //   }
    // };


  return (
    <div className="home">
      <nav>
        <Link to="/about">
          <button className="nav-button">About us</button>
        </Link>
      </nav>
      <div className="content-main">
        <h2>Welcome to the Yummly</h2>
      </div>
      <Link to="/card">
      <button className="center-button">Order Food</button>
      </Link>
    </div>
  );
};

export default HomePage;
