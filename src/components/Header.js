import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


/**
 * The Header component renders the header of the application.
 *

 * It contains a title and a button to navigate back to the home page.

 * @returns {JSX.Element} The rendered game component.
 *

 */

function Header() {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');  // Navigate back to the home page
    };
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Memory Game App

                </Typography>
                <Button onClick={goHome} color="inherit">Home</Button>
                
            </Toolbar>
        </AppBar>
        
    );
}

export default Header;
