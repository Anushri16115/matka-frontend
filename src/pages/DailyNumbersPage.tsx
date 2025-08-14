import React, { useState } from "react";
import { Link } from "react-router-dom";

interface DailyResult {
  id: string;
  game: string;
  date: string;
  open: string;
  close: string;
  jodi: string;
  patti: string[];
  total: number;
  status: "completed" | "live" | "upcoming";
}

const DailyNumbersPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState("today");
  const [selectedGame, setSelectedGame] = useState("all");

  // Mock data for daily numbers
  const dailyResults: DailyResult[] = [
    {
      id: "1",
      game: "Kalyan Matka",
      date: "2024-01-15",
      open: "123",
      close: "456",
      jodi: "12-34",
      patti: [
        "123",
        "234",
        "345",
        "456",
        "567",
        "678",
        "789",
        "890",
        "901",
        "012",
      ],
      total: 45,
      status: "completed",
    },
    {
      id: "2",
      game: "Milan Day",
      date: "2024-01-15",
      open: "234",
      close: "567",
      jodi: "23-45",
      patti: [
        "234",
        "345",
        "456",
        "567",
        "678",
        "789",
        "890",
        "901",
        "012",
        "123",
      ],
      total: 56,
      status: "completed",
    },
    {
      id: "3",
      game: "Milan Night",
      date: "2024-01-15",
      open: "345",
      close: "678",
      jodi: "34-56",
      patti: [
        "345",
        "456",
        "567",
        "678",
        "789",
        "890",
        "901",
        "012",
        "123",
        "234",
      ],
      total: 67,
      status: "live",
    },
    {
      id: "4",
      game: "Rajdhani Night",
      date: "2024-01-15",
      open: "456",
      close: "789",
      jodi: "45-67",
      patti: [
        "456",
        "567",
        "678",
        "789",
        "890",
        "901",
        "012",
        "123",
        "234",
        "345",
      ],
      total: 78,
      status: "upcoming",
    },
    {
      id: "5",
      game: "Time Bazar",
      date: "2024-01-15",
      open: "567",
      close: "890",
      jodi: "56-78",
      patti: [
        "567",
        "678",
        "789",
        "890",
        "901",
        "012",
        "123",
        "234",
        "345",
        "456",
      ],
      total: 89,
      status: "upcoming",
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

  const filteredResults = dailyResults.filter(
    (result) => selectedGame === "all" || result.game === selectedGame
  );

  return (
    <div className="daily-numbers-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">📅 Daily Numbers</h1>
          <p className="page-subtitle">
            Complete daily results and statistics for all games
          </p>
        </div>

        {/* Date Selection */}
        <div className="filter-section">
          <div className="date-selector">
            <button
              className={`date-btn ${
                selectedDate === "yesterday" ? "active" : ""
              }`}
              onClick={() => setSelectedDate("yesterday")}
            >
              Yesterday
            </button>
            <button
              className={`date-btn ${selectedDate === "today" ? "active" : ""}`}
              onClick={() => setSelectedDate("today")}
            >
              Today
            </button>
            <button
              className={`date-btn ${
                selectedDate === "tomorrow" ? "active" : ""
              }`}
              onClick={() => setSelectedDate("tomorrow")}
            >
              Tomorrow
            </button>
          </div>
          <div className="game-filter">
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
        </div>

        {/* Daily Summary */}
        <div className="daily-summary">
          <h3>📊 Daily Summary</h3>
          <div className="summary-grid">
            <div className="summary-card">
              <h4>Total Games</h4>
              <p className="summary-number">5</p>
              <p className="summary-desc">Today's schedule</p>
            </div>
            <div className="summary-card">
              <h4>Completed</h4>
              <p className="summary-number">2</p>
              <p className="summary-desc">Results declared</p>
            </div>
            <div className="summary-card">
              <h4>Live</h4>
              <p className="summary-number">1</p>
              <p className="summary-desc">Currently running</p>
            </div>
            <div className="summary-card">
              <h4>Upcoming</h4>
              <p className="summary-number">2</p>
              <p className="summary-desc">Scheduled later</p>
            </div>
          </div>
        </div>

        {/* Results Table */}
        <div className="results-section">
          <h3>🎯 Today's Results</h3>
          <div className="results-table-container">
            <table className="results-table">
              <thead>
                <tr>
                  <th>Game</th>
                  <th>Open</th>
                  <th>Close</th>
                  <th>Jodi</th>
                  <th>Patti</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredResults.map((result) => (
                  <tr key={result.id}>
                    <td className="game-name">{result.game}</td>
                    <td className="open-number">{result.open}</td>
                    <td className="close-number">{result.close}</td>
                    <td className="jodi-number">{result.jodi}</td>
                    <td className="patti-numbers">
                      {result.patti.slice(0, 3).map((num, idx) => (
                        <span key={idx} className="patti-digit">
                          {num}
                        </span>
                      ))}
                      {result.patti.length > 3 && (
                        <span className="more-patti">
                          +{result.patti.length - 3}
                        </span>
                      )}
                    </td>
                    <td className="total-number">{result.total}</td>
                    <td className={`status ${result.status}`}>
                      {result.status === "completed"
                        ? "✅ Completed"
                        : result.status === "live"
                        ? "🔴 Live"
                        : "⏰ Upcoming"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="detailed-results">
          <h3>📋 Detailed Results</h3>
          <div className="detailed-grid">
            {filteredResults.map((result) => (
              <div key={result.id} className={`result-card ${result.status}`}>
                <div className="result-header">
                  <h4>{result.game}</h4>
                  <span className={`status-badge ${result.status}`}>
                    {result.status === "completed"
                      ? "✅ Completed"
                      : result.status === "live"
                      ? "🔴 Live"
                      : "⏰ Upcoming"}
                  </span>
                </div>

                <div className="result-content">
                  <div className="result-numbers">
                    <div className="number-group">
                      <span className="label">Open:</span>
                      <span className="value open">{result.open}</span>
                    </div>
                    <div className="number-group">
                      <span className="label">Close:</span>
                      <span className="value close">{result.close}</span>
                    </div>
                    <div className="number-group">
                      <span className="label">Jodi:</span>
                      <span className="value jodi">{result.jodi}</span>
                    </div>
                    <div className="number-group">
                      <span className="label">Total:</span>
                      <span className="value total">{result.total}</span>
                    </div>
                  </div>

                  <div className="patti-section">
                    <h5>Patti Numbers:</h5>
                    <div className="patti-grid">
                      {result.patti.map((num, idx) => (
                        <span key={idx} className="patti-number">
                          {num}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="statistics-section">
          <h3>📈 Daily Statistics</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Most Common Open</h4>
              <p className="stat-number">234</p>
              <p className="stat-desc">Appeared 2 times</p>
            </div>
            <div className="stat-card">
              <h4>Most Common Close</h4>
              <p className="stat-number">567</p>
              <p className="stat-desc">Appeared 2 times</p>
            </div>
            <div className="stat-card">
              <h4>Most Common Jodi</h4>
              <p className="stat-number">23-45</p>
              <p className="stat-desc">Appeared 2 times</p>
            </div>
            <div className="stat-card">
              <h4>Average Total</h4>
              <p className="stat-number">67</p>
              <p className="stat-desc">Daily average</p>
            </div>
          </div>
        </div>

        {/* Next Results */}
        <div className="next-results">
          <h3>⏰ Next Results</h3>
          <div className="next-results-grid">
            <div className="next-result-card">
              <h4>Milan Night</h4>
              <p className="time">11:00 PM</p>
              <p className="status">Live Now</p>
            </div>
            <div className="next-result-card">
              <h4>Rajdhani Night</h4>
              <p className="time">10:30 PM</p>
              <p className="status">Upcoming</p>
            </div>
            <div className="next-result-card">
              <h4>Time Bazar</h4>
              <p className="time">11:30 PM</p>
              <p className="status">Upcoming</p>
            </div>
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
            <Link to="/weekly-jodi-panna" className="btn btn-primary">
              Weekly Jodi/Panna →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyNumbersPage;
