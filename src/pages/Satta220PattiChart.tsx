import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Patti220Data {
  id: string;
  patti: string;
  frequency: number;
  lastAppeared: string;
  nextPrediction: string;
  confidence: number;
  status: "hot" | "warm" | "cold";
}

const Satta220PattiChart: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [sortBy, setSortBy] = useState("frequency");

  // Mock data for 220 patti chart
  const patti220Data: Patti220Data[] = [
    {
      id: "1",
      patti: "123",
      frequency: 45,
      lastAppeared: "2024-01-14",
      nextPrediction: "2024-01-16",
      confidence: 85,
      status: "hot",
    },
    {
      id: "2",
      patti: "234",
      frequency: 38,
      lastAppeared: "2024-01-13",
      nextPrediction: "2024-01-17",
      confidence: 78,
      status: "hot",
    },
    {
      id: "3",
      patti: "345",
      frequency: 32,
      lastAppeared: "2024-01-12",
      nextPrediction: "2024-01-18",
      confidence: 72,
      status: "warm",
    },
    {
      id: "4",
      patti: "456",
      frequency: 28,
      lastAppeared: "2024-01-11",
      nextPrediction: "2024-01-19",
      confidence: 68,
      status: "warm",
    },
    {
      id: "5",
      patti: "567",
      frequency: 25,
      lastAppeared: "2024-01-10",
      nextPrediction: "2024-01-20",
      confidence: 65,
      status: "warm",
    },
    {
      id: "6",
      patti: "678",
      frequency: 22,
      lastAppeared: "2024-01-09",
      nextPrediction: "2024-01-21",
      confidence: 62,
      status: "cold",
    },
    {
      id: "7",
      patti: "789",
      frequency: 20,
      lastAppeared: "2024-01-08",
      nextPrediction: "2024-01-22",
      confidence: 58,
      status: "cold",
    },
    {
      id: "8",
      patti: "890",
      frequency: 18,
      lastAppeared: "2024-01-07",
      nextPrediction: "2024-01-23",
      confidence: 55,
      status: "cold",
    },
  ];

  const filteredData = patti220Data
    .filter((item) => {
      if (selectedFilter === "all") return true;
      return item.status === selectedFilter;
    })
    .sort((a, b) => {
      if (sortBy === "frequency") return b.frequency - a.frequency;
      if (sortBy === "confidence") return b.confidence - a.confidence;
      return (
        new Date(a.lastAppeared).getTime() - new Date(b.lastAppeared).getTime()
      );
    });

  return (
    <div className="satta-220-patti-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">🎲 Satta 220 Patti Chart</h1>
          <p className="page-subtitle">
            Complete 220 patti analysis with predictions and trends
          </p>
        </div>

        {/* Chart Overview */}
        <div className="chart-overview">
          <h3>📊 220 Patti Overview</h3>
          <div className="overview-grid">
            <div className="overview-card">
              <h4>Total Pattis</h4>
              <p className="overview-number">220</p>
              <p className="overview-desc">Available pattis</p>
            </div>
            <div className="overview-card">
              <h4>Hot Pattis</h4>
              <p className="overview-number">15</p>
              <p className="overview-desc">High frequency</p>
            </div>
            <div className="overview-card">
              <h4>Warm Pattis</h4>
              <p className="overview-number">45</p>
              <p className="overview-desc">Medium frequency</p>
            </div>
            <div className="overview-card">
              <h4>Cold Pattis</h4>
              <p className="overview-number">160</p>
              <p className="overview-desc">Low frequency</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="filter-section">
          <div className="filter-controls">
            <div className="filter-group">
              <label>Filter by Status:</label>
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Pattis</option>
                <option value="hot">Hot Pattis</option>
                <option value="warm">Warm Pattis</option>
                <option value="cold">Cold Pattis</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="frequency">Frequency</option>
                <option value="confidence">Confidence</option>
                <option value="lastAppeared">Last Appeared</option>
              </select>
            </div>
          </div>
        </div>

        {/* Patti Chart Table */}
        <div className="patti-chart-section">
          <h3>📋 220 Patti Chart</h3>
          <div className="chart-table-container">
            <table className="patti-chart-table">
              <thead>
                <tr>
                  <th>Patti</th>
                  <th>Frequency</th>
                  <th>Last Appeared</th>
                  <th>Next Prediction</th>
                  <th>Confidence</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((patti) => (
                  <tr key={patti.id}>
                    <td className="patti-number">{patti.patti}</td>
                    <td className="frequency">{patti.frequency}</td>
                    <td className="last-appeared">
                      {new Date(patti.lastAppeared).toLocaleDateString()}
                    </td>
                    <td className="next-prediction">
                      {new Date(patti.nextPrediction).toLocaleDateString()}
                    </td>
                    <td className="confidence">{patti.confidence}%</td>
                    <td className={`status ${patti.status}`}>
                      {patti.status === "hot"
                        ? "🔥 Hot"
                        : patti.status === "warm"
                        ? "🌡️ Warm"
                        : "❄️ Cold"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Pattis */}
        <div className="top-pattis">
          <h3>🏆 Top Performing Pattis</h3>
          <div className="top-pattis-grid">
            <div className="top-patti-card">
              <div className="rank">1</div>
              <div className="patti-info">
                <h4>Patti 123</h4>
                <p>Frequency: 45 times</p>
                <p>Confidence: 85%</p>
                <span className="status-hot">🔥 Hot</span>
              </div>
            </div>
            <div className="top-patti-card">
              <div className="rank">2</div>
              <div className="patti-info">
                <h4>Patti 234</h4>
                <p>Frequency: 38 times</p>
                <p>Confidence: 78%</p>
                <span className="status-hot">🔥 Hot</span>
              </div>
            </div>
            <div className="top-patti-card">
              <div className="rank">3</div>
              <div className="patti-info">
                <h4>Patti 345</h4>
                <p>Frequency: 32 times</p>
                <p>Confidence: 72%</p>
                <span className="status-warm">🌡️ Warm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Patti Analysis */}
        <div className="patti-analysis">
          <h3>🔍 Patti Analysis</h3>
          <div className="analysis-grid">
            <div className="analysis-card">
              <h4>Most Common Pattern</h4>
              <p className="analysis-pattern">123</p>
              <p className="analysis-desc">Appeared 45 times</p>
            </div>
            <div className="analysis-card">
              <h4>Average Frequency</h4>
              <p className="analysis-number">28.5</p>
              <p className="analysis-desc">Per patti</p>
            </div>
            <div className="analysis-card">
              <h4>Success Rate</h4>
              <p className="analysis-rate">73%</p>
              <p className="analysis-desc">Prediction accuracy</p>
            </div>
            <div className="analysis-card">
              <h4>Next Hot Patti</h4>
              <p className="analysis-prediction">456</p>
              <p className="analysis-desc">Expected soon</p>
            </div>
          </div>
        </div>

        {/* Patti Categories */}
        <div className="patti-categories">
          <h3>📂 Patti Categories</h3>
          <div className="categories-grid">
            <div className="category-card hot">
              <h4>🔥 Hot Pattis (15)</h4>
              <p>High frequency pattis with strong prediction confidence</p>
              <div className="category-examples">
                <span>123</span>
                <span>234</span>
                <span>345</span>
                <span>456</span>
                <span>567</span>
              </div>
            </div>
            <div className="category-card warm">
              <h4>🌡️ Warm Pattis (45)</h4>
              <p>Medium frequency pattis with moderate confidence</p>
              <div className="category-examples">
                <span>678</span>
                <span>789</span>
                <span>890</span>
                <span>901</span>
                <span>012</span>
              </div>
            </div>
            <div className="category-card cold">
              <h4>❄️ Cold Pattis (160)</h4>
              <p>Low frequency pattis with lower prediction confidence</p>
              <div className="category-examples">
                <span>111</span>
                <span>222</span>
                <span>333</span>
                <span>444</span>
                <span>555</span>
              </div>
            </div>
          </div>
        </div>

        {/* Prediction Tools */}
        <div className="prediction-tools">
          <h3>🎯 Patti Prediction Tools</h3>
          <div className="tools-grid">
            <div className="tool-card">
              <h4>Patti Calculator</h4>
              <p>Calculate patti based on open and close numbers</p>
              <button className="btn btn-primary">Use Calculator</button>
            </div>
            <div className="tool-card">
              <h4>Pattern Analyzer</h4>
              <p>Analyze patti patterns for better predictions</p>
              <button className="btn btn-primary">Analyze</button>
            </div>
            <div className="tool-card">
              <h4>Frequency Tracker</h4>
              <p>Track patti frequency over time</p>
              <button className="btn btn-primary">Track</button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="page-navigation">
          <div className="nav-buttons">
            <Link to="/" className="btn btn-secondary">
              ← Back to Home
            </Link>
            <Link to="/charts" className="btn btn-primary">
              All Charts →
            </Link>
            <Link to="/weekly-jodi-panna" className="btn btn-primary">
              Weekly Jodi/Panna →
            </Link>
            <Link to="/free-guessing" className="btn btn-primary">
              Free Guessing →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Satta220PattiChart;
