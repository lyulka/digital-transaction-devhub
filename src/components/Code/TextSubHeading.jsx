import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((t) => ({
  sHeadingContainer: {
    padding: `0 ${t.spacing(3)}px 0 ${t.spacing(3)}px`,
    position: 'relative',
    marginBottom: `${t.spacing(2)}px`,
    [t.breakpoints.up('lg')]: {
      width: '536px',
      '&::before': {
        content: '" "',
        height: '1px',
        width: '480px',
        background: 'linear-gradient( to right, rgba(100, 100, 100, 1) 0%, rgba(85, 85, 85, 0) 100% )',
        position: 'absolute',
        left: '550px',
        zIndex: 1,
      },
    },
  },
  text: {
    color: '#424242',
    fontWeight: 'bold',
  },
}));

export default function TextSubHeading({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.sHeadingContainer}>
      <Typography
        display="block"
        variant="h5"
        classes={{ root: classes.text }}
      >
        {children}
      </Typography>
    </div>
  );
}
