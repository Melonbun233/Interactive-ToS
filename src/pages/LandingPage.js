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
          <Typography variant='body1'>
            A new form that help people better read and understand ToS.
          </Typography>
          <Typography variant='body1'>
          To proceed, please first read and sign the consent form found in the repository/package.
          </Typography>
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