import React from "react";
import { Link } from "react-router-dom";

const WeeklyJodiPannaMemberForum: React.FC = () => {
  // Weekly Panel/Patti Chart Data
  const weeklyPanelData = [
    "0 =>136 479 299 668 677",
    "1 =>236 470 119 399 588",
    "2 =>156 390 228 499 778",
    "3 =>256 689 166 599 300",
    "4 =>158 347 266 699 770",
    "5 =>168 456 113 339 799",
    "6 =>349 457 114 466 880",
    "7 =>124 359 449 557 700",
    "8 =>189 459 224 558 900",
    "9 =>135 469 225 577 667"
  ];

  // Weekly Jodi Chart Data
  const weeklyJodiData = [
    "62 65 17 15",
    "42 45 90 96",
    "32 35 84 85",
    "04 06 52 58",
    "74 72 23 25",
    "01 54 75 63"
  ];

  // Weekly Open to Close Data
  const weeklyOpenCloseData = [
    "Mon. =>2-4-7-8",
    "Tues. =>3-5-6-9",
    "Wed. =>0-1-4-5",
    "Thur. =>2-4-7-8",
    "Fri. =>3-4-5-7",
    "Sat. =>3-5-7-8",
    "Sun. =>1-2-4-5"
  ];

  return (
    <div className="weekly-member-forum">
      <div className="container">
        {/* Header Section */}
        <div className="member-forum-header">
          <h1>SATTA MATKA WEEKLY JODI AND PANNA</h1>
          <h2>SATTA WEEKLY JODI GUESSING SITE</h2>
          <p>
            weekly jodi or panna, weekly jodi panna line, weekly jodi panna main mumbai, weekly jodi panna mumbai, http //weekly jodi and panna, matka guru weekly single jodi and panna, matka weekly jodi and panna, this week jodi and panna, weekly jodi and panna in kalyan, weekly jodi and panna kalyan
          </p>
        </div>

        {/* Weekly Panel/Patti Chart Section */}
        <div className="chart-section">
          <div className="chart-header">
            Weekly Panel Or Patti Chart From 10-08-2025 To 17-08-2025 For Kalyan, Milan, Kalyan Night, Rajdhani Night, Time Bazar, Main Bazar Market
          </div>
          <div className="chart-data">
            {weeklyPanelData.map((line, index) => (
              <div key={index} className="data-line">
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Jodi Chart Section */}
        <div className="chart-section">
          <div className="chart-header">
            Weekly Jodi Chart From 10-08-2025 To 17-08-2025 For Kalyan, Milan, Kalyan Night, Rajdhani Night, Time Bazar, Main Bazar Market
          </div>
          <div className="chart-data jodi-data">
            {weeklyJodiData.map((line, index) => (
              <div key={index} className="data-line jodi-line">
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Open to Close Section */}
        <div className="chart-section">
          <div className="chart-header">
            Weekly Number Open To Close From 10-08-2025 To 17-08-2025 For Kalyan, Milan, Kalyan Night, Rajdhani Night, Time Bazar, Main Bazar Market
          </div>
          <div className="chart-data open-close-data">
            {weeklyOpenCloseData.map((line, index) => (
              <div key={index} className="data-line open-close-line">
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* Promotional Section */}
        <div className="member-promo-section">
          <div className="promo-header">[卐 बुकिंग चालू । बुकिंग चालू 卐]</div>
          <div className="promo-content">
            <p className="hindi-ad">
              कल्याण बाजार बम्पर धमाका अचूक जोड़ी पर कमाओ लाखों 100% फिक्स 1 जोड़ी 2 पत्ती सिर्फ एक दिन में पूरा लॉस कबर होगा मनी बैक गारंटी एडवांस चार्ज
            </p>
            <div className="price">2500/- मात्र</div>
            <div className="contact-info">
              <div className="contact-item">कॉल : 08103944012</div>
              <div className="contact-item">कॉल : 08103944012</div>
            </div>
            <div className="note">Note :- Don't Call For Trail Help</div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="member-footer">
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
            <div className="contact-number">08103944012</div>
            <div className="website-url">https://sattamatkadpboss.co</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyJodiPannaMemberForum;
