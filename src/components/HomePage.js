import React from "react";
import { Link } from "react-router-dom";
import ReactTypingEffect from 'react-typing-effect';


const HomePage = () => {

  return (
    <div className="home">
      <nav>
        <Link to="/about">
          <button className="nav-button">About us</button>
        </Link>
      </nav>
      <div className="content-main">
        <h2>
        <ReactTypingEffect
            text={["Taste the love in every bite."]}
            speed={80}
            eraseSpeed={80}
            eraseDelay={2000}
            typingDelay={500}
          />
        </h2>
      </div>
      <Link to="/card">
      <button className="center-button">Order Food</button>
      </Link>
    </div>
  );
};

export default HomePage;
