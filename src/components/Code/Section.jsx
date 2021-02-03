import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((t) => ({
  section: {
    marginBottom: `${t.spacing(12)}px`,
  },
}));

export default function Section({ children }) {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      { children }
    </section>
  );
}
