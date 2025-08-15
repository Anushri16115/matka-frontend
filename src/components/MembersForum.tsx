// src/components/MembersForum.tsx
import React from "react";
import { Link } from "react-router-dom";

const forumLinks = [
  { label: "Guessing Forum", path: "/forum" },
  { label: "Play Online", path: "/online-play" },
  { label: "Daily Numbers", path: "/daily-numbers" },
  { label: "Weekly Jodi / Panna", path: "/weekly-jodi-panna" },
  { label: "Free Guessing", path: "/free-guessing" },
  { label: "Charts", path: "/charts" },
  {
    label: "Satta 220 Patti Favourite Panna Chart",
    path: "/satta-220-patti-chart",
  },
];

const MembersForum: React.FC = () => {
  return (
    <section className="members-forum">
      <div className="container">
        <div className="dpboss-style-section">
          <div className="dpboss-header">MEMBERS FORUM</div>
          <div className="dpboss-content">
            {forumLinks.map((item, index) => (
              <React.Fragment key={index}>
                <Link to={item.path} className="dpboss-list-item">
                  {item.label}
                </Link>
                {index < forumLinks.length - 1 && (
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

export default MembersForum;
