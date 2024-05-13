import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';
import { shuffleCards, initializeDeck } from '../Utilities';
import Grid from '@mui/material/Grid';

function Game() {
  const location = useLocation();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const gameSettings = location.state?.gameSettings;
    if (gameSettings) {
      const { rows, cols } = gameSettings;
      const deck = initializeDeck(rows, cols);
      setCards(shuffleCards(deck));
    } else {
      console.error("Game settings not found.");
    }
  }, [location]);

  const handleCardClick = (index) => {
    setCards(cards.map((card, cardIndex) => cardIndex === index && !card.isMatched ? { ...card, isFlipped: !card.isFlipped } : card));
  };

  return (
    <Grid container spacing={2}>
      {cards.map((card, index) => (
        <Grid item key={index} xs={3} sm={2} md={1}>
          <Card card={card} onCardClick={() => handleCardClick(index)} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Game;
