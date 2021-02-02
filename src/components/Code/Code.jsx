import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Highlight from 'react-highlight';

const useStyles = makeStyles({
  code: {
    '& pre': {
      // To cancel out styling applyed by GoDocs
      padding: 0,
      margin: 0,
    },
  },
});

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
