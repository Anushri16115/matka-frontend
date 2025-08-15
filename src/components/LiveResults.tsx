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
        {/* Today Lucky Number Section - DPBoss Style */}
        <div className="lucky-number-section">
          <div className="lucky-number-header">TODAY LUCKY NUMBER</div>
          <div className="lucky-number-box">
            <div className="lucky-number-column">
              <div className="lucky-label">Golden Ank</div>
              <div className="lucky-value">2-4-7-9</div>
            </div>
            <div className="lucky-number-column">
              <div className="lucky-label">Final Ank</div>
              <div className="lucky-value">K-3, M-6</div>
            </div>
          </div>
        </div>

        {/* Live Update Section - DPBoss Style */}
        <div className="live-update-section">
          <div className="live-update-header">☔ LIVE UPDATE ☔</div>
          <div className="live-results-list">
            {results.map((result, index) => (
              <div key={index} className="dpboss-result-row">
                <div className="dpboss-result-content">
                  <h4>{result.game}</h4>
                  <p className="result">{result.number}</p>
                </div>

                {/* Optional refresh button on top-right */}
                <div className="live-result-actions">
                  <button className="btn btn-refresh" onClick={handleRefresh}>
                    🔄 Refresh
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveResults;
