import React, { useState, } from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import useStyles from '../styles/style';


const Narration = (props) => {
  const classes = useStyles();
  const [confirmed, setConfirmed] = useState(false);

  const {pageData, currItemIndex, itemSelected, onCompleteNarration, 
    onCancelItemSelected, updateTrueNum, updateFalseNum, sectionIndex} = props.values;
  const itemData = pageData.items[currItemIndex];

  let confirmButtonClicked = () => {
    setConfirmed(true);
    if (itemData.violatingRules) {
      updateTrueNum(sectionIndex);
    } else {
      updateFalseNum(sectionIndex);
    }
  }

  let completeButtonClicked = () => {
    setConfirmed(false);
    onCompleteNarration();
  }


  return (
    <Box borderTop={2} borderBottom={2} className={classes.narrationArea} margin={2}>
      {itemSelected ? 
        <Box padding={1} className={classes.narration}> 
          {confirmed ? 
            <Box padding={1} className={classes.narrationFeedback}>
              <Typography variant='body1'>{itemData.response}</Typography>
              {itemData.violatingRules ?
                <Box width='90%' textAlign='end'> 
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
                  <Box width='90%' textAlign='end'>
                    <Button 
                      className={classes.button}
                      variant='contained'
                      onClick={completeButtonClicked}
                      color='primary'
                    >
                      Back
                    </Button>
                  </Box>
                </Box>
                
              }
            </Box> : 

            <Box className={classes.narrationFeedback}>
              <Box>
                <Typography variant='body1'>{itemData.narration}</Typography>
              </Box>
              <Box width='30%'>
                <Button 
                  className={classes.button}
                  variant='contained'
                  onClick={confirmButtonClicked}
                  color='primary'
                  fullWidth
                >It's violating the rules</Button>
                <Button 
                  className={classes.button}
                  variant='contained'
                  onClick={onCancelItemSelected}
                  fullWidth
                >
                  I'd like to choose another one
                </Button>
              </Box>
              
            </Box>
          }
        </Box> :

        <Box padding={1} className={classes.columnFlexStart}> 
          <Typography variant='h6'>Description:</Typography>
          <Typography variant='body1'>{pageData.description}</Typography>
          <Typography variant='h6'>Please find the evidence related to the rule.</Typography>
        </Box>
      }
    </Box>
  );
}

export default Narration;
