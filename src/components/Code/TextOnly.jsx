import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((t) => ({
  textOnly: {
    padding: `0 ${t.spacing(3)}px 0 ${t.spacing(3)}px`,
    [t.breakpoints.up('lg')]: {
      width: '550px',
    },
  },
}));

export default function TextOnly({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.textOnly}>
      { children }
    </div>
  );
}
