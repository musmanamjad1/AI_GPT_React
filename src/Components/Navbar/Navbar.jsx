import React from "react";
import "./Navbar.css";

import logo from "../../assets/logo.svg";

//BEM - Block Element  Modifiers

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links"></div>
      <div className="gpt3__navbar-links_logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="gpt3__navbar-links_container">
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#wgpt3">What is GPT3?</a>
        </p>
        <p>
          <a href="#possibility">Open AI</a>
        </p>
        <p>
          <a href="#features">Case Studies</a>
        </p>
        <p>
          <a href="#blog">Library</a>
        </p>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type="button"> Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
