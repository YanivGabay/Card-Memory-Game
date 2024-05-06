import React, { useState, useEffect } from 'react';
import Card from './Card';

function Game() {
  const [cards, setCards] = useState([]);
  const [flips, setFlips] = useState(0);

  // Initialize the cards here

  return (
    <div>
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
}

export default Game;
