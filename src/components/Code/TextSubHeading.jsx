import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((t) => ({
  text: {
    marginBottom: `${t.spacing(2)}px`,
    color: '#424242',
  },
}));

export default function TextSubHeading({ children }) {
  const classes = useStyles();

  return (
    <Typography
      display="block"
      variant="h6"
      classes={{ root: classes.text }}
    >
      {children}
    </Typography>
  );
}
