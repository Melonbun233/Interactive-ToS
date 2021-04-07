import { Avatar, Box, Typography } from '@material-ui/core';
import ChatBubbleIcon from '@material-ui/icons/ChatBubbleTwoTone';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ShareIcon from '@material-ui/icons/Share';
import useStyles from '../styles/style';

const Post = (props) => {
  const classes = useStyles();
  const { avatar, username, date, content, chatNum, likeNum, dislikeNum } = props.value;
  return (
    <Box className={classes.post} border={1}>
      <Box className={classes.button}>
        <Avatar className={classes.orange}>{avatar}</Avatar>
      </Box>

      <Box className={classes.columnFlexStart} width='100%'>
        <Box className={classes.rowFlexStart} padding={1}>
          <Typography variant='h6'>{username} at {date}</Typography>
        </Box>
        <Box className={classes.columnFlexStart} pl={1} pb={1} textAlign='left'>
          <Typography variant='body1'>{content}</Typography>
        </Box>

        <Box className={classes.rowFlexCenter} pl={1} width='80%' pb={1}>
          <Box className={classes.rowFlexStart}>
            <Box pr={1}><ChatBubbleIcon size='small'/></Box>
            <Typography variant='subtitle2'>{chatNum}</Typography>
          </Box>

          <Box className={classes.rowFlexStart}>
            <Box pr={1}><ThumbUpAltIcon size='small'/></Box>
            <Typography variant='subtitle2'>{likeNum}</Typography>
          </Box>

          <Box className={classes.rowFlexStart}>
            <Box pr={1}><ThumbDownIcon size='small'/></Box>
            <Typography variant='subtitle2'>{dislikeNum}</Typography>
          </Box>

          <Box className={classes.rowFlexStart}>
            <Box pr={1}><ShareIcon size='small' /></Box>
          </Box>
        </Box>
      </Box>

      
    </Box>
  );
}


export default Post;