// section selection page
import React from 'react';
import 'fontsource-roboto';

import { Box, Typography, Grid, Button } from '@material-ui/core';

import pages from '../pages';
import useStyles from '../styles/style';

const SectionSelectionPage = (props) => {
  const classes = useStyles();
  const {setStartTime, setHasViewed} = props;

  const handleSectionSelected = (value) => {
    setStartTime(value);
    setHasViewed(value);
    props.goto(pages['SectionPage'], value);
  }

  return (
    <Box bgcolor='background.default' height='100vh' className={classes.content}>
      <Box>
        <div className={classes.title}>
          <Typography variant='h2'>Interactive Term of Service</Typography>
          <Typography variant='h3'>CPEN 541 Project</Typography>
        </div>
        <div className={classes.subtitle}>
          <Typography variant='h5'>Please go through all Sections to finish the test</Typography>
        </div>
      </Box>
      <Box width='70%' pt={5}>
        <Grid container spacing={3} direction='column' justify='center' alignItems='center'>
          {[1, 2, 3].map((value) => (
            <Grid key={value} item>
              <Button 
                fullWidth={true}
                variant='contained'
                color='primary'
                className={classes.button}
                onClick={() => handleSectionSelected(value - 1)}>
                Section {value}
              </Button>
            </Grid>
          ))}
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
        </Grid>

      </Box>
    </Box>
  );
}

export default SectionSelectionPage;