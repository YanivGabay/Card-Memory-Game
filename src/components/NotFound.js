import React from 'react';
import { Typography, Container } from '@mui/material';
import BackToHomeButton from './ReturnHome';  // Ensure to import the component





/**
 * Renders the NotFound component.
 * 
 * @returns {JSX.Element} The rendered NotFound component.
 */
function NotFound() {
    return (
        <Container maxWidth="sm" style={{ marginTop: '20px', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Page Not Found
            </Typography>
            <Typography variant="subtitle1">
                We couldn't find what you were looking for.
            </Typography>
            <BackToHomeButton /> 
        </Container>
    );
}

export default NotFound;
