import React from "react";
import { Link } from "react-router-dom";

const OtherMatkaJodiChartRecords: React.FC = () => {
  // Other Matka Bazar Jodi Chart Records Data based on reference images
  const otherJodiChartRecords = [
    { name: "Dabra Chart", path: "/charts/jodi/dabra", color: "black" },
    { name: "Deluxe Chart", path: "/charts/jodi/deluxe", color: "black" },
    { name: "Khajana Chart", path: "/charts/jodi/khajana", color: "red" },
    { name: "Prabhat Chart", path: "/charts/jodi/prabhat", color: "red" },
    { name: "Bajaj Day Chart", path: "/charts/jodi/bajaj-day", color: "blue" },
    { name: "Maharani Chart", path: "/charts/jodi/maharani", color: "red" },
    { name: "Star Morning Chart", path: "/charts/jodi/star-morning", color: "blue" },
    { name: "Prabhat Night Chart", path: "/charts/jodi/prabhat-night", color: "black" },
    { name: "Karodpati Chart", path: "/charts/jodi/karodpati", color: "orange" },
    { name: "Kbc Bombay Chart", path: "/charts/jodi/kbc-bombay", color: "black" },
    { name: "Maharani Day Chart", path: "/charts/jodi/maharani-day", color: "blue" },
    { name: "Maharani Night Chart", path: "/charts/jodi/maharani-night", color: "blue" },
    { name: "Karnataka Day Chart", path: "/charts/jodi/karnataka-day", color: "orange" },
    { name: "Karnataka Night Chart", path: "/charts/jodi/karnataka-night", color: "orange" },
    { name: "Raja Rani Morning Chart", path: "/charts/jodi/raja-rani-morning", color: "orange" }
  ];

  return (
    <div className="chart-records-page other-jodi">
      <div className="container">
        {/* Header Section */}
        <div className="chart-records-header">
          <h1>⇒ OTHER MATKA BAZAR JODI CHART RECORDS</h1>
        </div>

        {/* Chart Records List */}
        <div className="chart-records-list">
          {otherJodiChartRecords.map((chart, index) => (
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

export default OtherMatkaJodiChartRecords;
