import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import { initializeDeck } from '../Utilities';
import Grid from '@mui/material/Grid';
import { useHighScores } from '../context/HighScoreContext';
import GameFinished from './GameFinished';
import { isEveryCardMatched } from '../Utilities';
import { Box, Typography } from '@mui/material';
import ReturnHome from './ReturnHome';

/**
 * Represents the memory game component.
 *
 * @param {Object} gameSettings - The settings for the game.
 * @param {string} gameSettings.name - The name of the player.
 * @param {number} gameSettings.rows - The number of rows in the game board.
 * @param {number} gameSettings.cols - The number of columns in the game board.
 * @param {number} gameSettings.flipDelay - The delay (in milliseconds) between card flips.
 * @returns {JSX.Element} The rendered game component.
 *

 */
function Game({ gameSettings }) {
  const { name, rows, cols, flipDelay } = gameSettings;

  const navigate = useNavigate();
  //init deck returns a shuffled cards
  const [cards, setCards] = useState(initializeDeck(rows, cols));
  const [canFlip, setCanFlip] = useState(true);
  const [score, setScore] = useState(0);
  const [steps, setSteps] = useState(0);
  const { addScore } = useHighScores();
  const [flips, setFlips] = useState(0);

  // Check if all cards are matched ./Utilities.js
  const gameOver = isEveryCardMatched(cards);

  // Calculate the score to add some complexity to the game
  function calculateScore(boardRows, boardColumns, steps,  flipDelay) {
    const numberOfCards = boardRows * boardColumns;
    const baseScore = 10 * numberOfCards; // Basic score based on number of cards
    const boardComplexityBonus = 0.5 * numberOfCards; // Bonus for larger boards
    const flipDelayBonus = 50 / flipDelay; // Bonus increases as flip delay decreases
    const stepPenalty = 2 * steps; // Penalty for the number of steps

    const score = baseScore + boardComplexityBonus + flipDelayBonus - stepPenalty;
    return Math.floor(score);
}


  // Handle the game completion
  const handleGameComplete = () => {
    
    const actualScore = calculateScore(rows,cols,steps,flipDelay);
    setScore(actualScore);
    addScore({ name: name, score: actualScore }); 
   
    setTimeout(() => {
      navigate('/highscores');
    }, 2000); // Navigate after a delay to show the game over screen or a message

  };


  const handleCardClick = index => {
    if (!canFlip || cards[index].isFlipped || cards[index].isMatched) return;
    setSteps(steps + 1)
    const newCards = cards.map((card, idx) => idx === index ? { ...card, isFlipped: true } : card);
    setCards(newCards);
    processCardMatch(newCards);


  };
  
  // Process the flipped cards
  const processCardMatch = (newCards) => {
    const flippedCards = newCards.filter(card => card.isFlipped && !card.isMatched);
    if (flippedCards.length === 2) {
      setCanFlip(false);
      setTimeout(() => matchCards(flippedCards), flipDelay);  // Use dynamic flip delay
    } else {
      setCanFlip(true);
    }
  };
  //two cards are flipped
  const matchCards = (flippedCards) => {
    if (flippedCards[0].id === flippedCards[1].id) {
      setFlips(flips + 1);
      const matchedCards = cards.map(card => card.id === flippedCards[0].id ? { ...card, isMatched: true, isFlipped: true } : card);
      setCards(matchedCards);

      if (isEveryCardMatched(matchedCards)) {
        handleGameComplete();
      }
      setCanFlip(true);
    } else {
      setCards(current => current.map(card => (card.isFlipped && !card.isMatched) ? { ...card, isFlipped: false } : card));
      setCanFlip(true);
    }
  };





  return (

    <Box>
      <Box>
        <Typography variant="h5" align="center" gutterBottom>
          {`Player: ${name} | Flips: ${flips} | Steps: ${steps}`}
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item key={index} xs={4} sm={3} md={3} lg={3} xl={3}>
            <Card card={card} onCardClick={() => handleCardClick(index)} />
          </Grid>
        ))}

        {gameOver && <GameFinished score={score} />}
      </Grid>
      <ReturnHome />
    </Box>
  );
}

export default Game;
