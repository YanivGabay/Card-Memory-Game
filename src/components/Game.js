import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';
import { shuffleCards, initializeDeck } from '../Utilities';

function Game() {
  const location = useLocation();
  const [cards, setCards] = useState([]);
  const [flips, setFlips] = useState(0);

  useEffect(() => {
    if (location && location.state && location.state.gameSettings) {
      const { rows, cols } = location.state.gameSettings;
      const deck = initializeDeck(rows, cols);
      setCards(shuffleCards(deck));
    } else {
      console.error("Game settings not found. Ensure you are passing the game settings correctly.");
    }
  }, [location]);

  const handleCardClick = (index) => {
    // Handle card flip logic here
    const newCards = cards.map((card, cardIndex) => {
      if (cardIndex === index && !card.isMatched) {
        return { ...card, isFlipped: !card.isFlipped };
      }
      return card;
    });
    setCards(newCards);
  };

  return (
    <div className="game-board">
      {cards.map((card, index) => (
        <Card key={index} card={card} onCardClick={() => handleCardClick(index)} />
      ))}
    </div>
  );
}

export default Game;
