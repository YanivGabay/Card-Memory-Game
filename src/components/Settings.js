import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';


function SelectControl({ id, label, value, onChange, options,name }) {
  return (
    <FormControl fullWidth>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
        name={name}
       
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
        
      </Select>
    </FormControl>
  );
}

function Settings({ gameSettings, handleChange ,errors}) {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

      <TextField
        fullWidth
        label="Enter your name"
        name="name"
        value={gameSettings.name || ''}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name || ' '}
      />

      <SelectControl
        id="rows"
        label="Rows"
        name="rows"
        value={gameSettings.rows}
        onChange={handleChange}
        options={[2, 3, 4, 5]}
      />
      <SelectControl
        id="cols"
        label="Columns"
        name="cols"
        value={gameSettings.cols}
        onChange={handleChange}
        options={[2, 3, 4, 5]}
      />
      <SelectControl
        id="flipDelay"
        label="Flip Delay (ms)"
        name="flipDelay"
        value={gameSettings.flipDelay}
        onChange={handleChange}
        options={[250, 500, 1000, 1500]}  // Options for different delays
      />
    </Box>
  );
}


export default Settings;
