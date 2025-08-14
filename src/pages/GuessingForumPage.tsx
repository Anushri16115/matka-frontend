import React, { useState } from "react";
import { Link } from "react-router-dom";

interface ForumPost {
  id: string;
  username: string;
  timestamp: string;
  content: string;
  isOnline: boolean;
  isTopGuesser: boolean;
}

const GuessingForumPage: React.FC = () => {
  const [newPost, setNewPost] = useState("");

  // Mock forum posts data
  const forumPosts: ForumPost[] = [
    {
      id: "1",
      username: "JAYPRAKASH ATAMARAM BHUTTAPALLE",
      timestamp: "14 08 25 12:20 AM",
      content: "Jayprakash atamaram bhuttapalle :- ☎️ 😊 Thank You",
      isOnline: true,
      isTopGuesser: true,
    },
    {
      id: "2",
      username: "SELA",
      timestamp: "14 08 25 12:20 AM",
      content: "Milan nigh\n3\n3\n31\nSELA :- ☎️ 😊 Thank You",
      isOnline: true,
      isTopGuesser: true,
    },
    {
      id: "3",
      username: "SELA",
      timestamp: "14 08 25 12:20 AM",
      content: "Kalyan night\n0\n0\n0\n07\nSELA :- ☎️ 😊 Thank You",
      isOnline: true,
      isTopGuesser: true,
    },
    {
      id: "4",
      username: "SELA",
      timestamp: "14 08 25 12:20 AM",
      content:
        "Admin sir\naapka contact number kya he?\nSELA :- ☎️ 😊 Thank You",
      isOnline: true,
      isTopGuesser: true,
    },
    {
      id: "5",
      username: "MALANSHA",
      timestamp: "14 08 25 12:20 AM",
      content: "27 jodi\n2 open\nPune day\nMalansha :- ☎️ 😊 Thank You",
      isOnline: true,
      isTopGuesser: true,
    },
    {
      id: "6",
      username: "TANWAR",
      timestamp: "14 08 25 12:20 AM",
      content: "MADHUR COLOS\n2\nTanwar :- ☎️ 😊 Thank You",
      isOnline: true,
      isTopGuesser: true,
    },
  ];

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.trim()) {
      // In a real app, this would submit to backend
      console.log("New post:", newPost);
      setNewPost("");
    }
  };

  return (
    <div className="forum-page">
      <div className="container">
        {/* Header Banner */}
        <div className="forum-header">
          <div className="header-banner">
            <h1>PUNE MATKA</h1>
            <h2>Matka Guessing</h2>
          </div>

          <div className="welcome-message">
            <p>
              Welcome Back To India's Best Matka Guessing Forum, Get Kalyan
              Guessing Free With Our Satta Matka Guessing Experts. Also Get Help
              In Milan Day, Milan Night, Rajdhani day/Night And Other Matka
              Games Related To Madhur Matka and Indian Matka In Satta Matka
              Guessing 143 Forum.
            </p>
          </div>

          <div className="action-buttons">
            <Link to="/" className="action-btn">
              GO TO HOME
            </Link>
            <Link to="/forum" className="action-btn">
              FREE FORUM
              <br />
              CLICK HERE
            </Link>
          </div>
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

        {/* Post Form */}
        <div className="post-form-section">
          <div className="form-header">
            <label>Text:</label>
            <div className="formatting-toolbar">
              <button className="format-btn">B</button>
              <button className="format-btn">I</button>
              <button className="format-btn">U</button>
              <button className="format-btn">📎</button>
              <button className="format-btn">S</button>
              <button className="format-btn">X²</button>
              <button className="format-btn">X₂</button>
            </div>
          </div>

          <form onSubmit={handleSubmitPost} className="post-form">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="Write your guessing message here."
              className="post-textarea"
              rows={6}
            />
            <button type="submit" className="submit-btn">
              Submit Post
            </button>
          </form>
        </div>

        {/* Forum Posts */}
        <div className="forum-posts">
          {forumPosts.map((post) => (
            <div key={post.id} className="forum-post">
              {/* Post Header */}
              <div className="post-header">
                <div className="user-info">
                  <span className="username">{post.username}</span>
                  <span className="timestamp">{post.timestamp}</span>
                </div>
                <div className="user-status">
                  <span className="top-guesser">Top Guesser</span>
                  <span className="online-status">[Online]</span>
                </div>
              </div>

              {/* Post Content */}
              <div className="post-content">
                <div className="content-box">
                  <span className="asterisk">*</span>
                  <div className="post-text">
                    {post.content.split("\n").map((line, index) => (
                      <div key={index} className="content-line">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="page-navigation">
          <div className="nav-buttons">
            <Link to="/" className="btn btn-secondary">
              ← Back to Home
            </Link>
            <Link to="/online-play" className="btn btn-primary">
              Play Online →
            </Link>
            <Link to="/daily-numbers" className="btn btn-primary">
              Daily Numbers →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuessingForumPage;
