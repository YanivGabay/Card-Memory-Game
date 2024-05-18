import React from 'react';
import { Button } from '@mui/material';
import { useHighScores } from '../context/HighScoreContext';

function ClearHighScoresButton() {
    const { clearScores } = useHighScores();
    
    return (
        <Button variant="contained" color="secondary" onClick={clearScores}>
            Clear High Scores
        </Button>
    );
}

export default ClearHighScoresButton;
