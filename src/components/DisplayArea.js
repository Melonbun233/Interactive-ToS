import React, { useState } from 'react';
import { Box, Typography, Grid, Button } from '@material-ui/core';
import useStyles from '../styles/style';
import data from '../data';
import Narration from './Narration';
import Introduction from './Introduction';

const DisplayAera = (props) => {
  const [currPageIndex, setCurrPageIndex] = useState(0);
  const [currItemIndex, setCurrItemIndex] = useState(0);
  const [itemSelected, setItemSelected] = useState(false);
  const [isIntroduction, setIsIntroduction] = useState(true);
  const classes = useStyles();

  const {section} = props;
  const sectionData = data.sections[section];
  const { name, introductions, pages} = sectionData;
  const pageData = pages[currPageIndex];
  
  let onCompleteNarration = () => {
    if (pageData.items[currItemIndex].violatingRules) {
      setCurrPageIndex(currPageIndex + 1);
    }
    
    setItemSelected(false);
  }

  let onCancelItemSelected = () => {
    setItemSelected(false);
  }

  let onItemSelected = (itemIndex) => {
    setItemSelected(true);
    setCurrItemIndex(itemIndex);
  }

  let onIntroductionEnded = () => {
    setIsIntroduction(false);
  }

  return (
    <Box className={classes.displayArea}> 
      <Box className={classes.content}>
        <h4>Page: {currPageIndex + 1}/{pages.length}</h4>
        <Button 
          onClick={() => onItemSelected(0)}
          disabled={itemSelected || isIntroduction}
        > 
          the item 1
        </Button>
        <Button 
          onClick={() => onItemSelected(1)}
          disabled={itemSelected || isIntroduction}
        > 
          the item 2
        </Button>
        <Button 
          onClick={() => onItemSelected(2)}
          disabled={itemSelected || isIntroduction}
        > 
          the item 3
        </Button>
        <Button 
          onClick={() => onItemSelected(3)}
          disabled={itemSelected || isIntroduction}
        > 
          the item 4
        </Button>
      </Box>
      {isIntroduction ? 
        <Introduction values={{
          onIntroductionEnded,
          introductions
        }} /> :
        <Narration values={{
          pageData,
          currItemIndex,
          itemSelected,
          onCompleteNarration,
          onCancelItemSelected,
        }} />    
      } 
    </Box>
  )
}

export default DisplayAera;