import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface GameResult {
  id: string;
  gameName: string;
  result: string;
  time: string;
  status: "live" | "completed";
  category: string;
}

const LiveResultsPage: React.FC = () => {
  const [results, setResults] = useState<GameResult[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<
    "all" | "live" | "completed"
  >("all");
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "morning" | "day" | "night"
  >("all");

  useEffect(() => {
    // Simulate live data updates
    const interval = setInterval(() => {
      // This would be replaced with actual API calls
      const mockResults: GameResult[] = [
        // Morning Games
        {
          id: "1",
          gameName: "Kalyan Morning",
          result: "123",
          time: new Date().toLocaleTimeString(),
          status: "completed",
          category: "morning",
        },
        {
          id: "2",
          gameName: "Milan Morning",
          result: "456",
          time: new Date().toLocaleTimeString(),
          status: "completed",
          category: "morning",
        },
        {
          id: "3",
          gameName: "Rajdhani Morning",
          result: "789",
          time: new Date().toLocaleTimeString(),
          status: "live",
          category: "morning",
        },
        // Day Games
        {
          id: "4",
          gameName: "Kalyan Day",
          result: "234",
          time: new Date().toLocaleTimeString(),
          status: "live",
          category: "day",
        },
        {
          id: "5",
          gameName: "Milan Day",
          result: "567",
          time: new Date().toLocaleTimeString(),
          status: "completed",
          category: "day",
        },
        {
          id: "6",
          gameName: "Rajdhani Day",
          result: "890",
          time: new Date().toLocaleTimeString(),
          status: "live",
          category: "day",
        },
        // Night Games
        {
          id: "7",
          gameName: "Kalyan Night",
          result: "345",
          time: new Date().toLocaleTimeString(),
          status: "live",
          category: "night",
        },
        {
          id: "8",
          gameName: "Milan Night",
          result: "678",
          time: new Date().toLocaleTimeString(),
          status: "live",
          category: "night",
        },
        {
          id: "9",
          gameName: "Rajdhani Night",
          result: "901",
          time: new Date().toLocaleTimeString(),
          status: "live",
          category: "night",
        },
        {
          id: "10",
          gameName: "Madhur Night",
          result: "234",
          time: new Date().toLocaleTimeString(),
          status: "completed",
          category: "night",
        },
      ];
      setResults(mockResults);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const filteredResults = results.filter((result) => {
    const statusMatch =
      selectedStatus === "all" || result.status === selectedStatus;
    const categoryMatch =
      selectedCategory === "all" || result.category === selectedCategory;
    return statusMatch && categoryMatch;
  });

  return (
    <div className="live-results-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Live Results</h1>
          <p className="page-subtitle">Real-time updates of all game results</p>
        </div>

        {/* Filters */}
        <div className="filters-section">
          {/* Status Filter */}
          <div className="filter-group">
            <h4>Status:</h4>
            <div className="status-filter">
              <button
                className={`status-btn ${
                  selectedStatus === "all" ? "active" : ""
                }`}
                onClick={() => setSelectedStatus("all")}
              >
                All Results
              </button>
              <button
                className={`status-btn ${
                  selectedStatus === "live" ? "active" : ""
                }`}
                onClick={() => setSelectedStatus("live")}
              >
                🔴 Live
              </button>
              <button
                className={`status-btn ${
                  selectedStatus === "completed" ? "active" : ""
                }`}
                onClick={() => setSelectedStatus("completed")}
              >
                ✅ Completed
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="filter-group">
            <h4>Category:</h4>
            <div className="category-filter">
              <button
                className={`category-btn ${
                  selectedCategory === "all" ? "active" : ""
                }`}
                onClick={() => setSelectedCategory("all")}
              >
                All Categories
              </button>
              <button
                className={`category-btn ${
                  selectedCategory === "morning" ? "active" : ""
                }`}
                onClick={() => setSelectedCategory("morning")}
              >
                🌅 Morning
              </button>
              <button
                className={`category-btn ${
                  selectedCategory === "day" ? "active" : ""
                }`}
                onClick={() => setSelectedCategory("day")}
              >
                ☀️ Day
              </button>
              <button
                className={`category-btn ${
                  selectedCategory === "night" ? "active" : ""
                }`}
                onClick={() => setSelectedCategory("night")}
              >
                🌙 Night
              </button>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="results-grid">
          {filteredResults.length > 0 ? (
            filteredResults.map((result) => (
              <div key={result.id} className={`result-card ${result.status}`}>
                <div className="result-header">
                  <h3>{result.gameName}</h3>
                  <span className={`status ${result.status}`}>
                    {result.status === "live" ? "🔴 LIVE" : "✅ COMPLETED"}
                  </span>
                </div>
                <div className="result-content">
                  <div className="result-number">{result.result}</div>
                  <div className="result-time">{result.time}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <h3>No results found</h3>
              <p>Try selecting a different status filter</p>
            </div>
          )}
        </div>

        {/* Navigation Section */}
        <div className="page-navigation">
          <div className="nav-buttons">
            <Link to="/" className="btn btn-secondary">
              ← Back to Home
            </Link>
            <Link to="/games" className="btn btn-primary">
              Play Games
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

export default LiveResultsPage;
