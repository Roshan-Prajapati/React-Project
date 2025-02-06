import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-section">
      <div className="about-left">
        <div className="image-container">
          <img
            src={require("../assets/aboutUs.png")}
            alt="People Collaborating"
            className="main-image"
          />
          <div className="background-overlay"></div>
          <div class="background-overlay-grey"></div> 
        </div>
        <div className="follow-us">
          <button className="follow-button">Follow Us</button>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="about-right">
        <div className="about-header">
          <span className="about-tag">ABOUT US</span>
          <h2>We Propel Your Business Forward</h2>
        </div>
        <p>
          At BIZDOOR, We Offer A Variety Of Business Solutions Designed To
          Transform Your Startup Into A Distinguished Corporate Presence. We
          Deliver Expert Consulting And Advisory Services Tailored To The Needs
          Of Growing Companies.
        </p>
        <button className="consult-button">BOOK FREE CONSULTATION</button>
      </div>
    </div>
  );
};

export default AboutUs;
