import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SidebarItemGroup from './SidebarItemGroup';
import SidebarItem from './SidebarItem';

const useStyles = makeStyles((t) => ({
  container: {
    width: '240px',
    height: '100%',
    backgroundColor: t.palette.neutral.gray,
    overflowY: 'scroll',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${t.spacing(2)}px 0`,
  },
  logo: {
    height: '60px',
    margin: '0 auto',
  },
  devHubText: {
    fontWeight: 'bold',
  },
}));

export default function TheSidebar() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <img
          src="/images/dtl-logo-block.svg"
          alt="DTL"
          className={classes.logo}
        />
        <Typography
          variant="subtitle2"
          className={classes.devHubText}
        >
          Developer Hub
        </Typography>
      </div>
      <SidebarItemGroup name="Concepts">
        <SidebarItem to="/concepts/why-parallelchain">
          Why ParallelChain?
        </SidebarItem>
        <SidebarItem>
          ParallelChain Network Architecture
        </SidebarItem>
      </SidebarItemGroup>
      <SidebarItemGroup name="Tutorials">
        <SidebarItem to="/tutorials/writing-smart-contracts">
          Writing Smart Contracts
        </SidebarItem>
      </SidebarItemGroup>
      <SidebarItemGroup name="Reference Documentation">
        <SidebarItem>
          ParallelCore Client Go SDK
        </SidebarItem>
      </SidebarItemGroup>
      <SidebarItemGroup name="User Guides">
        <SidebarItem>
          ParallelCore CLI
        </SidebarItem>
      </SidebarItemGroup>
    </div>
  );
}
