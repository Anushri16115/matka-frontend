import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <h1>PUNE MATKA</h1>
        <p>
          The most trusted Matka site for live results, lucky numbers, and
          expert guessing!
        </p>
        <div className="hero-buttons">
          <Link to="/guess" className="btn btn-primary">
            Submit Guess
          </Link>
          <Link to="/results" className="btn btn-secondary">
            View Results
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
