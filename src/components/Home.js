import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Settings from './Settings';  // Ensure Settings component can be used within a Modal
import Alert from '@mui/material/Alert';

function Home() {
  const [name, setName] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [gameSettings, setGameSettings] = useState({ rows: 4, cols: 4 });
  const [errors, setErrors] = useState({ name: '', settings: '' });
  const navigate = useNavigate();

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const startGame = () => {
    const nameError = validateName(name);
    const settingsError = validateSettings(gameSettings);
    if (!nameError && !settingsError) {
      navigate('/game', { state: { name, gameSettings } });
    } else {
      setErrors({ name: nameError, settings: settingsError });
    }
  };

  const validateName = (name) => {
    if (!name) return 'Name is required.';
    if (name.length > 12 || !/^[a-zA-Z0-9]*$/.test(name)) return 'Name must be up to 12 alphanumeric english characters.';
    return null;
  };

  const validateSettings = ({ rows, cols }) => {
    const totalCards = rows * cols;
    return totalCards % 2 !== 0 ? 'The combination of rows and columns must result in an even number of cards.' : null;
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
      <Button variant="outlined" onClick={startGame}>Start Game</Button>
      <Button variant="outlined" onClick={handleOpen}>High Scores</Button>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            High Scores
          </Typography>


        </Box>
      </Modal>

      {errors.settings && <Alert  severity="error">{errors.settings}</Alert >}
    </Box>
  );
}

export default Home;
