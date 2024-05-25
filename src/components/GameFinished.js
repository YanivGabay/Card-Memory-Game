import React from 'react';
import { Typography, Grid, Paper, Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';




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
