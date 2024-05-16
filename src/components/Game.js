import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from './Card';
import { shuffleCards, initializeDeck } from '../Utilities';
import Grid from '@mui/material/Grid';

function Game() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [canFlip, setCanFlip] = useState(true); // State to control card flipping

  useEffect(() => {
    const gameSettings = location.state?.gameSettings;
    if (gameSettings) {
      const { rows, cols } = gameSettings;
      const initializedCards = initializeDeck(rows, cols).map((card, index) => ({
        ...card,
        isFlipped: false,
        isMatched: false,
        index: index  // This helps identify the card
      }));
      setCards(shuffleCards(initializedCards));
    } else {
      console.error("Game settings not found.");
    }
  }, [location]);

  const handleCardClick = index => {
    if (!canFlip || cards[index].isFlipped || cards[index].isMatched) return;

    const newCards = cards.map((card, idx) =>
      idx === index ? {...card, isFlipped: !card.isFlipped} : card
    );
    setCards(newCards);

    const flippedCards = newCards.filter(card => card.isFlipped && !card.isMatched);
    if (flippedCards.length === 2) {
      setCanFlip(false); // Prevent more cards from being flipped
      if (flippedCards[0].id === flippedCards[1].id) {
        setCards(newCards.map(card =>
          card.id === flippedCards[0].id ? {...card, isMatched: true} : card
        ));
        setCanFlip(true);
      } else {
        setTimeout(() => {
          setCards(newCards.map(card =>
            card.isFlipped && !card.isMatched ? {...card, isFlipped: false} : card
          ));
          setCanFlip(true); // Allow flipping again after handling current pair
        }, 1000);
      }
    } else {
      setCanFlip(true);
    }
  };

  return (
    <Grid container spacing={2}>
      {cards.map((card, index) => (
        <Grid item key={index} xs={4} sm={3} md={3} lg={3} xl={3}>
          <Card card={card} onCardClick={() => handleCardClick(index)} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Game;
