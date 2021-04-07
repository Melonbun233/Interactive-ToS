import { Box, Button } from '@material-ui/core';
import { useState } from 'react';
import useStyles from '../../styles/style';
import Post from '../Post';

// ui section 1 page 1
const UI_S1P1 = (props) => {
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
            avatar: 'AZ',
            username: 'Alice',
            date: '2021/4/1',
            content: '2020 needs to pull over and just let me out...',
            chatNum: '12',
            likeNum: '102',
            dislikeNum: '8',
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
            avatar: 'B',
            username: 'Benny',
            date: '2021/3/27',
            content: 'I will kill all asians in this country!',
            chatNum: '45',
            likeNum: '3',
            dislikeNum: '89',
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
            avatar: 'AZ',
            username: 'Alice',
            date: '2021/3/25',
            content: 'It\'s ok to post any thing here~',
            chatNum: '5',
            likeNum: '23',
            dislikeNum: '83',
          }}
        /> 
      </Button>
    </Box>
  );

  
}

export default UI_S1P1;