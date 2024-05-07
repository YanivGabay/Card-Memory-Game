import React from 'react';

function Card({ card, onCardClick }) {
  return (
    <div className="card" onClick={onCardClick}>
      {card.isFlipped ? <img src={card.image} alt="card" /> : 'Back of card'}
    </div>
  );
}

export default Card;
