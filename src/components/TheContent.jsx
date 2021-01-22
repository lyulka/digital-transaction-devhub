import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TheSidebar from './Sidebar/TheSidebar';
import TheTextAndCode from './Code/TheTextAndCode';

// Sections
import WritingSmartContracts from '../sections/WritingSmartContracts';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '100%',
    height: '100vh',
  },
});

export default function TheContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TheSidebar />
      <Switch>
        <Route path="/tutorials/writing-smart-contracts">
          <TheTextAndCode>
            <WritingSmartContracts />
          </TheTextAndCode>
        </Route>
      </Switch>
    </div>
  );
}
