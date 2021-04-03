import {makeStyles} from '@material-ui/core';

// Custome style added to material-ui

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(0, 10, 0, 10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    margin: theme.spacing(2, 0, 2, 0),
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
    alignItems:'center',
    justifyContent: 'space-between',
  },
  narrationFeedback: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  narration: {
    width: '90%',
    height:'90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'flex-start',
    justifyContent: 'space-between',
  },
}));

export default useStyles;