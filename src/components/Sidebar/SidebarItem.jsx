import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((t) => ({
  link: {
    display: 'block',
    textDecoration: 'none',
    color: t.palette.neutral.black,
    '&:hover': {
      textDecoration: 'underline',
    },
    marginBottom: `${t.spacing(0.5)}px`,
  },
}));

export default function SidebarItem({ to, children }) {
  const classes = useStyles();

  return (
    <Link to={to} className={classes.link}>
      <Typography variant="body2">
        { children }
      </Typography>
    </Link>
  );
}
