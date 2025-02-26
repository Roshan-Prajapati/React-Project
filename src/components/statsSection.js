import React from "react";
import "./statsSection.css"; // Import CSS

const StatsSection = () => {
  return (
    <div className="stats-container">
      <div className="stat-item">
        <div className="stat-content">
          <div className="stat-number">
            <span className="big yellow">99</span><span className="small yellow">%</span>
            <h2 className="stat-title yellow">Happy Clients</h2>
          </div>
          <p className="stat-text">Our Mission Is To Provide Quality</p>
        </div>
      </div>

      <div className="stat-item">
        <div className="stat-content">
          <div className="stat-number">
            <span className="big white">2</span><span className="small white">K</span>
            <h2 className="stat-title white">User Customers</h2>
          </div>
          <p className="stat-text">English Language Instruction.</p>
        </div>
      </div>

      <div className="stat-item">
        <div className="stat-content">
          <div className="stat-number">
            <span className="big yellow">7</span><span className="small yellow">+</span>
            <h2 className="stat-title yellow">Years Experience</h2>
          </div>
          <p className="stat-text">Our Mission Is To Provide Quality</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
