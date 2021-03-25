// section page
// to be used with different sections
import React from 'react';
import 'fontsource-roboto';

import { Box, Typography, Grid, Button } from '@material-ui/core';

import pages from '../pages';
import useStyles from '../style';

const SectionPage = (props) => {

  const classes = useStyles();

  return (
    <Box bgcolor='background.default' height='100vh' className={classes.content}>
      <Box>
        <div className={classes.title}>
          <Typography variant='h2'>Section {props.value}</Typography>
        </div>
      </Box>
      <Button 
        variant='contained'
        color='primary'
        className={classes.button}
        onClick={() => props.goto(pages['SectionSelectionPage'])}>
        Back
      </Button>
    </Box>
  );
}

export default SectionPage