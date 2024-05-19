import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from './Card';
import { shuffleCards, initializeDeck } from '../Utilities';
import Grid from '@mui/material/Grid';
import { useHighScores } from '../context/HighScoreContext';
import GameFinished from './GameFinished';

function Game() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name,rows, cols, flipDelay = 1000 } = location.state?.gameSettings || { rows: 4, cols: 4, flipDelay: 1000 };  
  const [cards, setCards] = useState([]);
  const [canFlip, setCanFlip] = useState(true);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const { addScore } = useHighScores();

  useEffect(() => {
    const initializedCards = initializeDeck(rows, cols).map((card, index) => ({
      ...card,
      isFlipped: false,
      isMatched: false,
      index: index
    }));
    setCards(shuffleCards(initializedCards));
  }, [rows, cols]);

  const handleCardClick = index => {
    if (!canFlip || cards[index].isFlipped || cards[index].isMatched) return;
    const newCards = cards.map((card, idx) => idx === index ? { ...card, isFlipped: true } : card);
    setCards(newCards);
    processCardMatch(newCards);
  };

  const processCardMatch = (newCards) => {
    const flippedCards = newCards.filter(card => card.isFlipped && !card.isMatched);
    if (flippedCards.length === 2) {
      setCanFlip(false);
      setTimeout(() => matchCards(flippedCards), flipDelay);  // Use dynamic flip delay
    } else {
      setCanFlip(true);
    }
  };

  const matchCards = (flippedCards) => {
    if (flippedCards[0].id === flippedCards[1].id) {
      setScore(prevScore => prevScore + 1);
      setCards(current => current.map(card => card.id === flippedCards[0].id ? { ...card, isMatched: true } : card));
      setCanFlip(true);
    } else {
      setCards(current => current.map(card => (card.isFlipped && !card.isMatched) ? { ...card, isFlipped: false } : card));
      setCanFlip(true);
    }
  };
  useEffect(() => {
    if (cards.length === 0 || gameOver) return;
  
    const handleGameComplete = () => {
      if (cards.every(card => card.isMatched)) {
        addScore({ name: name, score: score }); // Ensure this function doesn't add duplicates
        setGameOver(true); // Mark the game as over
        setTimeout(() => {
          navigate('/highscores');
        }, 2000); // Navigate after a delay to show the game over screen or a message
      }
    };
  
    handleGameComplete();
  }, [cards, score, addScore, navigate, gameOver, name]); // Dependency array
  



  return (
    <Grid container spacing={2}>
      {cards.map((card, index) => (
        <Grid item key={index} xs={4} sm={3} md={3} lg={3} xl={3}>
          <Card card={card} onCardClick={() => handleCardClick(index)} />
        </Grid>
      ))}
   
     {gameOver && <GameFinished score={score} />}
    </Grid>
  );
}

export default Game;
