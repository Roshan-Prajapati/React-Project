import { motion } from "framer-motion";
import service1 from '../assets/service-1.png';
import service2 from '../assets/service-2.png';
import service3 from '../assets/service-3.png';
import service4 from '../assets/service-4.png';
import service5 from '../assets/service-5.png';


import "./ourservices.css";

const services = [
  { title: "Business Registration", image: service1 },
  { title: "Government Licenses", image: service2 },
  { title: "Tax Filing", image: service3 },
  { title: "SEBI", image: service4 },
  { title: "Digital Marketing", image: service5 },
  { title: "Website Development Services", image: service3 },
  { title: "Startup India Certification", image: service4 },
  { title: "Business Registration", image: service1 },

];

const OurServices = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <span className="highlights">OUR</span>
        <span className="header-text">SERVICES</span>
      </div>
      <h2 className="services-title">
        Rely On Us For An Extensive Array Of Professional Services.
      </h2>
      <p className="services-description">
        Our goal is to assist Indian entrepreneurs in elevating their businesses to new levels of success.
      </p>
      <div className="grid-container">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
            className="service-card"
          >
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-content">
              <span className="service-title">{service.title}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <button className="all-services-btn">ALL SERVICES</button>
    </div>
  );
};

export default OurServices;