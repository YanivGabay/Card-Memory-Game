import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Settings from './Settings'; // Assuming you have a Settings component

function Home() {
  const [name, setName] = useState('');
  const [gameSettings, setGameSettings] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    const trimmedName = event.target.value.trim();
    if (trimmedName.length > 12 || !/^[a-zA-Z0-9]*$/.test(trimmedName)) {
      setError('Name must be up to 12 alphanumeric characters.');
    } else {
      setError('');
      setName(trimmedName);
    }
  };

  const startGame = () => {
    if (!name) {
      setError('Name is required.');
      return;
    }
    if ((gameSettings.rows * gameSettings.cols) % 2 !== 0) {
      setError('The combination of rows and columns must result in an even number of cards.');
      return;
    }
    navigate('/game', { state: { name, gameSettings } });
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
      <button onClick={startGame} disabled={!name || error}>Start Game</button>
    </div>
  );
}

export default Home;
