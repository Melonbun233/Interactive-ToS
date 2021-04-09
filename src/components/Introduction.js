import { useState } from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import useStyles from '../styles/style';

const Introduction = (props) => {
  const [index, setIndex] = useState(0);
  const classes = useStyles();

  const {onIntroductionEnded, introductions, image} = props.values; 

  let introductionEnded = index == introductions.length;

  const onNextIntroduction = () => {
    setIndex(index + 1);
  }

  return (
    <Box className={classes.columnFlexCenter} width='100%'>
      <Box borderTop={1} borderBottom={1} className={classes.narrationArea}>
        {introductionEnded ? 
          <Box padding={2} className={classes.narration}> 
            <Box>
              <Typography variant='h5'>Introduction</Typography>
            </Box>
            <Typography variant='body1'>I hope you have a great time!</Typography>
            <Box width='100%' textAlign='end' >
              <Button 
                className={classes.button}
                variant='contained'
                color='primary'
                onClick={onIntroductionEnded}
              >
              Let's Begin!
              </Button>
            </Box>
          </Box> :

          <Box padding={2} className={classes.narration}> 
            <Box>
              <Typography variant='h5'>Introduction</Typography>
            </Box>
            <Typography variant='body1'>{introductions[index]}</Typography>
            <Box width='100%' textAlign='end'>
              <Button 
                className={classes.button}
                variant='contained'
                color='primary'
                onClick={onNextIntroduction}
              >
                Next
              </Button>
            </Box>
          </Box>
        }
        
      </Box>
      <img src={image} alt='image' className={classes.introImage}/>
    </Box>
  );
}

export default Introduction;

