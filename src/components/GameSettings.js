import React, { useState } from 'react'
import { Grid, Paper, TextField, Button, Stack } from '@mui/material'
import { Alert } from '@mui/material'
import Settings from './Settings'
import SpringModal from './SpringModal'
import { useNavigate } from 'react-router-dom'
import { validateBoard, validateName } from '../Utilities'

const GameSettings = () => {



    const [gameSettings, setGameSettings] = useState({ rows: 4, cols: 4, flipDelay: 1000 });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleGameSettingsChange = (e) => {

       
        
        let value = e.target.value;
        if (e.target.name !== 'name') {
            value = parseInt(value, 10);
        }
        else { value = value.trim() };
        console.log(e.target.value);
        console.log(e.target.name);
        console.log(value);
        setGameSettings({ ...gameSettings, [e.target.name]: value });
    };

    const startGame = () => {
        const nameError = validateName(gameSettings.name);
        const settingsError = validateBoard(gameSettings);
        if (!nameError && !settingsError) {
            navigate('/game', {
                state: {
                    gameSettings: {
                        name: gameSettings.name,
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
                    <Settings errors={errors} gameSettings={gameSettings} handleChange={handleGameSettingsChange} />
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