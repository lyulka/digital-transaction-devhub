import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((t) => ({
  text: {
    marginBottom: `${t.spacing(2)}px`,
    padding: `0 ${t.spacing(3)}px 0 ${t.spacing(3)}px`,
    [t.breakpoints.up('lg')]: {
      width: '536px',
    },
  },
}));

export default function Text({ children }) {
  const classes = useStyles();

  return (
    <Typography
      display="block"
      variant="body2"
      classes={{ root: classes.text }}
    >
      { children }
    </Typography>
  );
}
