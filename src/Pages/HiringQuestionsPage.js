import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import WalletQuestionsDataTable from '../Components/WalletQuestionsDataTable';
import ContributorQuestionsDataTable from '../Components/ContributorQuestionsDataTable';
import FreeQuestionsDataTable from '../Components/FreeQuestionsDataTable';

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
function HiringQuestionsPage (){
    const [age, setAge] = React.useState('');
    
const [value, setValue] = React.useState('1');

const handleChangeTab = (event, newValue) => {
  setValue(newValue);
};
    const handleChange = (event) => {
        setAge(event.target.value);
      };
    return <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={2}>
      <Grid item xs={6} >
    <Grid container spacing={.5}>
      <Grid item xs={6}>
      <Item><FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Question Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Question Type"
              onChange={handleChange}
            >
              <MenuItem value={'ProblemSolving'}>Problem solving</MenuItem>
              <MenuItem value={10}>Time management</MenuItem>
              <MenuItem value={20}>Critical Thinking</MenuItem>
              <MenuItem value={30}>Creativity</MenuItem>
              <MenuItem value={10}>Teamwork</MenuItem>
              <MenuItem value={10}>Organization </MenuItem>
              <MenuItem value={20}>Flexibility</MenuItem>
              <MenuItem value={30}>Reading</MenuItem>
              <MenuItem value={30}>Writing</MenuItem>
              <MenuItem value={30}>Coding</MenuItem>
            </Select>
          </FormControl></Item>
      </Grid>
      <Grid item xs={6}>
      <Item><FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Difficult Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Difficult Level"
              onChange={handleChange}
            >
              <MenuItem value={'easy'}>Easy</MenuItem>
              <MenuItem value={'medium'}>Medium</MenuItem>
              <MenuItem value={'hard'}>Hard</MenuItem>
              
            </Select>
          </FormControl>
          </Item>
      </Grid>
      <Grid item xs={6}>
      <Item><FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Formate</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Formate"
              onChange={handleChange}
            >
              <MenuItem value={'Text'}>Text</MenuItem>
              <MenuItem value={'Image'}>Image</MenuItem>
              <MenuItem value={'Audio'}>Audio</MenuItem>
              <MenuItem value={'Video'}>Video</MenuItem>
              
            </Select>
          </FormControl>
          </Item>
      </Grid>
      <Grid item xs={6} style={{padding:'20px',paddingLeft:'15%'}}>
        <Button
  variant="contained"
  component="label"
>
  Upload File
  <input
    type="file"
    hidden
  />
</Button>
      </Grid>
      
      <Grid item xs={12}>
      <Item><TextareaAutosize
      aria-label="empty textarea"
      placeholder="Enter your question"
      minRows={8}
      style={{ width: '100%' }}
    /></Item>
      </Grid>
      <Grid item xs={6}>
      <Item><TextField fullWidth  id="outlined-basic" label="Option 1" variant="outlined" /></Item>
      </Grid>
      <Grid item xs={6}>
      <Item><TextField fullWidth  id="outlined-basic" label="Option 2" variant="outlined" /></Item>
      </Grid>
      <Grid item xs={6}>
      <Item><TextField fullWidth  id="outlined-basic" label="Option 3" variant="outlined" /></Item>
      </Grid>
      <Grid item xs={6}>
      <Item><TextField fullWidth  id="outlined-basic" label="Option 4" variant="outlined" /></Item>
      </Grid>
      <Grid item xs={6}>
        <Item><FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Choose Answer</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              
              label="Choose Answer"
             
            >
              <MenuItem value={'Public'}>Option 1</MenuItem>
              <MenuItem value={'Public'}>Option 2</MenuItem>
              <MenuItem value={'Public'}>Option 3</MenuItem>
              <MenuItem value={'Public'}>Option 4</MenuItem>
              
            </Select>
          </FormControl></Item>
      </Grid>
      <Grid item xs={6}>
      <Item><FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Time</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              
              label="Make It"
             
            >
              <MenuItem value={'Public'}>30 Sec</MenuItem>
              <MenuItem value={'Self'}>1 Min</MenuItem>
              <MenuItem value={'Contributor'}>1 Min 30 Sec</MenuItem>
              
            </Select>
          </FormControl></Item>
      </Grid>
      <Grid item xs={6}>
        <Item><FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Make It</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              
              label="Make It"
             
            >
              <MenuItem value={'Public'}>Free</MenuItem>
              <MenuItem value={'Self'}>Self</MenuItem>
              <MenuItem value={'Contributor'}>Sell</MenuItem>
              
            </Select>
          </FormControl></Item>
      </Grid>
      <Grid item xs={6}>
     
      <Item><TextField fullWidth  id="outlined-basic" label="Cost" variant="outlined" /></Item>
      </Grid>
      <Grid item xs={12}>
        <Item><TextareaAutosize
      aria-label="empty textarea"
      placeholder="Enter the solution for this question for Selling/Free"
      minRows={8}
      style={{ width: '100%' }}
    /></Item>
      </Grid>
      <Grid item xs={12}>
      <Item style={{height:'55px'}}> <Stack spacing={1} direction="row"  style={{float:"right"}}>
          <ColorButton variant="contained">View Question</ColorButton>
                <Button variant="contained">Save</Button>
                <Button variant="contained">Cancel</Button>
             
                 
          </Stack></Item>
      </Grid>
      </Grid>
      </Grid>
      <Grid item xs={6}>
      <TabContext value={value}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
      <Tab label="Your Wallet" value="1" />
      <Tab label="Contributors" value="2" />
      <Tab label="Free" value="3" />
    </TabList>
  </Box>
  <TabPanel value="1" style={{margin:0,padding:0}}><WalletQuestionsDataTable/></TabPanel>
  <TabPanel value="2" style={{margin:0,padding:0}}><ContributorQuestionsDataTable/></TabPanel>
  <TabPanel value="3" style={{margin:0,padding:0}}><FreeQuestionsDataTable/></TabPanel>
</TabContext>
      
      </Grid>
    </Grid>
  </Box>
}
  
export default HiringQuestionsPage;