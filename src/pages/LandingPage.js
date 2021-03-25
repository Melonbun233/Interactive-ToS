// landing page
import { Container, Typography } from '@material-ui/core';
import React from 'react';
import 'fontsource-roboto';
import useStyles from '../style';

const LandingPage = (props) => {
  
  const classes = useStyles();

  return (
    <Container maxWidth='lg' >
      <div className={classes.paper}>
        <Typography variant='h2'>Interactive Term of Service</Typography>
        <Typography variant='h3'>CPEN 541 Project</Typography>
      </div>
    </Container>
  );

}

export default LandingPage;