import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-section-title">Cinemium</h3>
          <ul className="footer-section-list">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Contact</h3>
          <ul className="footer-section-list">
            <li>Email: info@cinemium.com</li>
            <li>Phone: 555-555-5555</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Follow Us</h3>
          <ul className="footer-section-list">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© Copyright Cinemium 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
