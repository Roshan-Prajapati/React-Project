import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img
            src={require("../assets/Bizdoor_Logo_.png")}
            alt="Bizdoor Logo"
            className="footer-logo"
          />
          <p className="footer-description">
            BIZDOOR offers comprehensive business solutions to help startups and
            established businesses thrive. Our services include business
            registration, government licensing, tax filing, and compliance
            management. With a focus on elevating Indian entrepreneurs, we
            provide expert advisory and digital marketing services to ensure
            smooth business operations and growth. We aim for 99.9% client
            satisfaction by delivering tailored, high-quality services. Connect
            with us for a free consultation and let us propel your business forward.
          </p>
          <div className="footer-social">
            <FaFacebookF className="social-icon" />
            <FaInstagram className="social-icon" />
          </div>
        </div>

        <div className="footer-center">
          <h3 className="footer-title">Services</h3>
          <ul className="footer-links">
            <li>Startup</li>
            <li>License</li>
            <li>Tax</li>
            <li>Regulatory</li>
          </ul>
        </div>

        <div className="footer-right">
          <h3 className="footer-title">Contact</h3>
          <p className="footer-contact">
            <strong>Address:</strong> 1st Floor, Yasin Heritage, Frazer Road,
            Patna (Bihar)
          </p>
          <p className="footer-contact">
            <strong>Email:</strong>{" "}
            <a href="mailto:bizdoorbusiness@gmail.com">bizdoorbusiness@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 BIZDOOR. All rights reserved.</p>
        <a
          href="https://wa.me/your-number"
          className="whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
