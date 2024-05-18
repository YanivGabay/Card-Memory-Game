
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from './Card';
import { shuffleCards, initializeDeck } from '../Utilities';
import Grid from '@mui/material/Grid';
import { useHighScores } from '../context/HighScoreContext';

function Game() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [canFlip, setCanFlip] = useState(true);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const { addScore } = useHighScores();
  

  const initializeGame = () => {
    const gameSettings = location.state?.gameSettings;
    if (gameSettings) {
      const { rows, cols } = gameSettings;
      const initializedCards = initializeDeck(rows, cols).map((card, index) => ({
        ...card,
        isFlipped: false,
        isMatched: false,
        index: index
      }));
      setCards(shuffleCards(initializedCards));
    } else {

      navigate('/notfound'); 
    }
  };

  const handleCardClick = index => {
    if (!canFlip || cards[index].isFlipped || cards[index].isMatched) return;

    const newCards = updateCardsFlippedState(index);
    processCardMatch(newCards);
  };

  const updateCardsFlippedState = (index) => {
    const newCards = cards.map((card, idx) =>
      idx === index ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);
    return newCards;
  };

  const processCardMatch = (newCards) => {
    const flippedCards = newCards.filter(card => card.isFlipped && !card.isMatched);
    if (flippedCards.length === 2) {
      setCanFlip(false);
      matchCards(flippedCards);
    } else {
      setCanFlip(true);
    }
  };

  const matchCards = (flippedCards) => {
    if (flippedCards[0].id === flippedCards[1].id) {
      setScore(score + 1);
      setCards(current => current.map(card =>
        card.id === flippedCards[0].id ? { ...card, isMatched: true } : card
      ));
      setCanFlip(true);
    } else {
      setTimeout(() => {
        setCards(current => current.map(card =>
          card.isFlipped && !card.isMatched ? { ...card, isFlipped: false } : card
        ));
        setCanFlip(true);
      }, 1000);
    }
  };


  const handleGameComplete = (finalScore) => {
    const newScore = { name: 'Player Name', score: finalScore }; // Customize as necessary
    addScore(newScore);
    navigate('/highscores');
  };

  useEffect(() => initializeGame(), [location]);
  
  useEffect(() => {
    if (cards.length === 0) return;
    if (cards.every(card => card.isMatched)) {
      console.log("All cards matched, navigating to highscores.");
      handleGameComplete(score);
      setGameOver(true);
      setTimeout(() => navigate('/highscores'), 2000);
    }
  }, [cards, navigate]);

 



  return (
    <Grid container spacing={2}>
      {cards.map((card, index) => (
        <Grid item key={index} xs={4} sm={3} md={3} lg={3} xl={3}>
          <Card card={card} onCardClick={() => handleCardClick(index)} />
        </Grid>
      ))}
      {gameOver && <div>Game Over! Your score: {score}</div>}
    </Grid>
  );
}

export default Game;
