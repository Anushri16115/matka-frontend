import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface ChartData {
  id: string;
  name: string;
  type: "jodi" | "panel";
  numbers: string[];
  lastUpdated: string;
}

const JodiCharts: React.FC = () => {
  const [activeChart, setActiveChart] = useState<string>("kalyan");
  const [chartType, setChartType] = useState<"jodi" | "panel">("jodi");
  const [isLoading, setIsLoading] = useState(false);

  const charts: ChartData[] = [
    {
      id: "kalyan",
      name: "Kalyan Chart",
      type: "jodi",
      numbers: [
        "62",
        "65",
        "17",
        "15",
        "42",
        "45",
        "90",
        "96",
        "32",
        "35",
        "84",
        "85",
      ],
      lastUpdated: "2 hours ago",
    },
    {
      id: "milan",
      name: "Milan Chart",
      type: "jodi",
      numbers: [
        "04",
        "06",
        "52",
        "58",
        "74",
        "72",
        "23",
        "25",
        "01",
        "54",
        "75",
        "63",
      ],
      lastUpdated: "1 hour ago",
    },
    {
      id: "rajdhani",
      name: "Rajdhani Chart",
      type: "jodi",
      numbers: [
        "12",
        "15",
        "67",
        "69",
        "34",
        "37",
        "89",
        "91",
        "56",
        "59",
        "23",
        "25",
      ],
      lastUpdated: "30 minutes ago",
    },
    {
      id: "time-bazar",
      name: "Time Bazar Chart",
      type: "jodi",
      numbers: [
        "78",
        "79",
        "34",
        "36",
        "12",
        "14",
        "56",
        "58",
        "90",
        "92",
        "45",
        "47",
      ],
      lastUpdated: "45 minutes ago",
    },
    {
      id: "main-bazar",
      name: "Main Bazar Chart",
      type: "jodi",
      numbers: [
        "23",
        "26",
        "78",
        "81",
        "45",
        "48",
        "12",
        "15",
        "67",
        "70",
        "34",
        "37",
      ],
      lastUpdated: "1 hour ago",
    },
  ];

  const panelCharts: ChartData[] = [
    {
      id: "kalyan-panel",
      name: "Kalyan Panel",
      type: "panel",
      numbers: [
        "136",
        "479",
        "299",
        "668",
        "677",
        "236",
        "470",
        "119",
        "399",
        "588",
      ],
      lastUpdated: "2 hours ago",
    },
    {
      id: "milan-panel",
      name: "Milan Panel",
      type: "panel",
      numbers: [
        "156",
        "390",
        "228",
        "499",
        "778",
        "256",
        "689",
        "166",
        "599",
        "300",
      ],
      lastUpdated: "1 hour ago",
    },
    {
      id: "rajdhani-panel",
      name: "Rajdhani Panel",
      type: "panel",
      numbers: [
        "158",
        "347",
        "266",
        "699",
        "770",
        "168",
        "456",
        "113",
        "339",
        "799",
      ],
      lastUpdated: "30 minutes ago",
    },
  ];

  const currentChart =
    chartType === "jodi"
      ? charts.find((chart) => chart.id === activeChart)
      : panelCharts.find((chart) => chart.id === activeChart);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const formatNumbers = (numbers: string[]) => {
    const chunks = [];
    for (let i = 0; i < numbers.length; i += 4) {
      chunks.push(numbers.slice(i, i + 4));
    }
    return chunks;
  };

  return (
    <div className="jodi-charts-widget">
      <div className="charts-header">
        <h2>Online Matka Play Charts</h2>
        <div className="chart-controls">
          <div className="chart-type-toggle">
            <button
              className={`toggle-btn ${chartType === "jodi" ? "active" : ""}`}
              onClick={() => setChartType("jodi")}
            >
              Jodi Charts
            </button>
            <button
              className={`toggle-btn ${chartType === "panel" ? "active" : ""}`}
              onClick={() => setChartType("panel")}
            >
              Panel Charts
            </button>
          </div>
          <button
            className="refresh-chart-btn"
            onClick={handleRefresh}
            disabled={isLoading}
          >
            {isLoading ? "🔄" : "🔄"} Refresh
          </button>
        </div>
      </div>

      <div className="charts-navigation">
        <div className="chart-tabs">
          {(chartType === "jodi" ? charts : panelCharts).map((chart) => (
            <button
              key={chart.id}
              className={`chart-tab ${
                activeChart === chart.id ? "active" : ""
              }`}
              onClick={() => setActiveChart(chart.id)}
            >
              {chart.name}
            </button>
          ))}
        </div>
      </div>

      <div className="chart-display">
        {currentChart && (
          <div className="current-chart">
            <div className="chart-info">
              <h3>{currentChart.name}</h3>
              <span className="last-updated">
                Last updated: {currentChart.lastUpdated}
              </span>
            </div>

            <div className="numbers-grid">
              {formatNumbers(currentChart.numbers).map((row, rowIndex) => (
                <div key={rowIndex} className="numbers-row">
                  {row.map((number, index) => (
                    <div key={index} className="number-cell">
                      {number}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="chart-actions">
              <Link to={`/chart/${currentChart.id}`} className="view-full-btn">
                View Full Chart
              </Link>
              <Link to="/online-play" className="play-now-btn">
                Play Now
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="charts-footer">
        <div className="quick-links">
          <Link to="/online-play" className="quick-link">
            All Charts
          </Link>
          <Link to="/results" className="quick-link">
            Live Results
          </Link>
          <Link to="/forum" className="quick-link">
            Guessing Forum
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JodiCharts;
