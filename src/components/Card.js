import React from 'react';
import CardMui from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/material';

function Card({ card, onCardClick }) {
  return (
    <CardMui sx={{ width: '100%', height: 195, display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={onCardClick}>
      {card.isFlipped ? 
        <CardMedia
          component="img"
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          image={card.url}
          alt="card image"
        /> 
        : <Box sx={{ width: '100%', height: '100%', backgroundColor: '#bdbdbd', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5em', color: '#fff' }}>
            Back of Card
          </Box>
      }
    </CardMui>
  );
}

export default Card;
