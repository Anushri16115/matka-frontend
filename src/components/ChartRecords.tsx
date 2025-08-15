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
        <div className="dpboss-style-section">
          <div className="dpboss-header">CHART RECORDS</div>
          <div className="dpboss-content">
            {records.map((item, index) => (
              <React.Fragment key={index}>
                <Link to={item.path} className="dpboss-list-item">
                  {item.title}
                </Link>
                {index < records.length - 1 && (
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

export default ChartRecords;
