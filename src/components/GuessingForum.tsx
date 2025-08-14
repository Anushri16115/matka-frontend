import React, { useState } from "react";
import { Link } from "react-router-dom";

interface ForumPost {
  id: string;
  user: string;
  message: string;
  timestamp: string;
  isTopGuesser: boolean;
}

const GuessingForum: React.FC = () => {
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState<ForumPost[]>([
    {
      id: "1",
      user: "RUDRA PENAL KING",
      message: "Kalyan Night: 123, 456, 789 - Guaranteed Fix 💯✅",
      timestamp: "11 Aug 08:50:51 pm",
      isTopGuesser: true,
    },
    {
      id: "2",
      user: "Matka Expert",
      message: "Milan Day: 234, 567, 890 - Office Se Game Milega",
      timestamp: "11 Aug 08:45:30 pm",
      isTopGuesser: false,
    },
    {
      id: "3",
      user: "Lucky Player",
      message: "Rajdhani Night: 345, 678, 901 - Single Open Jodi",
      timestamp: "11 Aug 08:40:15 pm",
      isTopGuesser: false,
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newPost: ForumPost = {
        id: Date.now().toString(),
        user: "You",
        message: message.trim(),
        timestamp: new Date().toLocaleString("en-IN", {
          day: "2-digit",
          month: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
        isTopGuesser: false,
      };
      setPosts([newPost, ...posts]);
      setMessage("");
    }
  };

  const handleRefresh = () => {
    // Simulate refreshing the forum
    window.location.reload();
  };

  return (
    <div className="guessing-forum">
      <div className="container">
        {/* Header Banner */}
        <div className="forum-header">
          <div className="forum-title">
            <h1>Guessing Forum</h1>
            <h2>Matka Guessing</h2>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="welcome-section">
          <p>
            Welcome Back To India's Best Matka Guessing Forum, Get Kalyan
            Guessing Free With Our Satta Matka Guessing Experts. Also Get Help
            In Milan Day, Milan Night, Rajdhani day/Night And Other Matka Games
            Related To Madhur Matka and Indian Matka In Satta Matka Guessing 143
            Forum.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="forum-nav-buttons">
          <Link to="/" className="nav-btn">
            GO TO HOME
          </Link>
          <Link to="/date-fix" className="nav-btn">
            100% DATE FIX ANK
          </Link>
          <Link to="/free-forum" className="nav-btn">
            FREE FORUM CLICK HERE
          </Link>
        </div>

        {/* Forum Rules */}
        <div className="forum-rules">
          <h3>Forum Rules:</h3>
          <ol>
            <li>DO NOT USE BAD WORDS OR ABUSIVE LANGUAGE IN FORUM.</li>
            <li>DONT POST YOUR PHONE NUMBERS OR SITE LINKS.</li>
            <li>DONT POST GUESSING AT RESULT TIME</li>
            <li>DONT POST WRONG RESULT</li>
            <li>
              IF YOU DONT FOLLOW SITE RULES THAN, YOUR *IP* WILL BE BLOCKED
              PERMENTLY.
            </li>
            <li>
              NOTICE :- GAME PASS HONE PAR GUESSER KO WISH KARE THIS IS LAST
              WARNING TO ALL MEMBERS
            </li>
          </ol>
        </div>

        {/* Game Information */}
        <div className="game-info-section">
          <div className="game-info-left">
            <div className="game-item">
              <span className="bullet">●</span>
              <span className="game-name">KALYAN NIGHT</span>
            </div>
            <div className="game-item">
              <span className="bullet">●</span>
              <span className="game-name">SRIDEVI NIGHT</span>
            </div>
            <div className="game-item">
              <span className="bullet">●</span>
              <span className="game-name">RAJDHANI NIGHT</span>
            </div>
            <div className="game-types">
              <span>❤️ Single Open</span>
              <span>❤️ Single Jodi</span>
            </div>
          </div>

          <div className="game-info-center">
            <div className="date-display">
              <div className="icons-row">
                <span className="icon">⭐</span>
                <span className="icon">👍</span>
                <span className="icon">⭐</span>
                <span className="icon">👍</span>
                <span className="icon">⭐</span>
                <span className="icon">👍</span>
              </div>
              <div className="date">DATE: 11_08_2025</div>
              <div className="squares">⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛</div>
              <div className="motto">Ek Mauka Badlega Aapki Zindgi</div>
              <div className="guarantee">
                Guaranty Fix 💯 ✅ Office Se Game Milega
              </div>
              <div className="wave-pattern">〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</div>
            </div>
          </div>

          <div className="game-info-right">
            <div className="game-item">
              <span className="bullet">●</span>
              <span className="game-name">MILAN NIGHT</span>
            </div>
            <div className="game-item">
              <span className="bullet">●</span>
              <span className="game-name">MAIN BAZAR</span>
            </div>
            <div className="game-item">
              <span className="bullet">●</span>
              <span className="game-name">MADHUR NIGHT</span>
            </div>
          </div>
        </div>

        {/* Text Input Section */}
        <div className="text-input-section">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="forum-message">Text:</label>
              <textarea
                id="forum-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your guessing message here..."
                rows={4}
                maxLength={500}
              />
            </div>
            <div className="button-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleRefresh}
              >
                Refresh Forum
              </button>
            </div>
          </form>
        </div>

        {/* Forum Posts */}
        <div className="forum-posts">
          <h3>Recent Posts:</h3>
          {posts.map((post) => (
            <div
              key={post.id}
              className={`forum-post ${post.isTopGuesser ? "top-guesser" : ""}`}
            >
              <div className="post-header">
                <span className="user-name">{post.user}</span>
                {post.isTopGuesser && (
                  <span className="top-badge">👑 Top Guesser</span>
                )}
                <span className="timestamp">{post.timestamp}</span>
              </div>
              <div className="post-message">{post.message}</div>
            </div>
          ))}
        </div>

        {/* Footer Status */}
        <div className="forum-footer">
          <div className="footer-left">
            <span className="top-user">RUDRA PENAL KING</span>
          </div>
          <div className="footer-right">
            <span className="status">Top Guesser [Online]</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuessingForum;
