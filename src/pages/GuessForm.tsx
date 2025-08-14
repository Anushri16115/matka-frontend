import React, { useState } from "react";
import { games } from "../data/dummyData";

interface GuessFormData {
  gameId: string;
  number: string;
  amount: number;
  name: string;
  phone: string;
}

const GuessForm: React.FC = () => {
  const [formData, setFormData] = useState<GuessFormData>({
    gameId: "",
    number: "",
    amount: 0,
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Guess submitted:", formData);
      setSubmitSuccess(true);
      setFormData({
        gameId: "",
        number: "",
        amount: 0,
        name: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error submitting guess:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const activeGames = games.filter((game) => game.isActive);

  if (submitSuccess) {
    return (
      <div className="guess-form-page">
        <div className="container">
          <div className="success-message">
            <div className="success-icon">✅</div>
            <h1>Guess Submitted Successfully!</h1>
            <p>Your guess has been recorded. Good luck!</p>
            <button
              className="btn btn-primary"
              onClick={() => setSubmitSuccess(false)}
            >
              Submit Another Guess
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="guess-form-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Submit Your Guess</h1>
          <p className="page-subtitle">
            Place your bet and submit your guess for the next result
          </p>
        </div>

        <div className="guess-form-container">
          <form className="guess-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h3>Game Selection</h3>
              <div className="form-group">
                <label htmlFor="gameId">Select Game *</label>
                <select
                  id="gameId"
                  name="gameId"
                  value={formData.gameId}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">Choose a game...</option>
                  {activeGames.map((game) => (
                    <option key={game.id} value={game.id}>
                      {game.name} - Min: ₹{game.minBet}, Max: ₹{game.maxBet}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-section">
              <h3>Your Guess</h3>
              <div className="form-group">
                <label htmlFor="number">Guess Number *</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Enter your guess (e.g., 123)"
                  required
                  maxLength={3}
                  pattern="[0-9]{1,3}"
                  className="form-input"
                />
                <small>Enter a number between 0-999</small>
              </div>

              <div className="form-group">
                <label htmlFor="amount">Bet Amount (₹) *</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount || ""}
                  onChange={handleChange}
                  placeholder="Enter amount"
                  required
                  min="10"
                  max="100000"
                  className="form-input"
                />
                <small>Minimum ₹10, Maximum ₹100,000</small>
              </div>
            </div>

            <div className="form-section">
              <h3>Contact Information</h3>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  pattern="[0-9]{10}"
                  className="form-input"
                />
                <small>10-digit phone number</small>
              </div>
            </div>

            <div className="form-actions">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Guess"}
              </button>
            </div>
          </form>

          <div className="form-info">
            <h3>Important Information</h3>
            <ul>
              <li>✅ All guesses are final and cannot be changed</li>
              <li>✅ Results are announced at scheduled times</li>
              <li>✅ Winners will be contacted via phone</li>
              <li>✅ Payment will be processed within 24 hours</li>
              <li>✅ Play responsibly and within your limits</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuessForm;
