import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((t) => ({
  container: {
    display: 'flex',
    width: '100%',
    marginBottom: `${t.spacing(8)}px`,
  },
  textArea: {
    flexBasis: '550px',
    padding: `0 ${t.spacing(3)}px 0 ${t.spacing(3)}px`,
    flexGrow: 0,
  },
  codeArea: {
    flexBasis: 0,
    flexGrow: 1,
  },
}));

export default function TextAndCode({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.textArea}>
        { children[0] }
      </div>
      <div className={classes.codeArea}>
        { children[1] }
      </div>
    </div>
  );
}
