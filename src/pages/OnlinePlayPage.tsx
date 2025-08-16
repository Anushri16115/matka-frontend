import React, { useState } from "react";
import { Link } from "react-router-dom";

interface GameSection {
  id: string;
  name: string;
  primaryNumbers: string;
  secondaryNumbers: string;
  highlightedNumbers: string;
  isPending: boolean;
}

const OnlinePlayPage: React.FC = () => {
  const [currentDate] = useState("14-08-2025");

  // Mock game sections data
  const gameSections: GameSection[] = [
    {
      id: "1",
      name: "PUNE DAY",
      primaryNumbers: "1-3-5-0",
      secondaryNumbers: "137-490-258-280",
      highlightedNumbers: "11-36-50-01",
      isPending: false,
    },
    {
      id: "2",
      name: "PUNE NIGHT",
      primaryNumbers: "2-4-6-8",
      secondaryNumbers: "246-580-369-147",
      highlightedNumbers: "22-47-61-12",
      isPending: false,
    },
    {
      id: "3",
      name: "KALYAN NIGHT",
      primaryNumbers: "*_*_*_*",
      secondaryNumbers: "***_***_***_***",
      highlightedNumbers: "**_**_**_**",
      isPending: true,
    },
    {
      id: "4",
      name: "KALYAN",
      primaryNumbers: "3-7-9-1",
      secondaryNumbers: "357-791-135-579",
      highlightedNumbers: "33-58-72-23",
      isPending: false,
    },
    {
      id: "5",
      name: "RAJDHANI DAY",
      primaryNumbers: "4-8-0-2",
      secondaryNumbers: "468-802-246-680",
      highlightedNumbers: "44-69-83-34",
      isPending: false,
    },
    {
      id: "6",
      name: "MILAN DAY",
      primaryNumbers: "5-6-1-3",
      secondaryNumbers: "140-240-560-238",
      highlightedNumbers: "55-67-14-35",
      isPending: false,
    },
    {
      id: "7",
      name: "MILAN NIGHT",
      primaryNumbers: "*_*_*_*",
      secondaryNumbers: "**_**_**_**",
      highlightedNumbers: "********",
      isPending: true,
    },
    {
      id: "8",
      name: "SHRIDEVI",
      primaryNumbers: "3-6-7-0",
      secondaryNumbers: "120-556-890-127",
      highlightedNumbers: "38-62-79-03",
      isPending: false,
    },
    {
      id: "9",
      name: "SHRIDEVI NIGHT",
      primaryNumbers: "*_*_*_*",
      secondaryNumbers: "**_**_**_**",
      highlightedNumbers: "**_**_**_**",
      isPending: true,
    },
    {
      id: "10",
      name: "MAIN BAZAR",
      primaryNumbers: "*_*_*_*",
      secondaryNumbers: "**_**_**_**",
      highlightedNumbers: "**_**_**_**",
      isPending: true,
    },
    {
      id: "11",
      name: "PUNE BAZAR",
      primaryNumbers: "*_*_*_*",
      secondaryNumbers: "**_**_**_**",
      highlightedNumbers: "**_**_**_**",
      isPending: true,
    },
  ];

  return (
    <div className="online-play-page">
      <div className="container">
        {/* Header Banner */}
        <div className="play-header">
          <div className="header-banner">
            <h1>FIX 3 ANK OPEN TO CLOSE FOR ALL MARKETS</h1>
            <div className="separator-line"></div>
            <div className="update-time">
              <p>Game Update Time:</p>
              <p>!! Day 02.00 pm !!</p>
              <p>!! Night 08.00 pm !!</p>
            </div>
            <div className="separator-line"></div>
          </div>
        </div>

        {/* Yellow Separator */}
        <div className="yellow-separator"></div>

        {/* Main Content Area */}
        <div className="play-content">
          {/* Date Display */}
          <div className="date-section">
            <h2>{currentDate}</h2>
          </div>

          {/* Game Sections */}
          <div className="game-sections">
            {gameSections.map((game) => (
              <div key={game.id} className="game-section">
                <h3 className="game-title">{game.name}</h3>
                <div className="game-numbers">
                  <div className="number-line primary">
                    {game.primaryNumbers}
                  </div>
                  <div className="number-line secondary">
                    {game.secondaryNumbers}
                  </div>
                  <div className="number-line highlighted">
                    {game.highlightedNumbers}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rate Section */}
          <div className="rate-section">
            <h3>Matka Play Rate</h3>
            <div className="rate-list">
              <div className="rate-item">SINGLE 10 KA 95</div>
              <div className="rate-item">JODI 10 KA 950</div>
              <div className="rate-item">SINGLE PATTI 10 KA 1400</div>
              <div className="rate-item">DOUBLE PATTI 10 KA 2800</div>
              <div className="rate-item">TRIPPLE PATTI 10 KA 7000</div>
            </div>
          </div>

          {/* Chart Navigation Sections */}
          <div className="chart-navigation">
            <div className="chart-nav-header">Online Matka Play Jodi Charts</div>
            <div className="chart-links">
              <div className="chart-link-item">
                <Link to="/charts/jodi/time-bazar">Time Bazar Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/jodi/kalyan">Kalyan Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/jodi/main-bazar">Main Bazar Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/jodi/sridevi">Sridevi Satta Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/jodi/kalyan-night">Kalyan Night Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/jodi/milan-day">Milan Day Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/jodi/milan-night">Milan Night Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/jodi/madhur-day">Madhur Day Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/jodi/madhur-night">Madhur Night Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/jodi/supreme-day">Supreme Day Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/jodi/supreme-night">Supreme Night Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/jodi/rajdhani-day">Rajdhani Day Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/jodi/rajdhani-night">Rajdhani Night Chart</Link>
              </div>
            </div>
          </div>

          <div className="chart-navigation">
            <div className="chart-nav-header">Online Matka Play Panel Charts</div>
            <div className="chart-links">
              <div className="chart-link-item">
                <Link to="/charts/panel/time-bazar">Time Bazar Panel Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/panel/kalyan">Kalyan Panel Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/panel/main-bazar">Main Bazar Panel Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/panel/sridevi">Sridevi Panel Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/panel/kalyan-night">Kalyan Night Panel Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/panel/milan-day">Milan Day Panel Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/panel/milan-night">Milan Night Panel Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/panel/madhur-day">Madhur Day Panel Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/panel/madhur-night">Madhur Night Panel Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/panel/supreme-day">Supreme Day Panel Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/panel/supreme-night">Supreme Night Panel Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/panel/rajdhani-day">Rajdhani Day Panel Chart</Link>
              </div>
              <div className="chart-link-item">
                <Link to="/charts/panel/rajdhani-night">Rajdhani Night Panel Chart</Link>
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="play-footer">
            <div className="footer-nav">
              <Link to="/" className="nav-link">
                Back
              </Link>
              <Link to="/forum" className="nav-link">
                Guessing Forum
              </Link>
              <Link to="/charts" className="nav-link">
                Matka Chart
              </Link>
              <Link to="/sitemap" className="nav-link">
                Sitemap
              </Link>
            </div>
            <div className="footer-info">
              <p className="website-url">https://sattamatkapune.com/</p>
              <p className="copyright">ALL RIGHTS RESERVED (2012-2025)</p>
              <p className="site-owner">
                SITE OWNER:-{" "}
                <span className="owner-name">Puna matka official website</span>
              </p>
              <p className="site-reference">
                <span className="reference-name">pune matka</span>{" "}
                https://sattamatkapune.com/
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="page-navigation">
          <div className="nav-buttons">
            <Link to="/" className="btn btn-secondary">
              ← Back to Home
            </Link>
            <Link to="/forum" className="btn btn-primary">
              Guessing Forum →
            </Link>
            <Link to="/daily-numbers" className="btn btn-primary">
              Daily Numbers →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlinePlayPage;
