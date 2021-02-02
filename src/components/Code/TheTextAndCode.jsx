import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((t) => ({
  container: {
    flexGrow: 1,
    display: 'flex',
    flexBasis: 'calc(100vh - 240px)',
    position: 'relative',
  },
  textAndCodeContainer: {
    width: '100%',
    padding: `${t.spacing(5)}px 0`,
    overflowY: 'scroll',
  },
  backgroundsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  textBackground: {
    flexBasis: '550px',
    flexGrow: 0,
  },
  codeBackground: {
    flexBasis: 0,
    flexGrow: 1,
    backgroundColor: '#2D2D2D',
  },
}));

export default function TheTextAndCode({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.textAndCodeContainer}>
        { children }
      </div>
      <div className={classes.backgroundsContainer}>
        <div className={classes.textBackground} />
        <div className={classes.codeBackground} />
      </div>
    </div>
  );
}
