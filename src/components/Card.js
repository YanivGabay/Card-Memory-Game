import React from 'react';
import CardMui from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function Card({ card, onCardClick }) {
  return (
    <CardMui sx={{ maxWidth: 345 }} onClick={onCardClick}>
      {card.isFlipped ? 
        <CardMedia
          component="img"
          height="140"
          image={card.url}  // Ensure this matches the property name from initializeDeck
          alt="card image"
        /> 
        : 'Back of Card'
      }
    </CardMui>
  );
}


export default Card;
