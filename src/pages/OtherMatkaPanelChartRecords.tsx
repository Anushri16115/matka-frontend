import React from "react";
import { Link } from "react-router-dom";

const OtherMatkaPanelChartRecords: React.FC = () => {
  // Other Matka Bazar Panel Chart Records Data based on reference images
  const otherPanelChartRecords = [
    { name: "Dabra Panel Chart", path: "/charts/panel/dabra", color: "orange" },
    { name: "Deluxe Panel Chart", path: "/charts/panel/deluxe", color: "black" },
    { name: "Khajana Panel Chart", path: "/charts/panel/khajana", color: "red" },
    { name: "Prabhat Panel Chart", path: "/charts/panel/prabhat", color: "red" },
    { name: "Maharani Panel Chart", path: "/charts/panel/maharani", color: "black" },
    { name: "Karodpati Panel Chart", path: "/charts/panel/karodpati", color: "black" },
    { name: "Star Morning Panel Chart", path: "/charts/panel/star-morning", color: "blue" },
    { name: "Prabhat Night Panel Chart", path: "/charts/panel/prabhat-night", color: "orange" },
    { name: "Kbc Bombay Panel Chart", path: "/charts/panel/kbc-bombay", color: "orange" },
    { name: "Karnataka Day Panel Chart", path: "/charts/panel/karnataka-day", color: "orange" },
    { name: "Karnataka Night Panel Chart", path: "/charts/panel/karnataka-night", color: "orange" },
    { name: "Maharani Day Panel Chart", path: "/charts/panel/maharani-day", color: "orange" },
    { name: "Maharani Night Panel Chart", path: "/charts/panel/maharani-night", color: "orange" },
    { name: "Raja Rani Morning Panel Chart", path: "/charts/panel/raja-rani-morning", color: "orange" }
  ];

  return (
    <div className="chart-records-page other-panel">
      <div className="container">
        {/* Header Section */}
        <div className="chart-records-header">
          <h1>⇒ OTHER MATKA BAZAR PANEL CHART RECORDS</h1>
        </div>

        {/* Chart Records List */}
        <div className="chart-records-list">
          {otherPanelChartRecords.map((chart, index) => (
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

export default OtherMatkaPanelChartRecords;
