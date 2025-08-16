import React from "react";
import { Link } from "react-router-dom";

const SattaMatkaPanelChartRecords: React.FC = () => {
  // Panel Chart Records Data based on reference images
  const panelChartRecords = [
    { name: "Kalyan Panel Chart", path: "/charts/panel/kalyan", color: "blue" },
    { name: "Main Bazar Panel Chart", path: "/charts/panel/main-bazar", color: "red" },
    { name: "Main Ratan Panel Chart", path: "/charts/panel/main-ratan", color: "blue" },
    { name: "Main Bombay Panel Chart", path: "/charts/panel/main-bombay", color: "blue" },
    { name: "Time Bazar Panel Chart", path: "/charts/panel/time-bazar", color: "orange" },
    { name: "Sridevi Satta Panel Chart", path: "/charts/panel/sridevi-satta", color: "red" },
    { name: "Sridevi Night Panel Chart", path: "/charts/panel/sridevi-night", color: "blue" },
    { name: "Kalyan Night Panel Chart", path: "/charts/panel/kalyan-night", color: "black" },
    { name: "Kalyan Morning Panel Chart", path: "/charts/panel/kalyan-morning", color: "black" },
    { name: "Madhur Morning Panel Chart", path: "/charts/panel/madhur-morning", color: "red" },
    { name: "Milan Day Panel Chart", path: "/charts/panel/milan-day", color: "blue" },
    { name: "Milan Night Panel Chart", path: "/charts/panel/milan-night", color: "blue" },
    { name: "Madhur Day Panel Chart", path: "/charts/panel/madhur-day", color: "red" },
    { name: "Madhur Night Panel Chart", path: "/charts/panel/madhur-night", color: "orange" },
    { name: "Supreme Day Panel Chart", path: "/charts/panel/supreme-day", color: "black" },
    { name: "Supreme Night Panel Chart", path: "/charts/panel/supreme-night", color: "black" },
    { name: "Rajdhani Day Panel Chart", path: "/charts/panel/rajdhani-day", color: "black" }
  ];

  return (
    <div className="chart-records-page panel">
      <div className="container">
        {/* Header Section */}
        <div className="chart-records-header">
          <h1>⇒ SATTA MATKA PANEL CHART RECORDS</h1>
        </div>

        {/* Chart Records List */}
        <div className="chart-records-list">
          {panelChartRecords.map((chart, index) => (
            <Link 
              key={index} 
              to={chart.path} 
              className={`chart-record-item ${chart.color}`}
            >
              {chart.name}
            </Link>
          ))}
        </div>

        {/* Matka Play Button */}
        <div className="matka-play-section">
          <Link to="/online-play" className="matka-play-btn">Matka Play</Link>
          <Link to="/" className="refresh-btn">Refresh</Link>
        </div>

        {/* Footer Info */}
        <div className="chart-records-footer">
          <p>Get the latest updates and satta matka results.</p>
          <p>Satta matka game is one of the most popular gambling terminal globally. Get all the latest updates with our trusted satta matka website. We provide the latest tricks and strategies to help you win more money. Be sure to check out our website for all the latest information to become a successful player of this tricky Indian game.</p>
        </div>
      </div>
    </div>
  );
};

export default SattaMatkaPanelChartRecords;
