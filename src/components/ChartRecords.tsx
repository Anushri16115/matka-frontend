// src/components/ChartRecords.tsx
import React from "react";
import { Link } from "react-router-dom";

const records = [
  { title: "Satta Matka Jodi Chart Records", path: "/charts/jodi-records" },
  { title: "Satta Matka Panel Chart Records", path: "/charts/panel-records" },
  { title: "Other Matka Bazar Records", path: "/charts/bazar-records" },
];

const ChartRecords: React.FC = () => {
  return (
    <section className="chart-records">
      <div className="container">
        <h2>📚 Chart Records</h2>
        <div className="record-list">
          {records.map((item, index) => (
            <Link to={item.path} key={index} className="record-card">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChartRecords;
