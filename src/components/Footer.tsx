// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-columns">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/games">Play</Link>
              </li>
              <li>
                <Link to="/results">Results</Link>
              </li>
              <li>
                <Link to="/charts">Charts</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Disclaimer</h4>
            <p>
              We do not support or promote any form of gambling. This website is
              for educational and informational purposes only.
            </p>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>Email: support@punematka.com</p>
            <p>Phone: +91-9876543210</p>
            <p>Address: Pune, Maharashtra</p>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Pune Matka. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
