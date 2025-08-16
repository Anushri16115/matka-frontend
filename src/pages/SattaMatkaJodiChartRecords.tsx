import React from "react";
import { Link } from "react-router-dom";

const SattaMatkaJodiChartRecords: React.FC = () => {
  // Jodi Chart Records Data based on reference images
  const jodiChartRecords = [
    { name: "Kalyan Chart", path: "/charts/jodi/kalyan", color: "blue" },
    { name: "Main Bazar Chart", path: "/charts/jodi/main-bazar", color: "red" },
    { name: "Main Ratan Chart", path: "/charts/jodi/main-ratan", color: "blue" },
    { name: "Main Mumbai Chart", path: "/charts/jodi/main-mumbai", color: "blue" },
    { name: "Time Bazar Chart", path: "/charts/jodi/time-bazar", color: "black" },
    { name: "Sridevi Satta Chart", path: "/charts/jodi/sridevi-satta", color: "red" },
    { name: "Sridevi Night Chart", path: "/charts/jodi/sridevi-night", color: "blue" },
    { name: "Kalyan Night Chart", path: "/charts/jodi/kalyan-night", color: "black" },
    { name: "Kalyan Morning Chart", path: "/charts/jodi/kalyan-morning", color: "black" },
    { name: "Madhur Morning Chart", path: "/charts/jodi/madhur-morning", color: "red" },
    { name: "Milan Day Chart", path: "/charts/jodi/milan-day", color: "blue" },
    { name: "Milan Night Chart", path: "/charts/jodi/milan-night", color: "blue" },
    { name: "Madhur Day Chart", path: "/charts/jodi/madhur-day", color: "red" },
    { name: "Madhur Night Chart", path: "/charts/jodi/madhur-night", color: "black" },
    { name: "Supreme Day Chart", path: "/charts/jodi/supreme-day", color: "blue" },
    { name: "Supreme Night Chart", path: "/charts/jodi/supreme-night", color: "blue" },
    { name: "Rajdhani Day Chart", path: "/charts/jodi/rajdhani-day", color: "black" }
  ];

  return (
    <div className="chart-records-page jodi">
      <div className="container">
        {/* Header Section */}
        <div className="chart-records-header">
          <h1>⇒ SATTA MATKA JODI CHART RECORDS</h1>
        </div>

        {/* Chart Records List */}
        <div className="chart-records-list">
          {jodiChartRecords.map((chart, index) => (
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

export default SattaMatkaJodiChartRecords;
