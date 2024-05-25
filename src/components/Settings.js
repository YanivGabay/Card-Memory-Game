
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';

/**
 * Renders a reusable select input control with full width.
 *
 * @param {string} id - The id for the select input.
 * @param {string} label - The label for the select input.
 * @param {Array} options - Array of options for the select dropdown.
 * @param {Object} props - Additional props to pass to the Select component.
 * @returns {JSX.Element} A Material-UI FormControl component with a Select input.
 */
function SelectControl({ id, label,options,...props }) {
  return (
    <FormControl fullWidth>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        label={label}
        {...props}
       
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
        
      </Select>
    </FormControl>
  );
}


/**
 * Renders the settings form.
 * 
 * @param {Object} props - The component props.
 * @param {Object} props.gameSettings - The game settings object.
 * @param {Function} props.handleChange - The change handler function.
 * @param {Object} props.errors - The form errors object.
 * @returns {JSX.Element} The rendered settings form.
 *  
 * */
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
