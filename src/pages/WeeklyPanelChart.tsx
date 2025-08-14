import React, { useState } from "react";
import { Link } from "react-router-dom";

interface ChartData {
  date: string;
  open: string;
  close: string;
  jodi: string;
  panel: string[];
}

const WeeklyPanelChart: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState("current");

  // Mock data for weekly panel chart
  const chartData: ChartData[] = [
    {
      date: "2024-01-15",
      open: "123",
      close: "456",
      jodi: "12-34",
      panel: [
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
    },
    {
      date: "2024-01-16",
      open: "234",
      close: "567",
      jodi: "23-45",
      panel: [
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
    },
    {
      date: "2024-01-17",
      open: "345",
      close: "678",
      jodi: "34-56",
      panel: [
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
    },
    {
      date: "2024-01-18",
      open: "456",
      close: "789",
      jodi: "45-67",
      panel: [
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
    },
    {
      date: "2024-01-19",
      open: "567",
      close: "890",
      jodi: "56-78",
      panel: [
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
    },
    {
      date: "2024-01-20",
      open: "678",
      close: "901",
      jodi: "67-89",
      panel: [
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
    },
    {
      date: "2024-01-21",
      open: "789",
      close: "012",
      jodi: "78-90",
      panel: [
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
    },
  ];

  return (
    <div className="chart-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">📅 Weekly Panel Chart</h1>
          <p className="page-subtitle">
            Complete weekly panel chart data and analysis
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
                <th>Panel Numbers</th>
              </tr>
            </thead>
            <tbody>
              {chartData.map((data, index) => (
                <tr key={index}>
                  <td>{new Date(data.date).toLocaleDateString()}</td>
                  <td className="open-number">{data.open}</td>
                  <td className="close-number">{data.close}</td>
                  <td className="jodi-number">{data.jodi}</td>
                  <td className="panel-numbers">
                    {data.panel.map((num, idx) => (
                      <span key={idx} className="panel-digit">
                        {num}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Statistics Section */}
        <div className="stats-section">
          <h3>📊 Weekly Statistics</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Most Common Open</h4>
              <p className="stat-number">456</p>
              <p className="stat-frequency">Appeared 3 times</p>
            </div>
            <div className="stat-card">
              <h4>Most Common Close</h4>
              <p className="stat-number">789</p>
              <p className="stat-frequency">Appeared 2 times</p>
            </div>
            <div className="stat-card">
              <h4>Most Common Jodi</h4>
              <p className="stat-number">45-67</p>
              <p className="stat-frequency">Appeared 2 times</p>
            </div>
            <div className="stat-card">
              <h4>Most Common Panel</h4>
              <p className="stat-number">567</p>
              <p className="stat-frequency">Appeared 5 times</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="page-navigation">
          <div className="nav-buttons">
            <Link to="/" className="btn btn-secondary">
              ← Back to Home
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

export default WeeklyPanelChart;
