import { Box, Button } from '@material-ui/core';
import { useState } from 'react';
import useStyles from '../../styles/style';
import Post from '../Post';

// ui section 2 page 3
const UI_S3P1 = (props) => {
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
            avatar: 'EW',
            username: 'Edwin Wilkins',
            date: '2020/6/29',
            content: 'Do they like you or just like your posts?',
            chatNum: '3',
            likeNum: '5',
            dislikeNum: '2',
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
            avatar: 'JC',
            username: 'Jodi Conner',
            date: '2020/6/28',
            content: 'Never apologize for saying what you feel. That\'s like saying sorry for being real.',
            chatNum: '3',
            likeNum: '26',
            dislikeNum: '5',
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
            avatar: 'DT',
            username: 'Donald Trump <Fake Account>',
            date: '2020/6/28',
            content: 'The 75,000,000 great American Patriots who voted for me, AMERICA FIRST, and MAKE AMERICA GREAT AGAIN, will have a GIANT VOICE long into the future. They will not be disrespected or treated unfairly in any way, shape or form!!!',
            chatNum: '5',
            likeNum: '5',
            dislikeNum: '12',
          }}
        /> 
      </Button>
    </Box>
  );

  
}

export default UI_S3P1;