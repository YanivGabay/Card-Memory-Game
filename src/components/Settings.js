import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


function SelectControl({ id, label, value, onChange, options }) {
  return (
    <FormControl fullWidth>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

function Settings({ onChange }) {
  const [rows, setRows] = useState(4);
  const [cols, setCols] = useState(4);
  const [flipDelay, setFlipDelay] = useState(1000);  // Default delay set to 1000 milliseconds

  useEffect(() => {
    onChange({ rows, cols, flipDelay });
  }, [rows, cols, flipDelay, onChange]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <SelectControl 
        id="rows"
        label="Rows"
        value={rows}
        onChange={e => setRows(parseInt(e.target.value, 10))}
        options={[3, 4, 5]}
      />
      <SelectControl 
        id="cols"
        label="Columns"
        value={cols}
        onChange={e => setCols(parseInt(e.target.value, 10))}
        options={[3, 4, 5]}
      />
      <SelectControl
        id="flipDelay"
        label="Flip Delay (ms)"
        value={flipDelay}
        onChange={e => setFlipDelay(Number(e.target.value))}
        options={[250, 500, 1000, 1500]}  // Options for different delays
      />
    </Box>
  );
}


export default Settings;
