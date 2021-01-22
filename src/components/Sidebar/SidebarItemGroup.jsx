import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((t) => ({
  container: {
    padding: `${t.spacing(0.5)}px ${t.spacing(2)}px`,
  },
  titleText: {

  },
  itemsContainer: {
    padding: `${t.spacing(0.5)}px 0`,
  },
}));

export default function SidebarItemGroup({ name, children }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="overline">
        { name }
      </Typography>
      <div className={classes.itemsContainer}>
        { children }
      </div>
    </div>
  );
}
