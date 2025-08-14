import React, { useState } from "react";
import { Link } from "react-router-dom";
import GameCard from "../components/GameCard";
import { games, categories } from "../data/dummyData";

const Games: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handlePlayGame = (gameId: string) => {
    console.log("Playing game:", gameId);
    // Here you would navigate to the game page
  };

  const filteredGames = games
    .filter(
      (game) => selectedCategory === "all" || game.category === selectedCategory
    )
    .filter(
      (game) =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="games-page">
      <div className="container games-container">
        <div className="page-header">
          <h1 className="page-title">All Games</h1>
          <p className="page-subtitle">
            Choose from our wide variety of matka games
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="filter-section">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${
                  selectedCategory === category.id ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        <div className="games-grid">
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <GameCard
                key={game.id}
                id={game.id}
                name={game.name}
                description={game.description}
                minBet={game.minBet}
                maxBet={game.maxBet}
                timing={game.timing}
                isActive={game.isActive}
                onPlay={handlePlayGame}
              />
            ))
          ) : (
            <div className="no-results">
              <h3>No games found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Navigation Section */}
        <div className="page-navigation">
          <div className="nav-buttons">
            <Link to="/" className="btn btn-secondary">
              ← Back to Home
            </Link>
            <Link to="/results" className="btn btn-primary">
              View Live Results
            </Link>
            <Link to="/about" className="btn btn-secondary">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
