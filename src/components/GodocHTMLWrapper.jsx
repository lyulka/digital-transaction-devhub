import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  godocWrapper: {
    flexGrow: 1,
    display: 'flex',
    width: 'calc(100vh - 240px)',
    position: 'relative',
    height: '100%',
    overflowY: 'scroll',
  },
});

export default function GodocHTMLWrapper({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.godocWrapper}>
      { children }
    </div>
  );
}
