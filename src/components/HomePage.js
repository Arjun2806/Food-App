import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {

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
