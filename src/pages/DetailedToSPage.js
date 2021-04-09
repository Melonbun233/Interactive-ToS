import { SignalCellularConnectedNoInternet2Bar } from '@material-ui/icons';
import 'fontsource-roboto';
import React from 'react';
import pageNames from '../pages';
import data from '../data';

import useStyles from '../styles/style';
import { Grid, Box, Typography, Button } from '@material-ui/core';


const DetailedToSPage = (props) =>{
  const classes = useStyles();
  const sectionData = data.sections[props.value];
  const {pages} = sectionData;
  const length = pages.length;
  console.log(pages);
  console.log(length);

  const handleAgree = (value) =>{
    props.setHasAgreed(value);
    props.setToSTime(value);
    props.goto(pageNames['SectionSelectionPage']);
  }

  const handleDisagree = (value) =>{
    props.setToSTime(value);
    props.goto(pageNames['SectionSelectionPage']);
  }

  return(
    <Box bgcolor='background.default'  className={classes.content}>
      <Box>
        <div className={classes.title}>
          <Typography variant='h4'>Traditional ToS: Section {props.value + 1}</Typography>
        </div>
      </Box>
      <Box>
        <Typography variant='h5'>
          Please read the following Traditional ToS CAREFULLY and select agree/disagree.
        </Typography>
        <Typography variant='h5'>
          This is also part of the user study for COMPARISON of Traditional and Interactive ToS.
        </Typography>
        {
          pages.map((items,idx)=>(
            <Box key={idx} margin={2}>
              {
                items.detailToS.length !== 0 ? 
                <Typography variant='body1'>{idx+1}:</Typography> : null
              }
              {
                items.detailToS.map((item,key)=>(
                  (item != null)? <Typography variant='body1' key={key}>{item}</ Typography>:<div></div>
                ))
              }
            </Box>
          ))
        }
      </Box>
      <Grid>
        <Button 
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={()=>{handleAgree(props.value)}}>
          Agree
        </Button>
        <Button
          variant='contained'
          color='secondary'
          className={classes.button}
          onClick={()=>{handleDisagree(props.value)}}>
          Disagree
        </Button>
      </Grid>
    </Box>
  );
}

export default DetailedToSPage;