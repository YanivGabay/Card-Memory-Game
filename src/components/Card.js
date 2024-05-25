import React from 'react';
import CardMui from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/material';


// Default URL for the backside of a card
const cardUrl = '/images/card.jpg';

/**
 * Card component that displays a playing card.
 * 
 * Props:
 *  - card (object): Object containing the details of the card, including:
 *      - isFlipped (boolean): Determines if the card is shown face up or face down.
 *      - url (string): URL for the card's image when face up.
 *  - onCardClick (function): Handler to execute when the card is clicked.
 * 
 * Behavior:
 *  - When `card.isFlipped` is true, the card's face image is displayed.
 *  - When `card.isFlipped` is false, a default back image is shown.
 * 
 * Usage:
 *  <Card 
 *    card={{ isFlipped: true, url: 'path/to/card/image.jpg' }}
 *    onCardClick={() => console.log('Card clicked')}
 *  />
 */
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
            <CardMedia
              component="img"
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              image={cardUrl}
              alt="back card image"/>
          </Box>
      }
    </CardMui>
  );
}

export default Card;
