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
    padding: `${t.spacing(2)}px 0 ${t.spacing(5)}px 0`,
  },
  logo: {
    height: '40px',
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
          variant="body2"
          className={classes.devHubText}
        >
          ParallelChain Developer Hub
        </Typography>
      </div>
      <SidebarItemGroup name="Concepts">
        <SidebarItem to="/concepts/why-parallelchain">
          Why ParallelChain?
        </SidebarItem>
        <SidebarItem>
          ParallelChain Network Architecture
        </SidebarItem>
        <SidebarItem>
          ParallelCoreDB
        </SidebarItem>
        <SidebarItem>
          Provable Immutability
        </SidebarItem>
        <SidebarItem>
          Glossary of terms
        </SidebarItem>
      </SidebarItemGroup>
      <SidebarItemGroup name="Tutorials">
        <SidebarItem to="/tutorials/writing-smart-contracts">
          Writing Smart Contracts
        </SidebarItem>
        <SidebarItem>
          Writing Applications
        </SidebarItem>
      </SidebarItemGroup>
      <SidebarItemGroup name="Interoperability">
        <SidebarItem>
          Worked Example - Commercial Paper
        </SidebarItem>
        <SidebarItem>
          Worked Example - Extending Commercial Paper
        </SidebarItem>
        <SidebarItem>
          Worked Example - Secured Asset Transfer
        </SidebarItem>
      </SidebarItemGroup>
      <SidebarItemGroup name="Reference Documentation">
        <SidebarItem>
          ParallelCore Client Go SDK
        </SidebarItem>
        <SidebarItem>
          ParallelCore SmartContract Go SDK
        </SidebarItem>
        <SidebarItem>
          ParallelCore Client RESTful API
        </SidebarItem>
      </SidebarItemGroup>
      <SidebarItemGroup name="User Guides">
        <SidebarItem>
          ParallelCore Client CLI
        </SidebarItem>
        <SidebarItem>
          ParallelCore Peer CLI
        </SidebarItem>
      </SidebarItemGroup>
    </div>
  );
}
