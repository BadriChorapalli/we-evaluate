import * as React from 'react';
import { styled } from '@mui/material/styles';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TemplateDataTable from '../Components/TemplateDataTable';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Slider from '@mui/material/Slider';
import QuestionsTypeDataTable from '../Components/QuestionsTypeDataTable';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { purple } from '@mui/material/colors';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
 

function HiringTemplatePage (){
    const [age, setAge] = React.useState('');
    const [value, setValue] = React.useState(10);
    const handleChange = (event) => {
      setAge(event.target.value);
    };
   
    
      
      const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
  {
    value: 0,
  },
  {
    value: 2,
  },
  {
    value: 4,
  },
  {
    value: 6,
  },
  {
    value: 8,
  },
  {
    value: 10,
  },
];
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));
    const data = [
        {name: 'Programming', students: 4},
        {name: 'Behaviour', students: 7},
        {name: 'Listing', students: 2},
        {name: 'Reading', students: 10},
        {name: 'Writing', students: 4}
      ];
    const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
           return (
           <div
              className="custom-tooltip"
              style={{
                 backgroundColor: "#ffff",
                 padding: "5px",
                 border: "1px solid #cccc"
              }}
           >
              <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
           </div>
        );
     }
    
  };
    return  (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={7}>
            <Grid container spacing={1}>
        <Grid item xs={6}>
          <Item><TextField fullWidth  id="outlined-basic" label="Template" variant="outlined" /></Item>
        </Grid>
        <Grid item xs={3}>
          <Item><FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Questions</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Questions"
              onChange={handleChange}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={10}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>25</MenuItem>
            </Select>
          </FormControl></Item>
        </Grid>
        <Grid item xs={3}>
          <Item><FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Pass Percentage</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="No Of Questions"
              onChange={handleChange}
            >
              <MenuItem value={10}>75</MenuItem>
              <MenuItem value={10}>80</MenuItem>
              <MenuItem value={20}>85</MenuItem>
              <MenuItem value={30}>90</MenuItem>
            </Select>
          </FormControl></Item>
        </Grid>
        <Grid item xs={12}>
        <Grid container spacing={1}>
        <Grid item xs={4}>
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
        <Grid item xs={4}>
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
        <Grid item xs={3}>
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
        <Grid item xs={1} style={{marginTop:'20px'}}>
          <Button variant="contained"><AddCircleIcon/></Button>
        </Grid>
      </Grid>
        </Grid>
        <Grid item xs={12}>
          <QuestionsTypeDataTable/>
        </Grid>
        <Grid item xs={12} >
          <Item style={{height:'55px'}}> <Stack spacing={1} direction="row"  style={{float:"right"}}>
          <ColorButton variant="contained">Sample</ColorButton>
                <Button variant="contained">Save</Button>
                <Button variant="contained">Cancel</Button>
             
                 
          </Stack></Item>
        </Grid>
      </Grid>
            </Grid>
            <Grid item xs={5}>
              <Item>
              <center><PieChart width={400} height={400}>
          <Pie data={data} dataKey="students" outerRadius={150} >
          {data.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={COLORS[index % COLORS.length]}
            />
         ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
         <Legend />
        </PieChart>
        </center>
              </Item>
              <TemplateDataTable/>
            </Grid>
            <Grid item xs={6}>
            
            </Grid>
            
          </Grid>
        </Box>
      );
}
  
export default HiringTemplatePage;