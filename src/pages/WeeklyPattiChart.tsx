import React, { useState } from "react";
import { Link } from "react-router-dom";

interface PattiData {
  date: string;
  open: string;
  close: string;
  jodi: string;
  patti: string[];
  total: number;
}

const WeeklyPattiChart: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState("current");

  // Mock data for weekly patti chart
  const pattiData: PattiData[] = [
    {
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
    },
    {
      date: "2024-01-16",
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
    },
    {
      date: "2024-01-17",
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
    },
    {
      date: "2024-01-18",
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
    },
    {
      date: "2024-01-19",
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
    },
    {
      date: "2024-01-20",
      open: "678",
      close: "901",
      jodi: "67-89",
      patti: [
        "678",
        "789",
        "890",
        "901",
        "012",
        "123",
        "234",
        "345",
        "456",
        "567",
      ],
      total: 90,
    },
    {
      date: "2024-01-21",
      open: "789",
      close: "012",
      jodi: "78-90",
      patti: [
        "789",
        "890",
        "901",
        "012",
        "123",
        "234",
        "345",
        "456",
        "567",
        "678",
      ],
      total: 12,
    },
  ];

  return (
    <div className="chart-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">📅 Weekly Patti Chart</h1>
          <p className="page-subtitle">
            Complete weekly patti chart data and analysis
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
                <th>Patti Numbers</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {pattiData.map((data, index) => (
                <tr key={index}>
                  <td>{new Date(data.date).toLocaleDateString()}</td>
                  <td className="open-number">{data.open}</td>
                  <td className="close-number">{data.close}</td>
                  <td className="jodi-number">{data.jodi}</td>
                  <td className="patti-numbers">
                    {data.patti.map((num, idx) => (
                      <span key={idx} className="patti-digit">
                        {num}
                      </span>
                    ))}
                  </td>
                  <td className="total-number">{data.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Patti Analysis */}
        <div className="patti-analysis">
          <h3>🔍 Patti Analysis</h3>
          <div className="analysis-grid">
            <div className="analysis-card">
              <h4>Most Common Patti</h4>
              <p className="analysis-number">567</p>
              <p className="analysis-desc">Appeared 6 times this week</p>
            </div>
            <div className="analysis-card">
              <h4>Highest Total</h4>
              <p className="analysis-number">90</p>
              <p className="analysis-desc">On 2024-01-20</p>
            </div>
            <div className="analysis-card">
              <h4>Lowest Total</h4>
              <p className="analysis-number">12</p>
              <p className="analysis-desc">On 2024-01-21</p>
            </div>
            <div className="analysis-card">
              <h4>Average Total</h4>
              <p className="analysis-number">62</p>
              <p className="analysis-desc">Weekly average</p>
            </div>
          </div>
        </div>

        {/* Hot Numbers */}
        <div className="hot-numbers">
          <h3>🔥 Hot Numbers This Week</h3>
          <div className="hot-numbers-grid">
            <div className="hot-number-card">
              <span className="hot-number">567</span>
              <span className="frequency">6 times</span>
            </div>
            <div className="hot-number-card">
              <span className="hot-number">678</span>
              <span className="frequency">5 times</span>
            </div>
            <div className="hot-number-card">
              <span className="hot-number">789</span>
              <span className="frequency">5 times</span>
            </div>
            <div className="hot-number-card">
              <span className="hot-number">890</span>
              <span className="frequency">4 times</span>
            </div>
            <div className="hot-number-card">
              <span className="hot-number">901</span>
              <span className="frequency">4 times</span>
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
            <Link to="/charts/weekly-jodi" className="btn btn-primary">
              Weekly Jodi Chart →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyPattiChart;
