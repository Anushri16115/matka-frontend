// src/components/GameResultsGrid.tsx
import React from "react";
import { Link } from "react-router-dom";

interface GameResult {
  id: number;
  timeCategory: "Morning" | "Day" | "Night";
  name: string;
  result: string;
  timing: string;
  openTime?: string;
  closeTime?: string;
}

const results: GameResult[] = [
  {
    id: 1,
    timeCategory: "Morning",
    name: "RAJA-RANI MORNING",
    result: "157-30-370",
    timing: "09:40 - 10:40",
    openTime: "09:40 AM",
    closeTime: "10:40 AM",
  },
  {
    id: 2,
    timeCategory: "Day",
    name: "Milan Day",
    result: "235-01-358",
    timing: "2:30 PM",
    openTime: "2:30 PM",
    closeTime: "3:30 PM",
  },
  {
    id: 3,
    timeCategory: "Night",
    name: "Kalyan Night",
    result: "460-06-230",
    timing: "10:45 PM",
    openTime: "10:45 PM",
    closeTime: "11:45 PM",
  },
  {
    id: 4,
    timeCategory: "Night",
    name: "Rajdhani Night",
    result: "379-19-468",
    timing: "9:30 PM",
    openTime: "9:30 PM",
    closeTime: "10:30 PM",
  },

  // Newly added from SATTA MATKA file
  {
    id: 5,
    timeCategory: "Morning",
    name: "Time Bazar",
    result: "123-45-678",
    timing: "10:00 AM",
    openTime: "10:00 AM",
    closeTime: "11:00 AM",
  },
  {
    id: 6,
    timeCategory: "Day",
    name: "Kalyan Day",
    result: "456-78-901",
    timing: "1:00 PM",
    openTime: "1:00 PM",
    closeTime: "2:00 PM",
  },
  {
    id: 7,
    timeCategory: "Night",
    name: "Main Ratan Night",
    result: "789-12-345",
    timing: "9:15 PM",
    openTime: "9:15 PM",
    closeTime: "10:15 PM",
  },
  {
    id: 8,
    timeCategory: "Night",
    name: "Mumbai Bazar",
    result: "640-04-852",
    timing: "11:30 PM",
    openTime: "11:30 PM",
    closeTime: "12:30 AM",
  },
  {
    id: 9,
    timeCategory: "Morning",
    name: "Madhur Day",
    result: "120-45-678",
    timing: "10:30 AM",
    openTime: "10:30 AM",
    closeTime: "11:30 AM",
  },
  {
    id: 10,
    timeCategory: "Day",
    name: "Milan Bazar",
    result: "234-56-789",
    timing: "3:00 PM",
    openTime: "3:00 PM",
    closeTime: "4:00 PM",
  },
  {
    id: 11,
    timeCategory: "Night",
    name: "Sridevi Night",
    result: "345-67-890",
    timing: "11:00 PM",
    openTime: "11:00 PM",
    closeTime: "12:00 AM",
  },
];

const GameResultsGrid: React.FC = () => {
  const timeCategories = ["Morning", "Day", "Night"];

  return (
    <section className="game-results-grid">
      <div className="container">
        <div className="live-matka-result-section">
          <div className="live-update-header">☔ LIVE MATKA RESULT ☔</div>

          {timeCategories.map((category) => (
            <div key={category} className="results-group">
              <h3>{category}</h3>
              <div className="dpboss-results-list">
                {results
                  .filter((r) => r.timeCategory === category)
                  .map((r, index, filteredResults) => (
                    <React.Fragment key={r.id}>
                      <div className="dpboss-result-row">
                        <div className="dpboss-result-content">
                          <h4>{r.name}</h4>
                          <p className="result">{r.result}</p>
                          <div className="dpboss-result-times">
                            <span className="open-time">{r.openTime}</span>
                            <span className="close-time">{r.closeTime}</span>
                          </div>
                        </div>

                        <div className="dpboss-result-buttons">
                          <Link
                            to={`/charts/jodi/${r.id}`}
                            className="dpboss-button jodi-button"
                          >
                            Jodi
                          </Link>
                          <Link
                            to={`/charts/panel/${r.id}`}
                            className="dpboss-button panel-button"
                          >
                            Panel
                          </Link>
                        </div>
                      </div>
                      {index < filteredResults.length - 1 && (
                        <div className="dpboss-result-separator"></div>
                      )}
                    </React.Fragment>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameResultsGrid;
