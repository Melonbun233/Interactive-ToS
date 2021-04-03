import { Box, Button } from '@material-ui/core';
import useStyles from '../styles/style';

const DisplayAreaUI1 = (props) => {
  const classes = useStyles();
  const { onItemSelected, isIntroduction, itemSelected} = props.values;

  return (
    <Box className={classes.content}>
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
  );
}

export default DisplayAreaUI1;