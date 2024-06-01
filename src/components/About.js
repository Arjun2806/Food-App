import React, { useState } from "react";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form data submitted:", formData);
  };

  return (
    <main className="about-us">
      <div className="first-container">
        <div className="left-side-content">
          <img src="./logo.png" alt="logo" className="logo" />
          <div className="about-us-content">
            <h3>About us</h3>
            <div className="about-us-text">
              <p>
                An older, upper-class man has a tradition of treating a local
                destitute man to a hearty Thanksgiving meal. One year the poor
                man arrives at their meeting place in a state that puts their
                tradition in jeopardy.
              </p>
              <p>
                Food is an important part of everyone's life, but it's not
                always the focal point. So many characters who are shopping for
                food, cooking it, talking about it or eating.
              </p>
            </div>
            <div className="small-img">
              <img src="./small1.jpg" alt="small-img" />
              <img src="./small2.jpg" alt="small-img" />
            </div>
          </div>
        </div>
        <div className="right-side-content">
          <img src="./banner-image.jpg" alt="banner" />
        </div>
      </div>
      <div className="second-container">
        <p className="highlighted-text">
          Hi! Our Restaurant has been present for over 20 years in the market.
          We make the most of all our customers.
        </p>
        <p>
          The narrator is having dinner with his friend Horsey in Boston. They
          overhear a man say he would make a large bet that Joel Duffie could
          out-eat anyone. Horsey knows a man, Nicely-Nicely Jones, who he knows
          can out-eat anyone.
        </p>
        <p>
          The narrator notices some memories from his boyhood. He learned a
          special way of cooking rice from his father. His mother worked at
          Woolworth's. His older brother is more distant with his family. They
          immigrated to Canada from Malaysia before the narrator was born.
        </p>
      </div>
      <div className="third-container">
        <video src="./pizza.mp4" autoPlay loop muted />
        <p>
          Nina goes vegetable shopping every Saturday morning while her husband
          sleeps in. She's been in this habit since she came to America two
          years ago. She plans on cooking them over the weekend, but they always
          go bad. On Saturday nights she goes to parties with her husband with
          other Russian immigrants. Nina's sister says that she was her
          husband's ticket to America. Phasellus enim libero, blandit vel sapien
          vitae, condimentum ultricies magna et. Quisque euismod orci ut.
          Phasellus enim libero, blandit vel sapien vitae.
        </p>
        <p>
          Albert, owner of D'Angelo's restaurant, reads a review of Udolpho's, a
          favorite restaurant of his. It was written by Willa Frank, a caustic
          restaurant reviewer who hates everything. Albert's restaurant hasn't
          gotten a review in a major publication yet.
        </p>
      </div>
      <div className="contact-us">
        <div className="left-side-imag">
          <img src="./contact-image.jpg" alt="salad"/>
        </div>
        <div className="contact-us-content">
          <p>Contact us</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <img src="./user.svg" alt="user" draggable="false" />
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <img src="./email.svg" alt="email" draggable="false" />
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <img src="./message.svg" alt="message" draggable="false" />
              <textarea
                name="message"
                placeholder="Write your messages"
                className="textarea"
                value={formData.message}
                onChange={handleChange}
                required
                wrap="soft"
                // rows="60"
                // cols="50"
              />
            </div>
            <button type="submit" className="send-button">
              Send Now
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default About;
