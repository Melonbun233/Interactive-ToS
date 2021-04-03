// landing page
import { Button, Container, Typography, Box } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React from 'react';
import 'fontsource-roboto';
import useStyles from '../styles/style';
import pages from '../pages';

const LandingPage = (props) => {
  
  const classes = useStyles();

  return (
    <Box bgcolor='background.default' height='100vh' className={classes.content}>
      <Box pt={20}>
        <div className={classes.title}>
          <Typography variant='h2'>Interactive Term of Service</Typography>
          <Typography variant='h3'>CPEN 541 Project</Typography>
        </div>
        <div className={classes.subtitle}>
          <Typography variant='subtitle2'>A new form that help people better</Typography>
          <Typography variant='subtitle2'>read and understand ToS</Typography>
        </div>
      </Box>
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        endIcon={<ChevronRightIcon/>}
        onClick={() => props.goto(pages['SectionSelectionPage'])}
      >
        Try It Out
      </Button>
    </Box>
  );

}

export default LandingPage;