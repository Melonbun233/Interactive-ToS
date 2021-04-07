import { Box, Button } from '@material-ui/core';
import { useState } from 'react';
import useStyles from '../../styles/style';
import Post from '../Post';

// ui section 2 page 3
const UI_S3P2 = (props) => {
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
            avatar: 'CDC',
            username: 'CDC',
            date: '2020/4/27',
            content: 'You can learn about how #COVID19 might affect pregnant people & their infants using CDC’s COVID Data Tracker. Data from 22 U.S. state & local health departments show information about trimester of infection, type of delivery, & more. See the data: http://bit.ly/CDTpregnant?',
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
            avatar: 'EL',
            username: 'Elon Musk',
            date: '2020/4/18',
            content: 'The Earth is not flat, it’s a hollow globe & Donkey King lives there!',
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
            avatar: 'CW',
            username: 'Claire Wagner',
            date: '2020/4/12',
            content: 'Here\'s the collection of my favorites painters work! https://mycolloction.com',
            chatNum: '5',
            likeNum: '124',
            dislikeNum: '12',
          }}
        /> 
      </Button>
    </Box>
  );

  
}

export default UI_S3P2;