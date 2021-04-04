import React, { useState } from 'react';
import { Box, Typography, Grid, Button } from '@material-ui/core';
import useStyles from '../styles/style';
import data from '../data';
import Narration from './Narration';
import Introduction from './Introduction';

// all section displays
import UI_S1P1 from './PageUI/UI_S1P1';
import UI_S1P2 from './PageUI/UI_S1P2';
import UI_S1P3 from './PageUI/UI_S1P3';

const DisplayAera = (props) => {
  const [currPageIndex, setCurrPageIndex] = useState(0);
  const [currItemIndex, setCurrItemIndex] = useState(0);
  const [itemSelected, setItemSelected] = useState(false);
  const [isIntroduction, setIsIntroduction] = useState(true);
  const [shouldEndSection, setShouldEndSection] = useState(false);
  const classes = useStyles();

  const { sectionIndex } = props;
  const sectionData = data.sections[sectionIndex];
  const { name, introductions, pages} = sectionData;
  const pageData = pages[currPageIndex];
  
  let onCompleteNarration = () => {
    // check if this is the last page and exit if true
    if (currPageIndex == pages.length - 1) {
      setShouldEndSection(true);
      // TODO: callback here to end section
    }

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

  const UIMap = [
    // section 1
    [
      <UI_S1P1 values = {{onItemSelected, isIntroduction, itemSelected}} />, // page 1
      <UI_S1P2 values = {{onItemSelected, isIntroduction, itemSelected}} />, // page 2
      <UI_S1P3 values = {{onItemSelected, isIntroduction, itemSelected}} />, // page 3
    ],
    // section 2
    [

    ],
  ];

  return (
    <Box className={classes.displayArea}> 
      <Box textAlign='end' width='90%'>
        <Typography variant='body1'>Page: {currPageIndex + 1}/{pages.length}</Typography>
      </Box>
      

      {UIMap[sectionIndex][currPageIndex]}

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