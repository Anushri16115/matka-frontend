import React, { useState } from "react";
import { Link } from "react-router-dom";

interface JodiData {
  date: string;
  open: string;
  close: string;
  jodi: string;
  jodiType: string;
  result: string;
}

const WeeklyJodiChart: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState("current");

  // Mock data for weekly jodi chart
  const jodiData: JodiData[] = [
    {
      date: "2024-01-15",
      open: "123",
      close: "456",
      jodi: "12-34",
      jodiType: "Single",
      result: "Win",
    },
    {
      date: "2024-01-16",
      open: "234",
      close: "567",
      jodi: "23-45",
      jodiType: "Double",
      result: "Loss",
    },
    {
      date: "2024-01-17",
      open: "345",
      close: "678",
      jodi: "34-56",
      jodiType: "Single",
      result: "Win",
    },
    {
      date: "2024-01-18",
      open: "456",
      close: "789",
      jodi: "45-67",
      jodiType: "Double",
      result: "Win",
    },
    {
      date: "2024-01-19",
      open: "567",
      close: "890",
      jodi: "56-78",
      jodiType: "Single",
      result: "Loss",
    },
    {
      date: "2024-01-20",
      open: "678",
      close: "901",
      jodi: "67-89",
      jodiType: "Double",
      result: "Win",
    },
    {
      date: "2024-01-21",
      open: "789",
      close: "012",
      jodi: "78-90",
      jodiType: "Single",
      result: "Win",
    },
  ];

  return (
    <div className="chart-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">📅 Weekly Jodi Chart</h1>
          <p className="page-subtitle">
            Complete weekly jodi chart data and analysis
          </p>
        </div>

        {/* Week Selection */}
        <div className="filter-section">
          <div className="week-selector">
            <button
              className={`week-btn ${
                selectedWeek === "current" ? "active" : ""
              }`}
              onClick={() => setSelectedWeek("current")}
            >
              Current Week
            </button>
            <button
              className={`week-btn ${
                selectedWeek === "previous" ? "active" : ""
              }`}
              onClick={() => setSelectedWeek("previous")}
            >
              Previous Week
            </button>
            <button
              className={`week-btn ${selectedWeek === "next" ? "active" : ""}`}
              onClick={() => setSelectedWeek("next")}
            >
              Next Week
            </button>
          </div>
        </div>

        {/* Chart Table */}
        <div className="chart-table-container">
          <table className="chart-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Open</th>
                <th>Close</th>
                <th>Jodi</th>
                <th>Type</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {jodiData.map((data, index) => (
                <tr key={index}>
                  <td>{new Date(data.date).toLocaleDateString()}</td>
                  <td className="open-number">{data.open}</td>
                  <td className="close-number">{data.close}</td>
                  <td className="jodi-number">{data.jodi}</td>
                  <td className={`jodi-type ${data.jodiType.toLowerCase()}`}>
                    {data.jodiType}
                  </td>
                  <td className={`result ${data.result.toLowerCase()}`}>
                    {data.result === "Win" ? "✅ Win" : "❌ Loss"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Jodi Statistics */}
        <div className="jodi-stats">
          <h3>📊 Jodi Statistics</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Total Jodis</h4>
              <p className="stat-number">7</p>
              <p className="stat-desc">This week</p>
            </div>
            <div className="stat-card">
              <h4>Winning Jodis</h4>
              <p className="stat-number">5</p>
              <p className="stat-desc">71.4% success rate</p>
            </div>
            <div className="stat-card">
              <h4>Single Jodis</h4>
              <p className="stat-number">4</p>
              <p className="stat-desc">57.1% of total</p>
            </div>
            <div className="stat-card">
              <h4>Double Jodis</h4>
              <p className="stat-number">3</p>
              <p className="stat-desc">42.9% of total</p>
            </div>
          </div>
        </div>

        {/* Popular Jodis */}
        <div className="popular-jodis">
          <h3>🎯 Popular Jodis This Week</h3>
          <div className="jodis-grid">
            <div className="jodi-card">
              <span className="jodi-value">12-34</span>
              <span className="jodi-frequency">Appeared 2 times</span>
              <span className="jodi-success">100% win rate</span>
            </div>
            <div className="jodi-card">
              <span className="jodi-value">45-67</span>
              <span className="jodi-frequency">Appeared 2 times</span>
              <span className="jodi-success">100% win rate</span>
            </div>
            <div className="jodi-card">
              <span className="jodi-value">23-45</span>
              <span className="jodi-frequency">Appeared 1 time</span>
              <span className="jodi-loss">0% win rate</span>
            </div>
            <div className="jodi-card">
              <span className="jodi-value">56-78</span>
              <span className="jodi-frequency">Appeared 1 time</span>
              <span className="jodi-loss">0% win rate</span>
            </div>
          </div>
        </div>

        {/* Jodi Patterns */}
        <div className="jodi-patterns">
          <h3>🔍 Jodi Patterns Analysis</h3>
          <div className="patterns-grid">
            <div className="pattern-card">
              <h4>Most Common First Digit</h4>
              <p className="pattern-number">5</p>
              <p className="pattern-desc">Appeared in 3 jodis</p>
            </div>
            <div className="pattern-card">
              <h4>Most Common Second Digit</h4>
              <p className="pattern-number">6</p>
              <p className="pattern-desc">Appeared in 3 jodis</p>
            </div>
            <div className="pattern-card">
              <h4>Best Performing Type</h4>
              <p className="pattern-type">Double</p>
              <p className="pattern-desc">100% win rate</p>
            </div>
            <div className="pattern-card">
              <h4>Worst Performing Type</h4>
              <p className="pattern-type">Single</p>
              <p className="pattern-desc">75% win rate</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="page-navigation">
          <div className="nav-buttons">
            <Link to="/" className="btn btn-secondary">
              ← Back to Home
            </Link>
            <Link to="/charts/weekly-panel" className="btn btn-primary">
              Weekly Panel Chart →
            </Link>
            <Link to="/charts/weekly-patti" className="btn btn-primary">
              Weekly Patti Chart →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyJodiChart;
