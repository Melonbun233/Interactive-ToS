import React, { useState, } from 'react';
import data from '../data.json';
import { Box, Typography, Grid, Button } from '@material-ui/core';
import pages from '../pages';
import useStyles from '../styles/style';


const Narration = (props) => {
  const classes = useStyles();
  const [confirmed, setConfirmed] = useState(false);

  const {pageData, currItemIndex, itemSelected, onCompleteNarration} = props.values;
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
          <Typography variant='h5'>{itemData.narration}</Typography>
          {confirmed ? 
            <Box padding={1}>
              <Typography variant='body1'>{itemData.response}</Typography>
              {itemData.violatingRules ?
                <Button 
                  variant='contained'
                  onClick={completeButtonClicked}>
                  Go to Next Page
                </Button> : 
                <Box> 
                  <Typography variant='body1'>Please choose another one.</Typography>
                  <Button
                    variant='contained'
                    onClick={completeButtonClicked}
                  >
                    Back
                  </Button>
                </Box>
                
              }
            </Box> : 

            <Button 
              variant='contained'
              onClick={confirmButtonClicked}
            >Yes, it's violating the rules</Button>
          }
        </Box> :

        <Box padding={1}>
          <Typography variant='h5'>{pageData.description}</Typography>
        </Box>
      }
    </Box>
  );
}

export default Narration;
