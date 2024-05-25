import React from 'react';
import { useHighScores } from '../context/HighScoreContext';
import {   Container } from '@mui/material';

import ReturnHome from './ReturnHome';
import HighScoresTable from './HighScoresTable';
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
