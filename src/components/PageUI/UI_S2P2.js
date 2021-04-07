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
        disabled={isIntroduction || (itemSelected && currItemIndex != 0)}
        fullWidth
      > 
        <Post 
          value={{
            avatar: 'J',
            username: 'Joanne Mc',
            date: '2020/6/10',
            content: 'Who needs wealth when you can make a woman laugh?',
            chatNum: '12',
            likeNum: '45',
            dislikeNum: '9',
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
            avatar: 'EJ',
            username: 'Elbert Jensen',
            date: '2020/5/30',
            content: 'Found a wallet on the street. Name: Bernard Parker, ID: 335673890. Please contact me at 778-006-3159.',
            chatNum: '0',
            likeNum: '4',
            dislikeNum: '2',
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
            username: 'Cecelia',
            date: '2020/5/25',
            content: 'Nothing diminishes anxiety faster than action',
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