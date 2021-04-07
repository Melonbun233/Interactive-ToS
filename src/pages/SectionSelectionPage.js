// section selection page
import React from 'react';
import 'fontsource-roboto';

import { Box, Typography, Grid, Button } from '@material-ui/core';

import pages from '../pages';
import useStyles from '../styles/style';
import data from '../data';

const SectionSelectionPage = (props) => {
  const classes = useStyles();
  const {setStartTime, setHasViewed, finishedSections} = props;

  const handleSectionSelected = (value) => {
    setStartTime(value);
    setHasViewed(value);
    props.goto(pages['SectionPage'], value);
  }

  const allSectionFinished = () => {
    for (let i = 0; i < finishedSections.length; i ++) {
      if (!finishedSections[i]) {
        return false;
      }
    }

    return true;
  }

  return (
    <Box bgcolor='background.default' height='100vh' className={classes.content}>
      <Box>
        <div className={classes.title}>
          <Typography variant='h2'>Interactive Term of Service</Typography>
          <Typography variant='h3'>CPEN 541 Project</Typography>
        </div>
        <div className={classes.subtitle}>
          <Typography variant='h5'>Please go through all sections to finish the test</Typography>
        </div>
      </Box>
      <Box width='70%' pt={5}>
        <Grid container spacing={3} direction='column' justify='center' alignItems='center'>
          {[1, 2, 3].map((value) => (
            <Box width='30%' key={value}>
            <Grid key={value} item>
              <Button 
                fullWidth={true}
                variant='contained'
                color='primary'
                className={classes.button}
                onClick={() => handleSectionSelected(value - 1)}
                disabled={finishedSections[value-1]}  
              >
                {data.sections[value-1].name} {finishedSections[value-1] ? 'Finished': ''}
              </Button>
            </Grid>
            </Box>
          ))}
          {
            allSectionFinished() ? 
            <Box width='30%'>
            <Grid item>
              <Button 
                fullWidth={true}
                variant='contained'
                color='primary'
                className={classes.button}
                onClick={() => props.goto(pages['CompletePage'])}>
                Complete Test
              </Button>
            </Grid> 
            </Box>: null
          }
        </Grid>

      </Box>
    </Box>
  );
}

export default SectionSelectionPage;