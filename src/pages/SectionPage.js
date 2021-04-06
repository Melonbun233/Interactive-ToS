// section page
// to be used with different sections
import React from 'react';
import 'fontsource-roboto';

import { Box, Typography, Grid, Button } from '@material-ui/core';

import pages from '../pages';
import useStyles from '../styles/style';
import DisplayArea from '../components/DisplayArea';


const SectionPage = (props) => {

  const classes = useStyles();
  const sectionIndex = props.value - 1;

  return (
    <Box bgcolor='background.default' height='100vh' className={classes.content}>
      <Box>
        <div className={classes.title}>
          <Typography variant='h4'>Section {props.value}</Typography>
        </div>
      </Box>
      <Box width='100%'>
        <DisplayArea 
          sectionIndex={sectionIndex} // pass the section index
        />
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