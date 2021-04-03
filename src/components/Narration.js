import React, { useState, } from 'react';
import data from '../data.json';
import { Box, Typography, Grid, Button } from '@material-ui/core';
import pages from '../pages';
import useStyles from '../styles/style';


const Narration = (props) => {
  const classes = useStyles();
  const [confirmed, setConfirmed] = useState(false);

  const {pageData, currItemIndex, itemSelected, onCompleteNarration, 
    onCancelItemSelected} = props.values;
  const itemData = pageData.items[currItemIndex];

  let confirmButtonClicked = () => {
    setConfirmed(true);
  }

  let completeButtonClicked = () => {
    setConfirmed(false);
    onCompleteNarration();
  }


  return (
    <Box borderTop={1} className={classes.narrationArea}>
      {itemSelected ? 
        <Box padding={1}> 
          <Box textAlign='center'>
            <Typography variant='h5'>{itemData.narration}</Typography>
          </Box>
          {confirmed ? 
            <Box padding={1} className={classes.narrationFeedback} textAlign='center'>
              <Typography variant='body1'>{itemData.response}</Typography>
              {itemData.violatingRules ?
                <Box > 
                  <Button 
                    className={classes.button}
                    variant='contained'
                    onClick={completeButtonClicked}
                    color='primary'
                  >
                    Go to Next Page
                  </Button>
                </Box> : 
                <Box> 
                  <Typography variant='body1'>Please choose another one.</Typography>
                  <Button 
                    className={classes.button}
                    variant='contained'
                    onClick={completeButtonClicked}
                    color='primary'
                  >
                    Back
                  </Button>
                </Box>
                
              }
            </Box> : 

            <Box className={classes.narrationFeedback} textAlign='center'>
              <Button 
                className={classes.button}
                variant='contained'
                onClick={confirmButtonClicked}
                color='primary'
                fullWidth
              >Yes, it's violating the rules</Button>
              <Button 
                className={classes.button}
                variant='contained'
                onClick={onCancelItemSelected}
                fullWidth
              >
                I would like to select another one
              </Button>
            </Box>
          }
        </Box> :

        <Box padding={1}> 
          <Box textAlign='center'>
            <Typography variant='h5'>{pageData.description}</Typography>
          </Box>
        </Box>
      }
    </Box>
  );
}

export default Narration;
