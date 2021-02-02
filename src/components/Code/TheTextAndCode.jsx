import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((t) => ({
  container: {
    display: 'flex',
    width: 'calc(100vw - 240px)',
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
  const theme = useTheme();
  const largeOrLarger = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <div className={classes.container}>
      <div className={classes.textAndCodeContainer}>
        { children }
      </div>

      { largeOrLarger && (
        <div className={classes.backgroundsContainer}>
          <div className={classes.textBackground} />
          <div className={classes.codeBackground} />
        </div>
      )}
    </div>
  );
}
