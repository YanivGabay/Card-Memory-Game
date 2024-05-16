import React, { useState, useEffect } from 'react';

function HighScores() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const highScores = JSON.parse(localStorage.getItem('highScores') || '[]');
    setScores(highScores);
  }, []);

  // Function to add new score
  const addScore = (newScore) => {
    const updatedScores = [...scores, newScore];
    //bigger score = better
    updatedScores.sort((a, b) => b.score - a.score); 
    localStorage.setItem('highScores', JSON.stringify(updatedScores));
    setScores(updatedScores);
  };

  return (
    <div>
      {scores.map((score, index) => (
        <div key={index}>{score.name}: {score.score}</div>
      ))}
    </div>
  );
}

export default HighScores;
