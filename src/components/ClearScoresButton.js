import React from 'react';
import { Button } from '@mui/material';
import { useHighScores } from '../context/HighScoreContext';



/**
 * Button component to clear high scores.
 * 
 * This component renders a button that, when clicked, will clear the high scores stored in the context.
 * It uses the `useHighScores` hook to access the high score related functions and state from the `HighScoreContext`.
 * 
 * Behavior:
 *  - On button click, it triggers the `clearScores` method from the `HighScoreContext` to reset the high scores data.
 * 
 * Usage:
 *  <ClearHighScoresButton />
 */
function ClearHighScoresButton() {
    const highScoresContext = useHighScores();
    console.log(highScoresContext);

    return (
        <Button variant="contained" color="secondary" onClick={highScoresContext.clearScores}>
            Clear High Scores
        </Button>
    );
}


export default ClearHighScoresButton;
