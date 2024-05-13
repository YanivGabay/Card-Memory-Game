import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Settings from './Settings';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function Home() {
  const [name, setName] = useState('');
  const [gameSettings, setGameSettings] = useState({ rows: 4, cols: 4 });
  const [nameError, setNameError] = useState('');
  const [settingsError, setSettingsError] = useState('');
  const navigate = useNavigate();

  const validateName = (name) => {
    if (!name) return 'Name is required.';
    if (name.length > 12 || !/^[a-zA-Z0-9]*$/.test(name)) return 'Name must be up to 12 alphanumeric characters.';
    return null;
  };

  const validateSettings = ({ rows, cols }) => {
    const totalCards = rows * cols;
    return totalCards % 2 !== 0 ? 'The combination of rows and columns must result in an even number of cards.' : null;
  };

  useEffect(() => setNameError(validateName(name)), [name]);
  useEffect(() => setSettingsError(validateSettings(gameSettings)), [gameSettings]);

  const startGame = () => {
    const nameError = validateName(name);
    const settingsError = validateSettings(gameSettings);
    if (!nameError && !settingsError) navigate('/game', { state: { name, gameSettings } });
    else {
      setNameError(nameError);
      setSettingsError(settingsError);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <TextField
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value.trim())}
        placeholder="Enter your name"
        error={!!nameError}
        helperText={nameError || ' '}
      />
      <Settings onChange={setGameSettings} />
      <Typography color="error">{settingsError}</Typography>
      <Button onClick={startGame} disabled={!!nameError || !!settingsError} variant="contained">Start Game</Button>
    </Box>
  );
}

export default Home;
