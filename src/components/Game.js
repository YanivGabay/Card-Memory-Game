import React, { useState, useEffect } from 'react';
import Card from './Card';
import { shuffleCards, initializeDeck } from '../Utilities';

function Game({ location }) {
  const [cards, setCards] = useState([]);
  const [flips, setFlips] = useState(0);

  useEffect(() => {
    // Ensure that gameSettings are present before trying to use them
    if (location && location.state && location.state.gameSettings) {
      const { rows, cols } = location.state.gameSettings; // Extract rows and cols from the game settings
      const deck = initializeDeck(rows, cols);
      setCards(shuffleCards(deck));
    } else {
      console.error("Game settings not found. Ensure you are passing the game settings correctly.");
      // Optionally, handle the case where game settings are not available
      // e.g., redirect back to home or display an error message
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
