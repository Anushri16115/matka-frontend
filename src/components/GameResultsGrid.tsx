// src/components/GameResultsGrid.tsx
import React from "react";
import { Link } from "react-router-dom";

interface GameResult {
  id: number;
  timeCategory: "Morning" | "Day" | "Night";
  name: string;
  result: string;
  timing: string;
}

const results: GameResult[] = [
  {
    id: 1,
    timeCategory: "Morning",
    name: "RAJA-RANI MORNING",
    result: "157-30-370",
    timing: "09:40 - 10:40",
  },
  {
    id: 2,
    timeCategory: "Day",
    name: "Milan Day",
    result: "235-01-358",
    timing: "2:30 PM",
  },
  {
    id: 3,
    timeCategory: "Night",
    name: "Kalyan Night",
    result: "460-06-230",
    timing: "10:45 PM",
  },
  {
    id: 4,
    timeCategory: "Night",
    name: "Rajdhani Night",
    result: "379-19-468",
    timing: "9:30 PM",
  },

  // Newly added from SATTA MATKA file
  {
    id: 5,
    timeCategory: "Morning",
    name: "Time Bazar",
    result: "123-45-678",
    timing: "10:00 AM",
  },
  {
    id: 6,
    timeCategory: "Day",
    name: "Kalyan Day",
    result: "456-78-901",
    timing: "1:00 PM",
  },
  {
    id: 7,
    timeCategory: "Night",
    name: "Main Ratan Night",
    result: "789-12-345",
    timing: "9:15 PM",
  },
  {
    id: 8,
    timeCategory: "Night",
    name: "Mumbai Bazar",
    result: "640-04-852",
    timing: "11:30 PM",
  },
  {
    id: 9,
    timeCategory: "Morning",
    name: "Madhur Day",
    result: "120-45-678",
    timing: "10:30 AM",
  },
  {
    id: 10,
    timeCategory: "Day",
    name: "Milan Bazar",
    result: "234-56-789",
    timing: "3:00 PM",
  },
  {
    id: 11,
    timeCategory: "Night",
    name: "Sridevi Night",
    result: "345-67-890",
    timing: "11:00 PM",
  },
];

const GameResultsGrid: React.FC = () => {
  const timeCategories = ["Morning", "Day", "Night"];

  return (
    <section className="game-results-grid">
      <div className="container">
        <h2>❰❰❰ 📶 LIVE MATKA RESULT ❱❱❱</h2>

        {timeCategories.map((category) => (
          <div key={category} className="results-group">
            <h3>{category}</h3>
            <div className="grid">
              {results
                .filter((r) => r.timeCategory === category)
                .map((r) => (
                  <div key={r.id} className="result-card">
                    <h4>{r.name}</h4>
                    <p className="result">{r.result}</p>
                    <p className="timing">{r.timing}</p>

                    <div className="result-links">
                      <Link to={`/charts/jodi/${r.id}`} className="link">
                        📊 Jodi Chart
                      </Link>
                      <Link
                        to={`/charts/panel/${r.id}`}
                        className="link panel-link"
                      >
                        📈 Panel Chart
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameResultsGrid;
