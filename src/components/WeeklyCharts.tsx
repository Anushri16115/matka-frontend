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
        <div className="dpboss-style-section">
          <div className="dpboss-header">WEEKLY CHARTS</div>
          <div className="dpboss-content">
            {weeklyCharts.map((chart, index) => (
              <React.Fragment key={index}>
                <Link to={chart.path} className="dpboss-list-item">
                  {chart.title}
                </Link>
                {index < weeklyCharts.length - 1 && (
                  <div className="dpboss-separator"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyCharts;
