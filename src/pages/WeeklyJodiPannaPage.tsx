// src/pages/WeeklyJodiPannaPage.tsx
import React from "react";
import { Link } from "react-router-dom";

const WeeklyJodiPannaPage: React.FC = () => {
  const jodiLines = [
    "62 65 17 15",
    "42 45 90 96",
    "32 35 84 85",
    "04 06 52 58",
    "74 72 23 25",
    "01 54 75 63",
  ];

  const dayNumbers = [
    "Mon. => 2-4-7-8",
    "Tues. => 3-5-6-9",
    "Wed. => 0-1-4-5",
    "Thur. => 2-4-7-8",
    "Fri. => 3-4-5-7-8",
    "Sat. => 3-5-7-8",
    "Sun. => 1-2-4-5",
  ];

  return (
    <section className="weekly-jodi-panna">
      {/* Header */}
      <header className="weekly-header">
        <h1>SATTA MATKA WEEKLY JODI AND PANNA</h1>
        <h2>SATTA WEEKLY JODI GUESSING SITE</h2>
        <p>
          weekly jodi or panna, weekly jodi panna line, weekly jodi panna main mumbai,
          weekly jodi and panna, guru weekly single jodi and panna, etc.
        </p>
      </header>

      {/* Top numbers (Mon–Sun) like the screenshot */}
      <section className="top-numbers-section">
        {dayNumbers.map((row, i) => (
          <div className="numbers-row" key={i}>{row}</div>
        ))}
      </section>

      {/* Weekly Jodi chart block */}
      <section className="weekly-chart-section">
        <div className="date-range">
          Weekly Jodi Chart From 10-08-2025 To 17-08-2025
        </div>
        <div className="chart-content">
          {jodiLines.map((line, i) => (
            <div className="chart-line" key={i}>{line}</div>
          ))}
        </div>
      </section>

      {/* Promotional / contact area (mirrors the look in your screenshots) */}
      <section className="promotional-section">
        <div className="promo-header">[ ५५ बुकिया चालू, बुकी चालू५५ ]</div>
        <div className="promo-content">
          <p className="hindi-ad">
            कल्याण बाजार बम्पर धमाका। अचूक जोड़ी पर कमाओ लाखों। 100% फिक्स जोड़ी। 
            यती सिर्फ एक दिन में पूरा लॉस कवर होगा, मनी बैक गारंटी। एडवांस चार्ज 2500/- मात्र
          </p>
          <div className="contact-info">
            <span className="contact-item">Call: 08103944012</span>
            <span className="contact-item">Call: 08103944012</span>
          </div>
          <p className="note">Note: Don't Call For Trial Help</p>
        </div>
      </section>

      {/* Footer with navigation back to Home and Member Forum */}
      <footer className="footer-section">
        <div className="nav-links">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/forum">Members Forum</Link>
          <Link className="nav-link" to="/charts/weekly-jodi">Weekly Jodi Chart</Link>
          <Link className="nav-link" to="/charts/weekly-patti">Weekly Patti Chart</Link>
          <Link className="nav-link" to="/charts/weekly-panel">Weekly Panel Chart</Link>
          <Link className="nav-link" to="/charts/open-to-close">Open → Close</Link>
        </div>

        <div className="footer-info">
          <div className="website-name">https://sattamatkadpboss.co</div>
          <div className="copyright">ALL RIGHTS RESERVED (2012–2025)</div>
          <div className="site-owner">
            SITE OWNER: <span className="owner-name">PRO. BIG BOSS SIR</span>
          </div>
          <div className="contact-number">08103944012</div>
          <div className="website-url">https://sattamatkadpboss.co</div>
        </div>
      </footer>
    </section>
  );
};

export default WeeklyJodiPannaPage;
