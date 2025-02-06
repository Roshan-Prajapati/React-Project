import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={require("../assets/Bizdoor_Logo_.png")} alt="Bizdoor Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#STARTUP">STARTUP</a></li>
        <li><a href="#LICENSE">LICENSE</a></li>
        <li><a href="#TAX">TAX</a></li>
        <li><a href="#REGULATORY">REGULATORY</a></li>
        <li><a href="#MORE">MORE+</a></li>
        <li><span>+999999999</span></li>
        
      </ul>

      <button className="cta-button">Start My Business</button>
    </nav>
  );
};


export default Navbar;
