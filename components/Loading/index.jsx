import React from 'react';
import { useStyles, LoadingProgress, LoadingWrap } from './style';

const Loading = () => {
  const classes = useStyles();

  return (
    <LoadingWrap>
      <LoadingProgress className={classes.progress}/>
    </LoadingWrap>
  )
}

export default Loading