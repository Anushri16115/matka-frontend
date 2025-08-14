import React, { useState } from "react";
import { Link } from "react-router-dom";

interface FreeGuess {
  id: string;
  game: string;
  prediction: string;
  confidence: number;
  reasoning: string;
  timestamp: string;
  likes: number;
}

const FreeGuessingPage: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState("all");
  // showCalculator state removed as it's not used

  // Mock data for free guesses
  const freeGuesses: FreeGuess[] = [
    {
      id: "1",
      game: "Kalyan Matka",
      prediction: "Open: 123, Close: 456, Jodi: 12-34",
      confidence: 85,
      reasoning: "Based on historical patterns and lucky numbers",
      timestamp: "2024-01-15T10:30:00",
      likes: 45,
    },
    {
      id: "2",
      game: "Milan Day",
      prediction: "Open: 234, Close: 567, Patti: 234",
      confidence: 78,
      reasoning: "Following the trend from last week's results",
      timestamp: "2024-01-15T09:15:00",
      likes: 32,
    },
    {
      id: "3",
      game: "Milan Night",
      prediction: "Open: 345, Close: 678, Jodi: 34-56",
      confidence: 92,
      reasoning: "Strong mathematical analysis and pattern recognition",
      timestamp: "2024-01-15T08:45:00",
      likes: 67,
    },
    {
      id: "4",
      game: "Rajdhani Night",
      prediction: "Open: 456, Close: 789, Patti: 456",
      confidence: 71,
      reasoning: "Based on daily lucky numbers and horoscope",
      timestamp: "2024-01-15T07:30:00",
      likes: 28,
    },
  ];

  const games = [
    "all",
    "Kalyan Matka",
    "Milan Day",
    "Milan Night",
    "Rajdhani Night",
    "Time Bazar",
  ];

  const filteredGuesses = freeGuesses.filter(
    (guess) => selectedGame === "all" || guess.game === selectedGame
  );

  return (
    <div className="free-guessing-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">🎯 Free Guessing</h1>
          <p className="page-subtitle">
            Get free predictions and tips for better guessing
          </p>
        </div>

        {/* Free Guessing Tools */}
        <div className="tools-section">
          <h3>🛠️ Free Guessing Tools</h3>
          <div className="tools-grid">
            <div className="tool-card">
              <h4>📊 Pattern Analyzer</h4>
              <p>Analyze historical patterns to predict future numbers</p>
              <button className="btn btn-primary">Use Tool</button>
            </div>
            <div className="tool-card">
              <h4>🎲 Lucky Number Generator</h4>
              <p>Generate lucky numbers based on various algorithms</p>
              <button className="btn btn-primary">Generate</button>
            </div>
            <div className="tool-card">
              <h4>📈 Trend Calculator</h4>
              <p>Calculate trends and probabilities for different games</p>
              <button className="btn btn-primary">Calculate</button>
            </div>
            <div className="tool-card">
              <h4>🔮 Horoscope Predictor</h4>
              <p>Get predictions based on daily horoscope and zodiac signs</p>
              <button className="btn btn-primary">Predict</button>
            </div>
          </div>
        </div>

        {/* Quick Calculator */}
        <div className="calculator-section">
          <h3>🧮 Quick Number Calculator</h3>
          <div className="calculator-interface">
            <div className="calculator-form">
              <div className="form-group">
                <label>Enter your lucky number:</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="Enter number (0-9)"
                />
              </div>
              <div className="form-group">
                <label>Select game:</label>
                <select className="form-select">
                  <option>Select Game</option>
                  <option>Kalyan Matka</option>
                  <option>Milan Day</option>
                  <option>Milan Night</option>
                  <option>Rajdhani Night</option>
                  <option>Time Bazar</option>
                </select>
              </div>
              <button className="btn btn-primary">Calculate Prediction</button>
            </div>
            <div className="calculator-result">
              <h4>Your Prediction:</h4>
              <div className="prediction-result">
                <p>
                  <strong>Open:</strong> 123
                </p>
                <p>
                  <strong>Close:</strong> 456
                </p>
                <p>
                  <strong>Jodi:</strong> 12-34
                </p>
                <p>
                  <strong>Confidence:</strong> 85%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Free Predictions */}
        <div className="predictions-section">
          <h3>🎯 Free Predictions</h3>
          <div className="filter-controls">
            <select
              value={selectedGame}
              onChange={(e) => setSelectedGame(e.target.value)}
              className="filter-select"
            >
              {games.map((game) => (
                <option key={game} value={game}>
                  {game === "all" ? "All Games" : game}
                </option>
              ))}
            </select>
          </div>

          <div className="predictions-grid">
            {filteredGuesses.map((guess) => (
              <div key={guess.id} className="prediction-card">
                <div className="prediction-header">
                  <h4>{guess.game}</h4>
                  <span className="confidence-badge">
                    {guess.confidence}% Confidence
                  </span>
                </div>

                <div className="prediction-content">
                  <p className="prediction-text">{guess.prediction}</p>
                  <p className="reasoning">{guess.reasoning}</p>
                  <div className="prediction-meta">
                    <span className="timestamp">
                      {new Date(guess.timestamp).toLocaleString()}
                    </span>
                    <span className="likes">👍 {guess.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guessing Tips */}
        <div className="tips-section">
          <h3>💡 Guessing Tips & Tricks</h3>
          <div className="tips-grid">
            <div className="tip-card">
              <h4>📊 Study Patterns</h4>
              <p>
                Analyze historical data to identify recurring patterns in
                numbers and timing.
              </p>
            </div>
            <div className="tip-card">
              <h4>🎯 Focus on Hot Numbers</h4>
              <p>
                Pay attention to numbers that appear frequently in recent
                results.
              </p>
            </div>
            <div className="tip-card">
              <h4>⏰ Timing Matters</h4>
              <p>
                Consider the time of day and day of week when making
                predictions.
              </p>
            </div>
            <div className="tip-card">
              <h4>🔢 Mathematical Approach</h4>
              <p>
                Use mathematical formulas and probability calculations for
                better accuracy.
              </p>
            </div>
            <div className="tip-card">
              <h4>📈 Follow Trends</h4>
              <p>
                Track upward and downward trends in specific games and numbers.
              </p>
            </div>
            <div className="tip-card">
              <h4>🎲 Trust Your Intuition</h4>
              <p>
                Sometimes your gut feeling combined with analysis works best.
              </p>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="success-stories">
          <h3>🏆 Success Stories</h3>
          <div className="stories-grid">
            <div className="story-card">
              <div className="story-header">
                <h4>MatkaKing</h4>
                <span className="win-amount">Won ₹25,000</span>
              </div>
              <p>
                "Used the pattern analyzer tool and won big on Kalyan Matka!"
              </p>
              <span className="story-date">2 days ago</span>
            </div>
            <div className="story-card">
              <div className="story-header">
                <h4>LuckyPlayer</h4>
                <span className="win-amount">Won ₹12,000</span>
              </div>
              <p>"Free predictions helped me understand the game better."</p>
              <span className="story-date">1 week ago</span>
            </div>
            <div className="story-card">
              <div className="story-header">
                <h4>NumberMaster</h4>
                <span className="win-amount">Won ₹18,500</span>
              </div>
              <p>
                "Combined horoscope predictions with mathematical analysis."
              </p>
              <span className="story-date">3 days ago</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="disclaimer-section">
          <h3>⚠️ Important Disclaimer</h3>
          <div className="disclaimer-content">
            <p>
              All predictions and tools provided on this page are for
              entertainment purposes only. There is no guarantee of winning, and
              gambling can be addictive. Please play responsibly and only bet
              what you can afford to lose. The success stories are examples and
              do not guarantee similar results.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="page-navigation">
          <div className="nav-buttons">
            <Link to="/" className="btn btn-secondary">
              ← Back to Home
            </Link>
            <Link to="/forum" className="btn btn-primary">
              Guessing Forum →
            </Link>
            <Link to="/online-play" className="btn btn-primary">
              Play Online →
            </Link>
            <Link to="/charts" className="btn btn-primary">
              Charts →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeGuessingPage;
