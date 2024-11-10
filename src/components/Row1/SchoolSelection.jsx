import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SchoolSelection({ label }) {
  const [school, setSchool] = React.useState('');

  const handleChange = (event) => {
    setSchool(event.target.value);
  };

  return (
    <FormControl fullWidth size="small" sx={{ minWidth: '100%' }}>
      <InputLabel id="school-select-label">{label}</InputLabel>
      <Select
        labelId="school-select-label"
        id="school-select"
        value={school}
        label={label}
        onChange={handleChange}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none", // Removes the border on the dropdown
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none", // Ensures no border on focus
          },
          "& .MuiSelect-select": {
            padding: "8px 12px", // Optional: Adjust padding for alignment
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none", // Ensures no border on hover
          },
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="School A">School A</MenuItem>
        <MenuItem value="School B">School B</MenuItem>
        <MenuItem value="School C">School C</MenuItem>
      </Select>
    </FormControl>
  );
}
