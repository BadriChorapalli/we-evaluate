import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { purple } from '@mui/material/colors';
 
const Item = styled(Paper)(({ theme }) => ({
    
    padding: theme.spacing(2),
    textAlign: 'left',
   
  }));
  function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
  
  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));
function CandidateAssignmentPage (){
    const [progress, setProgress] = React.useState(10);
    React.useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
          clearInterval(timer);
        };
      }, []);
    return (
        <div className='developer-page'>
             <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
   
    name="radio-buttons-group"
  >
            <Grid container spacing={1}>
            <Grid xs={9} spacing={1}>
        <Box >
          
          <Grid container spacing={1}>
          <Grid item xs={2}>
              <Item>Test Time</Item>
            </Grid>
            <Grid item xs={10}>
              <Item> <LinearProgressWithLabel value={progress} /></Item>
            </Grid>
            <Grid item xs={12}>
              <Item>Which of the following browser supports HTML5 in its latest version?</Item>
            </Grid>
           
            <Grid item xs={6}>
              <Item><FormControlLabel value="Mozilla Firefox" control={<Radio />} label="Mozilla Firefox" /></Item>
            </Grid>
            <Grid item xs={6}>
              <Item><FormControlLabel value="Opera" control={<Radio />} label="Opera" /></Item>
            </Grid>
            <Grid item xs={6}>
              <Item><FormControlLabel value="Both of the above" control={<Radio />} label="Both of the above" /></Item>
            </Grid>
            <Grid item xs={6}>
              <Item><FormControlLabel value="None of the above." control={<Radio />} label="None of the above." /></Item>
            </Grid>
            
            <Grid item xs={12}>
              <Item style={{height:'70px'}}>
              <Stack spacing={1} direction="row"  style={{float:"right"}}>
                <Button variant="contained">Next</Button>
                <ColorButton variant="contained">Need Help?</ColorButton>
                 
          </Stack>
    </Item>
            </Grid>
            <Grid item xs={10}>
              <Item> <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={progress} />
    </Box></Item>
            </Grid>
            <Grid item xs={2}>
              <Item>Questions</Item>
            </Grid>
          </Grid>
        </Box>
        </Grid>
        <Grid item xs={3}>
             
        </Grid>  
        </Grid>
        </RadioGroup>
        </div>
      );
}
  
export default CandidateAssignmentPage;