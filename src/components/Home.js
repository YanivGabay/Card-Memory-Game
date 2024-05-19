import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Settings from './Settings';
import Alert from '@mui/material/Alert';
import { Box, Button, TextField, Grid, Paper } from '@mui/material';
import SpringModal from './SpringModal';
import Header from './Header'; // Import the Header component
import { validateName, validateSettings } from '../Utilities';
import Stack from '@mui/material/Stack';

function Home() {
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
    <Box sx={{ flexGrow: 1 }}>
      <Header />
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
    </Box>
  );
}

export default Home;
