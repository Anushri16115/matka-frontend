import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">About Pune Satta Matka</h1>
          <p className="page-subtitle">
            Your trusted platform for online matka games
          </p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h2>Who We Are</h2>
            <p>
              Pune Satta Matka is the world's first trusted website for online
              matka games. We provide a secure, transparent, and user-friendly
              platform for players to enjoy their favorite matka games with
              real-time results and instant payouts.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide a safe and reliable gaming environment
              where players can enjoy matka games with complete transparency. We
              are committed to fair play, secure transactions, and excellent
              customer service.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Platform</h3>
              <p>
                Advanced security measures to protect your data and transactions
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Instant Results</h3>
              <p>Real-time updates and instant result announcements</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Quick Payouts</h3>
              <p>Fast and reliable payment processing for all winnings</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎮</div>
              <h3>Multiple Games</h3>
              <p>Wide variety of matka games to choose from</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Play on any device with our responsive design</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Fair Play</h3>
              <p>Transparent and fair gaming environment for all players</p>
            </div>
          </div>

          <div className="about-section">
            <h2>Why Choose Us</h2>
            <ul className="benefits-list">
              <li>✅ Trusted and reliable platform</li>
              <li>✅ 24/7 customer support</li>
              <li>✅ Multiple payment options</li>
              <li>✅ Live chat support</li>
              <li>✅ Regular promotions and bonuses</li>
              <li>✅ Secure and encrypted transactions</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>Contact Information</h2>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Email:</strong> support@punesattamatka.com
              </div>
              <div className="contact-item">
                <strong>WhatsApp:</strong> +91-XXXXXXXXXX
              </div>
              <div className="contact-item">
                <strong>Support Hours:</strong> 24/7
              </div>
            </div>
          </div>

          <div className="about-section">
            <div className="navigation-buttons">
              <Link to="/games" className="btn btn-primary">
                Start Playing
              </Link>
              <Link to="/results" className="btn btn-secondary">
                View Results
              </Link>
              <Link to="/login" className="btn btn-secondary">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
