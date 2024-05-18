import React from 'react';
import { Button } from '@mui/material';
import { useHighScores } from '../context/HighScoreContext';



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
