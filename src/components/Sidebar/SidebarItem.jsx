import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((t) => ({
  text: {
    marginBottom: `${t.spacing(0.5)}px`,
  },
}));

export default function SidebarItem({ to, children }) {
  const classes = useStyles();

  return (
    <Link to={to}>
      <Typography variant="body2" classes={{ root: classes.text }}>
        { children }
      </Typography>
    </Link>
  );
}
