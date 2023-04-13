import React from "react";
//import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
//import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
//BEM - Block Element  Modifiers
const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links"></div>
      <div className="gpt3__navbar-links-logo">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Navbar;
