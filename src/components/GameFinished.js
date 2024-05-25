import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';


/**
 * Game finished compononet, displays the final score of the game (when the game is over).
 *

 * @param {number}  score - The score After calculation.

 * @returns {JSX.Element} The rendered game component.
 *

 */


export default function GameFinished({ score }) {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ marginTop: 20 }}>
      <Grid item xs={12} md={6}>
        <Paper elevation={4} style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Game Over! Your score: {score}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
