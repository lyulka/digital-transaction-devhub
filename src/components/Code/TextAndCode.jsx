import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((t) => ({
  container: {
    width: '100%',
    padding: `0 ${t.spacing(3)}px 0 ${t.spacing(3)}px`,
    marginBottom: `${t.spacing(6)}px`,
  },
  splitContainer: {
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
    paddingLeft: `${t.spacing(3)}px`,
  },
}));

export default function TextAndCode({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const largeOrLarger = useMediaQuery(theme.breakpoints.up('lg'));

  if (largeOrLarger) {
    return (
      <div className={classes.splitContainer}>
        <div className={classes.textArea}>
          { children[0] }
        </div>
        <div className={classes.codeArea}>
          { children[1] }
        </div>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      { children }
    </div>
  );
}
