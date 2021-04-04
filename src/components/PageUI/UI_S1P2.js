import { Box, Button } from '@material-ui/core';
import { useState } from 'react';
import useStyles from '../../styles/style';
import Post from '../Post';

// ui section 1 page 1
const UI_S1P2 = (props) => {
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
        disabled={isIntroduction || (itemSelected && currItemIndex != 0)}
        fullWidth
      > 
        <Post 
          value={{
            avatar: 'IS',
            username: 'ISIS',
            date: '2021/3/28',
            content: 'Join ISIS today for the better future!',
            chatNum: '0',
            likeNum: '12',
            dislikeNum: '13',
          }}
        /> 
      </Button>
      <Button 
        onClick={() => onItemButtonClicked(1)}
        disabled={isIntroduction || (itemSelected && currItemIndex != 1)}
        fullWidth
      > 
        <Post 
          value={{
            avatar: 'A',
            username: 'Angie',
            date: '2021/3/25',
            content: 'If 2020 was a person it would be my ex',
            chatNum: '12',
            likeNum: '296',
            dislikeNum: '15',
          }}
        /> 
      </Button>
      <Button 
        onClick={() => onItemButtonClicked(2)}
        disabled={isIntroduction || (itemSelected && currItemIndex != 2)}
        fullWidth
      > 
        <Post 
          value={{
            avatar: 'C',
            username: 'Chapter233',
            date: '2021/3/25',
            content: 'hey, nice mask!',
            chatNum: '5',
            likeNum: '23',
            dislikeNum: '83',
          }}
        /> 
      </Button>
    </Box>
  );

  
}

export default UI_S1P2;