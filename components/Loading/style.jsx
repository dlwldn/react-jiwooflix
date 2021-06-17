import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

export const useStyles = makeStyles((theme)=> ({
  progress: {
    color: 'yellow',
  },
}));

export const LoadingWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.5);
`

export const LoadingProgress = styled(CircularProgress)`

`