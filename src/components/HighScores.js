import React from 'react';
import { useHighScores } from '../context/HighScoreContext';
import { Typography, List, ListItem, ListItemText, Paper, Container } from '@mui/material';

import ReturnHome from './ReturnHome';

function HighScores() {
    const { scores } = useHighScores();
  
    return (
        <Container maxWidth="sm" style={{ marginTop: '20px' }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                High Scores
            </Typography>
            <Paper style={{ maxHeight: 400, overflow: 'auto', marginBottom: '20px' }}>
                {scores.length > 0 ? (
                    <List>
                        {scores.map((score, index) => (
                            <ListItem key={index} divider>
                                <ListItemText primary={`${score.name}: ${score.score}`} />
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <Typography variant="subtitle1" align="center" style={{ padding: '20px' }}>
                        No high scores yet. Play a game to set a new record!
                    </Typography>
                )}
            </Paper>
            <ReturnHome />
        </Container>
    );
}

export default HighScores;
