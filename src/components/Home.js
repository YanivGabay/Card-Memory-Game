import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Settings from './Settings';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
function Home() {
  const [name, setName] = useState('');
  const [gameSettings, setGameSettings] = useState({ rows: 4, cols: 4 }); // Default valid settings
  const [nameError, setNameError] = useState('');
  const [settingsError, setSettingsError] = useState('');
  const navigate = useNavigate();

  const validateName = (name) => {
    if (!name) {
      return 'Name is required.';
    }
    if (name.length > 12 || !/^[a-zA-Z0-9]*$/.test(name)) {
      return 'Name must be up to 12 alphanumeric characters.';
    }
    return null;
  };

  const validateSettings = ({ rows, cols }) => {
    if (!rows || !cols) {
      return 'Both rows and columns must be specified.';
    }
    const totalCards = rows * cols;
    if (totalCards % 2 !== 0) {
      return 'The combination of rows and columns must result in an even number of cards.';
    }
    return null;
  };
  

  useEffect(() => {
    const nameError = validateName(name);
    setNameError(nameError);
  }, [name]);

  useEffect(() => {
    const settingsError = validateSettings(gameSettings);
    setSettingsError(settingsError);
  }, [gameSettings]);

  const startGame = () => {
    const nameError = validateName(name);
    const settingsError = validateSettings(gameSettings);
  
    if (!nameError && !settingsError) {
      navigate('/game', { state: { name, gameSettings } });
    } else {
      setNameError(nameError);
      setSettingsError(settingsError);
    }
  };
  

  return (
    <Box>
      <Input
        value={name}
        onChange={(event) => setName(event.target.value.trim())}
        placeholder="Enter your name"
      />
      {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
      <Settings onChange={setGameSettings} />
      {settingsError && <div style={{ color: 'red' }}>{settingsError}</div>}

      <Button onClick={startGame} disabled={!!nameError || !!settingsError}>Start Game</Button>
    </Box>
  );
}

export default Home;
