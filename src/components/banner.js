import React from "react";
import bannerVideo from '../assets/banner_video.mp4';
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="banner-text">
        <h1>
          BUILDING BETTER <span className="highlight">BUSINESS</span>
        </h1>
        <button className="btn-consultation">BOOK FREE CONSULTATION</button>
        <p className="services-title">Recommended Services for You</p>
        <div className="services">
          <button>EVENT BASED COMPLIANCES</button>
          <button>BUSINESS REGISTRATION</button>
          <button>BUSINESS CONVERSION</button>
          <button>BUSINESS CLOSURE</button>
          <button>BUSINESS SETUP</button>
          <button>NGO</button>
          <button>SECRETARIAL COMPLIANCES</button>
          <button>STARTUP INDIA CERTIFICATION</button>
          <button>MSME REGISTRATION</button>
          <button>TAX EXEMPTION CERTIFICATE</button>
          <button>MORE FOR YOU ..</button>
        </div>
      </div>
      <div className="banner-video">
        <video autoPlay loop muted playsInline>
          <source src={bannerVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Banner;
