import { SignalCellularConnectedNoInternet2Bar } from '@material-ui/icons';
import React from 'react';
import pages from '../pages';

import useStyles from '../styles/style';
import { Box, Typography, Button } from '@material-ui/core';


const DetailedToSPage = (props) =>{

  const classes = useStyles();

  return(
    <Box bgcolor='background.default' height='100vh' className={classes.content}>
      <Box>
        <div className={classes.title}>
          <Typography variant='h4'>Section {props.value + 1}</Typography>
        </div>
      </Box>
      <Box display={props.value == 0 ? 'block':'none'}>
        <h4>1. .....</h4>
        <h4>2. ......</h4>
        <h4>3. ......</h4>
      </Box>
      <Button 
        variant='contained'
        color='primary'
        className={classes.button}
        onClick={() => props.goto(pages['SectionSelectionPage'])}>
        Back to Section Selection Page
      </Button>
    </Box>
  );
}

export default DetailedToSPage;