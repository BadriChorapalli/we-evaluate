import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'; 
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import DataTable from '../Components/DataTable';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));
function HiringInvitationPage (){
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return  (
      <React.Fragment><Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
        <Item><TextField fullWidth  id="outlined-basic" label="First Name" variant="outlined" /></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><TextField fullWidth  id="outlined-basic" label="Last Name" variant="outlined" /></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><TextField fullWidth  id="outlined-basic" label="Email" variant="outlined" /></Item>
        </Grid>
        <Grid item xs={4}>
        <Item>
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
        </Item>
        </Grid>
        <Grid item xs={4}>
        <Item>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Invitation Mail Formates</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Invitation Mail Formates"
              onChange={handleChange}
            >
              <MenuItem value={10}>Formate 1</MenuItem>
              <MenuItem value={20}>Formate 2</MenuItem>
              <MenuItem value={30}>Formate 3</MenuItem>
            </Select>
          </FormControl>
        </Item>
        </Grid>
        <Grid item xs={4}>
        <Item>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Camera and Mic</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Invitation Mail Formates"
              onChange={handleChange}
            >
              <MenuItem value={30}>None</MenuItem>
              <MenuItem value={10}>Need Camera</MenuItem>
              <MenuItem value={20}>Need Mic</MenuItem>
              <MenuItem value={30}>Need Both</MenuItem>
            </Select>
          </FormControl>
        </Item>
        </Grid>
        <Grid item xs={12}>
          <Item><TextareaAutosize
      aria-label="empty textarea"
      placeholder="Select Invitation mail formate"
      minRows={8}
      style={{ width: '100%' }}
    /></Item>
        </Grid>
        <Grid item xs={12} style={{height:'70px'}}>
       
              <Stack spacing={1} direction="row"  style={{float:"right"}}>
              <ColorButton variant="contained">Bulk Invite</ColorButton>
                <Button variant="contained">Send</Button>
                <Button variant="contained">Cancel</Button>
             
                 
          </Stack>

            </Grid>
      </Grid>
      <Grid item xs={12} > <DataTable/></Grid>
    </Box>
       
        </React.Fragment>
      );
}
  
export default HiringInvitationPage;