import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((t) => ({
  pre: {
    marginLeft: `${t.spacing(3)}px`,
  },
  default: {
    color: t.palette.neutral.white,
  },
}));

export default function Code({ children }) {
  const classes = useStyles();

  return (
    <pre className={classes.pre}>
      <code className={classes.default}>
        { children }
      </code>
    </pre>
  );
}
