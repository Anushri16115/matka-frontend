import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Pune Satta Matka</h1>
          </Link>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <ul className="nav-list">
              <li>
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/games"
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  to="/results"
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Live Results
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>

          <div className="auth-buttons desktop-auth-buttons">
            <Link to="/login" className="btn btn-secondary">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
