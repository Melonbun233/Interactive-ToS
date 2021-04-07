import { Box, Button } from '@material-ui/core';
import { useState } from 'react';
import useStyles from '../../styles/style';
import Post from '../Post';

// ui section 1 page 1
const UI_S2P1 = (props) => {
  const [currItemIndex, setCurrItemIndex] = useState(-1);

  const classes = useStyles();
  const { onItemSelected, isIntroduction, itemSelected} = props.values;

  let onItemButtonClicked = (itemIndex) => {
    setCurrItemIndex(itemIndex);
    onItemSelected(itemIndex);
  }
  return (
    <Box className={classes.content} width='60%'>
      <Button 
        onClick={() => onItemButtonClicked(0)}
        disabled={isIntroduction || (itemSelected && currItemIndex !== 0)}
        fullWidth
      > 
        <Post 
          value={{
            avatar: 'JJ',
            username: 'Johns J',
            date: '2021/4/10',
            content: 'Just delivered a meal with 0 tip! Here\'s addr: 1902 West Street.',
            chatNum: '12',
            likeNum: '8',
            dislikeNum: '12',
          }}
        /> 
      </Button>
      <Button 
        onClick={() => onItemButtonClicked(1)}
        disabled={isIntroduction || (itemSelected && currItemIndex !== 1)}
        fullWidth
      > 
        <Post 
          value={{
            avatar: 'AA',
            username: 'Angel Austin',
            date: '2021/3/29',
            content: 'Hey guys, we\'re looking for UI ideas outside the EU, cheers!',
            chatNum: '0',
            likeNum: '4',
            dislikeNum: '2',
          }}
        /> 
      </Button>
      <Button 
        onClick={() => onItemButtonClicked(2)}
        disabled={isIntroduction || (itemSelected && currItemIndex !== 2)}
        fullWidth
      > 
        <Post 
          value={{
            avatar: 'P',
            username: 'Patrick05',
            date: '2021/3/25',
            content: 'How\'s crytocurrency now huh?',
            chatNum: '10',
            likeNum: '4',
            dislikeNum: '0',
          }}
        /> 
      </Button>
    </Box>
  );

  
}

export default UI_S2P1;