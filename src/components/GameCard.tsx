import React from "react";
import "../styles/globals.css";

interface GameCardProps {
  id: string;
  name: string;
  description: string;
  minBet: number;
  maxBet: number;
  timing: string;
  isActive: boolean;
  onPlay: (gameId: string) => void;
}

const GameCard: React.FC<GameCardProps> = ({
  id,
  name,
  description,
  minBet,
  maxBet,
  timing,
  isActive,
  onPlay,
}) => {
  return (
    <div className={`game-card ${isActive ? "active" : "inactive"}`}>
      <div className="game-header">
        <h3 className="game-name">{name}</h3>
        <span className={`status ${isActive ? "active" : "inactive"}`}>
          {isActive ? "🟢 Active" : "🔴 Inactive"}
        </span>
      </div>

      <div className="game-content">
        <p className="game-description">{description}</p>

        <div className="game-details">
          <div className="detail-item">
            <span className="label">Min Bet:</span>
            <span className="value">₹{minBet}</span>
          </div>
          <div className="detail-item">
            <span className="label">Max Bet:</span>
            <span className="value">₹{maxBet}</span>
          </div>
          <div className="detail-item">
            <span className="label">Timing:</span>
            <span className="value">{timing}</span>
          </div>
        </div>
      </div>

      <div className="game-actions">
        <button
          className={`btn btn-primary ${!isActive ? "disabled" : ""}`}
          onClick={() => onPlay(id)}
          disabled={!isActive}
        >
          {isActive ? "Play Now" : "Coming Soon"}
        </button>
      </div>
    </div>
  );
};

export default GameCard;
