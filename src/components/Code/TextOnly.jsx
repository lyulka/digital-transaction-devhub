import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((t) => ({
  textOnly: {
    width: '550px',
    padding: `0 ${t.spacing(3)}px 0 ${t.spacing(3)}px`,
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
