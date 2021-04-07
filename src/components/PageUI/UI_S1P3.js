import { Box, Button } from '@material-ui/core';
import { useState } from 'react';
import useStyles from '../../styles/style';
import Post from '../Post';

// ui section 1 page 1
const UI_S1P3 = (props) => {
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
            avatar: 'A',
            username: 'Anonymous',
            date: '2021/1/12',
            content: 'hey check it out: https://sex-under-18.com',
            chatNum: '0',
            likeNum: '0',
            dislikeNum: '25',
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
            avatar: 'H',
            username: 'Henry',
            date: '2021/1/10',
            content: 'Have a great vocation everyone!',
            chatNum: '4',
            likeNum: '18',
            dislikeNum: '0',
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
            avatar: 'AA',
            username: 'Alien Astronaut',
            date: '2021/1/08',
            content: 'Who else want to be transported off this planet?',
            chatNum: '5',
            likeNum: '54',
            dislikeNum: '3',
          }}
        /> 
      </Button>
    </Box>
  );

  
}

export default UI_S1P3;