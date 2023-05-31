//import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';

const CATEGORIES = ['Web design', 'Mobile design', 'Backend development', 'Design with AI'];

export default function SingleSelect({ selectedCategory, setSelectedCategory }) {
  const theme = createTheme();
  //const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl fullWidth color="success" >
        <InputLabel id="demo-single-select-label">Category</InputLabel>
        <Select
          labelId="demo-single-select-label"
          id="demo-single-select"
          value={selectedCategory}
          onChange={handleChange}
          input={<OutlinedInput label="Category" />}
        >
          {CATEGORIES.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}
