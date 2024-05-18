import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function BackToHomeButton() {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');  // Navigate back to the home page
    };

    return (
        <Button variant="outlined" color="primary" onClick={goHome} fullWidth>
            Back to Home
        </Button>
    );
}

export default BackToHomeButton;
