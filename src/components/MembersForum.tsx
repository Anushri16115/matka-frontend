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
  }, // ✅ New Card
];

const MembersForum: React.FC = () => {
  return (
    <section className="members-forum">
      <div className="container">
        <h2>👥 Members Forum</h2>
        <div className="forum-links-grid">
          {forumLinks.map((item, index) => (
            <Link key={index} to={item.path} className="forum-card">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersForum;
