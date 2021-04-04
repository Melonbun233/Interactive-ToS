import {makeStyles} from '@material-ui/core';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

// Custome style added to material-ui

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(0, 5, 0, 5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    margin: theme.spacing(5, 0, 2, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  subtitle: {
    margin: theme.spacing(0, 0, 2, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing(1),
  },
  displayArea: {
    width: '100%',
    height: '700px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  narrationArea: {
    width: '100%',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'flex-start',
    justifyContent: 'space-between',
  },
  narrationFeedback: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  narration: {
    width: '90%',
    height:'90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'flex-start',
    justifyContent: 'space-between',
  },
  post: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  }, 
  columnFlexStart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  columnFlexCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowFlexStart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  rowFlexCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

export default useStyles;