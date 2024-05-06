import React, { useState, useEffect } from 'react';

function HighScores() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const highScores = JSON.parse(localStorage.getItem('highScores') || '[]');
    setScores(highScores);
  }, []);

  return (
    <div>
      {scores.map((score, index) => (
        <div key={index}>{score.name}: {score.score}</div>
      ))}
    </div>
  );
}

export default HighScores;
