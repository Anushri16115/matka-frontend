import React, { useState } from "react";
import { Link } from "react-router-dom";

interface OpenCloseData {
  date: string;
  open: string;
  close: string;
  difference: number;
  pattern: string;
  trend: string;
}

const OpenToCloseChart: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState("current");

  // Mock data for open-to-close chart
  const openCloseData: OpenCloseData[] = [
    {
      date: "2024-01-15",
      open: "123",
      close: "456",
      difference: 333,
      pattern: "Increasing",
      trend: "Strong Up",
    },
    {
      date: "2024-01-16",
      open: "234",
      close: "567",
      difference: 333,
      pattern: "Increasing",
      trend: "Strong Up",
    },
    {
      date: "2024-01-17",
      open: "345",
      close: "678",
      difference: 333,
      pattern: "Increasing",
      trend: "Strong Up",
    },
    {
      date: "2024-01-18",
      open: "456",
      close: "789",
      difference: 333,
      pattern: "Increasing",
      trend: "Strong Up",
    },
    {
      date: "2024-01-19",
      open: "567",
      close: "890",
      difference: 323,
      pattern: "Increasing",
      trend: "Moderate Up",
    },
    {
      date: "2024-01-20",
      open: "678",
      close: "901",
      difference: 223,
      pattern: "Increasing",
      trend: "Weak Up",
    },
    {
      date: "2024-01-21",
      open: "789",
      close: "012",
      difference: -777,
      pattern: "Decreasing",
      trend: "Strong Down",
    },
  ];

  return (
    <div className="chart-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">📊 Open-To-Close Numbers</h1>
          <p className="page-subtitle">
            Complete open-to-close analysis and patterns
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
                <th>Difference</th>
                <th>Pattern</th>
                <th>Trend</th>
              </tr>
            </thead>
            <tbody>
              {openCloseData.map((data, index) => (
                <tr key={index}>
                  <td>{new Date(data.date).toLocaleDateString()}</td>
                  <td className="open-number">{data.open}</td>
                  <td className="close-number">{data.close}</td>
                  <td
                    className={`difference ${
                      data.difference >= 0 ? "positive" : "negative"
                    }`}
                  >
                    {data.difference >= 0 ? "+" : ""}
                    {data.difference}
                  </td>
                  <td className={`pattern ${data.pattern.toLowerCase()}`}>
                    {data.pattern}
                  </td>
                  <td
                    className={`trend ${data.trend
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {data.trend}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary Statistics */}
        <div className="summary-stats">
          <h3>📈 Summary Statistics</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Average Difference</h4>
              <p className="stat-number">+142</p>
              <p className="stat-desc">Weekly average</p>
            </div>
            <div className="stat-card">
              <h4>Highest Difference</h4>
              <p className="stat-number">+333</p>
              <p className="stat-desc">Multiple days</p>
            </div>
            <div className="stat-card">
              <h4>Lowest Difference</h4>
              <p className="stat-number">-777</p>
              <p className="stat-desc">On 2024-01-21</p>
            </div>
            <div className="stat-card">
              <h4>Trend Direction</h4>
              <p className="stat-trend">Mostly Up</p>
              <p className="stat-desc">6 out of 7 days</p>
            </div>
          </div>
        </div>

        {/* Pattern Analysis */}
        <div className="pattern-analysis">
          <h3>🔍 Pattern Analysis</h3>
          <div className="analysis-grid">
            <div className="analysis-card">
              <h4>Most Common Pattern</h4>
              <p className="analysis-pattern">Increasing</p>
              <p className="analysis-desc">85.7% of days</p>
            </div>
            <div className="analysis-card">
              <h4>Strongest Trend</h4>
              <p className="analysis-trend">Strong Up</p>
              <p className="analysis-desc">4 out of 7 days</p>
            </div>
            <div className="analysis-card">
              <h4>Volatility Level</h4>
              <p className="analysis-volatility">High</p>
              <p className="analysis-desc">Range: -777 to +333</p>
            </div>
            <div className="analysis-card">
              <h4>Consistency</h4>
              <p className="analysis-consistency">Moderate</p>
              <p className="analysis-desc">Mixed patterns</p>
            </div>
          </div>
        </div>

        {/* Trend Prediction */}
        <div className="trend-prediction">
          <h3>🎯 Trend Prediction</h3>
          <div className="prediction-grid">
            <div className="prediction-card">
              <h4>Next Day Prediction</h4>
              <p className="prediction-value">Increasing</p>
              <p className="prediction-confidence">75% confidence</p>
            </div>
            <div className="prediction-card">
              <h4>Expected Range</h4>
              <p className="prediction-range">+200 to +400</p>
              <p className="prediction-desc">Based on patterns</p>
            </div>
            <div className="prediction-card">
              <h4>Risk Level</h4>
              <p className="prediction-risk">Medium</p>
              <p className="prediction-desc">Volatile market</p>
            </div>
            <div className="prediction-card">
              <h4>Recommended Action</h4>
              <p className="prediction-action">Cautious Betting</p>
              <p className="prediction-desc">Monitor closely</p>
            </div>
          </div>
        </div>

        {/* Historical Comparison */}
        <div className="historical-comparison">
          <h3>📚 Historical Comparison</h3>
          <div className="comparison-grid">
            <div className="comparison-card">
              <h4>This Week vs Last Week</h4>
              <p className="comparison-result">Better Performance</p>
              <p className="comparison-desc">+15% improvement</p>
            </div>
            <div className="comparison-card">
              <h4>Monthly Average</h4>
              <p className="comparison-result">Above Average</p>
              <p className="comparison-desc">+25% vs monthly</p>
            </div>
            <div className="comparison-card">
              <h4>Seasonal Trend</h4>
              <p className="comparison-result">Following Pattern</p>
              <p className="comparison-desc">Consistent with season</p>
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
            <Link to="/charts/weekly-jodi" className="btn btn-primary">
              Weekly Jodi Chart →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenToCloseChart;
