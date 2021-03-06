// the last page after uses have completed the whole tests
import React from 'react';
import 'fontsource-roboto';

import { Box, Typography, Button } from '@material-ui/core';

import pages from '../pages';
import useStyles from '../styles/style';

let CompletePage = (props) => {
  const classes = useStyles();

  const handleDownload = () => {
    const download = document.createElement('a') // element a
    const blob = new Blob([JSON.stringify(props.userdata)], {
      type: 'application/json'
    })
    const url = URL.createObjectURL(blob) // blob to url
    download.href = url
    download.download = 'userdata.json' //
    download.click()
  }

  return (
    <Box bgcolor='background.default' height='100vh' className={classes.content}>
      <Box>
        <div className={classes.title}>
          <Typography variant='h2'>Interactive Term of Service</Typography>
          <Typography variant='h3'>CPEN 541 Project</Typography>
        </div>
        <div className={classes.subtitle}>
          <Typography variant='h5'>Thank for your time!</Typography>
        </div>
      </Box>
      <Box className={classes.content}>
        <Typography variant='body1' align='center'>
          Please click the Download button to download your report
        </Typography>
        <Button variant='contained'
          color='primary'
          className={classes.button}
          onClick={handleDownload}>
          Download
        </Button>
      </Box>
      
    </Box>
  );
}

export default CompletePage;