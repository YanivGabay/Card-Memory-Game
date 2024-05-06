import React from 'react';

function Card({ card }) {
  return (
    <div onClick={() => card.flip()}>
      {card.isFlipped ? card.image : 'Back of card'}
    </div>
  );
}

export default Card;
