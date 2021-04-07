import { Box, Button } from '@material-ui/core';
import { useState } from 'react';
import useStyles from '../../styles/style';
import Post from '../Post';

// ui section 2 page 3
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
            avatar: 'JR',
            username: 'Jack Rowe',
            date: '2020/2/19',
            content: 'Looking for a frontend developer! Contact me at 712-113-5673',
            chatNum: '12',
            likeNum: '45',
            dislikeNum: '9',
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
            avatar: 'FM',
            username: 'Faye Mann',
            date: '2020/2/15',
            content: 'Looking for the name & phone number of this guy for 300$ <Photo of a person>',
            chatNum: '2',
            likeNum: '2',
            dislikeNum: '9',
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
            avatar: 'A',
            username: 'Albert',
            date: '2020/2/01',
            content: 'If you are still looking for that one person who will change your life, take a look in the mirror.',
            chatNum: '12',
            likeNum: '124',
            dislikeNum: '9',
          }}
        /> 
      </Button>
    </Box>
  );

  
}

export default UI_S2P1;