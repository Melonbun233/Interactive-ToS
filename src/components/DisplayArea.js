import React, { useState } from 'react';
import { Box, Typography, Grid, Button } from '@material-ui/core';
import useStyles from '../styles/style';
import data from '../data';
import Narration from './Narration';
import Introduction from './Introduction';

// all section displays
import DisplayAreaUI1 from './DisplayAreaUI1';

const DisplayAera = (props) => {
  const [currPageIndex, setCurrPageIndex] = useState(0);
  const [currItemIndex, setCurrItemIndex] = useState(0);
  const [itemSelected, setItemSelected] = useState(false);
  const [isIntroduction, setIsIntroduction] = useState(true);
  const classes = useStyles();

  const { sectionIndex } = props;
  const sectionData = data.sections[sectionIndex];
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

  const displayMap = {
    0: <DisplayAreaUI1 values={{
      onItemSelected,
      isIntroduction,
      itemSelected
    }}/>,
  }

  return (
    <Box className={classes.displayArea}> 
      <h4>Page: {currPageIndex + 1}/{pages.length}</h4>

      {displayMap[sectionIndex]}

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