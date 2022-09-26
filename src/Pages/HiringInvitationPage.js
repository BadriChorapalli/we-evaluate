import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
  
function HiringInvitationPage (){
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return  (
        <Box sx={{ minWidth: 160 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Template</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Template"
              onChange={handleChange}
            >
              <MenuItem value={10}>Entrelevel-1</MenuItem>
              <MenuItem value={20}>Entrelevel-2</MenuItem>
              <MenuItem value={30}>Entrelevel-3</MenuItem>
            </Select>
          </FormControl>
        </Box>
      );
}
  
export default HiringInvitationPage;