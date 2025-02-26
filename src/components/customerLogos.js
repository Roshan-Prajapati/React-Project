import React from "react";
import "./customerLogos.css";

const logos = [
  { src: "https://bizdoor.in/wp-content/uploads/2024/06/snoop_eye-removebg-preview-e1717657229870.png", alt: "Snap Eye" },
  { src: "https://bizdoor.in/wp-content/uploads/2024/06/blasarraf-removebg-preview.png", alt: "Realty Developers" },
  { src: "https://bizdoor.in/wp-content/uploads/2024/06/eralty-removebg-preview.png", alt: "Nutsley" },
  { src: "https://bizdoor.in/wp-content/uploads/2024/06/nutsley-removebg-preview.png", alt: "Employable Skills" },
  { src: "https://bizdoor.in/wp-content/uploads/2024/06/employable_skills-removebg-preview.png", alt: "Alpha Engineering" },
  { src: "https://bizdoor.in/wp-content/uploads/2024/06/kitabwalah-removebg-preview.png", alt: "Kitabwalah" },
  { src: "https://bizdoor.in/wp-content/uploads/2024/06/vaishali-removebg-preview.png", alt: "Kitabwalah" },
];

const CustomerLogos = () => {
  return (
    <div className="customer-section">
      <h2>2000 Customers and Counting</h2>
      <div className="logo-slider">
        <div className="logo-track">
          {logos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="logo" />
          ))}
          {/* Duplicate for infinite loop effect */}
          {logos.map((logo, index) => (
            <img key={index + logos.length} src={logo.src} alt={logo.alt} className="logo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerLogos;
