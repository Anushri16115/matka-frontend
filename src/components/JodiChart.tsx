import React, { useState } from "react";
import { Link } from "react-router-dom";

// JodiData interface removed as it's not used

interface JodiChartProps {
  gameName: string;
  gameId: string;
  // category parameter removed as it's not used
}

const JodiChart: React.FC<JodiChartProps> = ({
  gameName,
  gameId,
  // category parameter removed as it's not used
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState<
    "week" | "month" | "year"
  >("week");
  const [isExpanded, setIsExpanded] = useState(false);

  // Mock jodi data organized by days of the week
  const weeklyJodiData = {
    MON: [
      "69",
      "91",
      "01",
      "31",
      "91",
      "73",
      "33",
      "63",
      "05",
      "67",
      "70",
      "59",
      "40",
      "12",
      "21",
      "44",
      "00",
      "40",
      "26",
      "87",
      "59",
      "08",
    ],
    TUE: [
      "95",
      "07",
      "20",
      "17",
      "02",
      "**",
      "95",
      "25",
      "52",
      "03",
      "09",
      "26",
      "95",
      "06",
      "16",
      "64",
      "34",
      "62",
      "69",
      "53",
      "98",
      "36",
    ],
    WED: [
      "50",
      "73",
      "68",
      "87",
      "14",
      "26",
      "58",
      "90",
      "30",
      "85",
      "22",
      "10",
      "97",
      "55",
      "83",
      "13",
      "27",
      "17",
      "00",
      "80",
      "77",
      "12",
    ],
    THU: [
      "11",
      "05",
      "41",
      "30",
      "90",
      "49",
      "19",
      "84",
      "97",
      "67",
      "49",
      "08",
      "79",
      "91",
      "77",
      "03",
      "02",
      "02",
      "64",
      "04",
      "82",
      "56",
    ],
    FRI: [
      "58",
      "24",
      "17",
      "53",
      "67",
      "50",
      "97",
      "83",
      "28",
      "83",
      "67",
      "70",
      "28",
      "44",
      "42",
      "61",
      "39",
      "35",
      "14",
      "46",
      "33",
      "40",
    ],
    SAT: [
      "22",
      "18",
      "44",
      "09",
      "01",
      "48",
      "82",
      "42",
      "43",
      "18",
      "33",
      "41",
      "69",
      "52",
      "80",
      "12",
      "64",
      "17",
      "02",
      "13",
      "92",
      "92",
    ],
  };

  // Highlighted numbers (in red like in the reference)
  const highlightedNumbers = [
    "50",
    "22",
    "11",
    "05",
    "49",
    "77",
    "03",
    "50",
    "83",
    "67",
    "44",
    "42",
    "61",
    "33",
    "22",
    "44",
    "33",
  ];

  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const maxRows = Math.max(
    ...days.map(
      (day) => weeklyJodiData[day as keyof typeof weeklyJodiData].length
    )
  );

  return (
    <div className="jodi-chart-card">
      <div className="jodi-chart-header">
        <h4>{gameName} Jodi Chart</h4>
        <div className="jodi-chart-controls">
          <select
            value={selectedPeriod}
            onChange={(e) =>
              setSelectedPeriod(e.target.value as "week" | "month" | "year")
            }
            className="period-select"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
          <button
            className="expand-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "−" : "+"}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="jodi-chart-content">
          {/* Weekly Jodi Chart Table */}
          <div className="weekly-jodi-table-container">
            <table className="weekly-jodi-table">
              <thead>
                <tr>
                  {days.map((day) => (
                    <th key={day}>{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: maxRows }, (_, rowIndex) => (
                  <tr key={rowIndex}>
                    {days.map((day) => {
                      const jodiNumber =
                        weeklyJodiData[day as keyof typeof weeklyJodiData][
                          rowIndex
                        ];
                      const isHighlighted =
                        highlightedNumbers.includes(jodiNumber);
                      return (
                        <td
                          key={day}
                          className={isHighlighted ? "highlighted" : ""}
                        >
                          {jodiNumber || ""}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="jodi-chart-actions">
            <Link
              to={`/charts/jodi/${gameId}`}
              className="btn btn-primary btn-sm"
            >
              View Full Chart
            </Link>
            <Link
              to={`/charts/weekly-jodi?game=${gameId}`}
              className="btn btn-secondary btn-sm"
            >
              Weekly Analysis
            </Link>
            <button className="btn btn-outline btn-sm">📊 Predict Next</button>
          </div>
        </div>
      )}

      {/* Collapsed View */}
      {!isExpanded && (
        <div className="jodi-chart-preview">
          <div className="preview-stats">
            <span className="preview-stat">
              <strong>Last Result:</strong> {weeklyJodiData.SAT[0] || "N/A"}
            </span>
            <span className="preview-stat">
              <strong>Today:</strong>{" "}
              {new Date()
                .toLocaleDateString("en-US", { weekday: "short" })
                .toUpperCase()}
            </span>
            <span className="preview-stat">
              <strong>Total Entries:</strong> {maxRows}
            </span>
          </div>
          <div className="preview-actions">
            <Link
              to={`/charts/jodi/${gameId}`}
              className="btn btn-primary btn-sm"
            >
              View Chart
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default JodiChart;
