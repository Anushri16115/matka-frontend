import React from "react";
import { Link } from "react-router-dom";

const ChartsPage: React.FC = () => {
  // Panel Chart Records
  const panelCharts = [
    { name: "Kalyan Panel Chart", path: "/charts/panel/kalyan", color: "blue" },
    { name: "Main Bazar Panel Chart", path: "/charts/panel/main-bazar", color: "red" },
    { name: "Main Ratan Panel Chart", path: "/charts/panel/main-ratan", color: "blue" },
    { name: "Main Bombay Panel Chart", path: "/charts/panel/main-bombay", color: "red" },
    { name: "Time Bazar Panel Chart", path: "/charts/panel/time-bazar", color: "red" },
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
    { name: "Rajdhani Day Panel Chart", path: "/charts/panel/rajdhani-day", color: "black" },
    { name: "Rajdhani Night Panel Chart", path: "/charts/panel/rajdhani-night", color: "black" }
  ];

  // Jodi Chart Records
  const jodiCharts = [
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
    { name: "Madhur Night Chart", path: "/charts/jodi/madhur-night", color: "black" }
  ];

  // Other Matka Bazar Jodi Charts
  const otherJodiCharts = [
    { name: "Dabra Chart", path: "/charts/jodi/dabra", color: "black" },
    { name: "Deluxe Chart", path: "/charts/jodi/deluxe", color: "black" },
    { name: "Khajana Chart", path: "/charts/jodi/khajana", color: "red" },
    { name: "Prabhat Chart", path: "/charts/jodi/prabhat", color: "red" },
    { name: "Bajaj Day Chart", path: "/charts/jodi/bajaj-day", color: "red" },
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

  // Other Matka Bazar Panel Charts
  const otherPanelCharts = [
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
    <div className="charts-member-forum">
      <div className="container">
        {/* Header Section */}
        <div className="charts-header">
          <h1>Satta Matka Chart</h1>
          <p>Kalyan, Main Mumbai, Milan Day, Milan Night, Rajdhani Day, rajdhani Night, Jodi and Panna(Panel) Charts are Available Here And We Update All Charts Every Day So BookMark This Page And Keep Visiting To This Site.</p>
          <div className="admin-update">All Charts Updated By Admin -</div>
        </div>

        {/* Panel Chart Records Section */}
        <div className="chart-category">
          <div className="category-header">⇒ SATTA MATKA PANEL CHART RECORDS</div>
          <div className="chart-list">
            {panelCharts.map((chart, index) => (
              <Link 
                key={index} 
                to={chart.path} 
                className={`chart-item ${chart.color}`}
              >
                {chart.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Jodi Chart Records Section */}
        <div className="chart-category">
          <div className="category-header">⇒ SATTA MATKA JODI CHART RECORDS</div>
          <div className="chart-list">
            {jodiCharts.map((chart, index) => (
              <Link 
                key={index} 
                to={chart.path} 
                className={`chart-item ${chart.color}`}
              >
                {chart.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Other Matka Bazar Jodi Charts Section */}
        <div className="chart-category">
          <div className="category-header">⇒ OTHER MATKA BAZAR JODI CHART RECORDS</div>
          <div className="chart-list">
            {otherJodiCharts.map((chart, index) => (
              <Link 
                key={index} 
                to={chart.path} 
                className={`chart-item ${chart.color}`}
              >
                {chart.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Other Matka Bazar Panel Charts Section */}
        <div className="chart-category">
          <div className="category-header">⇒ OTHER MATKA BAZAR PANEL CHART RECORDS</div>
          <div className="chart-list">
            {otherPanelCharts.map((chart, index) => (
              <Link 
                key={index} 
                to={chart.path} 
                className={`chart-item ${chart.color}`}
              >
                {chart.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="charts-footer">
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/forum" className="nav-link">Matka Guessing</Link>
            <Link to="/charts" className="nav-link">Matka Chart</Link>
            <Link to="/online-play" className="nav-link">Matka Play</Link>
            <Link to="/weekly-jodi-panna" className="nav-link">Tara Matka</Link>
            <Link to="/indian-matka" className="nav-link">Indian Matka</Link>
            <Link to="/fix-matka" className="nav-link">Fix Matka</Link>
            <Link to="/sitemap" className="nav-link">Sitemap</Link>
          </div>
          <div className="footer-info">
            <div className="website-url">https://sattamatkadpboss.co</div>
            <div className="copyright">ALL RIGHTS RESERVED (2012-2023)</div>
            <div className="site-owner">SITE OWNER:-</div>
            <div className="owner-name">PRO. BIG BOSS SIR</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsPage;


