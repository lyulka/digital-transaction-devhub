import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((t) => ({
  text: {
    padding: `0 ${t.spacing(3)}px 0 ${t.spacing(3)}px`,
    marginBottom: `${t.spacing(6)}px`,
    fontWeight: 'bold',
    color: t.palette.primary.dark,
    [t.breakpoints.up('lg')]: {
      width: '536px',
    },
  },
}));

export default function TextHeading({ children }) {
  const classes = useStyles();

  return (
    <Typography
      display="block"
      variant="h4"
      classes={{ root: classes.text }}
    >
      {children}
    </Typography>
  );
}
