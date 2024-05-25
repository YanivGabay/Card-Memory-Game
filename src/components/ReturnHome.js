import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

/**
 * Renders a button that navigates back to the home page when clicked.
 *
 * @returns {JSX.Element} The rendered BackToHomeButton component.
 */
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
