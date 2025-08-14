import React, { useState } from "react";

const LiveResults: React.FC = () => {
  const [results, setResults] = useState([
    { game: "MADHUR NIGHT", number: "150-64-257" },
    { game: "SUPREME NIGHT", number: "130-4" },
    { game: "PRABHAT NIGHT", number: "560-19-469" },
  ]);

  const handleRefresh = () => {
    // Simulate refresh — you can replace this with actual API logic
    setResults([...results]);
  };

  return (
    <section className="live-results">
      <div className="container">
        <h1>📡 LIVE UPDATE</h1>
        <p className="lucky-highlight">
          🎯 Ank (शुभांक): <strong>2-4-7-9</strong>
          <br />
          🔸 Final Ank: <strong>K-3, M-6</strong>
        </p>

        <div className="results-grid">
          {results.map((result, index) => (
            <div key={index} className="result-card">
              <h3>{result.game}</h3>
              <p className="number">{result.number}</p>
              <button className="btn btn-refresh" onClick={handleRefresh}>
                🔄 Refresh
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveResults;
