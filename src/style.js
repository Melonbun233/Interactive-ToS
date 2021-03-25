import {makeStyles} from '@material-ui/core';

// Custome style added to material-ui

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

export default useStyles;