import React from 'react';
import { useHighScores } from '../context/HighScoreContext';
import {   Container } from '@mui/material';

import ReturnHome from './ReturnHome';
import HighScoresTable from './HighScoresTable';



/**
 * High Scores component.

 * @param {Array}  scores - useHighScores() context hook to get the scores from the context.

 * @returns {JSX.Element} The rendered game component.
 *

 */
function HighScores() {
    const { scores } = useHighScores();

    return (
        <Container maxWidth="sm" style={{ marginTop: '20px' }}>

          <HighScoresTable scores={scores} />



            <ReturnHome />
        </Container>
    );
}

export default HighScores;
