import React, { useState } from 'react';
import { Box, Typography, Grid, Button } from '@material-ui/core';
import useStyles from '../styles/style';
import data from '../data';
import Narration from './Narration';
import Introduction from './Introduction';

import safetyImage from '../images/safety.jpg';
import privacyImage from '../images/privacy.svg';
import authenticityImage from '../images/authenticity.jpg';

// all section displays
import UI_S1P1 from './PageUI/UI_S1P1';
import UI_S1P2 from './PageUI/UI_S1P2';
import UI_S1P3 from './PageUI/UI_S1P3';
import UI_S2P1 from './PageUI/UI_S2P1';
import UI_S2P2 from './PageUI/UI_S2P2';
import UI_S2P3 from './PageUI/UI_S2P3';
import UI_S3P1 from './PageUI/UI_S3P1';
import UI_S3P2 from './PageUI/UI_S3P2';

const DisplayArea = (props) => {
  const [currPageIndex, setCurrPageIndex] = useState(0);
  const [currItemIndex, setCurrItemIndex] = useState(0);
  const [itemSelected, setItemSelected] = useState(false);
  const [isIntroduction, setIsIntroduction] = useState(true);
  const classes = useStyles();

  const { sectionIndex } = props;
  const sectionData = data.sections[sectionIndex];
  const { name, introductions, pages} = sectionData;
  const pageData = pages[currPageIndex];

  const {handleEndSection, updateFalseNum, updateTrueNum, setPageIndex, setHasSkipped} = props;
  const introductionImages = [safetyImage, privacyImage, authenticityImage];
  
  let onCompleteNarration = () => {
    setPageIndex(sectionIndex, currPageIndex);

    // check if this is the last page and exit if true
    if (currPageIndex == pages.length - 1 && 
      pageData.items[currItemIndex].violatingRules) {
      handleEndSection();
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

  let onSkipSection = () => {
    setHasSkipped(sectionIndex);
    handleEndSection();
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
      <UI_S2P1 values= {{onItemSelected, isIntroduction, itemSelected}} />,
      <UI_S2P2 values= {{onItemSelected, isIntroduction, itemSelected}} />,
      <UI_S2P3 values= {{onItemSelected, isIntroduction, itemSelected}} />,
    ],
    [
      <UI_S3P1 values= {{onItemSelected, isIntroduction, itemSelected}} />,
      <UI_S3P2 values= {{onItemSelected, isIntroduction, itemSelected}} />,
    ],
  ];

  return (
    <Box className={classes.displayArea}> 
      <Typography variant='body1'>Page: {currPageIndex + 1}/{pages.length}</Typography>
      {/* <Box textAlign='end' width='90%'>
        <Button
         variant='contained'
         color='secondary'
         onClick={onSkipSection}
        >
          Skip this Section
        </Button> 
      </Box> */}
      
      {isIntroduction ? 
        <Introduction values={{
          onIntroductionEnded,
          introductions,
          image: introductionImages[sectionIndex]
        }} /> : 
        <Box className={classes.displayArea}>
          <Narration values={{
              pageData,
              currItemIndex,
              itemSelected,
              onCompleteNarration,
              onCancelItemSelected,
              updateFalseNum,
              updateTrueNum,
              sectionIndex,
            }} 
            />    
            {UIMap[sectionIndex][currPageIndex]}
        </Box>
      } 
    </Box>
  )
}

export default DisplayArea;