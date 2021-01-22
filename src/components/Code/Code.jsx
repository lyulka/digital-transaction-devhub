import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Highlight from 'react-highlight';

const useStyles = makeStyles((t) => ({
  code: {
    marginLeft: `${t.spacing(3)}px`,
  },
}));

export default function Code({ children, language }) {
  const classes = useStyles();

  return (
    <div className={classes.code}>
      <Highlight
        className={language}
      >
        { children }
      </Highlight>
    </div>
  );
}

Code.propTypes = {
  language: PropTypes.oneOf(['javascript']).isRequired,
};
