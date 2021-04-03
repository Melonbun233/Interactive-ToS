import React, { useState } from 'react';
import { Box, Typography, Grid, Button } from '@material-ui/core';
import useStyles from '../styles/style';
import data from '../data';
import Narration from './Narration'

const DisplayAera = (props) => {
  const [currPageIndex, setCurrPageIndex] = useState(0);
  const [currItemIndex, setCurrItemIndex] = useState(0);
  const [itemSelected, setItemSelected] = useState(false);
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

  let onItemSelected = (itemIndex) => {
    setItemSelected(true);
    setCurrItemIndex(itemIndex);
  }

  return (
    <Box className={classes.displayArea}> 
      <Box className={classes.content}>
        <h4>Page: {currPageIndex + 1}/{pages.length}</h4>
        <Button 
          onClick={() => onItemSelected(0)}
        > 
          the item 1
        </Button>
        <Button 
          onClick={() => onItemSelected(1)}
        > 
          the item 2
        </Button>
        <Button 
          onClick={() => onItemSelected(2)}
        > 
          the item 3
        </Button>
        <Button 
          onClick={() => onItemSelected(3)}
        > 
          the item 4
        </Button>
      </Box>
      <Narration values={{
        pageData,
        currItemIndex,
        itemSelected,
        onCompleteNarration,
      }} />    
    </Box>
  )
}

export default DisplayAera;