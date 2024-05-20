import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';


function Home({children}) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Box m={2}>
      {children}
      </Box>
      
    </Box>
  );
}

export default Home;
