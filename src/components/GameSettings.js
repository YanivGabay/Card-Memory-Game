import React, { useState } from 'react'
import { Grid, Paper, TextField, Button, Stack } from '@mui/material'
import { Alert } from '@mui/material'
import Settings from './Settings'
import SpringModal from './SpringModal'
import { useNavigate } from 'react-router-dom'
import { validateName, validateSettings } from '../Utilities'

const GameSettings = () => {


    const [name, setName] = useState('');
    const [gameSettings, setGameSettings] = useState({ rows: 4, cols: 4 });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
  
    const startGame = () => {
      const nameError = validateName(name);
      const settingsError = validateSettings(gameSettings);
      if (!nameError && !settingsError) {
        navigate('/game', {
          state: {
            gameSettings: {
              name: name,
              rows: gameSettings.rows,
              cols: gameSettings.cols,
              flipDelay: gameSettings.flipDelay 
            }
          }
        });
      } else {
        setErrors({ name: nameError, settings: settingsError });
      }
    };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mt: 2, p: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <TextField
              fullWidth
              label="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value.trim())}
              error={!!errors.name}
              helperText={errors.name || ' '}
            />
            <Settings onChange={setGameSettings} />
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Button variant="outlined" onClick={startGame}>Start Game</Button>
              <SpringModal />
            </Stack>
            {errors.settings && <Alert severity="error">{errors.settings}</Alert>}
          </Paper>
        </Grid>
      </Grid>
  )
}

export default GameSettings