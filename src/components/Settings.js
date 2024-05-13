import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
function Settings({ onChange }) {
  const [rows, setRows] = useState(4);
  const [cols, setCols] = useState(4);

  useEffect(() => {
    // Update the parent component's state whenever rows or columns change.
    onChange({ rows, cols });
  }, [rows, cols, onChange]);
  
  const handleChangeRows = (event) => {
    setRows(parseInt(event.target.value, 10));
  };
  const handleChangeCols = (event) => {
    setCols(parseInt(event.target.value, 10));
  };

  return (
    <Box>
    <FormControl fullWidth>
  <InputLabel id="selected-amount-rows">Rows</InputLabel>
  <Select
    labelId="selected-amount-rows"
    id="Rows"
    value={rows}
    label="Rows"
    onChange={handleChangeRows}
  >
    <MenuItem value={3}>3</MenuItem>
    <MenuItem value={4}>4</MenuItem>
    <MenuItem value={5}>5</MenuItem>
  </Select>
  </FormControl>
  <FormControl fullWidth>
  <InputLabel id="selected-amount-cols">Cols</InputLabel>
  <Select
    labelId="selected-amount-cols"
    id="cols"
    value={cols}
    label="cols"
    onChange={handleChangeCols}
  >
    <MenuItem value={3}>3</MenuItem>
    <MenuItem value={4}>4</MenuItem>
    <MenuItem value={5}>5</MenuItem>
  </Select>
</FormControl>
</Box>
  );
}

export default Settings;
