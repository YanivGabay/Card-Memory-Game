import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Settings from './Settings';

function Home() {
  const [name, setName] = useState('');
  const [gameSettings, setGameSettings] = useState({ rows: 4, cols: 4 }); // Default valid settings
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Define the validation function outside any hook to make it available throughout the component
  const validateAll = () => {
    if (!name) {
      return 'Name is required.';
    }
    if (name.length > 12 || !/^[a-zA-Z0-9]*$/.test(name)) {
      return 'Name must be up to 12 alphanumeric characters.';
    }
    if (gameSettings.rows && gameSettings.cols) {
      const totalCards = gameSettings.rows * gameSettings.cols;
      if (totalCards % 2 !== 0) {
        return 'The combination of rows and columns must result in an even number of cards.';
      }
    }
    return null; // No errors found
  };

  // Use effect for real-time validation
  useEffect(() => {
    // Update the error state based on validation
    setError(validateAll());
  }, [name, gameSettings]);

  const handleNameChange = (event) => {
    const trimmedName = event.target.value.trim();
    setName(trimmedName);
  };

  const startGame = () => {
    const validationError = validateAll();
    if (!validationError) {
      navigate('/game', { state: { name, gameSettings } });
    } else {
      setError(validationError);
    }
  };

  return (
    <div>
      <input
        value={name}
        onChange={handleNameChange}
        onBlur={handleNameChange} // To trim on blur as well
        placeholder="Enter your name"
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Settings onChange={setGameSettings} />
      <button onClick={startGame} disabled={!!error}>Start Game</button>
    </div>
  );
}

export default Home;
