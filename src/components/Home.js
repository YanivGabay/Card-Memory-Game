import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Settings from './Settings';  // Ensure Settings component can be used within a Modal
import Alert from '@mui/material/Alert';


import { Box, Button, TextField,Stack } from '@mui/material';
import SpringModal from './SpringModal';


function Home() {
  const [name, setName] = useState('');
 
  const [gameSettings, setGameSettings] = useState({ rows: 4, cols: 4 });
  const [errors, setErrors] = useState({ name: '', settings: '' });
  const navigate = useNavigate();

  const validateName = (name) => {
    if (!name) return 'Name is required.';
    if (name.length > 12 || !/^[a-zA-Z0-9]*$/.test(name)) return 'Name must be up to 12 alphanumeric english characters.';
    return null;
  };

  const validateSettings = ({ rows, cols }) => {
    const totalCards = rows * cols;
    return totalCards % 2 !== 0 ? 'The combination of rows and columns must result in an even number of cards.' : null;
  };

  const startGame = () => {
    const nameError = validateName(name);
    const settingsError = validateSettings(gameSettings);
    if (!nameError && !settingsError) {
      navigate('/game', { state: { name, gameSettings } });
    } else {
      setErrors({ name: nameError, settings: settingsError });
    }
  };

 

  return (
    <Box sx={{ p: 2 }}>
      <TextField
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value.trim())}
        placeholder="Enter your name"
        error={!!errors.name}
        helperText={errors.name || ' '}
      />

      <Settings onChange={setGameSettings} />

      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Button variant="outlined" onClick={startGame}>Start Game</Button>
        <SpringModal />
      </Stack>

      {errors.settings && <Alert severity="error">{errors.settings}</Alert>}
    </Box>
  );
}

export default Home;
