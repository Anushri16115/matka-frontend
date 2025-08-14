import React from "react";
import { Link } from "react-router-dom";

const WeeklyJodiPanna: React.FC = () => {
  // Mock data for the weekly jodi panna chart
  const weeklyData = [
    "0 => 244 488 677 235 569",
    "1 => 579 344 399 489 678",
    "2 => 679 589 688 336 345",
    "3 => 789 689 788 446 456",
    "4 => 889 789 888 556 567",
    "5 => 989 889 988 666 678",
    "6 => 089 989 088 776 789",
    "7 => 189 089 188 886 890",
    "8 => 289 189 288 996 901",
    "9 => 117 667 388 180 126",
  ];

  // Top numbers data
  const topNumbers = [
    "{34} {32} {36} {31}",
    "{07} {04} {08} {09}",
    "{61} {68} {69} {62}",
    "{54} {51} {56} {57}",
    "{95} {92} {96} {93}",
  ];

  return (
    <div className="weekly-jodi-panna">
      <div className="container">
        {/* Header Section */}
        <div className="weekly-header">
          <h1>SATTA MATKA WEEKLY JODI AND PANNA</h1>
          <h2>SATTA WEEKLY JODI GUESSING SITE</h2>
          <p>
            weekly jodi or panna, weekly jodi panna line, weekly jodi panna main
            mumbai, weekly jodi panna mumbai, http //weekly jodi and panna,
            matka guru weekly single jodi and panna, matka weekly jodi and
            panna, this week jodi and panna, weekly jodi and panna in kalyan,
            weekly jodi and panna kalyan
          </p>
        </div>

        {/* Top Numbers Display */}
        <div className="top-numbers-section">
          {topNumbers.map((row, index) => (
            <div key={index} className="numbers-row">
              {row}
            </div>
          ))}
        </div>

        {/* Weekly Chart Section */}
        <div className="weekly-chart-section">
          <div className="date-range">20-06-2022 To 26-06-2022</div>
          <div className="chart-content">
            {weeklyData.map((line, index) => (
              <div key={index} className="chart-line">
                {line}
              </div>
            ))}
          </div>
          <div className="date-range">20-06-2022 To 26-06-2022</div>
        </div>

        {/* Promotional Section */}
        <div className="promotional-section">
          <div className="promo-header">[卐 बुकिंग चालू । बुकिंग चालू 卐]</div>
          <div className="promo-content">
            <p className="hindi-ad">
              कल्याण बाजार बम्पर धमाका अचूक जोड़ी पर कमाओ लाखों 100% फिक्स 1
              जोड़ी 2 पत्ती सिर्फ एक दिन में पूरा लॉस कबर होगा मनी बैक गारंटी
              एडवांस चार्ज
            </p>
            <div className="price">2500/- मात्र</div>
            <div className="contact-info">
              <div className="contact-item">कॉल : 07404972449</div>
              <div className="contact-item">कॉल : 07404972449</div>
            </div>
            <div className="note">Note :- Don't Call For Trail Help</div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="footer-section">
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Back
            </Link>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/forum" className="nav-link">
              Guessing Forum
            </Link>
            <Link to="/charts" className="nav-link">
              Matka Chart
            </Link>
            <Link to="/online-play" className="nav-link">
              Matka Play
            </Link>
            <Link to="/sitemap" className="nav-link">
              Sitemap
            </Link>
          </div>
          <div className="footer-info">
            <div className="website-name">SattaMatkaMarket.In</div>
            <div className="copyright">ALL RIGHTS RESERVED (2012-2022)</div>
            <div className="site-owner">SITE ONWER:-</div>
            <div className="owner-name">PRO. BIG BOSS SIR</div>
            <div className="contact-number">07404972449</div>
            <div className="website-url">https://SattaMatkaMarket.In</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyJodiPanna;
