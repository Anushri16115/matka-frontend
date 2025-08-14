import React from "react";

const TopGuessersAndResultKing: React.FC = () => {
  const topGuessers = [
    ["1- SURYA BHAI", "1. ADMIN SIR"],
    ["2- RUDRA PENAL KING", "2. CO-ADMIN SIR"],
    ["3- SRS BHAI", "3. S.KUMAR SIR"],
    ["4- DANISH BHAI", "4. VIP BHAI"],
    ["5- JAY~SIR", "5. SURYA BHAI"],
  ];

  return (
    <section className="top-guessers-section">
      <div className="container">
        <h2 className="text-center">⇛ Top Guessers And Result King</h2>
        <table className="top-guessers-table">
          <thead>
            <tr>
              <th>TOP GUSSER</th>
              <th>FAST RESULT</th>
            </tr>
          </thead>
          <tbody>
            {topGuessers.map(([guesser, result], index) => (
              <tr key={index}>
                <td>{guesser}</td>
                <td>{result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TopGuessersAndResultKing;
