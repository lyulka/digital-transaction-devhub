import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SidebarItemGroup from './SidebarItemGroup';
import SidebarItem from './SidebarItem';

const useStyles = makeStyles((t) => ({
  container: {
    flexBasis: '240px',
    flexShrink: 0,
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
          Glossary of terms
        </SidebarItem>
      </SidebarItemGroup>
      <SidebarItemGroup name="Code Walkthroughs">
        <SidebarItem to="/tutorials/writing-smart-contracts">
          Writing Smart Contracts
        </SidebarItem>
        <SidebarItem>
          Interoperability Demo - Commercial Paper
        </SidebarItem>
        <SidebarItem>
          Interoperability Demo - Secured Asset Transfer
        </SidebarItem>
      </SidebarItemGroup>
      <SidebarItemGroup name="Reference Documentation">
        <SidebarItem to="/references/parallelcore-client-go-sdk">
          ParallelCore Client Go SDK
        </SidebarItem>
        <SidebarItem>
          ParallelCore SmartContract Go SDK
        </SidebarItem>
        <SidebarItem>
          ParallelCore Client RESTful API
        </SidebarItem>
      </SidebarItemGroup>
    </div>
  );
}
