// src/components/WeeklyCharts.tsx
import React from "react";
import { Link } from "react-router-dom";

const weeklyCharts = [
  { title: "Weekly Panel Chart", path: "/charts/weekly-panel" },
  { title: "Weekly Patti Chart", path: "/charts/weekly-patti" },
  { title: "Weekly Jodi Chart", path: "/charts/weekly-jodi" },
  { title: "Open-To-Close Numbers", path: "/charts/open-to-close" },
];

const WeeklyCharts: React.FC = () => {
  return (
    <section className="weekly-charts">
      <div className="container">
        <h2>📅 Weekly Charts</h2>
        <div className="charts-grid">
          {weeklyCharts.map((chart, index) => (
            <Link key={index} to={chart.path} className="chart-box">
              {chart.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklyCharts;
