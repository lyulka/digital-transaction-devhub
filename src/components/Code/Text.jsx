import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((t) => ({
  text: {
    marginBottom: `${t.spacing(1)}px`,
  },
}));

export default function Text({ children }) {
  const classes = useStyles();

  return (
    <Typography
      display="block"
      variant="body1"
      classes={{ root: classes.text }}
    >
      { children }
    </Typography>
  );
}
